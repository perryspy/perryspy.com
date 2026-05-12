#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');
const data = require('./content');

// ── SVG icon snippets ──────────────────────────────────────────────────────
const icons = {
  mail:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
  phone: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  pin:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  li:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  dl:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
};

// ── Helpers ────────────────────────────────────────────────────────────────
const tags = (arr, extra = '') =>
  arr.map(t => `<span class="tag${extra}">${t}</span>`).join('');

const bullets = arr =>
  `<ul class="job-bullets">${arr.map(b => `<li>${b}</li>`).join('')}</ul>`;

const stackRow = arr =>
  arr?.length ? `<div class="job-stack">${tags(arr)}</div>` : '';

// ── Renderers ──────────────────────────────────────────────────────────────

function renderCssVars(theme) {
  return Object.entries(theme)
    .map(([k, v]) => `--${k}:${v};`)
    .join('\n    ');
}

function renderName(name) {
  const { first, last, lastNameBreak: b } = name;
  return `${first}<br><em>${last.slice(0, b)}</em>${last.slice(b)}`;
}

function renderStackTags(stack) {
  return stack.map(t => `<span class="tag${t.hi ? ' hi' : ''}">${t.label}</span>`).join('');
}

function renderContacts({ email, phone, location, linkedin }) {
  const li = linkedin && linkedin !== 'YOUR-LINKEDIN-HANDLE'
    ? `<a href="https://linkedin.com/in/${linkedin}" class="contact-item" target="_blank" rel="noopener">${icons.li}linkedin.com/in/${linkedin}</a>`
    : '';
  return [
    `<a href="mailto:${email}" class="contact-item">${icons.mail}${email}</a>`,
    `<span class="contact-item">${icons.phone}${phone}</span>`,
    `<span class="contact-item">${icons.pin}${location}</span>`,
    li,
  ].filter(Boolean).join('');
}

function renderExperience(jobs) {
  return jobs.map(job => {
    let body = '';

    if (job.roles) {
      body = job.roles.map(r => `
        <div class="job-subtitle">${r.label}</div>
        ${bullets(r.bullets)}
        ${stackRow(r.stack)}
      `).join('');
    } else {
      body = `${job.bullets ? bullets(job.bullets) : ''}${stackRow(job.stack)}`;
    }

    return `
      <article class="job">
        <div class="job-meta">
          <div class="job-date">${job.dates}</div>
          <div>
            <h3 class="job-title">${job.title}</h3>
            <div class="job-company">${job.company} · ${job.location}</div>
          </div>
        </div>
        <div class="job-body">${body}</div>
      </article>`;
  }).join('');
}

function renderEducation(entries) {
  return entries.map(ed => `
    <div class="edu">
      <div class="edu-year">${ed.dates}</div>
      <div>
        <div class="edu-degree">${ed.degree}</div>
        <div class="edu-school">${ed.school} · ${ed.location}</div>
        ${ed.honors ? `<span class="edu-honors">${ed.honors}</span>` : ''}
        ${ed.notes ? ed.notes.map(n => `<p class="cert">${n}</p>`).join('') : ''}
      </div>
    </div>`).join('');
}

function renderSkills(groups) {
  return groups.map(g => `
    <div>
      <div class="skill-group-name">${g.category}</div>
      <div class="skill-list">${tags(g.items)}</div>
    </div>`).join('');
}

// ── Assemble ───────────────────────────────────────────────────────────────

async function build() {
  const templatePath = path.join(__dirname, 'template.html');
  const outDir       = path.join(__dirname, '..', 'dist');
  const outPath      = path.join(outDir, 'index.html');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const fullName = `${data.name.first} ${data.name.last}`;
  const year     = new Date().getFullYear();

  const replacements = {
    '{{META_TITLE}}':   `${fullName} — ${data.title}`,
    '{{META_DESC}}':    `${fullName} — ${data.title}. ${data.bio.replace(/<[^>]+>/g, '')}`,
    '{{CSS_VARS}}':     renderCssVars(data.theme),
    '{{STATUS}}':       data.status,
    '{{NAME_DISPLAY}}': renderName(data.name),
    '{{TITLE}}':        data.title,
    '{{BIO}}':          data.bio,
    '{{STACK_TAGS}}':   renderStackTags(data.stack),
    '{{CONTACTS}}':     renderContacts(data),
    '{{EXPERIENCE}}':   renderExperience(data.experience),
    '{{EDUCATION}}':    renderEducation(data.education),
    '{{SKILLS}}':       renderSkills(data.skills),
    '{{CLEARANCE}}':    data.clearance,
    '{{RESUME_PDF}}':   data.resumePDF,
    '{{FOOTER}}':       `&copy; ${year} ${fullName} &nbsp;&middot;&nbsp; ${data.location} &nbsp;&middot;&nbsp; Open to opportunities`,
  };

  let html = fs.readFileSync(templatePath, 'utf8');
  for (const [token, value] of Object.entries(replacements)) {
    html = html.replaceAll(token, value);
  }

  const minified = await minify(html, {
    collapseWhitespace:    true,
    removeComments:        true,
    minifyCSS:             true,
    minifyJS:              false, // no inline JS in this project
    removeAttributeQuotes: true,
    removeOptionalTags:    false, // keep for compatibility
    sortAttributes:        true,
    sortClassName:         true,
  });

  fs.writeFileSync(outPath, minified, 'utf8');

  const raw = Buffer.byteLength(html,      'utf8');
  const min = Buffer.byteLength(minified,  'utf8');
  const pct = (((raw - min) / raw) * 100).toFixed(1);

  console.log(`✓  Built dist/index.html`);
  console.log(`   ${(raw / 1024).toFixed(1)} kB → ${(min / 1024).toFixed(1)} kB  (${pct}% smaller)`);
}

build().catch(err => { console.error(err); process.exit(1); });
