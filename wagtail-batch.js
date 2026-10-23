// [TEMPLATE] ZeroFox Wagtail Needles BATCH runner. Do not paste this file as is: build a
// [TEMPLATE] paste-ready copy with `node make-batch.js batch/<name>.js scripts/<victim>.js ...`
// [TEMPLATE] (the victims' variables and fillNeedle() get embedded). See CLAUDE.md "Batch runs".
//
// How a built batch file works — paste it into the browser console (F12) on ANY Wagtail admin page:
//  1. A green panel appears top-right listing the queued victims. The red glowing line is the
//     per-entry checklist: check every detail and the DATE, add the screenshot, add a Relation.
//  2. Set the "Add Needle" page URL once (prefilled when you paste on the add page itself;
//     remembered in this browser afterwards).
//  3. ▶ on a row makes it the next victim; ▲ ▼ reorder the queue. "Set dates to today" rewrites
//     the "On <Month D, YYYY>," date of every queued content paragraph to today's date (rows whose
//     date is not today are marked in red).
//  4. Click "Open & fill next": a new tab opens on the add page and is filled from this tab.
//     Same-origin tabs allow that — nothing is injected into Wagtail, no extension is needed.
//     The browser may ask once to allow pop-ups for the admin host.
//     Each row has a Source URL field: paste the listing's own onion link there (rows that still
//     carry only the site root are marked in red) before clicking fill.
//  5. In the new tab: add the Image block, add a Relation if the victim already has a Needle,
//     read VERIFY in that tab's console, Save draft. Come back here and click again.
//  "Fill this tab" fills the next victim into the current tab instead (when you already sit
//  on an empty add page). "Skip" moves past a victim. Re-pasting the file restarts the queue.

const QUEUE = /*__QUEUE__*/[];

/*__FILL__*/

