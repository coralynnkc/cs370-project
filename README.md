# SwoopSwap

A secondhand marketplace for Emory students. Sellers list and tag dorm essentials for sale or for free, buyers follow tags to get alerts, and the two message each other to arrange pickup. Signup is limited to `@emory.edu` addresses.

**Production:** _PRODUCTION_URL_ · **Jira:** [cs370-ttr-fall-26.atlassian.net](https://cs370-ttr-fall-26.atlassian.net) · **Plan:** [SPRINT_PLAN.md](SPRINT_PLAN.md)

Team: Danny Chen, Ruilin Chen, Leah Loukedis, Chloe Peyrebrune (PO), Coralynn Yang (SM), Sihao Zhang.

## Stack

Next.js 16 (App Router, TypeScript strict), Tailwind CSS 4, shadcn/ui, Supabase (Auth, Postgres with RLS, Storage, Realtime), deployed on Vercel. Vitest for unit tests, GitHub Actions for CI. [SPRINT_PLAN.md §2](SPRINT_PLAN.md#2-architecture) explains why each piece was chosen.

Next.js 16 renamed `middleware.ts` to `proxy.ts`, and a few other APIs differ from what most tutorials show. The docs for the exact version we run live in `node_modules/next/dist/docs/`, which is worth checking before copying an example from the internet.

## Local setup

You need Node 20.9 or newer (`node -v`) and git.

1. Clone and install.
   ```sh
   git clone https://github.com/coralynnkc/cs370-project.git
   cd cs370-project
   npm ci
   ```
2. Copy the env template and fill in the two Supabase values. Ask in the team channel for the shared project's URL and publishable key, or find them under Supabase → Project Settings → API.
   ```sh
   cp .env.example .env.local
   ```
3. Start the dev server and open http://localhost:3000.
   ```sh
   npm run dev
   ```

`.env.local` is gitignored. Never commit keys; the Supabase secret key in particular never goes in a `NEXT_PUBLIC_` variable.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (what Vercel runs) |
| `npm run lint` | ESLint |
| `npm run format` / `format:check` | Prettier write / check |
| `npm run typecheck` | Generates Next route types, then `tsc --noEmit` |
| `npm test` | Vitest, once. `npm run test:watch` to keep it running |
| `npm run check:header` | Fails if a source file is missing the integrity header |

CI runs everything except `dev` and `build` on every PR; Vercel runs `build` as the preview deploy.

## Project structure

We organize by feature so that six people working in parallel mostly touch different folders, which keeps merge conflicts rare.

```
src/
  app/                  routes only: page.tsx, layout.tsx, route handlers
    (marketing)/        landing page, public routes
    app/                signed-in routes (/app/*), protected by proxy.ts
  features/
    auth/               components, server actions, and tests for sign-in
    listings/           ...one folder per epic
    messaging/
  components/ui/        shadcn/ui primitives (generated; edit sparingly)
  lib/                  small shared helpers (formatPrice, cn)
supabase/
  migrations/           SQL migrations, applied in order
scripts/                repo tooling (integrity header check)
docs/                   Definition of Done, working agreement
```

A route file in `app/` should mostly import from `features/` and stay thin. Tests sit next to the file they test as `*.test.ts(x)`.

Add a shadcn component with `npx shadcn@latest add <name>`; it lands in `src/components/ui/`.

## Contributing

Every source file starts with the course integrity header; copy it from [`scripts/integrity-header.txt`](scripts/integrity-header.txt). CI rejects files without it.

Branch from `main` with the ticket key in the name (`scrum-20-emory-signup`), open a PR, and fill in the template. `main` is protected: a PR needs green CI and one approval before it can merge, and every merge deploys to production. The full checklist is in [docs/DEFINITION_OF_DONE.md](docs/DEFINITION_OF_DONE.md), and how we work together is in [docs/WORKING_AGREEMENT.md](docs/WORKING_AGREEMENT.md).
