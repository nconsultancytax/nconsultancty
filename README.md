# N Consultancy — Website

A static consultancy website built with Astro, featuring multi-language support, service pages, and contact forms.

## Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| [Astro](https://astro.build) | ^5.17.1 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | ^3.4.19 | Utility-first styling |
| [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) | ^6.0.2 | Astro–Tailwind integration |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | ^3.7.0 | Auto-generated XML sitemap |
| [Lucide Astro](https://github.com/lucide-icons/lucide) | ^0.556.0 | Icon library |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | ^10.4.27 | CSS vendor prefix handling |
| [TypeScript](https://www.typescriptlang.org) | ^5.0.0 | Type safety |

**Output mode:** `static` — fully pre-rendered HTML, no server runtime required.

**Site URL:** `https://www.naccountstax.com`

---

## Project Structure

```text
/
├── public/                        # Static assets (images, fonts, favicons)
├── src/
│   ├── components/
│   │   ├── cards/                 # Card components (ServiceCard, ReviewCard, etc.)
│   │   ├── global/                # Site-wide components (WhatsApp, Call, Cookie banner)
│   │   ├── layout/                # Header, Footer, Nav, Breadcrumb
│   │   ├── sections/              # Page sections (Hero, ServicesGrid, FAQ, etc.)
│   │   └── ui/                    # Reusable UI elements (Button, Form, Accordion)
│   ├── data/                      # Static data files (services.ts, faqs.ts, reviews.json)
│   ├── i18n/                      # Translations (en.json, ta.json) + utils
│   ├── layouts/                   # Base, Page, and Service layouts
│   ├── pages/                     # File-based routing
│   │   ├── index.astro            # Home page
│   │   ├── about-us.astro
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   └── services/              # Individual service pages
│   └── styles/                    # Global CSS and animations
├── astro.config.mjs               # Astro configuration
├── tailwind.config.*              # Tailwind configuration
└── package.json
```

---

## Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Running in Production

```sh
# 1. Build the site
npm run build

# 2. (Optional) Preview the build locally before deploying
npm run preview

# 3. Deploy the ./dist/ folder to any static host
#    e.g. Netlify, Vercel, Cloudflare Pages, Nginx, etc.
```

Since the output is fully static, point your web server or CDN at the `./dist/` directory.