(function batchPanel() {
    const KEY = 'zfNeedleAddUrl';
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
    const TODAY = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const DATE_RE = /^On ([A-Z][a-z]+ \d{1,2}, \d{4}),/;
    const contentDate = cfg => (DATE_RE.exec(cfg.contentText) || [])[1] || '?';

    ['zf-batch-panel', 'zf-batch-style'].forEach(id => { const el = document.getElementById(id); if (el) el.remove(); });
    const style = document.createElement('style');
    style.id = 'zf-batch-style';
    style.textContent = `
      @keyframes zfGlow { 0%,100% { text-shadow: 0 0 2px #f00; } 50% { text-shadow: 0 0 10px #f00, 0 0 18px #f55; } }
      #zf-batch-panel .zf-warn { color:#c00; font-weight:bold; animation: zfGlow 1.3s ease-in-out infinite; margin:8px 0; white-space:pre-wrap; }
      #zf-batch-panel ol { padding-left:22px; margin:0; }
      #zf-batch-panel li { margin:3px 0; padding:3px 4px; border-radius:4px; }
      #zf-batch-panel li.zf-next { background:#eaf7ee; outline:1px solid #0a7a2f; }
      #zf-batch-panel li button { font-size:11px; padding:0 5px; line-height:18px; margin-right:2px; }
      #zf-batch-panel .zf-date { color:#555; font-weight:normal; }
      #zf-batch-panel .zf-date.zf-bad { color:#c00; font-weight:bold; }
      #zf-batch-panel .zf-note { font-weight:normal; color:#a00; white-space:pre-wrap; }
      #zf-batch-panel .zf-url { display:flex; gap:4px; align-items:center; margin-top:2px; font-size:11px; color:#555; flex-wrap:wrap; }
      #zf-batch-panel .zf-url input { flex:1; min-width:180px; font-size:11px; padding:2px; }
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.id = 'zf-batch-panel';
    panel.style.cssText = 'position:fixed;top:12px;right:12px;z-index:2147483647;width:440px;max-height:92vh;overflow:auto;'
        + 'background:#fff;color:#111;border:2px solid #0a7a2f;border-radius:8px;padding:12px;'
        + 'font:13px/1.4 system-ui,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.3);text-align:left';
    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <b>Needles batch (${QUEUE.length} victims)</b><button data-x title="Close panel">✕</button>
      </div>
      <div class="zf-warn">⚠ BEFORE SAVING EACH ENTRY: check every detail and the DATE in the content paragraph, ADD THE LEAK SCREENSHOT (Image block), use the listing's own onion link as Source URL (per-row field below), and add a Relation if the victim already has a Needle.</div>
      <label style="display:block;margin:8px 0 4px">Add Needle page URL</label>
      <input data-url style="width:100%;box-sizing:border-box;padding:4px" placeholder="https://intel-api.zerofox.com/wagtail/admin/pages/add/.../">
      <div style="margin:8px 0;display:flex;gap:6px;flex-wrap:wrap">
        <button data-next style="font-weight:bold">Open &amp; fill next</button>
        <button data-here>Fill this tab</button>
        <button data-skip>Skip</button>
        <button data-dates title="Rewrite the content date of every queued victim">Set dates to today (${esc(TODAY)})</button>
      </div>
      <div data-status style="margin:6px 0;color:#333;white-space:pre-wrap"></div>
      <div style="font-size:11px;color:#555;margin:4px 0">▶ = fill this one next &nbsp;·&nbsp; ▲ ▼ = move in the queue &nbsp;·&nbsp; highlighted row = next</div>
      <ol data-list></ol>`;
    document.body.appendChild(panel);

    const q = sel => panel.querySelector(sel);
    const urlInput = q('[data-url]');
    urlInput.value = localStorage.getItem(KEY) || (location.pathname.includes('/pages/add/') ? location.href : '');
    urlInput.addEventListener('change', () => localStorage.setItem(KEY, urlInput.value.trim()));

    const state = { next: 0, rows: QUEUE.map(() => ({ status: 'queued', note: '' })) };
    const status = msg => { q('[data-status]').textContent = msg; };
    const busy = () => state.rows.some(r => r.status === 'running');
    const finished = () => state.next >= QUEUE.length;
    function nextQueued(from) {
        for (let k = from + 1; k < QUEUE.length; k++) if (state.rows[k].status === 'queued') return k;
        for (let k = 0; k < QUEUE.length; k++) if (state.rows[k].status === 'queued') return k;
        return QUEUE.length;
    }

    function render() {
        q('[data-list]').innerHTML = QUEUE.map((c, i) => {
            const r = state.rows[i];
            const mark = { done: '✅', warn: '⚠️', running: '⏳', skipped: '⏭' }[r.status] || (i === state.next ? '▶' : '·');
            const d = contentDate(c);
            const bad = d !== TODAY;
            const ctrls = `<button data-sel="${i}" title="Fill this one next">▶</button><button data-up="${i}" title="Move up">▲</button><button data-down="${i}" title="Move down">▼</button>`;
            const date = `<span class="zf-date${bad ? ' zf-bad' : ''}">(content date ${esc(d)}${bad ? ' ≠ today' : ''})</span>`;
            const note = r.note ? `<div class="zf-note">${esc(r.note)}</div>` : '';
            const isRoot = /^https?:\/\/[^/]+\/?(blog\/?)?$/i.test(c.onionUrl);
            const urlRow = `<div class="zf-url"><span>Source URL</span><input data-url-i="${i}" value="${esc(c.onionUrl)}" title="Paste the listing's own onion link here before filling">`
                + (isRoot ? `<span class="zf-date zf-bad">site root — paste the listing's own link</span>` : '') + `</div>`;
            return `<li class="${i === state.next ? 'zf-next' : ''}">${ctrls} ${mark} <b>${esc(c.groupName)}: ${esc(c.victimName)}</b> ${date}${urlRow}${note}</li>`;
        }).join('');
        q('[data-next]').disabled = q('[data-here]').disabled = q('[data-skip]').disabled = busy() || finished();
        q('[data-dates]').disabled = busy();
    }

    function move(i, d) {
        const j = i + d;
        if (j < 0 || j >= QUEUE.length) return;
        [QUEUE[i], QUEUE[j]] = [QUEUE[j], QUEUE[i]];
        [state.rows[i], state.rows[j]] = [state.rows[j], state.rows[i]];
        if (state.next === i) state.next = j; else if (state.next === j) state.next = i;
        render();
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
        state.next = nextQueued(i);
        render();
        const dateNote = contentDate(cfg) !== TODAY ? ` ⚠ Its content date is ${contentDate(cfg)}, not today.` : '';
        status(`${bad ? '⚠️' : '✅'} ${cfg.victimName} filled ${where}.${dateNote} In that tab: add the Image block (${summary.imageTitle}), `
            + `add a Relation if needed, check VERIFY in its console, Save draft. Then click "Open & fill next".`);
    }

    q('[data-list]').addEventListener('change', e => {
        const inp = e.target.closest('input[data-url-i]');
        if (!inp) return;
        QUEUE[+inp.dataset.urlI].onionUrl = inp.value.trim();
        render();
    });
    q('[data-list]').addEventListener('click', e => {
        const b = e.target.closest('button');
        if (!b || busy()) return;
        if (b.dataset.sel !== undefined) { state.next = +b.dataset.sel; render(); status(`Next: ${QUEUE[state.next].victimName}`); }
        else if (b.dataset.up !== undefined) move(+b.dataset.up, -1);
        else if (b.dataset.down !== undefined) move(+b.dataset.down, +1);
    });
    q('[data-next]').addEventListener('click', async () => {
        if (finished()) return;
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
        if (finished()) return;
        if (!document.getElementById('id_title') || !window.jQuery) { status('This tab is not a Needle add/edit page.'); return; }
        await runOn(window, 'in this tab');
    });
    q('[data-skip]').addEventListener('click', () => {
        if (finished()) return;
        state.rows[state.next].status = 'skipped';
        state.next = nextQueued(state.next);
        render();
        status('Skipped.');
    });
    q('[data-dates]').addEventListener('click', () => {
        let n = 0;
        QUEUE.forEach((c, i) => {
            if (state.rows[i].status === 'queued' && DATE_RE.test(c.contentText) && contentDate(c) !== TODAY) {
                c.contentText = c.contentText.replace(DATE_RE, `On ${TODAY},`);
                n++;
            }
        });
        render();
        status(`${n} content paragraph(s) re-dated to ${TODAY}. Leak-text timer lines are unchanged — re-check the figure in CLAUDE.md if the dashboard moved.`);
    });
    q('[data-x]').addEventListener('click', () => panel.remove());

    render();
    status(QUEUE.length ? 'Ready. Check the add-page URL and the dates, then click "Open & fill next".' : 'Queue is empty — build this file with make-batch.js.');
})();
