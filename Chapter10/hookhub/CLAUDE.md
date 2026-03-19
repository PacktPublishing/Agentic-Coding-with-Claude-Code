# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 15.4.6 application using the App Router architecture with TypeScript and Tailwind CSS.

## Essential Commands

```bash
# Development
npm run dev         # Start development server on http://localhost:3000

# Production
npm run build       # Create production build
npm run start       # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Architecture

- **Framework**: Next.js 15.4.6 with App Router
- **Structure**: All application code lives in `src/app/`
- **Styling**: Tailwind CSS 4.x (no custom config file - uses defaults)
- **TypeScript**: Configured with path aliases (`@/*` → `./src/*`)

## Key Files

- `src/app/layout.tsx` - Root layout with Geist font setup
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles and Tailwind directives

## Development Notes

- No test framework is currently set up
- Uses npm as package manager (package-lock.json present)
- ESLint configured with Next.js defaults
- Supports both light and dark modes via Tailwind

## Testing Strategy

- Use Playwright MCP for UI testing
- Save screenshots in `/memory/screenshots` directory