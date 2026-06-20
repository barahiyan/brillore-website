# Brillore Holdings — Corporate Website

A premium, modern, responsive 3-page corporate website for **Brillore Holdings**,
a technical service company specializing in **metrology, inspection, and industrial
support services** for oil & gas, fire safety, and marine operations.

> **Precision. Compliance. Reliability.**

---

## ✨ Overview

- **3 pages:** Home (`/`), Services (`/services`), Contact (`/contact`)
- **Design:** dark industrial identity with gold / bronze metallic accents, glass
  cards, soft radial glows, and a lightweight SVG metrology gauge in the hero.
- **Motion:** smooth, professional Framer Motion reveals that respect
  `prefers-reduced-motion`.
- **Static-build friendly:** ships as a plain `dist/` folder ready to upload to
  ICDSoft `public_html`. Includes an `.htaccess` SPA fallback so deep links and
  refreshes on `/services` and `/contact` work correctly.

## 🧰 Tech Stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React 18 + Vite 5                       |
| Language       | TypeScript                              |
| Styling        | Tailwind CSS 3 (custom design tokens)   |
| Routing        | React Router 6                          |
| Animation      | Framer Motion                           |
| Icons          | lucide-react                            |
| Hero visual    | SVG + CSS (no WebGL — lightweight)      |

No heavy 3D runtime is bundled: the hero "gauge" is pure SVG/CSS so the site stays
fast on mobile and never blocks loading. A WebGL/React-Three-Fiber object can be
dropped into `src/components/three/ThreeHeroObject.tsx` later if desired.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build → outputs to dist/
npm run build

# 4. Preview the production build locally
npm run preview
```

## 📁 Folder Structure

```
brillore-website/
├─ public/
│  ├─ .htaccess                 # SPA fallback + caching for ICDSoft (Apache)
│  ├─ favicon.png               # generated from the official logo
│  ├─ robots.txt
│  └─ assets/
│     ├─ logo/brilore-logo.png  # OFFICIAL logo — do not modify
│     └─ images/placeholders/   # drop final Higgsfield assets here
├─ src/
│  ├─ components/
│  │  ├─ layout/    Header, Footer, Layout
│  │  ├─ common/    SectionHeading, PageHero, CTASection, cards, Logo, Icon…
│  │  ├─ home/      Hero, LogoIntro, AboutPreview, CoreBusinessPreview…
│  │  ├─ services/  ServicesOverview, ServiceCategory, ServicesPipeline…
│  │  ├─ contact/   ContactInfo, ContactForm, QuickInquiryCards
│  │  └─ three/     ThreeHeroObject (SVG/CSS metrology gauge)
│  ├─ data/         content.ts, services.ts  (single source of copy)
│  ├─ pages/        Home.tsx, Services.tsx, Contact.tsx
│  ├─ styles/       globals.css  (design system)
│  ├─ App.tsx       routes + per-page titles
│  └─ main.tsx
├─ docs/
│  ├─ deployment-icdsoft.md
│  ├─ higgsfield-prompts.md
│  └─ content-source-notes.md
├─ index.html       SEO meta + Open Graph + fonts
├─ tailwind.config.ts
├─ vite.config.ts
└─ package.json
```

## 🖼️ Assets

- **Logo:** `public/assets/logo/brilore-logo.png` is the **official logo** and is
  used exactly as provided. Only subtle CSS presentation effects (glow, light
  sweep, shadow) are layered around it — the image itself is never altered.
- **Photography (generated):** six cinematic visuals were generated with
  Higgsfield (GPT Image 2) and live in **`public/assets/images/`** as optimized
  `.webp`:
  `hero-terminal` (home hero backdrop + video poster), `oil-gas`,
  `pipeline-integrity`, `fire-safety`, `marine` (Services page blocks), and
  `contact-abstract` (Contact hero backdrop). Each is ~40–250 KB and lazy-loaded
  where below the fold.
  **To replace any asset:** drop a new file with the same name into
  `public/assets/images/` (keep `.webp`, similar aspect ratio) and rebuild — no
  code change needed. Slot mapping + the exact prompts used are in
  [`docs/higgsfield-prompts.md`](docs/higgsfield-prompts.md).
- **Hero video (active):** a compressed cinematic loop
  (`public/assets/videos/hero-loop.webm` ~498 KB + `.mp4` ~598 KB) plays as the
  desktop hero backdrop; **mobile uses the static webp** for performance. Toggle
  or replace via `HERO_VIDEO_BASENAME` in
  [`src/components/home/Hero.tsx`](src/components/home/Hero.tsx) — see
  [`public/assets/videos/README.md`](public/assets/videos/README.md).

## 📨 Contact Form

This is a static site, so the form does **not** run a server. On submit it
validates input and opens the visitor's email client with a pre-filled message
(`mailto`). It never claims to send anything on its own. To enable true
server-side submission later, see the integration options (PHP / Formspree /
EmailJS) in [`docs/deployment-icdsoft.md`](docs/deployment-icdsoft.md).

## 🌐 Deployment (ICDSoft)

1. `npm install`
2. `npm run build`
3. Upload **the contents of `dist/`** into ICDSoft `public_html`
4. Confirm `.htaccess` is present (enables React Router refresh support)
5. Test `/`, `/services`, `/contact` — including a hard refresh on each

Full step-by-step guide: [`docs/deployment-icdsoft.md`](docs/deployment-icdsoft.md).

## 📦 GitHub

```bash
git init
git add .
git commit -m "Initial commit: Brillore Holdings website"
# git remote add origin <your-repo-url>
# git push -u origin main
```

A `.gitignore` is included (`node_modules`, `dist`, env files, editor folders).

## ♿ Accessibility & SEO

- Semantic landmarks, skip-to-content link, visible keyboard focus rings
- Per-page `<title>` + meta description, Open Graph tags, alt text, favicon
- `prefers-reduced-motion` respected across all animations

---

© Brillore Holdings. Built as a static, GitHub-ready, ICDSoft-deployable site.
