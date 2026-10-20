// [TEMPLATE] ZeroFox Wagtail Needles BATCH runner. Do not paste this file as is: build a
// [TEMPLATE] paste-ready copy with `node make-batch.js batch/<name>.js scripts/<victim>.js ...`
// [TEMPLATE] (the victims' variables and fillNeedle() get embedded). See CLAUDE.md "Batch runs".
//
// How a built batch file works — paste it into the browser console (F12) on ANY Wagtail admin page:
//  1. A green panel appears top-right listing the queued victims.
//  2. Set the "Add Needle" page URL once (prefilled when you paste on the add page itself;
//     remembered in this browser afterwards).
//  3. Click "Open & fill next": a new tab opens on the add page and is filled from this tab.
//     Same-origin tabs allow that — nothing is injected into Wagtail, no extension is needed.
//     The browser may ask once to allow pop-ups for the admin host.
//  4. In the new tab: add the Image block, add a Relation if the victim already has a Needle,
//     read VERIFY in that tab's console, Save draft. Come back here and click again.
//  "Fill this tab" fills the next victim into the current tab instead (when you already sit
//  on an empty add page). "Skip" moves past a victim. Re-pasting the file restarts the queue.

const QUEUE = /*__QUEUE__*/[];

/*__FILL__*/

(function batchPanel() {
    const KEY = 'zfNeedleAddUrl';
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
    const old = document.getElementById('zf-batch-panel');
    if (old) old.remove();

    const panel = document.createElement('div');
    panel.id = 'zf-batch-panel';
    panel.style.cssText = 'position:fixed;top:12px;right:12px;z-index:2147483647;width:400px;max-height:90vh;overflow:auto;'
        + 'background:#fff;color:#111;border:2px solid #0a7a2f;border-radius:8px;padding:12px;'
        + 'font:13px/1.4 system-ui,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.3);text-align:left';
    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <b>Needles batch (${QUEUE.length} victims)</b><button data-x title="Close panel">✕</button>
      </div>
      <label style="display:block;margin:8px 0 4px">Add Needle page URL</label>
      <input data-url style="width:100%;box-sizing:border-box;padding:4px" placeholder="https://intel-api.zerofox.com/wagtail/admin/pages/add/.../">
      <div style="margin:8px 0;display:flex;gap:6px;flex-wrap:wrap">
        <button data-next style="font-weight:bold">Open &amp; fill next</button>
        <button data-here>Fill this tab</button>
        <button data-skip>Skip</button>
      </div>
      <div data-status style="margin:6px 0;color:#333;white-space:pre-wrap"></div>
      <ol data-list style="padding-left:20px;margin:0"></ol>`;
    document.body.appendChild(panel);

    const q = sel => panel.querySelector(sel);
    const urlInput = q('[data-url]');
    urlInput.value = localStorage.getItem(KEY) || (location.pathname.includes('/pages/add/') ? location.href : '');
    urlInput.addEventListener('change', () => localStorage.setItem(KEY, urlInput.value.trim()));

    const state = { next: 0, rows: QUEUE.map(() => ({ status: 'queued', note: '' })) };
    const status = msg => { q('[data-status]').textContent = msg; };

    function render() {
        q('[data-list]').innerHTML = QUEUE.map((c, i) => {
            const r = state.rows[i];
            const mark = { done: '✅', warn: '⚠️', running: '⏳', skipped: '⏭' }[r.status] || (i === state.next ? '▶' : '·');
            const note = r.note ? `<div style="font-weight:normal;color:#a00;white-space:pre-wrap">${esc(r.note)}</div>` : '';
            return `<li style="margin:2px 0${i === state.next ? ';font-weight:bold' : ''}">${mark} ${esc(c.groupName)}: ${esc(c.victimName)}${note}</li>`;
        }).join('');
        const busy = state.rows.some(r => r.status === 'running');
        const finished = state.next >= QUEUE.length;
        q('[data-next]').disabled = q('[data-here]').disabled = q('[data-skip]').disabled = busy || finished;
    }

    // Wait until the opened tab shows a Needle form. Cross-origin access during an SSO
    // redirect throws — that is expected, keep waiting.
    async function waitForForm(w, timeoutMs) {
        const t0 = Date.now();
        while (Date.now() - t0 < timeoutMs) {
            try {
                if (w.closed) return 'closed';
                const d = w.document;
                if (d && d.readyState === 'complete' && d.getElementById('id_title') && d.getElementById('contents-root')
                    && w.jQuery && w.jQuery.fn && w.jQuery.fn.tagit) {
                    await sleep(500);
                    return 'ok';
                }
            } catch (e) { /* not ours yet */ }
            await sleep(500);
        }
        return 'timeout';
    }

    async function runOn(w, where) {
        const i = state.next;
        const cfg = QUEUE[i];
        state.rows[i].status = 'running';
        render();
        status(`Filling ${cfg.victimName} ${where}…`);
        let summary;
        try {
            summary = await fillNeedle(cfg, w);
        } catch (e) {
            state.rows[i].status = 'warn';
            state.rows[i].note = `Fill failed: ${e.message}`;
            render();
            status(`Fill failed for ${cfg.victimName} — see that tab's console. Fix the page, then click "Open & fill next" to retry it.`);
            return;
        }
        const flagged = v => String(v).startsWith('⚠️');
        const bad = summary.warnings.length > 0 || flagged(summary.content) || flagged(summary.region)
            || flagged(summary.threat) || summary.industries.some(flagged);
        state.rows[i].status = bad ? 'warn' : 'done';
        state.rows[i].note = bad ? [...summary.warnings, `Content: ${summary.content}`].join('\n') : '';
        state.next = i + 1;
        render();
        status(`${bad ? '⚠️' : '✅'} ${cfg.victimName} filled ${where}. In that tab: add the Image block (${summary.imageTitle}), `
            + `add a Relation if needed, check VERIFY in its console, Save draft. Then click "Open & fill next".`);
    }

    q('[data-next]').addEventListener('click', async () => {
        if (state.next >= QUEUE.length) return;
        const url = urlInput.value.trim();
        if (!url) { status('Set the Add Needle page URL first (Needles → Add child page → copy the address bar).'); return; }
        localStorage.setItem(KEY, url);
        const w = window.open(url, '_blank');
        if (!w) { status('The browser blocked the new tab. Allow pop-ups for this site, then click again.'); return; }
        status('Waiting for the add page to load…');
        const r = await waitForForm(w, 120000);
        if (r !== 'ok') {
            status(r === 'closed'
                ? 'That tab was closed before it loaded. Click again.'
                : 'No Needle form appeared within 2 minutes (login page? wrong URL?). Log in / fix the URL, then click again.');
            return;
        }
        await runOn(w, 'in the new tab');
    });
    q('[data-here]').addEventListener('click', async () => {
        if (state.next >= QUEUE.length) return;
        if (!document.getElementById('id_title') || !window.jQuery) { status('This tab is not a Needle add/edit page.'); return; }
        await runOn(window, 'in this tab');
    });
    q('[data-skip]').addEventListener('click', () => {
        if (state.next >= QUEUE.length) return;
        state.rows[state.next].status = 'skipped';
        state.next++;
        render();
        status('Skipped.');
    });
    q('[data-x]').addEventListener('click', () => panel.remove());

    render();
    status(QUEUE.length ? 'Ready. Check the add-page URL, then click "Open & fill next".' : 'Queue is empty — build this file with make-batch.js.');
})();
