// Needles batch — built 2026-10-23 from 6 script(s):
//   scripts/the-gentlemen_museum-siam.js
//   scripts/the-gentlemen_regio-nord.js
//   scripts/the-gentlemen_saga-university.js
//   scripts/the-gentlemen_sbi-audiovisuel.js
//   scripts/the-gentlemen_suhai-seguranca-pessoal.js
//   scripts/pear_adobe-insurance-brokers.js
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
    "victimName": "Museum Siam",
    "groupName": "The Gentlemen",
    "sourceActorName": "The Gentlemen",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "Thailand",
    "regionValue": "apac",
    "industryValues": [
      "education"
    ],
    "onionUrl": "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/",
    "contentText": "On October 22, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting Museum Siam, Thailand. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 10 percent are based in the Asia-Pacific region.",
    "leakText": "Museum Siam\nmuseumsiam.org Museum Siam museum in Bangkok run by NDMI under the public organization OKMD — the .org domain is real, but it's a government institute, not a private company. It occupies the former Ministry of Commerce building (1921–1922) and opened as a museum on 2 April 2008. The core exhibit Decoding Thainess (14 rooms on how Thai identity was formed) has run since 2017; there's also a free Underground Museum at MRT Sanam Chai (2020). Attendance is ~250–343K per year (different counting methods), 3.8M over 17 years; museum-level revenue isn't disclosed — finances publish only at OKMD level. Tickets: 100 THB adult, 50 students, free for kids under 15, 60+, monks, disabled visitors; open Tue–Sun 10:00–18:00. Beyond exhibits: a 4,000+ resource library, digital archives, venue rental (5–80K THB), and a nationwide museum-network support program.\nActivates in 61:09:10",
    "iocs": [
      {
        "type": "domain",
        "value": "museumsiam.org"
      }
    ]
  },
  {
    "victimName": "REGiO Nord",
    "groupName": "The Gentlemen",
    "sourceActorName": "The Gentlemen",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "Germany",
    "regionValue": "eu_russia",
    "industryValues": [
      "professional_services"
    ],
    "onionUrl": "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/",
    "contentText": "On October 22, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting REGiO Nord, a Germany-based municipal regional development company. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which nearly 25 percent are based in the Europe-Russia region.",
    "leakText": "REGiO Nord\nregio-nord.com REGiO-Nord mbH (HRB 1203, Amtsgericht Neuruppin) is a municipal regional-development company in Gransee, Brandenburg, founded 2008–2009 to run the shared \"Mittelzentrum\" of Gransee–Zehdenick–Fürstenberg/Havel. It is 100% publicly owned (Zehdenick 1/3, Fürstenberg 1/3, Gransee 1/6, Amt Gransee 1/6), led by sole managing director Olaf Bechert with a staff of ~5 plus two tourist info offices. Its real money flows through the Kooperationsfonds — ~€8.9M in projects since 2008, with €538K spent in 2025 and €563K budgeted for 2026, of which €312K funds the company's own coordination work. Four workstreams: education (teacher recruitment, apprenticeship exchange), economy (business services, doctor recruitment, arztidylle.de), tourism (two info stations, region portals, RegioApp), and regional marketing (REGiO-Card, library network). Finances are project-transparent (open budget reports) but the GmbH's own annual accounts are only public through 2022 — request 2023–2025.\nActivates in 60:53:16",
    "iocs": [
      {
        "type": "domain",
        "value": "regio-nord.com"
      },
      {
        "type": "domain",
        "value": "arztidylle.de"
      }
    ]
  },
  {
    "victimName": "Saga University",
    "groupName": "The Gentlemen",
    "sourceActorName": "The Gentlemen",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "Japan",
    "regionValue": "apac",
    "industryValues": [
      "education"
    ],
    "onionUrl": "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/",
    "contentText": "On October 22, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting Saga University, Japan. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 10 percent are based in the Asia-Pacific region.",
    "leakText": "Saga University\nsaga-u.ac.jp Saga University is a national Japanese university in Saga Prefecture, Kyushu — founded in 1949 (roots back to 1875), merged with Saga Medical School in 2003, operating as a national university corporation since 2004. Scale: ~6,600 students, ~3,300 staff, 6 faculties (including medicine with a ~600-bed hospital) across Honjo, Nabeshima, and Arita campuses. Annual revenue ¥44B ($300M), ~57% of it generated by the university hospital; state capital ¥47.3B, with a +¥1.6B surplus in FY2024. Signature strength: the Institute of Ocean Energy (IOES) — a world leader in OTEC (ocean thermal energy), pursuing the world's first 1-MW commercial plant ~2026-27 with Mitsui O.S.K. Lines. Rector since Oct 2025: Koichi Node (cardiologist); 2026 launches include Japan's first national-university cosmetic science program (30 students, 7x oversubscribed) and a joint teacher-training degree with Kumamoto University. Weak points: rankings have slid for a decade (QS Asia 801-850, THE 1501+)\nActivates in 60:05:28",
    "iocs": [
      {
        "type": "domain",
        "value": "saga-u.ac.jp"
      }
    ]
  },
  {
    "victimName": "SBI Audiovisual Medinbox",
    "groupName": "The Gentlemen",
    "sourceActorName": "The Gentlemen",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "Canada",
    "regionValue": "us_canada",
    "industryValues": [
      "professional_services"
    ],
    "onionUrl": "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/",
    "contentText": "On October 22, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting SBI Audiovisual Medinbox, a Canada-based audiovisual production company for corporate events and live surgical broadcasts. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 50 percent are based in the U.S.-Canada region.",
    "leakText": "SBI Audiovisual Medinbox\nsbiav.com SBI Audiovisuel is a Quebec AV company founded in 1991 (HQ in Saint-Bruno-de-Montarville, ~11 staff), doing corporate event production — sound, lighting, video, webcasting — plus its signature niche: live streaming of surgical operations for medical training. It deploys its own CASTER mobile system and claims exclusive North American rights to France's Medinbox tech, which is used at hospitals like Mount Sinai NY; note SBI is an integrator, not the tech's manufacturer. Public activity runs from 2018 through 2026 (US tours, medical congresses, hiring), with no lawsuits or scam signs found. Revenue is not disclosed — third-party estimates vary ($1–5M range), all unverified. Weak spots: no independent client reviews, no published certificates, and the site blurs its own brand with Medinbox's. For Quebec/Canada corporate events or live-surgery broadcasts it's a credible pick; for critical projects, verify team size, redundancy plans, and patient-data handling in writing.\nActivates in 59:56:23",
    "iocs": [
      {
        "type": "domain",
        "value": "sbiav.com"
      }
    ]
  },
  {
    "victimName": "Suhai Segurana Pessoal",
    "groupName": "The Gentlemen",
    "sourceActorName": "The Gentlemen",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "Brazil",
    "regionValue": "south_america",
    "industryValues": [
      "security"
    ],
    "onionUrl": "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/",
    "contentText": "On October 22, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting Suhai Segurana Pessoal, a Brazil-based personal and executive protection security company. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 5 percent are based in the South America region.",
    "leakText": "Suhai Segurana Pessoal\nsuhaiseguranca.com.br Suhai Segurança Pessoal Brazilian personal security company founded in 1992 — one of the older, established firms in its niche. Core business: bodyguard/executive protection, family and residential security, security drivers, and corporate guarding, delivered nationwide. Teams are described as vetted, licensed professionals backed by 24/7 monitoring and in-house tactical training. The firm claims ISO 9001 and Great Place to Work certification, but doesn't publish certificates — claims are self-reported. No revenue, pricing, or verified headcount is public; everything is custom-quoted per job. Critically: since Brazil's 2024 law, security work is only legal if the firm holds a current federal police permit for that specific service and state — confirm yours before hiring. Also beware the unrelated \"Suhai\" auto insurer sharing the name — most complaints you'll find online are about insurance, not this company.\nActivates in 59:38:11",
    "iocs": [
      {
        "type": "domain",
        "value": "suhaiseguranca.com.br"
      }
    ]
  },
  {
    "victimName": "Adobe Insurance Brokers, LLC",
    "groupName": "Pear",
    "sourceActorName": "Pear",
    "titleSeparator": " Ransomware: ",
    "threatType": "ransomware",
    "ddwTag": "DDW Ransomware",
    "countryTag": "United States",
    "regionValue": "us_canada",
    "industryValues": [
      "insurance"
    ],
    "onionUrl": "http://pearsmob5sn44ismokiusuld34pnfwi6ctgin3qbvonpoob4lh3rmtqd.onion/",
    "contentText": "On October 22, 2026, ZeroFox observed an update on the Pear ransomware leak site targeting Adobe Insurance Brokers, LLC, a United States-based insurance agency. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 50 percent are based in the U.S.-Canada region.",
    "leakText": "Adobe Insurance Brokers, LLC ANNOUNCED\nIndependent insurance agency located in Morgan Hill, California\nData Volume: 304 Gb\nShow more\nDate Company Notified: 19/10/2026\nSite: adobebrokers.com\nIndustry: Insurance\nLocation: USA\nRevenue: $5M\nDetails",
    "iocs": [
      {
        "type": "domain",
        "value": "adobebrokers.com"
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
