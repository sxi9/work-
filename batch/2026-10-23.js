// Needles batch — built 2026-10-23 from 3 script(s):
//   scripts/dragonforce_lane-equipment.js
//   scripts/rhysida_dr-schnell.js
//   scripts/the-gentlemen_inovar-packaging-group.js
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

const QUEUE = [
  {
    "victimName": "LANE EQUIPMENT",
    "groupName": "DragonForce",
    "sourceActorName": "DragonForce",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "United States",
    "regionValue": "us_canada",
    "industryValues": [
      "retail_cpg"
    ],
    "onionUrl": "http://xjhmtitnrdrgzw4vmsghirdoo2fk35a3tzj4enlmah4pvehdspydsiyd.onion/blog",
    "contentText": "On October 23, 2026, ZeroFox observed an update on the DragonForce ransomware leak site targeting LANE EQUIPMENT, a United States-based commercial kitchen equipment sales, leasing, and repair company. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 50 percent are based in the U.S.-Canada region.",
    "leakText": "Publication (www.laneequipment.com)\nLANE EQUIPMENT\nPublication: 4 days 19:12:01\nwww.laneequipment.com\n2030 Richmond Ave, Houston, Texas, 77098, Texas, United States\n7.7 GB\nDescription\nLane Equipment Company has been a trusted food service partner in Texas since 1966, specializing in the sales, leasing, repairs, and parts for commercial kitchen equipment. They offer a wide range of products including soft serve machines, frozen beverage machines, ice machines, and refrigeration solutions. With four locations in Houston, San Antonio, Austin, and the Rio Grande Valley, they cater to restaurant professionals and commercial kitchen needs. Their services also include maintenance and parts support, ensuring comprehensive solutions for their clients.\n14 October 2026",
    "iocs": [
      {
        "type": "domain",
        "value": "laneequipment.com"
      }
    ]
  },
  {
    "victimName": "DR.SCHNELL GmbH & Co. KGaA",
    "groupName": "Rhysida",
    "sourceActorName": "Rhysida",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "Germany",
    "regionValue": "eu_russia",
    "industryValues": [
      "manufacturing"
    ],
    "onionUrl": "http://rhysidafohrhyy2aszi7bm32tnjat5xri65fopcxkdfxhi4tidsg7cad.onion/",
    "contentText": "On October 23, 2026, ZeroFox observed an update on the Rhysida ransomware leak site targeting DR.SCHNELL GmbH & Co. KGaA, a Germany-based manufacturer of cleaning and hygiene products. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which nearly 25 percent are based in the Europe-Russia region.",
    "leakText": "DR.SCHNELL GmbH & Co. KGaA\nDR.SCHNELL GmbH & Co. KGaA\nDR.SCHNELL GmbH & Co. KGaA � full network dump. 175,151 files / 2.52 TB.\n1.2+ TB of Navision/Business Central ERP backups - full commercial history (clients, pricing, procurement).\nComplete HR & payroll for Germany, Switzerland, Austria: home addresses, personal emails, payslips with social-security and tax IDs, long-term sick lists (GDPR Art. 9 data).\nFamily-office accounting: signed annual statements of dozens of related entities, bank statements, a EUR 35M credit-line agreement.\nCEO's personal dossier: valid passport, ID card, tax ID, 11 years of signed tax returns.\nAccess material: TLS private keys for *.dr-schnell.de, ~120 Elster tax certificates, O365 admin password, password lists.\nWith just 7 days on the clock, seize the opportunity to bid on exclusive, unique, and impressive data. Open your wallets and be ready to buy exclusive data. We sell only to one hand, no reselling, you will be the only owner!\nPrice: 15 BTC",
    "iocs": [
      {
        "type": "domain",
        "value": "dr-schnell.de"
      }
    ]
  },
  {
    "victimName": "Inovar Packaging Group",
    "groupName": "The Gentlemen",
    "sourceActorName": "The Gentlemen",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "United States",
    "regionValue": "us_canada",
    "industryValues": [
      "manufacturing"
    ],
    "onionUrl": "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/",
    "contentText": "On October 23, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting Inovar Packaging Group, a United States-based labels and flexible packaging manufacturer. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 50 percent are based in the U.S.-Canada region.",
    "leakText": "Inovar Packaging Group\ninovarpackaging.com Inovar Packaging Group (Irving, TX) is a PE-backed buy-and-build platform producing pressure-sensitive labels, shrink sleeves, flexible packaging, and RFID — 14 US plants, 12+ acquisitions since 2016 (latest: Kiliper Corp, Feb 2026). Owned by Kelso & Company since May 2022 (previously AEA Investors); CEO/Chairman Jeff Brezek leads, with deal advisors Milbank and Mesirow confirming real M&A scale. Revenue is private and undisclosed — realistic estimates put it at $100–250M, with ~500–750 employees (Form 5500 filings show plan participants growing 121→743 in 2020–2024). Certifications are strong: ISO 9001/14001, first US printer with GMI Platinum (both digital + flexo; serves CVS, Target, Walgreens, Home Depot), FDA 21 CFR 11 / EU Annex 11, EcoVadis Gold; won the 2024 TLMI Eugene Singer Award. Clients: food & beverage, healthcare, ag-chem, supplements, personal care — with built-in redundancy across plants for continuity.\nActivates in 84:01:40",
    "iocs": [
      {
        "type": "domain",
        "value": "inovarpackaging.com"
      }
    ]
  }
];

