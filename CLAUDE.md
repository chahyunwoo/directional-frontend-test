# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript application built with Vite. The project uses React 19.2+ with the React Compiler enabled for automatic optimization.

## Development Commands

- `pnpm dev` - Start development server with HMR (Hot Module Replacement)
- `pnpm build` - Type-check with TypeScript (`tsc -b`) then build for production
- `pnpm lint` - Run ESLint on the codebase
- `pnpm preview` - Preview production build locally

**Package Manager**: This project uses `pnpm` (version 10.12.4+). Do not use npm or yarn.

## Architecture

### Technology Stack

- **Build Tool**: Vite 7.2+ with React plugin
- **Framework**: React 19.2+ (using react-jsx transform)
- **Language**: TypeScript 5.9+ with strict mode enabled
- **React Compiler**: Enabled via `babel-plugin-react-compiler` - automatically optimizes React components for performance

### TypeScript Configuration

The project uses a composite TypeScript setup:
- `tsconfig.json` - Root config that references app and node configs
- `tsconfig.app.json` - Application code config (target: ES2022, bundler module resolution)
- `tsconfig.node.json` - Node/build tooling config

Key compiler options:
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- `verbatimModuleSyntax` and `erasableSyntaxOnly` for modern TypeScript features
- `moduleResolution: "bundler"` for Vite compatibility

### ESLint Configuration

Using flat config format (`eslint.config.js`) with:
- TypeScript ESLint recommended rules
- React Hooks plugin for hook usage validation
- React Refresh plugin for fast refresh compatibility
- Target: ES2020, browser globals

### Source Structure

- `src/main.tsx` - Application entry point, renders root component in StrictMode
- `src/App.tsx` - Main application component (currently a simple counter demo)
- `src/index.css` - Global styles
- `src/App.css` - Component-specific styles
- `src/assets/` - Static assets (images, etc.)

### Vite Configuration

React plugin configured with Babel React Compiler plugin. This impacts both dev and build performance as noted in the README.

## Important Notes

- **React Compiler**: The React Compiler automatically optimizes components. Avoid manual memoization (`useMemo`, `useCallback`, `memo`) unless profiling shows it's necessary.
- **Build Process**: The build command runs TypeScript type-checking before bundling, so type errors will block production builds.
- **Module System**: Uses native ESM (`"type": "module"` in package.json), so all imports must use ESM syntax.
