# Vinod Achar — Portfolio

Editorial dark single-page portfolio. React + Vite, GSAP/ScrollTrigger + Lenis for motion.

## Edit content
- **All copy, numbers, videos, MLOps progress:** `src/data.js`
- **Links (WhatsApp, email, socials):** `src/constants.js`
- **Hero portrait:** add a black & white photo at `public/images/vinod-portrait.jpg`
  (portrait crop ~4:5, subject on a dark/black background works best). Until it exists, an animated sculpture shows instead.
- **Workshop photo (optional):** put it in `public/images/` and set `STAGE_IMAGE` in `src/data.js`.

## Run
```bash
npm install
npm run dev      # local dev
npm run build    # production build → dist/
```

## Deploy (Vercel)
Import the repo in Vercel — it auto-detects Vite (build `npm run build`, output `dist`). No extra config needed.

Motion respects `prefers-reduced-motion`, and visitors can switch it off with the floating MOTION toggle.
