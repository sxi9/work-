// Universidade de Passo Fundo — The Gentlemen Ransomware (October 19, 2026)
// Paste the WHOLE file into the browser console on the Wagtail add/edit page.
const delay = ms => new Promise(res => setTimeout(res, ms));

const victimName = "Universidade de Passo Fundo";
const groupName = "The Gentlemen";
const countryTag = "Brazil";
const regionValue = "south_america";
const industryValue = "education";
const onionUrl = "http://tezwsse5czllksjb7cwp65rvnk4oobmzti2znn42i43bjdfd2prqqkad.onion/";

const contentText = "On October 19, 2026, ZeroFox observed an update on The Gentlemen ransomware leak site targeting Universidade de Passo Fundo, a Brazil-based private community university. ZeroFox has detected more than 9,850 ransomware and digital extortion victims in the past year, of which over 6 percent are based in the South America region.";

const leakText = `Universidade de Passo Fundo
upf.br Universidade de Passo Fundo private community philanthropic university in Passo Fundo, Rio Grande do Sul, Brazil — founded 1968 (Decree 62.835), run by the FUPF foundation, with 7 campuses, ~10,000 students, 486 professors (48% PhD), and 100,000+ alumni. It holds the maximum MEC institutional rating (5), ranks 6th among Brazil's best private universities and 5th in research nationally (RUF 2025), and is in the THE World 2026 ranking and top-300 globally for sustainability (GreenMetric). Flagships: Medicine (MEC concept 5, expanding from 750 to 2,000 students with R$ 60M invested), Pharmacy (MEC 5), Veterinary (Hospital Veterinário + 170-ha Cepagro), Engineering (chemical #5 nationally), and Law (70 years old). Financially healthy — R$ 60M annual surplus, independent audits published, board with civil-society oversight; ~70% of students get aid (ProUni, Bolsa Filantropia, FIES, CrediUPF). New rector for 2026–2030: Edison Alencar Casagranda (93% of votes, took office July 2026).
Activates in 136:17:10`;

const iocs = [
    { type: "domain", value: "upf.br" }
];
// --------------------------------------------

function setAndFire(el, value, evt) {
    el.value = value;
    el.dispatchEvent(new Event(evt, { bubbles: true }));
}

// Single-block-type StreamFields (Region/Industry/Threat): + inserts directly, no menu.
async function ensureSingleTypeBlock(rootId, label, selectId, value) {
    let sel = document.getElementById(selectId);
    if (!sel) {
        const root = document.getElementById(rootId);
        if (!root) { console.warn(`❌ ${label}: root not found`); return; }
        const addButtons = root.querySelectorAll('.c-sf-add-button');
        addButtons[addButtons.length - 1].click();
        await delay(800);
        sel = document.getElementById(selectId);
    }
    if (!sel) { console.warn(`❌ ${label}: select not found after insert`); return; }
    if (sel.value) { console.log(`${label} already set (${sel.value}).`); return; }
    setAndFire(sel, value, 'change');
    console.log(`✓ ${label} = ${value}`);
}

// Contents StreamField opens a block-chooser menu.
async function addContentsBlock(optionText) {
    const root = document.getElementById('contents-root');
    const addButtons = root.querySelectorAll('.c-sf-add-button');
    addButtons[addButtons.length - 1].click();
    await delay(1000);
    const options = document.querySelectorAll('.w-combobox__option-text, [role="option"]');
    for (const opt of options) {
        if (opt.offsetParent !== null && opt.textContent.trim().toLowerCase() === optionText.toLowerCase()) {
            opt.click();
            await delay(1000);
            return true;
        }
    }
    console.warn(`❌ Could not find menu option: ${optionText}`);
    document.body.click();
    await delay(500);
    return false;
}

// PASTE-FIRST Draftail writer: synthetic paste is handled inside Draft.js state
// (no DOM reconciliation, no removeChild crash). insertText is fallback only.
async function writeDraftail(hiddenInputId, text) {
    const input = document.getElementById(hiddenInputId);
    if (!input) { console.warn('❌ Draftail hidden input not found'); return false; }
    const wrapper = input.closest('[data-streamfield-widget]') || input.parentElement;
    const editable = wrapper.querySelector('div[contenteditable="true"]');
    if (!editable) { console.warn('❌ Draftail contenteditable not found'); return false; }
    const norm = s => s.replace(/[​﻿]/g, '').replace(/\s+/g, ' ').trim();
    const snippet = text.slice(0, 25);
    editable.focus();
    await delay(300);
    if (norm(editable.textContent).length > 0) {
        document.execCommand('selectAll', false, null);
        await delay(150);
    }
    const dt = new DataTransfer();
    dt.setData('text/plain', text);
    editable.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
    await delay(800);
    if (!editable.textContent.includes(snippet)) {
        try { document.execCommand('insertText', false, text); } catch (e) {}
        await delay(800);
    }
    editable.blur();
    await delay(800);
    const inEditor = editable.textContent.includes(snippet);
    const synced = input.value && input.value.includes(snippet);
    if (inEditor && synced) { console.log('✓ Content written and synced'); return true; }
    if (inEditor && !synced) {
        console.warn('⚠️ In editor but not synced — click the Content block, type a space, delete it, then save.');
        return true;
    }
    try { copy(text); console.warn('⚠️ Injection failed. Paragraph is ON YOUR CLIPBOARD — click the Content block and press Ctrl+V.'); }
    catch (e) { console.warn('⚠️ Injection failed. Copy manually:'); console.log(text); }
    return false;
}

