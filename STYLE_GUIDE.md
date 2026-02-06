# Hellometer Style Guide

## Brand Colors

### Primary Palette

| Swatch | Name            | Hex       | Usage                                          |
| ------ | --------------- | --------- | ---------------------------------------------- |
| ![#2897EC](https://img.shields.io/badge/-%20-2897EC) | Hellometer Blue | `#2897EC` | Logo glyph, "meter" wordmark, primary accent   |
| ![#FFFFFF](https://img.shields.io/badge/-%20-FFFFFF) | White           | `#FFFFFF` | "Hello" wordmark, light backgrounds, body text |
| ![#B0BEC5](https://img.shields.io/badge/-%20-B0BEC5) | Silver          | `#B0BEC5` | Secondary text, borders, subtle UI elements    |
| ![#0B1A2E](https://img.shields.io/badge/-%20-0B1A2E) | Dark Navy       | `#0B1A2E` | Dark backgrounds, section fills                |
| ![#0A0E14](https://img.shields.io/badge/-%20-0A0E14) | Almost Black    | `#0A0E14` | Deepest backgrounds, footer, high contrast     |

### Tailwind Theme Overrides

| Swatch | Name      | Hex       | Usage                          |
| ------ | --------- | --------- | ------------------------------ |
| ![#5696FF](https://img.shields.io/badge/-%20-5696FF) | Blue 500  | `#5696FF` | Tailwind `blue-500`            |
| ![#2174EA](https://img.shields.io/badge/-%20-2174EA) | Blue 600  | `#2174EA` | Tailwind `blue-600`, CTAs      |
| ![#101D2D](https://img.shields.io/badge/-%20-101D2D) | Slate 900 | `#101D2D` | Tailwind `slate-900`           |

## Typography

| Font             | Weight  | Variable                   | Usage              |
| ---------------- | ------- | -------------------------- | ------------------ |
| DM Mono          | Medium  | —                          | Logo wordmark      |
| Inter            | —       | `--font-inter`             | Body text (default)|
| Playfair Display | —       | `--font-playfair-display`  | Display / headings |

Inter and Playfair Display are loaded via Google Fonts with `display: swap`.

### Text Scale

Defined in `hellometer-io/app/css/style.css` under `@theme`:

| Token   | Size     | Line Height | Letter Spacing |
| ------- | -------- | ----------- | -------------- |
| `xs`    | 0.75rem  | 1.5         | -              |
| `sm`    | 0.875rem | 1.5715      | -              |
| `base`  | 1rem     | 1.5         | -0.01em        |
| `lg`    | 1.125rem | 1.5         | -0.01em        |
| `xl`    | 1.25rem  | 1.5         | -0.01em        |
| `2xl`   | 1.5rem   | 1.415       | -0.01em        |
| `3xl`   | 2rem     | 1.3125      | -0.01em        |
| `4xl`   | 2.25rem  | 1.25        | -0.01em        |
| `5xl`   | 3rem     | 1.2         | -0.01em        |
| `6xl`   | 4rem     | 1.1562      | -0.01em        |

## Logo Variants

All logos live in `hellometer-io/public/images/logos/`.

| File                           | Description                                              | Use On             |
| ------------------------------ | -------------------------------------------------------- | ------------------ |
| `hellometerCV_whitelogo.svg`   | Full wordmark + "Computer Vision" tagline, white text    | Dark backgrounds   |
| `hellometer_whitelogo-1.svg`   | Full wordmark, white text (no tagline)                   | Dark backgrounds   |
| `hellometer_darkgreylogo.svg`  | Full wordmark, dark grey (`#4E4E4E`) text                | Light backgrounds  |
| `hellometer_glyph.svg`         | Icon only (blue squares/bars), no text                   | Favicon, compact header (scrolled state) |

### Logo Color Breakdown

- **Glyph / icon shapes** — always `#2897EC` (Hellometer Blue)
- **"Hello" wordmark** — white or dark grey depending on variant
- **"meter" wordmark** — always `#2897EC`
- **"Computer Vision" tagline** (CV variant only) — white

### Current Usage

- **Header (full):** `hellometerCV_whitelogo.svg` — shown at top on desktop
- **Header (scrolled):** `hellometer_glyph.svg` — compact icon after scroll

## Header

Defined in `hellometer-io/components/ui/header.tsx` and `logo.tsx`.

- Fixed position, full width, z-30
- Frosted glass effect: `backdrop-blur-sm` / `hover:backdrop-blur-xl`
- Light mode: `bg-white/80` with `hover:bg-slate-100/95`
- Dark mode: `bg-slate-900/80` with `hover:bg-slate-800/95`
- Height: `h-16` (mobile), `h-20` (desktop)
