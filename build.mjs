// Zero-dependency static site generator.
// Reads content/site.mjs, renders every page to dist/, copies public/ and src/ assets.
// Usage: node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import * as C from './content/site.mjs';

const { site, hero, about, education, leadership, achievements, testimonials, skills, categories, projects } = C;
const OUT = 'dist';
const BASE = (site.base || '/').replace(/\/?$/, '/'); // set site.base for sub-path hosting
const LIVE_URL = site.url && !/example\./.test(site.url) ? site.url.replace(/\/$/, '') : '';

// ── helpers ────────────────────────────────────────────────────────────────
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const u = (p) => (/^(https?:|mailto:|#)/.test(p) ? p : BASE + p.replace(/^\//, ''));
const ext = (href, label) => `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;
const words = (text) => esc(text).split(/\s+/).map((w) => {
  const em = /^\*|\*[.,!?]*$/.test(w);
  return `<span class="w${em ? ' em' : ''}">${w.replace(/\*/g, '')}</span>`;
}).join(' ');
// i.small = optional [src, width] of a smaller copy; emitted as srcset so phones download less.
const img = (i, { cls = '', lazy = true, sizes = '100vw', priority = false } = {}) =>
  `<img src="${u(i.src)}"${i.small ? ` srcset="${u(i.small[0])} ${i.small[1]}w, ${u(i.src)} ${i.w}w" sizes="${sizes}"` : ''} width="${i.w}" height="${i.h}" alt="${esc(i.alt)}"${cls ? ` class="${cls}"` : ''}${lazy ? ' loading="lazy"' : ''} decoding="async"${priority ? ' fetchpriority="high"' : ''}>`;
const pad = (n) => String(n).padStart(2, '0');
const short = (ctx = '') => ctx.split('·')[0].trim();
const projectUrl = (p) => `/work/${p.slug}/`;

const icon = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowL: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  ext: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg>',
  dl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12M6 10l6 6 6-6M5 20h14"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true" class="i-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="i-moon"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
};

// ── asset fingerprint (cache-busting) ──────────────────────────────────────
const hash = (f) => crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex').slice(0, 8);
const CSS = `/assets/styles.css?v=${hash('src/styles.css')}`;
const JS = `/assets/main.js?v=${hash('src/main.js')}`;
const RESUME = `${site.resume.file}?v=${hash('public' + site.resume.file)}`;
const RESUME_PREVIEW = { ...site.resume.preview, src: `${site.resume.preview.src}?v=${hash('public' + site.resume.preview.src)}` };

// ── layout ─────────────────────────────────────────────────────────────────
const NAV = [['about', 'About'], ['work', 'Work'], ['education', 'Education'], ['leadership', 'Leadership'], ['skills', 'Skills'], ['contact', 'Contact']];

function head({ title, description, path: p, image = '/assets/og.jpg', jsonld = '' }) {
  const canonical = LIVE_URL ? `<link rel="canonical" href="${LIVE_URL}${u(p)}">` : '';
  const abs = (x) => (LIVE_URL ? LIVE_URL + u(x) : u(x));
  return `<!doctype html>
<html lang="${site.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="${esc(site.name)}">
${canonical}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${abs(image)}">
${LIVE_URL ? `<meta property="og:url" content="${LIVE_URL}${u(p)}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ebebe8" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0d0d0e" media="(prefers-color-scheme: dark)">
<link rel="icon" href="${u('/favicon.svg')}" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..700&display=swap">
<link rel="stylesheet" href="${u(CSS)}">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
${jsonld}
</head>`;
}

function header({ home = false, crumb = '' } = {}) {
  const href = (id) => (home ? `#${id}` : u(`/#${id}`));
  return `<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="nav">
  <div class="nav-l">
    ${crumb || `<a class="brand" href="${home ? '#top' : u('/')}" aria-label="${esc(site.name)}, home">${esc(site.name)}</a>`}
    <nav aria-label="Primary" class="nav-links">
      ${NAV.map(([id, l]) => `<a href="${href(id)}" data-spy="${id}">${l}</a>`).join('')}
    </nav>
  </div>
  <div class="nav-r">
    <span class="clock" aria-label="Local time in Dhaka"><i class="dot" aria-hidden="true"></i><span>Dhaka</span> <time data-clock>--:--</time></span>
    <button class="icon-btn theme" type="button" data-theme-toggle aria-label="Toggle dark mode">${icon.sun}${icon.moon}</button>
    <a class="pill" href="${u('/resume/')}">Resume</a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" data-menu><span></span><span></span><span class="sr-only">Menu</span></button>
  </div>
</header>
<div class="menu" id="menu" hidden>
  <nav aria-label="Mobile">
    ${NAV.map(([id, l], i) => `<a href="${href(id)}"><small>${pad(i + 1)}</small>${l}</a>`).join('')}
    <a href="${u('/work/')}"><small>${pad(NAV.length + 1)}</small>All projects</a>
    <a href="${u('/resume/')}"><small>${pad(NAV.length + 2)}</small>Resume</a>
  </nav>
  <p class="menu-foot"><a href="mailto:${site.email}">${site.email}</a></p>
</div>`;
}


function footer() {
  const y = new Date().getFullYear();
  return `<footer class="footer">
  <div class="wrap footer-grid">
    <div>
      <p class="footer-name">${esc(site.name)}</p>
      <p class="muted">Business student. Analyst in training. Built from coursework, competitions and a lot of curiosity.</p>
    </div>
    <nav aria-label="Footer">
      <p class="label">Sections</p>
      ${NAV.map(([id, l]) => `<a href="${u(`/#${id}`)}">${l}</a>`).join('')}
    </nav>
    <div>
      <p class="label">Elsewhere</p>
      <a href="mailto:${site.email}">Email</a>
      ${site.socials.map((s) => ext(s.href, s.label)).join('')}
      <a href="${u('/resume/')}">Resume</a>
    </div>
  </div>
  <div class="wrap footer-base">
    <span>© ${y} ${esc(site.name)}</span>
    <span>${esc(site.location)}</span>
    <button class="to-top" type="button" data-top>Back to top ${icon.up}</button>
  </div>
</footer>
<button class="fab-top" type="button" data-top aria-label="Back to top">${icon.up}</button>
<div class="toast" role="status" aria-live="polite" data-toast></div>
<script src="${u(JS)}" defer></script>
</body>
</html>`;
}

// ── components ─────────────────────────────────────────────────────────────
function card(p, { lazy = true } = {}) {
  const cat = categories[p.category];
  const search = [p.title, p.summary, cat.label, p.context, ...p.tools].join(' ').toLowerCase();
  return `<a class="card c-${cat.color}" href="${u(projectUrl(p))}" data-cat="${p.category}" data-search="${esc(search)}">
  <div class="card-media">${p.coverCarousel
    ? `<div class="cover-fade">${p.gallery.slice(0, 2).map((g) => img(g, { lazy, sizes: '(max-width: 700px) 85vw, 560px' })).join('')}</div>`
    : img(p.cover, { lazy, sizes: '(max-width: 700px) 85vw, 560px' })}</div>
  <div class="card-body">
    <h3>${esc(p.title)}</h3>
    <p class="card-tags"><span>${cat.label}</span><span>${esc(short(p.context))}</span>${p.date ? `<span>${esc(p.date)}</span>` : ''}</p>
  </div>
  <span class="card-cta" aria-hidden="true">${icon.arrow}</span>
</a>`;
}

const sectionHead = (num, label, title, extra = '') => `<div class="sec-head">
  <p class="label"><span>${num}</span>${label}</p>
  <h2 class="h2 reveal">${title}</h2>${extra}
</div>`;

// ── pages ──────────────────────────────────────────────────────────────────
function home() {
  const featured = projects.filter((p) => p.featured);
  const competitions = new Set(projects.filter((p) => p.category === 'case').map((p) => p.context.split('·')[1]?.split(',')[0].trim())).size;
  const stats = [
    [String(projects.length), 'documented projects'],
    [String(competitions), 'case competitions'],
    [String(leadership.length), 'clubs, NGOs & fellowships'],
    ['BBA', 'North South University'],
  ];
  const person = {
    '@context': 'https://schema.org', '@type': 'Person', name: site.name, email: `mailto:${site.email}`,
    jobTitle: 'BBA student', alumniOf: { '@type': 'CollegeOrUniversity', name: 'North South University' },
    address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
    sameAs: site.socials.map((s) => s.href), ...(LIVE_URL ? { url: LIVE_URL } : {}),
  };

  return `${head({ title: site.title, description: site.description, path: '/', jsonld: `<script type="application/ld+json">${JSON.stringify(person)}</script>` })}
<body class="home">
${header({ home: true })}
<main id="main">

<section class="hero" id="top" aria-labelledby="hero-title">
  <div class="hero-photo">${img(hero.photo, { lazy: false, priority: true, sizes: '(max-width: 700px) 100vw, 60vw' })}</div>
  <div class="hero-copy">
    <p class="eyebrow">${esc(hero.eyebrow)}</p>
    <h1 class="hero-title" id="hero-title"><span class="sr-only">${esc(site.name)}: </span>${hero.headline.map((l) => `<span class="line"><span>${esc(l)}</span></span>`).join('')}</h1>
    <ul class="hero-stats">
      ${stats.map(([n, l]) => `<li><strong>${n}</strong><span>${l}</span></li>`).join('')}
    </ul>
  </div>
  <p class="hero-intro">${esc(hero.intro)}</p>
  <div class="hero-ctas">
    <a class="btn" href="#work">Explore my work ${icon.arrow}</a>
    <a class="btn ghost" href="${u('/resume/')}">View resume</a>
  </div>
  <a class="hero-peek" href="${u(projectUrl(featured[0]))}" data-peek aria-label="Featured project">
    ${featured.slice(0, 5).map((p, i) => `<span class="peek-item c-${categories[p.category].color}${i ? '' : ' on'}" data-href="${u(projectUrl(p))}" data-title="${esc(p.title)}">${img(p.cover, { sizes: '220px' })}<em>${esc(p.title)}</em></span>`).join('')}
    <span class="peek-dots" aria-hidden="true">${featured.slice(0, 5).map((_, i) => `<i${i ? '' : ' class="on"'}></i>`).join('')}</span>
  </a>
  <a class="scroll-cue" href="#about" aria-label="Scroll to About">${icon.down}</a>
</section>

<section class="about wrap" id="about" aria-labelledby="about-title">
  <p class="label"><span>01</span>About</p>
  <h2 class="statement" id="about-title" data-words>${words(about.statement)}</h2>
  <div class="about-grid">
    <figure class="about-portrait reveal">${img(about.portrait, { sizes: '(max-width: 900px) 90vw, 420px' })}</figure>
    <div class="about-copy">
      <blockquote class="objective reveal"><p class="label">Career objective</p><p>${esc(about.objective)}</p></blockquote>
      ${about.paragraphs.map((t) => `<p class="lede reveal">${esc(t)}</p>`).join('')}
      <dl class="facts reveal">
        <div><dt>Based in</dt><dd>${esc(site.location)}</dd></div>
        <div><dt>Studying</dt><dd>BBA, North South University</dd></div>
        <div><dt>Majoring in</dt><dd>MIS, Analytics &amp; Strategy</dd></div>
        <div><dt>Off the clock</dt><dd>${about.interests.join(', ')}</dd></div>
      </dl>
      <div class="row reveal">
        <a class="btn" href="${u('/resume/')}">Resume ${icon.arrow}</a>
        <a class="btn ghost" href="#contact">Get in touch</a>
      </div>
    </div>
  </div>
</section>

<section class="work night" id="work" aria-labelledby="work-title">
  <div class="wrap">
    ${sectionHead('02', 'Selected work', '<span id="work-title">Show, then tell.</span>', `<p class="sec-sub">Research, prototypes, competition strategy and dashboards. Each one opens into a full case study.</p>`)}
  </div>
  <div class="rail" data-rail>
    <div class="rail-track" tabindex="0" aria-label="Featured projects, scroll horizontally">
      ${featured.map((p) => card(p)).join('')}
      <a class="card card-all" href="${u('/work/')}"><span class="h3">All ${projects.length} projects</span><span class="muted">Filter by research, prototype, business case or analytics.</span><span class="card-cta" aria-hidden="true">${icon.arrow}</span></a>
    </div>
    <div class="wrap rail-ctrl">
      <div class="rail-bar" aria-hidden="true"><i data-rail-bar></i></div>
    </div>
  </div>
</section>

<section class="voices" id="voices" aria-labelledby="voices-title">
  <div class="wrap"><p class="label"><span>03</span>Recommendations</p><h2 class="h2" id="voices-title">What my instructors say</h2></div>
  ${testimonials.map((t) => `<article class="voice c-${t.color}">
    <div class="wrap voice-inner">
      <blockquote><p class="voice-quote" data-words>“${words(t.pull)}”</p></blockquote>
      <div class="voice-who">
        <span class="avatar" aria-hidden="true">${t.name.replace(/^(Dr\.|Md)\s+/, '').split(' ').map((x) => x[0]).slice(0, 2).join('')}</span>
        <div><p class="who-name">${esc(t.name)}</p><p class="who-cred">${esc(t.cred)} · ${esc(t.context)}</p></div>
      </div>
      <details class="voice-full"><summary>Read the full recommendation</summary><p>${esc(t.full)}</p></details>
    </div>
  </article>`).join('')}
</section>

<section class="education wrap" id="education" aria-labelledby="edu-title">
  ${sectionHead('04', 'Education', '<span id="edu-title">Where the foundation comes from.</span>')}
  <ol class="edu-list">
    ${education.map((e, i) => `<li class="edu reveal">
      <div class="edu-logo">${`<img src="${u(e.logo)}" alt="" width="64" height="64" loading="lazy">`}</div>
      <div class="edu-main">
        <h3 class="h3">${esc(e.school)}</h3>
        <p>${esc(e.credential)}</p>
        <p class="muted">${esc(e.detail)}</p>
      </div>
      <p class="edu-date mono">${esc(e.dates)}</p>
      ${e.coursework ? `<div class="course">
        <p class="label">Coursework: pick a subject</p>
        <div class="course-tabs" role="tablist" aria-label="Coursework subjects">
          ${e.coursework.map((c, j) => `<button type="button" role="tab" id="ct-${j}" aria-controls="cp-${j}" aria-selected="${j === 0}"${j ? ' tabindex="-1"' : ''}>${esc(c.subject)}</button>`).join('')}
        </div>
        ${e.coursework.map((c, j) => `<div class="course-panel" role="tabpanel" id="cp-${j}" aria-labelledby="ct-${j}"${j ? ' hidden' : ''}><p>${esc(c.topics)}</p></div>`).join('')}
      </div>` : ''}
    </li>`).join('')}
  </ol>
</section>

<section class="leadership wrap" id="leadership" aria-labelledby="lead-title">
  ${sectionHead('05', 'Leadership & involvement', '<span id="lead-title">Clubs, causes and responsibility.</span>', `<p class="sec-sub">Volunteer and extracurricular roles. None of these are paid employment.</p>`)}
  <div class="lead-list">
    ${leadership.map((l, i) => `<details class="lead reveal"${i === 0 ? ' open' : ''}>
      <summary>
        <span class="lead-n mono">${pad(i + 1)}</span>
        <span class="lead-org"><span class="h3">${esc(l.org)}</span><span class="lead-role">${esc(l.role)}</span></span>
        <span class="lead-meta mono">${esc(l.dates || l.kind)}</span>
        <span class="lead-x" aria-hidden="true"></span>
      </summary>
      <div class="lead-body">
        <img src="${u(l.logo)}" alt="${esc(l.org)} logo" width="88" height="88" loading="lazy">
        <div>
          ${l.sub ? `<p class="muted">${esc(l.sub)}</p>` : ''}
          <p class="mono small">${esc(l.kind)}${l.dates ? ` · ${esc(l.dates)}` : ''}</p>
          <ul>${l.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </div>
    </details>`).join('')}
  </div>
</section>

<section class="skills wrap" id="skills" aria-labelledby="skills-title">
  ${sectionHead('06', 'Skills', '<span id="skills-title">Tools I use, and where I used them.</span>', `<p class="sec-sub">Grouped by what they are for. No self-rated percentages, just where each skill shows up in the work.</p>`)}
  <div class="skill-grid">
    ${skills.map((s, i) => {
      const used = projects.filter((p) => p.tools.some((t) => s.tags.some((g) => t.toLowerCase().includes(g.toLowerCase()))));
      return `<article class="skill reveal">
        <p class="mono small">${pad(i + 1)}</p>
        <h3 class="h4">${esc(s.group)}</h3>
        <ul>${s.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        ${used.length ? `<p class="seen"><span class="mono small">Seen in</span> ${used.map((p) => `<a href="${u(projectUrl(p))}">${esc(p.title.split(':')[0])}</a>`).join('')}</p>` : ''}
      </article>`;
    }).join('')}
  </div>
</section>

<section class="achieve wrap" id="achievements" aria-labelledby="ach-title">
  ${sectionHead('07', 'Achievements & certifications', '<span id="ach-title">Recognition so far.</span>')}
  <ul class="ach-list">
    ${achievements.map((a) => `<li class="reveal"><span class="mono small">${esc(a.type)}</span><strong>${esc(a.title)}</strong><span class="muted">${esc(a.org)}</span></li>`).join('')}
  </ul>
</section>

<section class="life" aria-label="Photography and campus life">
  <div class="wrap life-head"><p class="label"><span>08</span>Off the clock</p><p class="muted">Photography, travel and campus life.</p></div>
  <div class="marquee" data-marquee tabindex="0" role="region" aria-label="Photo strip">
    <div class="marquee-track">
      ${[...about.gallery, ...about.gallery].map((g, i) => `<figure${i >= about.gallery.length ? ' aria-hidden="true"' : ''}>${img(i >= about.gallery.length ? { ...g, alt: '' } : g, { sizes: '320px' })}</figure>`).join('')}
    </div>
  </div>
</section>

<section class="contact night" id="contact" aria-labelledby="contact-title">
  <div class="wrap contact-grid">
    <div>
      <p class="label"><span>09</span>Contact</p>
      <h2 class="display" id="contact-title">Let’s talk.</h2>
      <p class="lede">Internships, research collaborations, case competition teams, or a question about one of the projects. I read everything.</p>
      <div class="contact-mail">
        <a class="mail-big" href="mailto:${site.email}">${site.email}</a>
        <button class="icon-btn" type="button" data-copy="${site.email}" aria-label="Copy email address">${icon.copy}</button>
      </div>
      <p class="row">
        ${site.socials.map((s) => `<a class="btn ghost light" href="${esc(s.href)}" target="_blank" rel="noopener noreferrer">${s.label} ${icon.ext}<span class="sr-only"> (opens in a new tab)</span></a>`).join('')}
        <a class="btn ghost light" href="${u(RESUME)}" download>Download resume ${icon.dl}</a>
      </p>
    </div>
    <form class="form" data-mailto="${site.email}" novalidate>
      <p class="form-note">This form opens your email app with the message filled in. Nothing is stored or sent by this website.</p>
      <label>Your name<input name="name" autocomplete="name" required></label>
      <label>Subject<input name="subject" placeholder="Internship opportunity, collaboration…" required></label>
      <label>Message<textarea name="message" rows="5" required></textarea></label>
      <button class="btn" type="submit">Compose email ${icon.mail}</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>
</main>
<aside aria-label="Quick contact"><a class="ask" href="mailto:${site.email}" data-ask>${icon.mail}<span><strong>Have a question?</strong>${site.email}</span></a></aside>
${footer()}`;
}

function workIndex() {
  const counts = Object.fromEntries(Object.keys(categories).map((k) => [k, projects.filter((p) => p.category === k).length]));
  return `${head({ title: `Work | ${site.name}`, description: `All ${projects.length} projects by ${site.name}: research, prototypes, business case competitions and analytics dashboards.`, path: '/work/' })}
<body>
${header()}
<main id="main" class="page">
  <section class="wrap page-head">
    <p class="label"><span>${projects.length}</span>Projects</p>
    <h1 class="display">All work</h1>
    <p class="lede">Academic research, product prototypes, team entries in case competitions, and dashboards. Labels show where each one came from.</p>
  </section>
  <section class="wrap" aria-labelledby="list-title">
    <h2 class="sr-only" id="list-title">Project list</h2>
    <div class="filters">
      <div class="chips" role="group" aria-label="Filter by category">
        <button type="button" class="chip" aria-pressed="true" data-filter="all">All <span>${projects.length}</span></button>
        ${Object.entries(categories).map(([k, c]) => `<button type="button" class="chip" aria-pressed="false" data-filter="${k}"><i class="sw c-${c.color}" aria-hidden="true"></i>${c.label} <span>${counts[k]}</span></button>`).join('')}
      </div>
      <label class="search">${icon.search}<span class="sr-only">Search projects</span><input type="search" placeholder="Search: Power BI, banking, SWOT…" data-search></label>
    </div>
    <p class="result-count mono small" aria-live="polite" data-count></p>
    <div class="grid" data-grid>${projects.map((p) => card(p)).join('')}</div>
    <div class="empty" data-empty hidden>
      <p class="h3">Nothing matches that yet.</p>
      <p class="muted">Try another word, or clear the filters.</p>
      <button class="btn" type="button" data-clear>Clear filters</button>
    </div>
  </section>
</main>
${footer()}`;
}

function projectPage(p, i) {
  const cat = categories[p.category];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const crumb = `<a class="crumb" href="${u('/work/')}">${icon.arrowL}<span>Work</span></a><span class="crumb-cur">${esc(p.title.split(':')[0])}</span>`;
  let n = 0;
  const block = (title, body) => `<section class="cs-block reveal"><h2 class="cs-h"><span class="mono">${pad(++n)}</span>${title}</h2><div class="cs-body">${body}</div></section>`;
  return `${head({ title: `${p.title} | ${site.name}`, description: p.summary, path: projectUrl(p), image: p.cover.src })}
<body class="case">
${header({ crumb })}
<main id="main">
  <section class="cs-hero">
    <div class="cs-stage c-${cat.color}">${img(p.cover, { lazy: false, priority: true, sizes: '(max-width: 900px) 90vw, 900px' })}</div>
    <div class="wrap cs-intro">
      <p class="label"><i class="sw c-${cat.color}" aria-hidden="true"></i>${cat.label}</p>
      <h1 class="display cs-title">${esc(p.title)}</h1>
      <p class="lede">${esc(p.summary)}</p>
      <dl class="cs-meta">
        <div><dt>Context</dt><dd>${esc(p.context)}</dd></div>
        ${p.date ? `<div><dt>Date</dt><dd>${esc(p.date)}</dd></div>` : ''}
      </dl>
      <ul class="tags">${p.tools.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </div>
  </section>
  <div class="wrap cs">
    ${block('The problem', `<p class="big">${esc(p.problem)}</p>`)}
    ${p.process.length ? block('Approach', `<ol class="steps">${p.process.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`) : ''}
    ${block(esc(p.findingsLabel), `<div class="findings">${p.findings.map(([h, t]) => `<article><h3 class="h4">${esc(h)}</h3><p>${esc(t)}</p></article>`).join('')}</div>`)}
    ${p.gallery.length ? block('Artefacts', `<div class="gallery">${p.gallery.map((g) => `<figure><button type="button" class="zoom" data-zoom="${u(g.src)}" data-cap="${esc(g.caption)}" aria-label="Enlarge: ${esc(g.caption)}">${img(g, { sizes: '(max-width: 900px) 90vw, 560px' })}</button><figcaption>${esc(g.caption)}</figcaption></figure>`).join('')}</div>`) : ''}
    ${p.links.length ? block('Documents', `<ul class="doc-links">${p.links.map((l) => `<li>${ext(l.href, `<span>${esc(l.label)}</span>${icon.ext}`)}</li>`).join('')}</ul><p class="muted small">Opens in Google Drive.</p>`) : ''}
  </div>
  <nav class="wrap cs-next" aria-label="More projects">
    <a href="${u(projectUrl(prev))}" class="cs-prev">${icon.arrowL}<span><small>Previous</small>${esc(prev.title.split(':')[0])}</span></a>
    <a href="${u('/work/')}" class="cs-all">All projects</a>
    <a href="${u(projectUrl(next))}">${'<span><small>Next</small>' + esc(next.title.split(':')[0]) + '</span>'}${icon.arrow}</a>
  </nav>
</main>
<dialog class="lightbox" data-lightbox aria-label="Image viewer"><button type="button" class="icon-btn lb-close" data-lb-close aria-label="Close">${icon.close}</button><img alt=""><p></p></dialog>
${footer()}`;
}

function resumePage() {
  return `${head({ title: `Resume | ${site.name}`, description: `Resume of ${site.name}: education, skills, projects and extracurricular roles.`, path: '/resume/' })}
<body>
${header()}
<main id="main" class="page">
  <section class="wrap page-head">
    <p class="label"><span>CV</span>Resume</p>
    <h1 class="display">Resume</h1>
    <p class="lede">Two pages: education, technical skills, projects, extracurricular roles and achievements.</p>
    <p class="row">
      <a class="btn" href="${u(RESUME)}" download>Download PDF ${icon.dl}</a>
      <a class="btn ghost" href="${u(RESUME)}" target="_blank" rel="noopener">Open in new tab ${icon.ext}<span class="sr-only"> (opens in a new tab)</span></a>
    </p>
  </section>
  <section class="wrap">
    <a class="pdf" href="${u(RESUME)}" target="_blank" rel="noopener" aria-label="Open the full resume PDF in a new tab">
      ${img(RESUME_PREVIEW, { lazy: false, sizes: '(max-width: 900px) 92vw, 860px' })}
    </a>
    <p class="muted small pdf-note">Preview image. Updated ${esc(site.resume.updated)}. Click to open the PDF with selectable text and working links.</p>
  </section>
</main>
${footer()}`;
}

function notFound() {
  return `${head({ title: `Page not found | ${site.name}`, description: 'This page does not exist.', path: '/404.html' })}
<body>
${header()}
<main id="main" class="page">
  <section class="wrap page-head nf">
    <p class="label"><span>404</span>Not found</p>
    <h1 class="display">This page isn’t in the dataset.</h1>
    <p class="lede">The link may be old or mistyped.</p>
    <p class="row"><a class="btn" href="${u('/')}">Go home ${icon.arrow}</a><a class="btn ghost" href="${u('/work/')}">See all work</a></p>
  </section>
</main>
${footer()}`;
}

// ── write ──────────────────────────────────────────────────────────────────
const write = (p, html) => { const f = path.join(OUT, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync('public', OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
fs.copyFileSync('src/styles.css', path.join(OUT, 'assets/styles.css'));
fs.copyFileSync('src/main.js', path.join(OUT, 'assets/main.js'));

// Content sanity checks: fail the build on broken references instead of shipping them.
const slugs = new Set();
for (const p of projects) {
  if (slugs.has(p.slug)) throw new Error(`Duplicate project slug: ${p.slug}`);
  slugs.add(p.slug);
  if (!categories[p.category]) throw new Error(`Unknown category "${p.category}" in ${p.slug}`);
  for (const i of [p.cover, ...p.gallery]) if (!fs.existsSync(path.join('public', i.src))) throw new Error(`Missing image ${i.src} in ${p.slug}`);
}

write('index.html', home());
write('work/index.html', workIndex());
projects.forEach((p, i) => write(`work/${p.slug}/index.html`, projectPage(p, i)));
write('resume/index.html', resumePage());
write('404.html', notFound());

const pages = ['/', '/work/', '/resume/', ...projects.map(projectUrl)];
write('robots.txt', `User-agent: *\nAllow: /\n${LIVE_URL ? `Sitemap: ${LIVE_URL}${u('/sitemap.xml')}\n` : ''}`);
if (LIVE_URL) write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${LIVE_URL}${u(p)}</loc></url>`).join('\n')}\n</urlset>\n`);

console.log(`Built ${pages.length + 1} pages to ${OUT}/${LIVE_URL ? '' : '  (sitemap/canonical skipped: set site.url in content/site.mjs)'}`);
