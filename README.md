# Mattas Kitchen

A Next.js (App Router) project for Mattas Kitchen.

## Project Structure

```
mattas-kitchen/
├── app/
│   ├── layout.jsx              # Root layout (HTML shell, metadata, SpeedInsights)
│   ├── globals.css             # Global styles (fonts, variables, components)
│   ├── page.jsx                # Home route (/)
│   └── politica-privacidad/
│       └── page.jsx            # Privacy policy route (/politica-privacidad)
├── src/
│   ├── components/             # React components (Home, Header, Hero, ...)
│   ├── views/                  # Page-like components (PrivacyPolicy)
│   ├── hooks/                  # useCart (localStorage cart)
│   ├── data/                   # Products and contact data
│   └── fonts/                  # Self-hosted fonts (woff2)
├── public/
│   └── img/                    # Static images
└── package.json
```

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The app will open at `http://localhost:3000`

### Build

```bash
pnpm build
```

## Technologies

- **Next.js 16** - App Router, server and client components
- **React 19** - UI library
- **@vercel/speed-insights** - Analytics
