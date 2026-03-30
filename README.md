# Cirilos

A restaurant website built as a static site.

## Tech Stack

### Frameworks & Libraries

| Technology | Version |
|---|---|
| [Next.js](https://nextjs.org) | 16.2.1 |
| [React](https://react.dev) | 19 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |
| [Node.js](https://nodejs.org) | 24 |

### Tooling

| Tool | Purpose |
|---|---|
| [VS Code](https://code.visualstudio.com) | Editor |
| [Claude Code](https://claude.ai/code) | AI coding assistant |
| [ESLint](https://eslint.org) | Linting |
| [PostCSS](https://postcss.org) | CSS processing |

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

This project is configured for static export (deployed to GitHub Pages):

```bash
npm run build
```

## Deployment

Deployment is automated via GitHub Actions. Pushing to the `main` branch triggers the [deploy workflow](.github/workflows/deploy.yml), which:

1. Builds the static site (`npm run build`)
2. Uploads the `out/` directory as a Pages artifact
3. Deploys to GitHub Pages
