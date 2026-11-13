# Miraj Poudel — Portfolio

A responsive personal portfolio presenting Miraj's skills, projects, services, learning journey, and contact links.

## Run & Operate

- Install dependencies with `pnpm install --frozen-lockfile`.
- Use Replit's managed `artifacts/miraj-portfolio: web` workflow to run the portfolio at `/` (port 19661).
- Use `artifacts/api-server: API Server` for the API at `/api` (port 8080); `/api/healthz` returns `{"status":"ok"}`.
- The optional `artifacts/mockup-sandbox: Component Preview Server` workflow serves Canvas previews at `/__mockup` (port 8081).
- Managed workflows supply `PORT` and `BASE_PATH`; do not start Vite from the workspace root.
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- No additional secrets or external services are required for the current portfolio or health API. The unused database library requires `DATABASE_URL` only if database-backed features are added.
- The contact form opens the visitor's email application using `mailto:`; it does not send or store messages on the server.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/miraj-portfolio/src/App.tsx` — portfolio content and interactions.
- `artifacts/miraj-portfolio/src/index.css` — portfolio styles.
- `artifacts/api-server/src/routes/` — API routes.
- `artifacts/mockup-sandbox/` — separate Canvas preview application.

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The imported Canvas template `artifacts/mockup-sandbox/src/components/mockups/templates/JapaneseOmakaseLandingPage-WfQTHZ/App.tsx` has an existing image-source type error. This fails the workspace-wide typecheck, but the portfolio and API typechecks pass and all three development workflows start.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
