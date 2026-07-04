# TECHNICAL PRD

# Project

Company Website with Payload CMS

---

# 1. Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* shadcn/ui

## CMS

* Payload CMS

## Database

* PostgreSQL

## Forms

* React Hook Form
* Zod

## Email

* Resend

## Deployment

Frontend:

* Vercel

CMS:

* VPS / Payload Cloud

Source Control:

* GitHub

---

# 2. System Architecture

Visitor

↓

Next.js Website

↓

Payload CMS API

↓

PostgreSQL

Contact Form

↓

Payload CMS

↓

Resend

↓

Company Email

---

# 3. Frontend Routes

## Public Routes

```text
/
/about
/services
/services/[slug]

/technologies

/portfolio
/portfolio/[slug]

/case-studies
/case-studies/[slug]

/careers
/careers/[slug]

/contact

/[pageSlug]
```

Dynamic Pages:

```text
/privacy-policy
/terms-and-conditions
/cookie-policy
```

Generated from CMS Pages collection.

---

# 4. Payload Collections

## Services

Fields:

```text
title
slug
shortDescription
description
icon
featured
seoTitle
seoDescription
```

---

## Technologies

Fields:

```text
name
slug
logo
category
description
```

---

## Projects

Fields:

```text
title
slug
description
industry
technologies
gallery
githubUrl
liveUrl
featured
seoTitle
seoDescription
```

---

## Case Studies

Fields:

```text
title
slug
clientName
industry
duration
overview
problem
solution
implementation
results
technologies
gallery
featured
seoTitle
seoDescription
```

---

## Careers

Fields:

```text
title
slug
department
location
employmentType
description
requirements
benefits
status
```

---

## Team Members

Fields:

```text
name
designation
bio
image
linkedinUrl
githubUrl
sortOrder
```

---

## Testimonials

Fields:

```text
clientName
companyName
designation
review
rating
image
```

---

## Leads

Fields:

```text
name
companyName
email
phone
service
budget
message
status
createdAt
```

---

## Pages

Fields:

```text
title
slug
content
featuredImage
seoTitle
seoDescription
published
```

---

## Website Settings

Fields:

```text
companyName
tagline
logo
email
phone
address
linkedinUrl
githubUrl
instagramUrl
```

---

# 5. Media Storage

Use Payload Media Collection.

Fields:

```text
file
altText
```

Used By:

* Projects
* Case Studies
* Team Members
* Testimonials
* Pages

---

# 6. Contact Form Flow

Frontend

↓

Validate using Zod

↓

Submit Request

↓

Save Lead in Payload

↓

Send Email using Resend

↓

Return Success Response

---

# 7. API Requirements

Payload generated APIs will be used.

Required Endpoints:

```text
/services
/projects
/case-studies
/careers
/team-members
/testimonials
/pages
/settings
/leads
```

No custom API development required initially.

---

# 8. SEO Requirements

Every Collection should support:

```text
seoTitle
seoDescription
slug
```

Generate:

```text
sitemap.xml
robots.txt
```

Metadata generated from CMS content.

---

# 9. Validation Rules

## Contact Form

```text
name          Required
email         Required
message       Required
```

## Slugs

Must be unique.

## Uploads

Allowed:

```text
jpg
jpeg
png
webp
svg
```

---

# 10. Security

Environment Variables:

```text
DATABASE_URL
PAYLOAD_SECRET
RESEND_API_KEY
NEXT_PUBLIC_SITE_URL
```

Requirements:

```text
HTTPS
Input Validation
Server-side Validation
Spam Protection
```

---

# 11. Deployment Structure

Frontend

```text
Vercel
```

CMS

```text
Payload CMS
PostgreSQL
```

Environment Variables configured separately.

---

# 12. Project Structure

```text
apps/
├── website
│   ├── app
│   ├── components
│   ├── lib
│   └── types
│
└── cms
    ├── collections
    ├── globals
    └── payload.config.ts
```

---

# 13. MVP Scope

Included:

✅ Home

✅ About

✅ Services

✅ Technologies

✅ Portfolio

✅ Case Studies

✅ Careers

✅ Contact

✅ CMS Managed Pages

✅ Lead Management

✅ Email Notifications

❌ Blog

❌ Newsletter

❌ Client Portal

❌ Chat System

❌ Analytics Dashboard

---

# 14. Success Criteria

* Content fully manageable from Payload CMS
* Dynamic pages generated from CMS
* Contact inquiries stored successfully
* Email notifications working
* Mobile responsive
* SEO ready
* Production deployable
