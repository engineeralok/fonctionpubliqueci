# Fonction Publique CI – Project Context

This document summarizes how the site is structured so future contributors can ramp up quickly.

## Tech Stack & Entry Points
- **Next.js 16 / App Router** with TypeScript – all routes live under `src/app`.
- **Build commands**: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- **Styling** mixes Tailwind (configured in `tailwind.config.ts`), handcrafted rules in `src/app/globals.css`, and the French government DSFR stylesheets loaded inside `src/app/layout.tsx` (`/public/transformation/css/site-*.css`).
- **Assets** live in `public/` (`images/`, `transformation/`, `profiles/`). The `out/` folder is a static export artefact and should not be edited manually.

## Global Layout
- `src/app/layout.tsx` registers Google fonts, injects the DSFR CSS links, and wraps every page with the shared `<Header />`.
- `src/app/globals.css` overrides DSFR defaults (hero heading truncation, footer layout, CTA buttons, etc.) and defines helper utilities such as `.header-action-btn` (unified dark-orange hover background) that is reused across desktop and mobile navigation controls.

## Pages
| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Full landing page: skip links, hero, featured image, communiqués, actualités, photothèque, and custom footer. Data for hero sections is fully static (arrays defined near top of the file). |
| `/contact` | `src/app/contact/page.tsx` | Placeholder “Écrire au Président” section. |
| `/administration/the-cabinet` | `src/app/administration/the-cabinet/page.tsx` | Placeholder “Le gouvernement” page. |
| `/les-presidents` | `src/app/les-presidents/page.tsx` | Placeholder “Les présidents” page. |

All placeholder routes follow the same minimal template so they can be easily expanded later.

## Reusable Components
- `Header.tsx`
  - Client component using `@floating-ui/react` to manage three desktop dropdown menus (“Le Ministère”, “Nos services”, “Recrutement”).
  - Maintains two pieces of state: `openMenuId` (desktop) and `mobileMenuOpen` / `mobileDropdownOpenId` (mobile overlay).
  - Desktop navigation contains dropdown buttons, plain links (SIGFAE, Rubrique ressources, etc.), search icon, and FR/EN language toggles.
  - Mobile overlay reuses the same data arrays, supports nested dropdowns, and uses `.header-action-btn` on every interactive control to ensure the dark-orange hover.

- `CommuniquesSection.tsx`
  - Client component that accepts an `articles` prop and provides segmented filtering (Urgent / Communiqués / Offres d'emplois / Annonces). Currently only the “Urgent” tab is populated (other tabs show a placeholder message).
  - Uses DSFR card classes and highlights urgent items with `urgent-card__link`, `urgent-card__detail`, and a custom arrow badge.

- `ActualitesSection.tsx`
  - Static list of “Actualités” articles rendered as stacked links with dates.

- `PhotothequeSection.tsx`
  - Split layout (60/40 columns) showing a featured image and CTA.

- `ShareButtons.tsx`
  - Currently unused (left commented out in `page.tsx`), but ready for future social-share UI.

## Styling Conventions
- Colors: primary orange `#FF914D` for backgrounds, darker hover `#B84400`, and grays from DSFR palette.
- `.node--type-accueil h1` has responsive overrides to avoid truncation on small screens.
- Footer styling lives entirely in `globals.css` (`.custom-footer`, `.footer-columns`, etc.) to provide a bespoke layout over DSFR defaults.
- Reusable CTA/button class: `.header-action-btn` (transparent base + orange hover). Apply this to any new interactive element that must match header hover behavior.

## External Assets & Dependencies
- DSFR stylesheets and profile assets are vendored inside `public/transformation/` and `public/profiles/` so the site can mimic the French government design system offline.
- `@floating-ui/react` is the only non-Next dependency besides Tailwind/PostCSS tooling; it powers dropdown positioning.

## Adding New Content
1. **Sections on the home page**: augment `src/app/page.tsx` and either update the static arrays (`featuredArticles`, `actionCards`, etc.) or convert them to CMS-driven data when available.
2. **Navigation**: extend the `dropdownMenus` array in `Header.tsx` for desktop/mobile parity. Remember to define `href` (or `hasArrow` for placeholder items) and add translations if needed.
3. **Styling**: prefer Tailwind utilities for layout adjustments, then fall back to `globals.css` for DSFR overrides or reusable classes.
4. **New routes**: create directories under `src/app/` per Next.js conventions. Each route inherits fonts, DSFR CSS, and the global header automatically.

## Testing / QA Tips
- Because DSFR CSS adds strong specificity, use the helper classes from `globals.css` (or `!important`) when hover colors fail to update.
- Mobile header overlay lives behind `mobileMenuOpen`. Toggle via the hamburger button when checking responsive changes.
- Static export artifacts in `out/` are for reference only; run `npm run dev` to verify live behavior.

Keeping this document updated whenever layout, navigation, or styling conventions change will help new collaborators stay aligned with the current implementation. 


