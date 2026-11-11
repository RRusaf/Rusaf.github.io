// Print resume-source/resume.html to the PDF the site links to, using local Microsoft Edge (headless).
// usage: node resume-source/export.mjs [out.pdf]
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const src = pathToFileURL(resolve('resume-source/resume.html')).href;
const out = resolve(process.argv[2] || 'public/assets/docs/rafsanul-haque-rusaf-resume.pdf');
execFileSync(EDGE, ['--headless', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${out}`, src], { stdio: 'inherit' });
console.log('wrote', out);
