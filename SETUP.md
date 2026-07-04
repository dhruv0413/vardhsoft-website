# VardhSoft Website — Developer Setup Guide

This guide covers everything a new team member needs to run the project locally from scratch.

> **Database is shared.** We use a single shared Supabase PostgreSQL database. You do **not** need to create your own database — just ask the lead developer for the connection strings.

---

## Prerequisites

Make sure these are installed on your machine **before** starting:

| Tool | Version | Download |
|---|---|---|
| **Node.js** | v20 or later | https://nodejs.org |
| **npm** | v10+ (comes with Node) | — |
| **Git** | any recent version | https://git-scm.com |

> **Windows users:** PowerShell or Git Bash both work fine.

---

## 1. Clone the Repository

```bash
git clone <your-repo-url>
cd company-website
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Set Up Environment Variables

Copy the example file:

```powershell
# Windows (PowerShell)
Copy-Item .env.example .env.local
```

```bash
# macOS / Linux
cp .env.example .env.local
```

Then open `.env.local` and fill in the values below.

---

### `DATABASE_URL` *(get from lead developer)*
The **transaction-mode pooler** connection string for the shared Supabase project.

```
DATABASE_URL="postgresql://postgres.<project-ref>:<password>@aws-0-<region>.pooler.supabase.com:6543/postgres?pgbouncer=true"
```

> Ask the **lead developer** for the exact value — everyone on the team uses the same string so you all share the same live data and CMS content.

---

### `DIRECT_URL` *(get from lead developer)*
The **direct** connection string for the same shared Supabase project. Used only for schema migrations.

```
DIRECT_URL="postgresql://postgres.<project-ref>:<password>@aws-0-<region>.pooler.supabase.com:5432/postgres"
```

> Ask the **lead developer** for this value too.

---

### `PAYLOAD_SECRET` *(generate your own)*
A random 64-character secret used for JWT signing. Each developer generates their own — it does **not** need to match the lead developer's value.

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Paste the output as the value. **Never share or commit this.**

---

### `RESEND_API_KEY` *(ask lead developer, or skip for local dev)*
API key from [Resend](https://resend.com) — used to send contact form emails.

> You can **leave this blank** for local development. The app will work normally; only the contact form email delivery will be disabled.

---

### `NEXT_PUBLIC_SITE_URL`
Always this for local development:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

### Shared `.env.local` Example

Once filled in, your `.env.local` should look like this:

```env
DATABASE_URL="postgresql://postgres.xxxxxxxxxxxx:YourPassword@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.xxxxxxxxxxxx:YourPassword@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"
PAYLOAD_SECRET=abc123...your_own_generated_secret_here
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 4. Start the Development Server

```bash
npm run dev
```

- Website → **http://localhost:3000**
- Admin panel → **http://localhost:3000/admin**

> Payload will automatically sync its database schema on the first run. This takes 10–20 seconds. You will see output like `Database connected` in the terminal.

---

## 5. Log In to the Admin Panel

Since you are sharing the database, the admin accounts **already exist**.

1. Open **http://localhost:3000/admin**
2. Log in with the credentials the lead developer has shared with you

> If you need your own admin account, ask the lead developer to create one for you from the Users section in the admin panel.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint code checks |
| `npm run payload` | Run Payload CLI commands |

---

## Project Architecture

```
company-website/
├── src/
│   ├── app/
│   │   ├── (app)/              # Public-facing website pages
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── industries/
│   │   │   ├── technologies/
│   │   │   ├── case-studies/
│   │   │   ├── portfolio/
│   │   │   ├── careers/
│   │   │   ├── contact/
│   │   │   └── book/
│   │   └── (payload)/          # Payload CMS admin panel (auto-managed)
│   ├── collections/            # Payload CMS collections (database tables)
│   ├── globals/                # Payload CMS globals (single-instance settings)
│   ├── components/             # Shared React components
│   ├── lib/                    # Utility functions
│   └── data/                   # Static data files
├── payload.config.ts           # Payload CMS configuration
├── payload-types.ts            # Auto-generated types (do not edit manually)
├── .env.example                # Template — safe to commit
└── .env.local                  # Your secrets — NEVER commit this
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **CMS** | Payload CMS 3 |
| **Database** | PostgreSQL via Supabase (shared) |
| **Styling** | Tailwind CSS v4 |
| **Email** | Resend |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |
| **Language** | TypeScript 5 |

---

## CMS Admin — Key Areas

| Section | What to edit |
|---|---|
| **Website Settings** | Company info, SEO metadata, homepage content, CTAs |
| **Services** | Service offerings and sub-services |
| **Industries** | Industry pages (challenges, solutions, FAQs) |
| **Technologies** | Tech stack entries |
| **Projects** | Portfolio items |
| **Case Studies** | Detailed client stories |
| **Careers** | Open job positions |
| **Testimonials** | Client testimonials |
| **Leads** | Contact form submissions (read-only inbox) |

> **SEO metadata** for every page can be updated from **Website Settings → SEO & Metadata tab** — no code needed.

---

## Common Issues & Fixes

### `Missing environment variable PAYLOAD_SECRET`
Your `.env.local` file is missing or `PAYLOAD_SECRET` is empty. Generate a value and set it.

### Database connection errors on startup
- Confirm `DATABASE_URL` and `DIRECT_URL` were copied exactly from the lead developer
- **Supabase free tier pauses** after 1 week of inactivity — open https://supabase.com and click on the project to wake it, then retry
- If the password has special characters (`@`, `#`, `!`, etc.), they must be URL-encoded in the connection string

### `Cannot find module '@payload-config'`
This path alias is resolved by Next.js automatically. Always use `npm run dev`, not raw `tsc`.

### Admin panel shows a blank page or redirect loop
Clear all cookies and local storage for `localhost:3000` in your browser, then reload.

### Contact form emails are not sending
Leave `RESEND_API_KEY` empty for local dev — it only matters in production.

### `npm run dev` crashes after a `git pull`
Someone updated dependencies. Run `npm install` again.

---

## After Changing the CMS Schema

If you modify any file in `src/collections/` or `src/globals/`, regenerate types:

```bash
npm run payload generate:types
```

Commit the updated `payload-types.ts` to git so all teammates stay in sync.

---

## ⚠️ Important Reminders

- **Never commit `.env.local`** — it contains database passwords and secrets
- **The database is shared** — changes you make in the admin panel (add/edit/delete content) are visible to everyone on the team immediately
- **Be careful with destructive actions** in the admin panel on the shared database

---

## Need Help?

- Check `changes.md` in the project root for a full audit of all code changes
- Check `README.md` for a high-level project overview
- Message the lead developer on the team channel
