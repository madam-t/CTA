# CTA Affiliates — Streamline. Optimize. Succeed.

Premium B2B operations consultancy landing page for **Chase, Tjimune & Affiliates**, based in Windhoek, Namibia.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (build tooling)
- **TailwindCSS v4** (styling)
- **Motion** (animations)
- **Lucide React** (icons)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20+

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run preview
```

## Deployment (Netlify)

This project is configured for one-click Netlify deployment:

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Connect the repo to [Netlify](https://app.netlify.com/).
3. Netlify auto-detects the `netlify.toml` config — no manual settings needed.
4. Deploy triggers automatically on every push to `main`.

**Build settings** (auto-configured via `netlify.toml`):
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

## Project Structure

```
CTA/
├── public/
│   └── _redirects          # Netlify SPA redirect
├── src/
│   ├── assets/images/      # Founder portraits
│   ├── components/
│   │   ├── BentoServices.tsx
│   │   ├── ChaosCalculator.tsx
│   │   ├── CtaLogo.tsx
│   │   ├── Founders.tsx
│   │   ├── LeadDiagnosisForm.tsx
│   │   └── Timeline.tsx
│   ├── App.tsx             # Main page layout
│   ├── index.css           # Global styles & Tailwind theme
│   ├── main.tsx            # React entry point
│   ├── types.ts            # TypeScript interfaces
│   └── vite-env.d.ts       # Vite type declarations
├── index.html              # HTML entry (with SEO meta tags)
├── netlify.toml            # Netlify deployment config
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## License

© Chase, Tjimune & Affiliates. All Rights Reserved.