(async () => {
    console.log(`🚀 Starting automation for ${victimName}...`);
    console.log('CONTENT PARAGRAPH:\n' + contentText);

    // 1. Kill autosave
    document.querySelectorAll('[data-controller*="w-autosave"]').forEach(el => el.removeAttribute('data-controller'));

    // 2. Standard fields
    const titleField = document.getElementById('id_title');
    if (!titleField.value) setAndFire(titleField, `${groupName} Ransomware: ${victimName}`, 'input');
    setAndFire(document.getElementById('id_tlp'), "1", 'change');          // GREEN
    setAndFire(document.getElementById('id_reliability'), "3", 'change');  // C - Fairly Reliable
    setAndFire(document.getElementById('id_confidence'), "3", 'change');   // 3 - Possibly true

    // 3. Tags
    jQuery('#id_target_tags').tagit('createTag', victimName);
    jQuery('#id_source_name_tags').tagit('createTag', groupName);
    jQuery('#id_actor_tags').tagit('createTag', groupName);
    jQuery('#id_source_url_tags').tagit('createTag', onionUrl);
    jQuery('#id_language_tags').tagit('createTag', 'English');
    ["DDW Ransomware", "DDW Victims", "PII Packages", "PII Sites", countryTag]
        .forEach(tag => jQuery('#id_tags').tagit('createTag', tag));

    // 4. Region, Industry, Threat
    await ensureSingleTypeBlock('region_tags-root', 'Region', 'region_tags-0-value', regionValue);
    await ensureSingleTypeBlock('industry_tags-root', 'Industry', 'industry_tags-0-value', industryValue);
    await ensureSingleTypeBlock('threat_types-root', 'Threat', 'threat_types-0-value', 'ransomware');

    // 5. Contents - Content block (Draftail)
    const existingContent = document.getElementById('contents-0-value');
    if (existingContent && existingContent.value && existingContent.value.includes('ZeroFox observed')) {
        console.log("Content block already filled. Skipping.");
    } else {
        if (!existingContent) await addContentsBlock('Content');
        await writeDraftail('contents-0-value', contentText);
    }

    // 6. Contents - Code block (plain textarea)
    const existingCode = document.getElementById('contents-1-value-code');
    if (existingCode && existingCode.value) {
        console.log("Code block already filled. Skipping.");
    } else {
        if (!existingCode) await addContentsBlock('Code');
        const langSelect = document.getElementById('contents-1-value-language');
        if (langSelect) setAndFire(langSelect, 'html', 'change');
        const codeInput = document.getElementById('contents-1-value-code');
        if (codeInput) setAndFire(codeInput, leakText, 'input');
    }

    // 7. IOCs (InlinePanel)
    const iocForms = document.getElementById('id_iocs-FORMS');
    const existingRows = iocForms.querySelectorAll('[data-inline-panel-child]').length;
    if (existingRows > 0) {
        console.log(`IOCs already present (${existingRows} row(s)). Skipping.`);
    } else {
        for (const ioc of iocs) {
            document.getElementById('id_iocs-ADD').click();
            await delay(600);
            const rows = iocForms.querySelectorAll('[data-inline-panel-child]');
            const row = rows[rows.length - 1];
            const typeSel = row && row.querySelector('select[name$="-type"]');
            const valInput = row && row.querySelector('input[name$="-value"]');
            if (typeSel && valInput) {
                setAndFire(typeSel, ioc.type, 'change');
                setAndFire(valInput, ioc.value, 'input');
                valInput.dispatchEvent(new Event('change', { bubbles: true }));
                console.log(`✓ IOC ${ioc.type} = ${ioc.value}`);
            } else {
                console.warn(`❌ IOC row inputs not found for ${ioc.value}`);
            }
        }
    }

    // 8. Verification summary
    await delay(1000);
    console.log('--- VERIFY ---');
    console.log('Title:', document.getElementById('id_title')?.value);
    console.log('Region:', document.getElementById('region_tags-0-value')?.value || '⚠️ EMPTY');
    console.log('Industry:', document.getElementById('industry_tags-0-value')?.value || '⚠️ EMPTY');
    console.log('Threat:', document.getElementById('threat_types-0-value')?.value || '⚠️ EMPTY');
    const cInput = document.getElementById('contents-0-value');
    console.log('Content:', (cInput && cInput.value && cInput.value.includes('ZeroFox observed')) ? 'OK (synced)' : '⚠️ NOT SYNCED — see warning above');
    console.log('Code lang:', document.getElementById('contents-1-value-language')?.value || '⚠️ EMPTY');
    console.log('Code text:', (document.getElementById('contents-1-value-code')?.value || '').length + ' chars');
    document.querySelectorAll('#id_iocs-FORMS [data-inline-panel-child]').forEach((row, i) => {
        console.log(`IOC ${i}:`, row.querySelector('select[name$="-type"]')?.value, '=', row.querySelector('input[name$="-value"]')?.value);
    });
    console.log("✅ Done! Add the Image block, check VERIFY, then Save Draft.");
})();
