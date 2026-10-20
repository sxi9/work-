// ZeroFox Wagtail Needles auto-fill — paste the WHOLE file into the browser
// console (F12) on the Wagtail add/edit page. Fill the variables block per victim.
// Conventions + pitfalls documented in CLAUDE.md. Do not regress:
//  - Region/Industry/Threat StreamFields insert directly on + (no chooser menu).
//  - Content is Draftail: write via synthetic paste, never the hidden input.
//  - IOCs are an InlinePanel: add row, fill the LAST [data-inline-panel-child].
//  - leakText stays a String.raw template: leak write-ups contain backslash paths.

const delay = ms => new Promise(res => setTimeout(res, ms));

// --- EDIT THESE VARIABLES FOR EACH VICTIM ---
const victimName = "VICTIM NAME (as shown on the victim's website/LinkedIn, corporate suffix stripped)";
const groupName = "GROUP NAME"; // display name used in title/content: "Wallstreet", "The Gentlemen", "n0n", "INC", "Everest"
const sourceActorName = groupName; // Source Name(s) + Actor(s) tag. Differs for INC: "INC Ransom"
const titleSeparator = " Ransomware: "; // Everest (data breach, no "Ransomware" in title): ": "
const threatType = "ransomware"; // Everest = Data Breach: read the option value in F12 (likely "data_breach") before running
const ddwTag = "DDW Ransomware"; // Everest: "DDW Communications"
const countryTag = "COUNTRY"; // e.g. "United States"
const regionValue = "us_canada"; // us_canada, eu_russia, apac, anzac, mid-east_africa, south_america, global
const industryValues = ["manufacturing"]; // one or more Wagtail industry select values; [] when the target is unidentifiable
const onionUrl = "VICTIM-SPECIFIC LISTING URL (see CLAUDE.md registry for each group's URL pattern)";

// THE CONTENT PARAGRAPH — write out in full as one literal string.
// Pattern: On [date], ZeroFox observed an update on [the] [Group] ransomware leak
// site targeting [Victim], a [country]-based [short description]. ZeroFox has
// detected close to 10,000 ransomware and digital extortion victims in the past
// year, of which [regional or sector stat clause — see CLAUDE.md table].
// Everest: "an update on the Everest leak site targeting ..." (no "ransomware").
const contentText = "FULL CONTENT PARAGRAPH HERE";

// Raw leak text in EXACT screenshot order: name line, paragraph, timer line last.
// MUST stay String.raw — leak write-ups contain Windows paths like \02.02.NC_Chiuse
// and a plain template literal throws "Octal escape sequences are not allowed",
// killing the whole script. String.raw still parses two sequences, so in the text
// replace a literal backtick with ${'`'} and a literal ${ with ${'${'}.
const leakText = String.raw`LEAK TEXT HERE`;

const iocs = [
    { type: "domain", value: "example.com" },
    // { type: "profile", value: "https://www.zoominfo.com/c/..." },
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
    if (sel.value !== value) {
        const opts = Array.from(sel.options).map(o => `${o.value}="${o.text}"`).join(', ');
        console.warn(`⚠️ ${label}: "${value}" is not an option value. Options: ${opts}`);
        return;
    }
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
    if (!titleField.value) setAndFire(titleField, `${groupName}${titleSeparator}${victimName}`, 'input');
    setAndFire(document.getElementById('id_tlp'), "1", 'change');          // GREEN
    setAndFire(document.getElementById('id_reliability'), "3", 'change');  // C - Fairly Reliable
    setAndFire(document.getElementById('id_confidence'), "3", 'change');   // 3 - Possibly true

    // 3. Tags
    jQuery('#id_target_tags').tagit('createTag', victimName);
    jQuery('#id_source_name_tags').tagit('createTag', sourceActorName);
    jQuery('#id_actor_tags').tagit('createTag', sourceActorName);
    jQuery('#id_source_url_tags').tagit('createTag', onionUrl);
    jQuery('#id_language_tags').tagit('createTag', 'English');
    [ddwTag, "DDW Victims", "PII Packages", "PII Sites", countryTag]
        .forEach(tag => jQuery('#id_tags').tagit('createTag', tag));

    // 4. Region, Industry, Threat
    await ensureSingleTypeBlock('region_tags-root', 'Region', 'region_tags-0-value', regionValue);
    for (let i = 0; i < industryValues.length; i++) {
        await ensureSingleTypeBlock('industry_tags-root', `Industry ${i + 1}`, `industry_tags-${i}-value`, industryValues[i]);
    }
    await ensureSingleTypeBlock('threat_types-root', 'Threat', 'threat_types-0-value', threatType);

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
    industryValues.forEach((v, i) => console.log(`Industry ${i + 1}:`, document.getElementById(`industry_tags-${i}-value`)?.value || '⚠️ EMPTY'));
    console.log('Threat:', document.getElementById('threat_types-0-value')?.value || '⚠️ EMPTY');
    const cInput = document.getElementById('contents-0-value');
    console.log('Content:', (cInput && cInput.value && cInput.value.includes('ZeroFox observed')) ? 'OK (synced)' : '⚠️ NOT SYNCED — see warning above');
    console.log('Code lang:', document.getElementById('contents-1-value-language')?.value || '⚠️ EMPTY');
    console.log('Code text:', (document.getElementById('contents-1-value-code')?.value || '').length + ' chars');
    document.querySelectorAll('#id_iocs-FORMS [data-inline-panel-child]').forEach((row, i) => {
        console.log(`IOC ${i}:`, row.querySelector('select[name$="-type"]')?.value, '=', row.querySelector('input[name$="-value"]')?.value);
    });
    console.log(`✅ Done! Add the Image block (title ${groupName}_${victimName.replace(/\s+/g, '')}_1), add a Relation if this victim already has a Needle from another group, check VERIFY, then Save Draft.`);
})();
