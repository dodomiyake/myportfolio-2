# Metheues — Scroll-Driven 3D Portfolio

A responsive Next.js portfolio with a persistent React Three Fiber canvas, reversible scroll-linked motion, accessible HTML content, reduced-motion support, and a validated contact experience.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production build with `npm run build`.

## Edit the portfolio

Update `data/portfolio.ts` to change the profile, skills, projects, experience, contact links, and process. Replace the sample SVG previews in `public/images/`. Add a real `public/cv.pdf` and update the social URLs before deployment.

## Contact form

The MVP validates the form and demonstrates success/error UI locally. Before launch, connect the submit handler in `components/sections/Contact.tsx` to a server action or email provider. Never expose private email API keys in client code.

## Accessibility and performance

- Essential copy and navigation are semantic HTML and remain readable without WebGL.
- The motion control persists a visitor preference; system-level `prefers-reduced-motion` is also respected.
- The canvas checks WebGL support and falls back to CSS artwork.
- Pixel ratio is capped and the 3D scene uses procedural geometry, avoiding large model downloads.

## Deploy

Push the project to GitHub and import it into Vercel. No custom build settings are required. Update `metadataBase` in `app/layout.tsx` to the production URL.
