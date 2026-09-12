# sujanmongar.com

The portfolio of **Sujan Mongar** — a Product Designer (UX/UI) based in Thimphu, Bhutan.

Live at [sujanmongar.com](https://sujanmongar.com) — case studies, process, and a direct line to reach out.

## Built for speed

No CMS, no database, no bloated builder — just static HTML shipped from the edge.

- **[Astro](https://astro.build)** — static output, near-zero client-side JavaScript
- **Tailwind CSS v4** — CSS-first theming, light/dark mode via CSS variables
- **Content Collections** — every case study is a type-checked MDX file with its own images, colocated in `src/content/work/`
- **Fraunces + Outfit** — self-hosted variable fonts, no external font requests
- **Cloudflare Workers (Static Assets)** — deployed straight from `main` on every push

## Adding a new case study

Each project lives in its own folder — copy an existing one as a starting point:

```
src/content/work/<project-slug>/
  index.mdx       ← frontmatter (title, tags, role, timeline…) + the case study body
  cover.webp       ← cover image, referenced from frontmatter
  *.webp           ← any other images used inside the case study
```

The case study body is MDX, so each project can use a different layout — mix and match the
building blocks in `src/components/case-study/` (`FullImage`, `ImageGrid`, `StatRow`, `Quote`),
or write something fully custom. No config changes needed; a new folder is a new page.

## Local development

```bash
npm install
npm run dev       # localhost:4321
npm run build     # outputs to ./dist
```

## Structure

```
src/
├── components/       shared UI (header, footer, work list, case-study blocks)
├── content/
│   ├── work/          case studies (MDX + images)
│   ├── experience/     work history (About page timeline)
│   └── testimonials/   client quotes
├── layouts/           BaseLayout (SEO, theme, header/footer shell)
├── pages/             routes — index, /work, /work/[slug], /about
└── styles/            design tokens + global styles
```
