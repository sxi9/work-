#!/usr/bin/env node
// Build a paste-ready batch runner from per-victim console scripts.
//   node make-batch.js batch/2026-10-20.js scripts/storm_*.js scripts/pear_*.js
// Each victim script's variables block is evaluated (up to the "// ----" marker) and embedded
// as JSON; fillNeedle() is taken from wagtail-autofill.js; the panel from wagtail-batch.js.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const [outFile, ...inputs] = process.argv.slice(2);
if (!outFile || inputs.length === 0) {
    console.error('Usage: node make-batch.js <out.js> <scripts/victim.js> [...]');
    process.exit(1);
}

const MARK = '// --------------------------------------------';
const FIELDS = ['victimName', 'groupName', 'sourceActorName', 'titleSeparator', 'threatType', 'ddwTag',
    'countryTag', 'regionValue', 'industryValues', 'onionUrl', 'contentText', 'leakText', 'iocs'];

function readCfg(file) {
    const src = fs.readFileSync(file, 'utf8');
    const cut = src.indexOf(MARK);
    if (cut < 0) throw new Error(`${file}: variables-block marker not found`);
    const head = src.slice(0, cut).replace(/^const delay = .*$/m, '');
    const cfg = vm.runInNewContext(`${head}\n;({ ${FIELDS.join(', ')} })`, {}, { filename: file });
    for (const f of FIELDS) {
        if (cfg[f] === undefined) throw new Error(`${file}: ${f} is not set`);
    }
    if (cfg.contentText === 'FULL CONTENT PARAGRAPH HERE' || cfg.leakText === 'LEAK TEXT HERE') {
        throw new Error(`${file}: placeholder variables not filled in`);
    }
    return cfg;
}

const root = __dirname;
const base = fs.readFileSync(path.join(root, 'wagtail-autofill.js'), 'utf8');
const fStart = base.indexOf('async function fillNeedle(');
const fEnd = base.indexOf('// ---- single-victim run');
if (fStart < 0 || fEnd < 0) throw new Error('wagtail-autofill.js: fillNeedle() or the single-victim marker not found');
const fillSrc = base.slice(fStart, fEnd).trimEnd();

const tpl = fs.readFileSync(path.join(root, 'wagtail-batch.js'), 'utf8')
    .split('\n').filter(l => !l.startsWith('// [TEMPLATE]')).join('\n');
if (!tpl.includes('/*__QUEUE__*/[]') || !tpl.includes('/*__FILL__*/')) throw new Error('wagtail-batch.js: placeholders missing');

const cfgs = inputs.map(readCfg);
const header = `// Needles batch — built ${new Date().toISOString().slice(0, 10)} from ${inputs.length} script(s):\n`
    + inputs.map(f => `//   ${f}`).join('\n') + '\n';
const out = header + tpl.replace('/*__QUEUE__*/[]', JSON.stringify(cfgs, null, 2)).replace('/*__FILL__*/', fillSrc);
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, out);
console.log(`wrote ${outFile} (${cfgs.length} victims): ${cfgs.map(c => `${c.groupName}: ${c.victimName}`).join('; ')}`);
