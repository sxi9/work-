// Entry Systems — The Gentlemen Ransomware (October 20, 2026)
// Paste the WHOLE file into the browser console on the Wagtail add/edit page.
const victimName = "Entry Systems";
const groupName = "The Gentlemen";
const countryTag = "United States";
const regionValue = "us_canada";
const industryValues = ["construction"];
const onionUrl = "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/";
const sourceActorName = groupName; // Source Name(s) + Actor(s) tag
const titleSeparator = " Ransomware: ";
const threatType = "ransomware";
const ddwTag = "DDW Ransomware";

const contentText = "On October 20, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting Entry Systems, a U.S.-based garage door and automated gate services company. ZeroFox has detected close to 10,000 ransomware and digital extortion victims in the past year, of which over 50 percent are based in the U.S.-Canada region.";

const leakText = String.raw`Entry Systems Garage Doors Gates
entrysystems.com Entry Systems Garage Doors & Gates 3rd-generation family business in Laguna Hills, CA (with a second design center in Tustin, opened 2024) — servicing garage doors and automated gates across South Orange County since 1972. Legal entity: Laguna Niguel Garage Door Service, Inc.; CA contractor license #916334 (class D28, active through 2028, clear record), bonded and insured. Services: garage door repair/installation (CHI, Amarr, Clopay), openers (Genie, Liftmaster, smart home), swing/slide gates (DoorKing, Elite, Eagle, solar), telephone entry systems, welding, and maintenance — same-day emergency service typical.
Activates in 102:14:25`;

const iocs = [
    { type: "domain", value: "entrysystems.com" }
];
// --------------------------------------------

// Fill one Needles add/edit form. cfg = the variables above as an object; win = the window
// that holds the form (this tab for a pasted script, a tab opened by wagtail-batch.js for
// batch runs). Returns the VERIFY summary and also prints it in that window's console.
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
        imageTitle: `${cfg.groupName}_${cfg.victimName.replace(/\s+/g, '')}_1`,
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

// ---- single-victim run (this tab) ----
fillNeedle({ victimName, groupName, sourceActorName, titleSeparator, threatType, ddwTag,
    countryTag, regionValue, industryValues, onionUrl, contentText, leakText, iocs }, window);
