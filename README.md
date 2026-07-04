# VardhSoft — Company Website

Official website for **VardhSoft**, a custom software development and digital consulting company based in Ahmedabad, Gujarat, India.

Built with **Next.js 16 (App Router)**, **Payload CMS 3**, **PostgreSQL (Supabase)**, **Tailwind CSS v4**, and **TypeScript**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| CMS | Payload CMS 3 |
| Database | PostgreSQL via Supabase |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Animations | Framer Motion |
| Forms | React Hook Form + Server Actions |
| Email | Resend |
| Fonts | Geist Sans + Geist Mono (next/font) |
| Language | TypeScript (strict) |

---

## Getting Started

### Prerequisites

- Node.js 20+
- A PostgreSQL database (e.g. Supabase free tier)
- A Resend account (for transactional email)

### 1. Clone and install dependencies

```bash
git clone <repository-url>
cd company-website
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `DATABASE_URL` | Supabase connection-pool URL (pgbouncer) |
| `DIRECT_URL` | Supabase direct connection URL (for migrations) |
| `PAYLOAD_SECRET` | Random 64-char hex string for JWT signing |
| `RESEND_API_KEY` | Resend API key for transactional emails |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (e.g. `https://vardhsoft.com`) |

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the Payload CMS admin panel.

### 4. Seed the database (first-time setup)

```bash
npm run seed
```

This populates the database with all services, sub-services, industries, technologies, homepage settings, careers content, and testimonials.

> **Note:** The seed script is destructive — it clears and re-creates all CMS-managed collections.

---

## Project Structure

```
src/
├── app/
│   ├── (app)/              # Public-facing Next.js routes
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── services/       # Services hub + [slug] + [slug]/[subSlug]
│   │   ├── industries/     # Industries hub + [slug]
│   │   ├── case-studies/   # Case studies listing + [slug] detail
│   │   ├── technologies/   # Technologies stack page
│   │   ├── portfolio/      # Portfolio (requires admin-added projects)
│   │   ├── careers/        # Careers listing
│   │   ├── contact/        # Contact form + Server Action
│   │   ├── book/           # Meeting booking flow
│   │   ├── sitemap/        # HTML sitemap
│   │   ├── legal-and-compliance/
│   │   ├── privacy-policy/
│   │   ├── terms-and-conditions/
│   │   └── cookie-policy/
│   └── (payload)/          # Payload CMS admin routes (auto-generated)
├── collections/            # Payload CMS collection schemas
│   ├── Services.ts
│   ├── SubServices.ts
│   ├── Industries.ts
│   ├── CaseStudies.ts
│   ├── Careers.ts
│   ├── Projects.ts
│   ├── Testimonials.ts
│   ├── Technologies.ts
│   ├── Leads.ts
│   ├── Media.ts
│   ├── Pages.ts
│   └── Users.ts
├── globals/
│   └── WebsiteSettings.ts  # Company info, hero text, stats, page copy
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeSwitcher.tsx
│   ├── LegalLayout.tsx
│   └── animations/
│       ├── ScrollReveal.tsx
│       └── HoverTilt.tsx
└── seed.ts                 # Full database seed script
```

---

## Admin Panel

The Payload CMS admin panel is available at `/admin`. Use it to manage:

- **Company Info** — email, phone, address, social links
- **Homepage Content** — hero text, stats, features, workflow steps
- **Services & Sub-Services** — full service catalogue
- **Industries** — industry-specific pages
- **Case Studies** — client success stories
- **Portfolio Projects** — showcased work
- **Testimonials** — client reviews
- **Careers** — open positions
- **Technologies** — tech stack catalogue
- **Leads** — contact form submissions

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run seed` | Seed the database with all initial data |
| `npm run lint` | Run ESLint |

---

## Environment Variables Reference

See `.env.example` for the full list of required environment variables.

---

## License

Proprietary — © VardhSoft. All rights reserved.
