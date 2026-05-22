# Architecture Guide

This project follows a `feature-first + layered` architecture.

## Folder Structure

```txt
src/
  app/                          # Next.js routes, layouts, route groups
    (public)/
      layout.tsx
      page.tsx
      projects/page.tsx
  features/                     # Domain modules
    projects/
      components/
      services/
      types.ts
    contact/
      components/
      hooks/
      services/
      types.ts
  shared/                       # Reusable cross-feature code
    components/
    config/
    lib/
    types/
```

## Rules

1. Keep domain code inside its feature module.
2. Use `shared` only for truly reusable code across multiple features.
3. Put data access and business logic in `services`.
4. Keep visual components in `components` and make them dumb when possible.
5. Keep hooks focused on state orchestration and side effects.
6. Prefer server components by default; add `"use client"` only where needed.

## Import Direction

- `app` can import from `features` and `shared`.
- `features` can import from their own files and `shared`.
- `shared` should not import from `features` or `app`.

## Naming

- Components: `kebab-case.tsx` files exporting `PascalCase` symbols.
- Hooks: `use-*.ts`.
- Services: verb-first (`get-projects.ts`, `send-contact-message.ts`).
- Types: colocated `types.ts` inside each feature.
