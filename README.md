# Rafsanul Haque Rusaf: portfolio

This is a personal portfolio site. It is a static site with no framework and no runtime dependencies. A ~500-line Node script turns one content file into plain HTML pages.

- **Pages:** the home page has hero, about, selected work, recommendations, education, leadership, skills, achievements, photos and contact. There is also `/work/` (filterable and searchable), one case study per project at `/work/<slug>/`, `/resume/` and a 404 page.
- **Stack:** HTML, CSS and vanilla JS, built by `build.mjs` on Node 18 or later. Google Fonts serves Schibsted Grotesk and JetBrains Mono.
- **Features:**
  - light and dark themes, with the choice remembered
  - scroll-spy navigation and a mobile menu
  - a draggable horizontal project rail
  - scroll-driven word highlighting
  - coursework tabs with arrow-key support
  - leadership accordions
  - project filter and search, synced to the URL, with an empty state
  - an image lightbox
  - copy-email with a toast
  - a contact form that opens the visitor's email app (it says so on screen)
  - resume preview and download
  - back-to-top
  - reduced-motion support
- **Checked on 11 Nov 2026:**
  - axe-core found no violations on any page type, in either theme.
  - Lighthouse scored Accessibility, Best Practices and SEO at 100 on every page tested. Performance scored 90–99, measured on the uncompressed local server.

## Run locally

```bash
npm run dev        # builds to dist/ and serves http://localhost:4321
npm run build      # build only
```

There is nothing to install.

## Folder structure

```
content/site.mjs     ← ALL text and data: edit this file
build.mjs            ← page templates and the build
src/styles.css       ← design tokens and all styling
src/main.js          ← interactions (progressive enhancement)
public/              ← copied as-is into dist/
  assets/img/        ← optimised WebP images
  assets/docs/       ← resume PDF
  assets/og.jpg      ← social share image (1200×630)
  favicon.svg, _headers
docs/RESEARCH.md     ← design analysis, content sources, open questions
serve.mjs            ← local preview server (not for production)
_legacy/             ← the previous version of the site, kept untouched
dist/                ← build output (generated; do not edit)
```

## Update your content

Everything lives in `content/site.mjs`. After any edit, run `npm run build`.

- **New project:** copy an object in `projects`.
  1. Give it a unique `slug`.
  2. Set `category` to `research`, `prototype`, `case` or `analytics`.
  3. Fill in `title`, `summary`, `context`, `problem`, `process`, `findings`, `gallery` and `links`.
  4. Set `featured: true` to show it in the home-page rail.

  The `/work/` page, the counts, the filters, the previous/next links and the "Seen in" links under Skills all update automatically.
- **New role:** add to `leadership`.
- **New certification or award:** add to `achievements`.
- **New skill:** add to the right `skills` group. Add a matching word to `tags` to link it to projects that list that tool.
- **Rules to keep:** only state outcomes that are documented. Label projections as projections. Don't add proficiency percentages.

The build stops with an error if a project points at a missing image or reuses a slug.

## Replace images and documents

1. Put images in `public/assets/img/` as WebP.
   - Keep photos 900–1400px wide, and diagrams 1200–1600px wide.
   - Then update `src`, `w` and `h` in `content/site.mjs`. `w` and `h` prevent layout shift.
   - For large photos you can add `small: ['/assets/img/name-720.webp', 720]` to get a phone-sized copy.
   - Any tool works for conversion, for example Squoosh (https://squoosh.app).
2. To replace the resume:
   1. Overwrite `public/assets/docs/rafsanul-haque-rusaf-resume.pdf`.
   2. Replace `public/assets/img/resume-page.webp` with an image of page 1. A screenshot or "export page as image" is fine.
   3. Update `resume.updated` in the content file.
3. Project documents link to Google Drive. Keep the files shared as "Anyone with the link".

## Deploy

Run `npm run build` first, then publish the `dist/` folder.

- **Netlify or Cloudflare Pages:** connect the repo. Set the build command to `npm run build` and the output directory to `dist`. Both hosts read the `_headers` file for caching.
- **Vercel:** use the same settings, with framework set to "Other".
- **GitHub Pages:** push `dist/` to a `gh-pages` branch, or use an Actions workflow.
  - If the site will live at `username.github.io/repo/` rather than at a domain root, add `base: '/repo/'` to `site` in `content/site.mjs`.

**Before going live**, set `site.url` in `content/site.mjs` to the real domain. That turns on the canonical URLs, absolute Open Graph URLs, `sitemap.xml` and the sitemap line in `robots.txt`. They are skipped while the placeholder URL is set.

## Still needed

- The final domain (`site.url`).
- Answers to the questions in `docs/RESEARCH.md` §3: the LinkedIn slug, the club role wording, the Ad Maker semi-final round, and personal contribution on team projects.
- Optionally, a GitHub or other profile if you want it linked. Add it to `site.socials`.
