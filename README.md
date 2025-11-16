# Frontend Developer Portfolio

Hey there! 👋 This repo hosts my personal portfolio — a calm, glassmorphic space where I document projects, learning notes, milestones, and the journey of growing into a frontend developer.

## What You'll Find

- Responsive React Router 7 app powered by Vite + TypeScript.
- Real projects and blog posts pulled from my Strapi CMS through typed loaders.
- Friendly storytelling across Home, Projects, Blog, About, and Contact routes.
- A cohesive Tailwind CSS v4 design system with reusable button/utilities and glass UI.

## Tech & Tools

- **React 19 + React Router 7** for data-driven routing, loaders, and nested layouts.
- **TypeScript** types in `app/types.ts` so API responses stay predictable.
- **Tailwind CSS v4** with a custom theme (see `app/app.css`) for tokens, glass colors, and helper utilities.
- **Vite** for lightning-fast dev/build plus `@react-router/dev` for DX.
- **Framer Motion** animates project cards and filter changes.
- **React Markdown** renders long-form blog articles.
- **React Icons** supplies consistent iconography.
- **Formspree** handles the serverless contact form.

## Page Highlights

### Home

- Hero card with a playful flip-photo animation, CTA buttons, and focus statement.
- Featured projects pulled from Strapi (`featured=true`) plus a tech stack grid and About preview.

### Projects

- Fetches every project from Strapi, sorts newest-first, and lets you filter by category.
- Pagination + Framer Motion transitions keep the list quick and smooth.
- `ProjectCard` chips showcase tech used, with external links to live demos and repos.

### Blog

- Searchable list with pagination to surface learning notes and reflections.
- Detail pages render Markdown (body) and optional hero image, with glass-styled wrappers.

### About

- Long-form storytelling broken into sections, timeline facts, guiding principles, certification list, and mini gallery.
- Designed as a calm narrative to share the non-linear path from hospitality to code.

### Contact

- Sticky navigation routes to a Formspree-powered contact form that resets on submit.
- Provides location, email, and “think · build · improve · repeat” mantra with glass info card.

## Design Direction

- Primary palette: deep navy base with soft greens and pale yellows for highlights.
- Rounded corners, layered gradients, and blurred shapes create the glass look.
- Button utilities (`btn-primary`, `btn-secondary`) and flip-card helpers live in `app/app.css`.
- Typography stays clean with Atkinson Hyperlegible and generous tracking on labels.

## Available Scripts

| Command               | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `npm run dev`         | Starts the local dev server via React Router + Vite.           |
| `npm run build`       | Builds the production bundle.                                  |
| `npm run start`       | Serves the built app (`react-router-serve`).                   |
| `npm run typecheck`   | Runs React Router typegen plus TypeScript.                     |
| `npm run json-server` | Optional helper to mock APIs from `data/db.json` (if present). |

## Project Structure (excerpt)

```
app/
  components/        // Hero, PostCard, ProjectCard, Preview, etc.
  routes/            // Home, Projects, Blog (index + details), About, Contact
  app.css            // Tailwind theme + shared utilities
  types.ts           // Shared TypeScript models for posts & projects
public/
  images/            // Portraits, hero photos, blog placeholders
```

Thanks 💚
