# My Portfolio

This is a full-stack portfolio website built with Next.js and Cloudflare.

## Live Demo

**[https://my-portfolio.sherry-portfolio.workers.dev](https://my-portfolio.sherry-portfolio.workers.dev)**

## Tech Stack

- **Next.js** — App Router, React Server Components
- **TypeScript** — Type-safe application code
- **Tailwind CSS** — Utility-first styling
- **Cloudflare Workers** — Edge runtime via [OpenNext](https://opennext.js.org/cloudflare)
- **Cloudflare D1** — SQLite-backed project data

## Features

- **Dynamic project rendering from database** — Projects are loaded at request time from D1, not hard-coded in the UI
- **Full-stack architecture with API and D1** — Route handlers and pages share the same data access patterns on the Cloudflare stack
- **Deployed on Cloudflare Workers** — Global edge deployment with static assets and serverless compute

## Highlights

| Area            | Detail                                                      |
| --------------- | ----------------------------------------------------------- |
| Frontend        | Responsive portfolio layout with hero and project sections |
| Backend / Data  | D1 SQL migrations, typed API and server-side queries       |
| DevOps          | Wrangler config, Cloudflare bindings, CI-friendly scripts |

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Cloudflare preview (local Worker runtime)

```bash
npm run preview
```

### Deploy to Cloudflare

```bash
npm run deploy
```

(D1 migrations and bindings are configured in `wrangler.jsonc` — apply migrations to your database before expecting project data in production.)

## Project Structure (overview)

- `src/app/` — App Router pages, layouts, and API routes
- `migrations/` — D1 SQL migrations
- `wrangler.jsonc` — Worker, D1, and asset bindings

## License

Personal portfolio project — not licensed for redistribution unless the owner specifies otherwise.
