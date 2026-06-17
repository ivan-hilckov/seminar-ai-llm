# Yoke Context: seminar-ai-llm

## Stack

- Languages: JavaScript, JSX (no TypeScript)
- Frameworks: React 18, React Router v6, react-markdown (remark-gfm), Vite 5
- Package manager: pnpm (via mise)
- Runtime: Node.js 25 (pinned in .mise.toml)

## Commands

- Dev: pnpm dev
- Build: pnpm build
- Test: NOT_FOUND
- Lint: NOT_FOUND
- Format: NOT_FOUND
- Typecheck: NOT_FOUND

> Also: `pnpm preview` (preview prod build), `mise install` (provision node+pnpm once).

## Architecture

- Pattern: static-site (single-page, client-only React slide deck; no backend, API, or state-management lib)
- Key dirs:
  - src/routes/ — React Router page components (Index, Opening, Section1, Section2, Slide, Notes, Print, NotFound)
  - src/slides/ — slide components grouped by section (opening, section-1, section-2); per-section index.js registry; registry.js unifies cross-section lookup
  - src/components/ — shared UI primitives (Stage, Meta, Foot, MarkdownView, SlideNav, SlideSidebar, ThumbnailContext)
  - src/hooks/ — useFit.js (adaptive 1920×1080 slide scaling)
  - src/notes/ — speaker-notes Markdown per slide, bundled at build via import.meta.glob('?raw')
  - src/styles/ — global.css (palette/typography), slide.css (stage + print), prose.css (markdown viewer)
  - public/ — prebuilt seminar-ai-llm.pdf, reference HTML templates A–E, stuff/ symlink
- Entry points:
  - index.html — Vite HTML entry
  - src/main.jsx — React entry (createRoot + StrictMode + BrowserRouter)
  - src/App.jsx — route table
- Layers:
  - Routing/Pages: src/routes/ + App.jsx
  - Content/Data: src/slides/ (registries), src/notes/ (Markdown)
  - Presentation/Shared: src/components/, src/hooks/, src/styles/

## Conventions

- Naming: camelCase for variables/functions; PascalCase for React components; kebab-case for CSS classes
- File naming: PascalCase.jsx for components/routes; camelCase.js for hooks; lowercase.js for registries/barrels; colocated CSS sibling (Slide10.css) or kebab shared CSS; notes as slide-XX.md (zero-padded)
- Import style: ES modules only, single quotes, relative paths with explicit file extensions, colocated side-effect CSS imports, registry barrel re-exports, no path aliases
- Code style: 2-space indent, semicolons, trailing commas, default exports for components, `export default function Name()`, Russian JSDoc on shared utils

## Domain Models

- SlideEntry — registry record per slide: id (zero-padded, sequential across whole seminar), type ('A'|'B'|'C'|'D'|'E'), title, subblock, component (null = draft → StubSlide), done (ready vs draft), hasNotes, keystone. Built by factory fns ready()/draft()/slide() (source: src/slides/*/index.js, src/slides/registry.js)
- Slide template types — A section-divider, B thesis, C visual 62/38, D comparison, E moment (source: src/slides/, public/templates/)

## API Endpoints

- ROUTE / → Index (source: src/App.jsx)
- ROUTE /opening → Opening
- ROUTE /section/1 → Section1
- ROUTE /section/2 → Section2
- ROUTE /slide/:id → Slide (renders entry.component or StubSlide)
- ROUTE /notes/:id → Notes (MarkdownView)
- ROUTE /print → Print
- ROUTE * → NotFound

## Key Abstractions

- Stage — wraps content in .stage > article.slide, applies useFit unless thumbnail (source: src/components/Stage.jsx)
- Meta — corner badge (slide number + template type) (source: src/components/Meta.jsx)
- Foot — footer colophon (source: src/components/Foot.jsx)
- MarkdownView — ReactMarkdown + remarkGfm in .prose (source: src/components/MarkdownView.jsx)
- useFit — scales 1920×1080 slide to viewport, accounts for 240px sidebar (source: src/hooks/useFit.js)
- StubSlide — dashed skeleton for draft slides (source: src/slides/section-1/StubSlide.jsx)
- findSlide / allSlides / sectionOf — cross-section registry lookup (source: src/slides/registry.js)

## Environment Variables

- None — no import.meta.env / process.env usage. Config: .mise.toml (node 25, pnpm), vite.config.js (react plugin, server port 5173, host 0.0.0.0)