async function fillNeedle(cfg, win = window) {
    const doc = win.document;
    const $ = win.jQuery;
    const log = win.console;
    const delay = ms => new Promise(res => win.setTimeout(res, ms));
    const byId = id => doc.getElementById(id);
    const warnings = [];
    const warn = msg => { warnings.push(msg); log.warn(msg); };

    function setAndFire(el, value, evt) {
        el.value = value;
        el.dispatchEvent(new win.Event(evt, { bubbles: true }));
    }

    // Single-block-type StreamFields (Region/Industry/Threat): + inserts directly, no menu.
    async function ensureSingleTypeBlock(rootId, label, selectId, value) {
        let sel = byId(selectId);
        if (!sel) {
            const root = byId(rootId);
            if (!root) { warn(`❌ ${label}: root not found`); return; }
            const addButtons = root.querySelectorAll('.c-sf-add-button');
            addButtons[addButtons.length - 1].click();
            await delay(800);
            sel = byId(selectId);
        }
        if (!sel) { warn(`❌ ${label}: select not found after insert`); return; }
        if (sel.value) { log.log(`${label} already set (${sel.value}).`); return; }
        setAndFire(sel, value, 'change');
        if (sel.value !== value) {
            const opts = Array.from(sel.options).map(o => `${o.value}="${o.text}"`).join(', ');
            warn(`⚠️ ${label}: "${value}" is not an option value. Options: ${opts}`);
            return;
        }
        log.log(`✓ ${label} = ${value}`);
    }

    // Contents StreamField opens a block-chooser menu.
    async function addContentsBlock(optionText) {
        const root = byId('contents-root');
        const addButtons = root.querySelectorAll('.c-sf-add-button');
        addButtons[addButtons.length - 1].click();
        await delay(1000);
        const options = doc.querySelectorAll('.w-combobox__option-text, [role="option"]');
        for (const opt of options) {
            if (opt.offsetParent !== null && opt.textContent.trim().toLowerCase() === optionText.toLowerCase()) {
                opt.click();
                await delay(1000);
                return true;
            }
        }
        warn(`❌ Could not find menu option: ${optionText}`);
        doc.body.click();
        await delay(500);
        return false;
    }

    // PASTE-FIRST Draftail writer: synthetic paste is handled inside Draft.js state
    // (no DOM reconciliation, no removeChild crash). insertText is fallback only.
    async function writeDraftail(hiddenInputId, text) {
        const input = byId(hiddenInputId);
        if (!input) { warn('❌ Draftail hidden input not found'); return false; }
        const wrapper = input.closest('[data-streamfield-widget]') || input.parentElement;
        const editable = wrapper.querySelector('div[contenteditable="true"]');
        if (!editable) { warn('❌ Draftail contenteditable not found'); return false; }
        const norm = s => s.replace(/[​﻿]/g, '').replace(/\s+/g, ' ').trim();
        const snippet = text.slice(0, 25);
        editable.focus();
        await delay(300);
        if (norm(editable.textContent).length > 0) {
            doc.execCommand('selectAll', false, null);
            await delay(150);
        }
        const dt = new win.DataTransfer();
        dt.setData('text/plain', text);
        editable.dispatchEvent(new win.ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
        await delay(800);
        if (!editable.textContent.includes(snippet)) {
            try { doc.execCommand('insertText', false, text); } catch (e) {}
            await delay(800);
        }
        editable.blur();
        await delay(800);
        const inEditor = editable.textContent.includes(snippet);
        const synced = input.value && input.value.includes(snippet);
        if (inEditor && synced) { log.log('✓ Content written and synced'); return true; }
        if (inEditor && !synced) {
            warn('⚠️ In editor but not synced — click the Content block, type a space, delete it, then save.');
            return true;
        }
        try { copy(text); warn('⚠️ Injection failed. Paragraph is ON YOUR CLIPBOARD — click the Content block and press Ctrl+V.'); }
        catch (e) { warn('⚠️ Injection failed. Copy manually:'); log.log(text); }
        return false;
    }

    log.log(`🚀 Starting automation for ${cfg.victimName}...`);
    log.log('CONTENT PARAGRAPH:\n' + cfg.contentText);

    // 1. Kill autosave
    doc.querySelectorAll('[data-controller*="w-autosave"]').forEach(el => el.removeAttribute('data-controller'));

    // 2. Standard fields
    const titleField = byId('id_title');
    if (!titleField.value) setAndFire(titleField, `${cfg.groupName}${cfg.titleSeparator}${cfg.victimName}`, 'input');
    setAndFire(byId('id_tlp'), "1", 'change');          // GREEN
    setAndFire(byId('id_reliability'), "3", 'change');  // C - Fairly Reliable
    setAndFire(byId('id_confidence'), "3", 'change');   // 3 - Possibly true

    // 3. Tags
    $('#id_target_tags').tagit('createTag', cfg.victimName);
    $('#id_source_name_tags').tagit('createTag', cfg.sourceActorName);
    $('#id_actor_tags').tagit('createTag', cfg.sourceActorName);
    $('#id_source_url_tags').tagit('createTag', cfg.onionUrl);
    $('#id_language_tags').tagit('createTag', 'English');
    [cfg.ddwTag, "DDW Victims", "PII Packages", "PII Sites", cfg.countryTag]
        .forEach(tag => $('#id_tags').tagit('createTag', tag));

    // 4. Region, Industry, Threat
    await ensureSingleTypeBlock('region_tags-root', 'Region', 'region_tags-0-value', cfg.regionValue);
    for (let i = 0; i < cfg.industryValues.length; i++) {
        await ensureSingleTypeBlock('industry_tags-root', `Industry ${i + 1}`, `industry_tags-${i}-value`, cfg.industryValues[i]);
    }
    await ensureSingleTypeBlock('threat_types-root', 'Threat', 'threat_types-0-value', cfg.threatType);

    // 5. Contents - Content block (Draftail)
    const existingContent = byId('contents-0-value');
    if (existingContent && existingContent.value && existingContent.value.includes('ZeroFox observed')) {
        log.log("Content block already filled. Skipping.");
    } else {
        if (!existingContent) await addContentsBlock('Content');
        await writeDraftail('contents-0-value', cfg.contentText);
    }

    // 6. Contents - Code block (plain textarea)
    const existingCode = byId('contents-1-value-code');
    if (existingCode && existingCode.value) {
        log.log("Code block already filled. Skipping.");
    } else {
        if (!existingCode) await addContentsBlock('Code');
        const langSelect = byId('contents-1-value-language');
        if (langSelect) setAndFire(langSelect, 'html', 'change');
        const codeInput = byId('contents-1-value-code');
        if (codeInput) setAndFire(codeInput, cfg.leakText, 'input');
    }

    // 7. IOCs (InlinePanel)
    const iocForms = byId('id_iocs-FORMS');
    const existingRows = iocForms.querySelectorAll('[data-inline-panel-child]').length;
    if (existingRows > 0) {
        log.log(`IOCs already present (${existingRows} row(s)). Skipping.`);
    } else {
        for (const ioc of cfg.iocs) {
            byId('id_iocs-ADD').click();
            await delay(600);
            const rows = iocForms.querySelectorAll('[data-inline-panel-child]');
            const row = rows[rows.length - 1];
            const typeSel = row && row.querySelector('select[name$="-type"]');
            const valInput = row && row.querySelector('input[name$="-value"]');
            if (typeSel && valInput) {
                setAndFire(typeSel, ioc.type, 'change');
                setAndFire(valInput, ioc.value, 'input');
                valInput.dispatchEvent(new win.Event('change', { bubbles: true }));
                log.log(`✓ IOC ${ioc.type} = ${ioc.value}`);
            } else {
                warn(`❌ IOC row inputs not found for ${ioc.value}`);
            }
        }
    }

    // 8. Verification summary
    await delay(1000);
    const cInput = byId('contents-0-value');
    const summary = {
        title: byId('id_title')?.value,
        region: byId('region_tags-0-value')?.value || '⚠️ EMPTY',
        industries: cfg.industryValues.map((v, i) => byId(`industry_tags-${i}-value`)?.value || '⚠️ EMPTY'),
        threat: byId('threat_types-0-value')?.value || '⚠️ EMPTY',
        content: (cInput && cInput.value && cInput.value.includes('ZeroFox observed')) ? 'OK (synced)' : '⚠️ NOT SYNCED — see warning above',
        codeLang: byId('contents-1-value-language')?.value || '⚠️ EMPTY',
        codeChars: (byId('contents-1-value-code')?.value || '').length,
        iocs: Array.from(doc.querySelectorAll('#id_iocs-FORMS [data-inline-panel-child]'))
            .map(row => `${row.querySelector('select[name$="-type"]')?.value} = ${row.querySelector('input[name$="-value"]')?.value}`),
        imageTitle: `${cfg.groupName}_${cfg.victimName.replace(/[\s,.'"&()\/]+/g, '')}_1`,
        warnings,
    };
    log.log('--- VERIFY ---');
    log.log('Title:', summary.title);
    log.log('Region:', summary.region);
    summary.industries.forEach((v, i) => log.log(`Industry ${i + 1}:`, v));
    log.log('Threat:', summary.threat);
    log.log('Content:', summary.content);
    log.log('Code lang:', summary.codeLang);
    log.log('Code text:', summary.codeChars + ' chars');
    summary.iocs.forEach((s, i) => log.log(`IOC ${i}:`, s));
    log.log(`✅ Done! Add the Image block (title ${summary.imageTitle}), add a Relation if this victim already has a Needle from another group, check VERIFY, then Save Draft.`);
    return summary;
}

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
