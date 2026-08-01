# Portfolio Landing Page

A full-viewport, single-screen portfolio landing page — React + TypeScript + Tailwind CSS + Vite.

## Run it

npm install
npm run dev

## Customize

All copy lives in `src/content.ts` — name, role, bio, skills, credentials, nav links, contact link.

- **Hero image** — `public/hero-photo.jpg` (grayscale + dark overlay so white text stays readable). Swap the file, or point `heroImageSrc` in `content.ts` elsewhere, to change it.
- **Resume** — `public/resume.pdf`, linked from the "Download Resume" button. The uploaded CV includes an exact birthdate and home address — swap in a version without those before this goes on a public URL.
- **Logo** — `src/components/Logo.tsx` is a simple geometric placeholder mark. Swap in something custom whenever you'd like.
- **Fonts** — Inter (Google Fonts) and basis33 (pixel/bitmap font) are wired up in `index.html` and `src/index.css`.
