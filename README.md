# Hellometer Public Website

The public-facing website for Hellometer, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

```bash
cd hellometer-io
pnpm install
pnpm dev
```

## TODO

Video files are large — especially make_line_kitchen.mp4 at ~25 MB. This could make first loads slow on mobile.

Some dead code — unused components like FeaturesHome (which still has Lorem ipsum text) are sitting in the codebase.

## Deployment

The site is hosted on [Vercel](https://vercel.com/) with the domain managed through [GoDaddy](https://www.godaddy.com/).

### Vercel

- **Project root directory:** `hellometer-io` (configured in Vercel project settings since the repo is a monorepo)
- **Framework:** Next.js (auto-detected)
- **Build command:** `pnpm run build`

#### Deploy manually via CLI

```bash
cd hellometer-io
vercel          # preview deploy
vercel --prod   # production deploy
```

#### Environment variables

Set these in **Vercel Dashboard > Project > Settings > Environment Variables**:

| Variable | Description |
| -------- | ----------- |
| `RESEND_API_KEY` | Resend API key for contact/demo form emails |
| `CONTACT_EMAIL` | Recipient email for form submissions |

Or via CLI: `vercel env add RESEND_API_KEY`

### Domain (GoDaddy)

The `hellometer.ai` domain is registered on GoDaddy. DNS records point it to Vercel:

| Type | Name | Value |
| ---- | ---- | ----- |
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

Vercel auto-provisions SSL once DNS propagates. These records are managed in **GoDaddy > DNS Management** for `hellometer.ai`.

## Contact Form

The contact form on the homepage uses a **Next.js Server Action** with [Resend](https://resend.com/) to send emails.

### How it works

1. The visitor fills out the form (`components/contact-form.tsx`) with their name, email, and message.
2. On submit, a React 19 `useActionState` hook calls the server action at `app/actions/contact.ts`.
3. The server action validates the inputs server-side, then sends the email via the Resend SDK.
4. The email is delivered to the address configured in `CONTACT_EMAIL`, with the visitor's email set as the reply-to address.

### Environment variables

| Variable | Description |
| -------- | ----------- |
| `RESEND_API_KEY` | Your Resend API key (starts with `re_`) |
| `CONTACT_EMAIL` | The email address that receives contact form submissions |

These can be set in `hellometer-io/.env.local` or exported in your shell environment.

### Schedule a Demo form

The `/schedule-demo` page works the same way — its server action is at `app/actions/schedule-demo.ts`. It collects additional fields (company, phone, number of locations) and sends them in the email body.

## Blog

The blog uses **MDX** files for content and [Keystatic](https://keystatic.com/) for a browser-based editing UI.

### How it works

1. Blog posts are stored as `.mdx` files in `content/blog/`.
2. `components/mdx/utils.ts` reads the files at build time, parses YAML frontmatter (title, date, summary, author), and exposes them via `getBlogPosts()`.
3. `app/blog/page.tsx` renders the listing page — a grid of post cards sorted by date.
4. `app/blog/[slug]/page.tsx` renders individual posts using `next-mdx-remote-client` with Tailwind Typography for prose styling.

### Adding a post

**Option A — Write a file directly:**

Create a new `.mdx` file in `content/blog/` with this frontmatter:

```yaml
---
title: 'Your Post Title'
publishedAt: '2026-02-10'
summary: 'A short description for the card and meta tags.'
author: 'Author Name'
---
```

The filename becomes the URL slug (e.g., `my-post.mdx` → `/blog/my-post`).

**Option B — Use Keystatic:**

Visit `/keystatic` in the browser (local dev only). Keystatic provides a form-based editor that reads and writes the same MDX files — no Git required during editing.

### Keystatic configuration

- Config: `keystatic.config.ts` — defines the `posts` collection schema
- Admin UI: `app/keystatic/` — routes for the editing interface
- API: `app/api/keystatic/` — handles file read/write operations
- Storage mode: `local` (reads/writes files on disk)

## Style Guide (Quick Reference)

### Brand Colors

| Swatch | Name | Hex |
| ------ | ---- | --- |
| ![#2897EC](https://img.shields.io/badge/-%20-2897EC) | Hellometer Blue | `#2897EC` |
| ![#FFFFFF](https://img.shields.io/badge/-%20-FFFFFF) | White | `#FFFFFF` |
| ![#B0BEC5](https://img.shields.io/badge/-%20-B0BEC5) | Silver | `#B0BEC5` |
| ![#0B1A2E](https://img.shields.io/badge/-%20-0B1A2E) | Dark Navy | `#0B1A2E` |
| ![#0A0E14](https://img.shields.io/badge/-%20-0A0E14) | Almost Black | `#0A0E14` |

### Typography

- **DM Mono Medium** — Logo wordmark
- **Inter** — Body text
- **DM Sans** — Display / headings

### Logo

- Full wordmark (white): `hellometerCV_whitelogo.svg`
- Icon only: `hellometer_glyph.svg`

For the complete style guide including text scale, logo variants, header specs, and Tailwind overrides, see [STYLE_GUIDE.md](STYLE_GUIDE.md).
