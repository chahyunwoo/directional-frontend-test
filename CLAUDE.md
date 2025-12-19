# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript application built with Vite. The project uses React 19.2+ with the React Compiler enabled for automatic optimization.

### Features

- **Auth**: 로그인 인증
- **Board**: 게시판 (CRUD)
- **Chart**: 데이터 시각화

## Development Commands

- `pnpm dev` - Start development server with HMR (Hot Module Replacement)
- `pnpm build` - Type-check with TypeScript (`tsc -b`) then build for production
- `pnpm lint` - Run Biome check on the codebase
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code with Biome
- `pnpm preview` - Preview production build locally

**Package Manager**: This project uses `pnpm` (version 10.12.4+). Do not use npm or yarn.

## Architecture

### Technology Stack

- **Build Tool**: Vite 7.2+ with React plugin
- **Framework**: React 19.2+ (using react-jsx transform)
- **Language**: TypeScript 5.9+ with strict mode enabled
- **React Compiler**: Enabled via `babel-plugin-react-compiler`
- **Styling**: Tailwind CSS 4.1+
- **Routing**: TanStack Router (file-based routing)
- **State Management**: Zustand (with persist middleware)
- **Server State**: TanStack Query
- **Form**: React Hook Form + Zod
- **Linting/Formatting**: Biome

### Project Structure (Feature-First Architecture)

```
src/
├── app/                    # Application bootstrap
│   ├── App.tsx             # Root component with router
│   ├── main.tsx            # Entry point
│   ├── providers.tsx       # Global providers (QueryClient)
│   ├── routeTree.gen.ts    # Auto-generated route tree
│   └── routes/             # File-based routes
│       ├── __root.tsx
│       ├── index.tsx
│       ├── _authenticated.tsx
│       ├── _authenticated/
│       │   ├── board.tsx
│       │   └── chart.tsx
│       ├── _public.tsx
│       └── _public/
│           └── login.tsx
├── features/               # Feature modules (domain logic)
│   ├── auth/
│   │   └── stores/         # Zustand stores
│   ├── board/
│   └── chart/
├── shared/                 # Shared utilities
│   ├── components/         # Reusable UI components
│   ├── constants/          # App constants (ROUTES)
│   ├── hooks/              # Custom hooks (useZodForm)
│   ├── lib/                # Utilities (cn, queryClient)
│   └── stores/             # Global stores
├── pages/                  # Page components
└── styles/                 # Global styles
```

### Routing

TanStack Router with file-based routing:

- Routes are defined in `src/app/routes/`
- `_authenticated` layout: requires authentication
- `_public` layout: accessible without authentication
- Route constants in `src/shared/constants/routes.ts` for navigation only
- `createFileRoute` must use literal strings (not constants) for type safety

```tsx
// ✅ Correct
export const Route = createFileRoute('/_authenticated/board')({...})

// ❌ Wrong - breaks type inference
export const Route = createFileRoute(ROUTE_PATHS.BOARD)({...})
```

### State Management

**Zustand** for client state:
- Feature stores in `src/features/*/stores/`
- Auth store uses `persist` middleware for localStorage

```tsx
const { isAuthenticated, setToken, clearToken } = useAuthStore()
```

**TanStack Query** for server state:
- QueryClient configured in `src/shared/lib/query/`
- Access via `queryClient` export from `@/shared`

### Authentication Flow

1. Check `isAuthenticated` from `useAuthStore.getState()` in route `beforeLoad`
2. Unauthenticated → redirect to `/login`
3. Authenticated on public route → redirect to `/`
4. Token stored in localStorage via Zustand persist

### TypeScript Configuration

The project uses a composite TypeScript setup:
- `tsconfig.json` - Root config that references app and node configs
- `tsconfig.app.json` - Application code config (target: ES2022, bundler module resolution)
- `tsconfig.node.json` - Node/build tooling config

Key compiler options:
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- Path alias: `@/*` → `src/*`

### Biome Configuration

Using Biome for linting and formatting (`biome.json`):
- Indent: 2 spaces
- Semicolons: as needed (no trailing)
- Quote style: single quotes
- Tailwind CSS class sorting enabled
- Format on save configured in `.vscode/settings.json`

## Coding Conventions

### Barrel Exports

Use barrel exports (`index.ts`) for each module:

```tsx
// Import from barrel
import { useAuthStore } from '@/features/auth'
import { ROUTES, queryClient } from '@/shared'
```

### Component Structure

- Page components in `src/pages/`
- Route files in `src/app/routes/` only handle routing logic
- Reusable components in `src/shared/components/`
- Feature-specific components in `src/features/*/components/`

## Important Notes

- **React Compiler**: Avoid manual memoization (`useMemo`, `useCallback`, `memo`) unless profiling shows it's necessary.
- **Build Process**: TypeScript type-checking runs before bundling, so type errors will block production builds.
- **Module System**: Uses native ESM (`"type": "module"` in package.json).
- **TanStack Router**: Route tree is auto-generated. Run `pnpm dev` to regenerate after adding routes.
