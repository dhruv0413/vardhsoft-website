import { ServiceDetail } from '../servicesData'

export const webDevelopmentSubServices: Record<string, ServiceDetail> = {
  "corporate-websites": {
    slug: "corporate-websites",
    title: "Corporate Websites",
    icon: "Code",
    shortDescription: "High-performance business websites designed to convey authority, explain offerings, and capture leads.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-indigo-500/20 hover:shadow-indigo-500/30",
      ctaPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 shadow-indigo-500/10 hover:shadow-indigo-500/20",
      pricingPopularBorder: "border-indigo-500",
      pricingPopularBadge: "bg-indigo-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(99, 102, 241, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(99, 102, 241, 0.3)] group-hover:bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-500",
      groupHoverBorder: "group-hover:border-indigo-500",
    },
    hero: {
      badge: "Corporate Websites",
      title: "Corporate Website Development",
      subText: "Convey authority, generate inbound leads, and establish absolute digital credibility with custom Next.js marketing websites.",
      primaryCtaText: "Build Your Website",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Developer",
      secondaryCtaLink: "/contact"
    },
    overview: "Your corporate website is often the first point of contact for prospective B2B clients, investors, and talent. A generic Wordpress template with slow load times and bloated scripts undermines your brand equity before a conversation even starts. We build custom, lightweight corporate websites using Next.js and React, combining high-fidelity custom design with performance metrics that standard templates can't match. This ensures search engines index your content highly and visitors experience an instant, responsive interface designed specifically to convert interest into inquiries.",
    problemsSolved: [
      "Slow loading speeds causing visitors to bounce before reading your value proposition.",
      "Outdated design templates that make a growing company look small or generic.",
      "Rigid CMS layouts making it impossible for marketing teams to add pages without developer help.",
      "Poor mobile performance and layout shift errors on tablet screens.",
      "Vulnerability to server hacking or malware injections common on older PHP platforms.",
      "Disconnected lead capture forms that fail to sync with your CRM."
    ],
    subServices: [
      {
        title: "Brand-Aligned UI/UX Design",
        description: "Figma wireframes and mockups created to fit your corporate identity, reviewed and approved prior to code."
      },
      {
        title: "Speed-First Development",
        description: "Building statically generated pages that load instantly and hit perfect Core Web Vitals scores."
      },
      {
        title: "Headless CMS Integration",
        description: "Connecting platforms like Sanity or Payload so your marketing team can publish blogs and update text easily."
      },
      {
        title: "SEO Foundation Audit",
        description: "Optimizing heading structures, metadata parameters, sitemaps, and Schema markup for organic search authority."
      },
      {
        title: "CRM & Analytics Piping",
        description: "Integrating HubSpot, Salesforce, Google Analytics, and custom forms securely."
      },
      {
        title: "Performance Hosting Setup",
        description: "Configuring lightning-fast deployments on global CDN edges like Vercel or AWS CloudFront."
      }
    ],
    features: [
      "Statically generated pages (SSG) for sub-second loading speeds",
      "Tailored UI component kit matching your exact brand parameters",
      "Fluid responsive layout scaled across mobile, tablet, and ultra-wide screens",
      "Zero-maintenance serverless hosting structures, removing runtime hosting upkeep",
      "SEO-friendly semantic HTML with integrated dynamic metadata",
      "Fully integrated tracking of key user behavior and conversion goals"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity / Payload CMS", "Framer Motion", "Vercel", "Google Analytics"],
    process: ["Discovery & Sitemap Mapping", "Wireframing & UI Mockups", "Frontend Component Coding", "CMS Setup & Content Inputs", "SEO Optimization & Tracking Checks", "CDN Deploy & Verification"],
    whyChooseUs: [
      {
        title: "Sub-Second Loading",
        description: "We optimize all assets and code splits for perfect PageSpeed scores."
      },
      {
        title: "Tailored to Convert",
        description: "Designed specifically to guide corporate prospects toward lead forms."
      },
      {
        title: "Zero Server Bloat",
        description: "Serverless setups mean no databases to crash or CMS panels to keep patched."
      },
      {
        title: "SEO Native",
        description: "Clean semantic HTML hierarchy, sitemaps, and schema structure built-in."
      }
    ],
    faqs: [
      {
        question: "How long does a corporate website build typically take?",
        answer: "A focused corporate website project with 5-10 core pages generally takes 3-4 weeks from discovery mapping to live launch, depending on feedback turnaround and content readiness."
      },
      {
        question: "Will our marketing team be able to edit page copy without writing code?",
        answer: "Yes. We set up structured headless CMS access, allowing non-technical editors to update case studies, posts, team profiles, and page text safely without any risk of breaking layouts."
      },
      {
        question: "How do you guarantee high PageSpeed scores?",
        answer: "By utilizing static site generation (Next.js), modern image formatting, code-splitting unused scripts, and hosting the entire build on edge CDNs."
      },
      {
        question: "Can you help write the copy and source illustrations?",
        answer: "We focus heavily on technical delivery and UI/UX design. We can structure your existing content and suggest outline frames, or work alongside your copywriting agencies directly."
      }
    ],
    cta: {
      headline: "Does Your Business Deserve a High-Performance Digital Flagship?",
      subText: "Let's build a website that looks premium, loads instantly, and captures corporate leads.",
      primaryBtn: "Build Your Website",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "e-commerce-development": {
    slug: "e-commerce-development",
    title: "E-commerce Development",
    icon: "ShoppingCart",
    shortDescription: "Custom online stores and shopping platforms engineered for speed, responsiveness, and conversions.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-indigo-500/20 hover:shadow-indigo-500/30",
      ctaPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 shadow-indigo-500/10 hover:shadow-indigo-500/20",
      pricingPopularBorder: "border-indigo-500",
      pricingPopularBadge: "bg-indigo-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(99, 102, 241, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(99, 102, 241, 0.3)] group-hover:bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-500",
      groupHoverBorder: "group-hover:border-indigo-500",
    },
    hero: {
      badge: "E-commerce",
      title: "E-commerce Development",
      subText: "Convert mobile and desktop visitors into customers with high-speed storefronts built on Shopify or custom headless stacks.",
      primaryCtaText: "Launch Your Store",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Developer",
      secondaryCtaLink: "/contact"
    },
    overview: "E-commerce conversion rates are directly tied to performance parameters: every 100ms delay in loading costs digital stores up to 7% in sales. Standard themes are often bloated with third-party plugins that drag down speeds. We build optimized Shopify environments and headless custom e-commerce applications that load instantaneously, display products beautifully, and offer frictionless checkout paths, leading to immediate improvements in customer acquisition costs and average order values.",
    problemsSolved: [
      "Slow page speeds causing cart abandonment on mobile connections.",
      "Rigid product catalog rules that limit bundle logic or subscription setups.",
      "Out-of-sync inventory levels causing double-sales on separate marketplace networks.",
      "Bloated Shopify theme plugins slowing down product pages.",
      "Complex multi-currency and local tax calculations that fail to run correctly.",
      "High costs of maintaining custom inventory synchronization between physical warehouses and online storefronts."
    ],
    subServices: [
      {
        title: "Shopify Development & Theme Customization",
        description: "Creating bespoke Liquid templates that are clean, fast, and completely custom to your brand design."
      },
      {
        title: "Headless E-commerce Builds",
        description: "Reconstructing the frontend in React/Next.js and connecting to Shopify or Commercejs backends for sub-second page loads."
      },
      {
        title: "Payment Gateway Integration",
        description: "Piping checkouts safely with Stripe, Razorpay, PayPal, and local dynamic pay structures."
      },
      {
        title: "ERP & Warehouse Sync",
        description: "Linking store orders directly to shipping pipelines, accounting platforms, and warehouse management software."
      },
      {
        title: "Customer Portal Design",
        description: "User dashboard areas allowing buyers to review order histories, manage subscriptions, and process returns."
      },
      {
        title: "Conversion Path Optimization",
        description: "Refining cart layouts, checkout steps, search filters, and product carousels to elevate buying conversions."
      }
    ],
    features: [
      "Optimized checkout funnels with minimal user input steps",
      "Instant client-side page transitions and lightning-fast search filters",
      "Responsive layout optimized for mobile-first shoppers",
      "Integrated analytics tracking add-to-carts, checkouts, and sales channels",
      "Dynamic catalog scaling to support thousands of product variants",
      "Secure authentication protocols protecting buyer information"
    ],
    technologies: ["Shopify / Shopify Plus", "Next.js", "React", "Tailwind CSS", "Stripe", "GraphQL Storefront API", "Google Analytics / Pixel"],
    process: ["Discovery & Catalog Mapping", "UX wireframes & Checkouts Design", "Frontend Store Coding & Integrations", "Warehouse & Payment Setup", "Mock Purchases & Speed Validation", "Go-Live Launch"],
    whyChooseUs: [
      {
        title: "Optimized for Sales",
        description: "Every page is designed to guide shoppers to complete purchases."
      },
      {
        title: "Lightning Fast Loads",
        description: "Statically compiled product grids that render instantly."
      },
      {
        title: "Clean Integrations",
        description: "APIs connecting inventory, order pipelines, and bookkeeping smoothly."
      },
      {
        title: "Tailored Customizations",
        description: "No plugin dependencies — we code custom logic directly."
      }
    ],
    faqs: [
      {
        question: "Do you build on Shopify or custom platforms?",
        answer: "We recommend Shopify for most brands due to its robust checkout security, admin portal, and ecosystem. For highly specialized brands, we build headless e-commerce frontend layers connected to Shopify APIs, combining custom design with secure payments."
      },
      {
        question: "Can you help migrate our customer database from WooCommerce or Magento?",
        answer: "Yes. Data migration planning is a core step in any store redesign, ensuring customer orders, catalog data, and redirect links remain clean."
      },
      {
        question: "Will our site work smoothly on mobile data connections?",
        answer: "Yes, mobile-first design is standard. Storefront components are optimized for 3G/4G speeds to reduce cart abandonment on the go."
      },
      {
        question: "How do you handle multi-currency checkouts?",
        answer: "We implement internationalization setups through Shopify Markets or Stripe multi-currency routing, presenting correct currency conversions and localized checkout paths."
      }
    ],
    cta: {
      headline: "Is Your Current Storefront Drifting Customers Away?",
      subText: "Let's build an e-commerce platform that loads instantly, looks premium, and converts sales.",
      primaryBtn: "Launch Your Store",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "web-portals": {
    slug: "web-portals",
    title: "Web Portals",
    icon: "Database",
    shortDescription: "Login-protected environments enabling clients, vendors, or partners to access records and internal databases.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-indigo-500/20 hover:shadow-indigo-500/30",
      ctaPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 shadow-indigo-500/10 hover:shadow-indigo-500/20",
      pricingPopularBorder: "border-indigo-500",
      pricingPopularBadge: "bg-indigo-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(99, 102, 241, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(99, 102, 241, 0.3)] group-hover:bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-500",
      groupHoverBorder: "group-hover:border-indigo-500",
    },
    hero: {
      badge: "Web Portals",
      title: "Client & Vendor Web Portals",
      subText: "Create secure, login-protected portals that allow clients, vendors, or partners to manage transactions, access database files, and submit records.",
      primaryCtaText: "Build Your Portal",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Managing client records, invoice reviews, or supplier updates via endless email chains is a significant security and administrative bottleneck. Web portals resolve this by providing secure, login-protected web spaces where external users can self-serve: submitting documents, checking status parameters, and editing accounts directly. We build custom portals featuring enterprise-grade user isolation, clear status tracking dashboards, and seamless background database sync structures.",
    problemsSolved: [
      "Endless email chains back and forth with clients or vendors for basic status checks.",
      "Risks of data breach from sharing sensitive documents via unsecured email attachments.",
      "Staff spending hours manually copying database records into external spreadsheets.",
      "No single source of truth for supplier inventory levels or invoice reviews.",
      "Customers unable to update their own address details or payment choices.",
      "Difficulties tracking approval stages for supplier onboarding."
    ],
    subServices: [
      {
        title: "Role-Based Portal Design",
        description: "Structuring visibility layers so client views, supplier grids, and admin management areas remain isolated."
      },
      {
        title: "Secure Auth Setup",
        description: "Implementing token-based multi-factor authentication (MFA) and single sign-on (SSO) configurations."
      },
      {
        title: "Document Upload & Processing",
        description: "Adding secure cloud file uploads with automated virus scanning and type checks."
      },
      {
        title: "Database Synchronization",
        description: "Piping portal records into your internal Postgres/MongoDB setups in real-time."
      },
      {
        title: "Notification Dispatchers",
        description: "Integrating SMS or email notification alerts for milestone updates or invoice issues."
      },
      {
        title: "Audit Logging",
        description: "Recording user logins, file downloads, and account edits for security compliance."
      }
    ],
    features: [
      "Strict data isolation between different customer accounts",
      "OAuth 2.0 authentication pathways with MFA options",
      "Interactive data grids with real-time CSV/PDF exports",
      "Cloud storage connections for document uploads",
      "Integrated activity trackers showing transaction histories",
      "Responsive design optimized for client review on mobile browsers"
    ],
    technologies: ["Next.js", "React", "Node.js", "JWT / Auth0", "PostgreSQL / Prisma", "AWS S3", "SendGrid / Twilio"],
    process: ["Role & Security Scoping", "Database Schema Design", "UI Design & Prototyping", "Portal Component Engineering", "Penetration & Flow Testing", "Deploy & Rollout Support"],
    whyChooseUs: [
      {
        title: "Security Centered",
        description: "Strict isolation logic preventing cross-tenant leakage."
      },
      {
        title: "Direct API Sync",
        description: "Pipes portal edits directly to internal systems."
      },
      {
        title: "Frictionless UI",
        description: "Designed for simple external user onboarding."
      },
      {
        title: "Compliance Ready",
        description: "Integrated audit logs and encrypted databases."
      }
    ],
    faqs: [
      {
        question: "How do you protect customer data from leaking between accounts?",
        answer: "By utilizing database row-level security (RLS) and strict server-side authentication parameter checks on every database query, ensuring a client can never request records belonging to another."
      },
      {
        question: "Can we connect our portal to our existing database?",
        answer: "Yes, we connect custom portals to your SQL, NoSQL, or ERP databases directly via secure API connectors."
      },
      {
        question: "Does the portal allow users to reset their own passwords?",
        answer: "Yes, self-serve account recovery (password reset, email change, MFA token recovery) is built-in standard."
      },
      {
        question: "Is there a limit to how many users can access the portal?",
        answer: "Our cloud architecture scales dynamically. There are no software-imposed user license limits, allowing you to grow user counts without extra cost."
      }
    ],
    cta: {
      headline: "Still Sharing Client Documents Over Email Chains?",
      subText: "Let's build a secure client portal that automates file sharing and operations.",
      primaryBtn: "Build Your Portal",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "progressive-web-apps": {
    slug: "progressive-web-apps",
    title: "Progressive Web Apps (PWA)",
    icon: "Smartphone",
    shortDescription: "Web experiences featuring offline support and installability, delivering native-like mobile utility.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-indigo-500/20 hover:shadow-indigo-500/30",
      ctaPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 shadow-indigo-500/10 hover:shadow-indigo-500/20",
      pricingPopularBorder: "border-indigo-500",
      pricingPopularBadge: "bg-indigo-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(99, 102, 241, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(99, 102, 241, 0.3)] group-hover:bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-500",
      groupHoverBorder: "group-hover:border-indigo-500",
    },
    hero: {
      badge: "Progressive Web Apps",
      title: "PWA Development",
      subText: "Bridge the gap between web and mobile. Build installable web apps that run offline, send push notifications, and load instantly.",
      primaryCtaText: "Build a PWA",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "For many digital products, maintaining separate iOS, Android, and web codebases is a massive operational overhead. Progressive Web Apps (PWAs) deliver the utility of a mobile app—including home screen installability, push notification triggers, and offline availability—using standard web technologies. We build custom PWAs with optimized service workers and client-side database caching, allowing users to interact with your platform even with poor network connections.",
    problemsSolved: [
      "High costs of maintaining separate mobile codebases for minor platform utilities.",
      "App store friction (submission delays, revenue cuts, strict app reviews).",
      "Application failing to work or display when users go offline in the field.",
      "Slow initial load times on low-bandwidth mobile networks.",
      "Inability to re-engage website visitors with mobile-style push notifications.",
      "High storage footprint of native apps causing users to delete them."
    ],
    subServices: [
      {
        title: "Service Worker Architecture",
        description: "Configuring service worker scripts for offline caching, background syncs, and fast page loads."
      },
      {
        title: "PWA Manifest Configuration",
        description: "Setting up metadata variables so browsers offer native install prompts on mobile home screens."
      },
      {
        title: "Offline Caching Pipelines",
        description: "Developing offline-first data caching models so core app features run without a network link."
      },
      {
        title: "Push Notifications Setup",
        description: "Integrating push notifications across supporting mobile and desktop browsers."
      },
      {
        title: "Local Database Caching",
        description: "Implementing client-side SQL/NoSQL storage (IndexDB) for offline data input."
      },
      {
        title: "Device API Integration",
        description: "Connecting apps to device hardware features (camera access, geolocation, biometrics) directly in-browser."
      }
    ],
    features: [
      "Offline-first loading capability via service worker caching",
      "Native-like installation prompt and standalone window layout",
      "Frictionless client-side navigation transitions",
      "Secure HTTPS-compliant architecture protecting data syncs",
      "Sub-100KB footprint compared to multi-MB native apps",
      "Integrated push alerts for real-time customer re-engagement"
    ],
    technologies: ["Next.js PWA", "Service Workers", "Workbox", "IndexedDB", "Push API", "Tailwind CSS", "Vercel"],
    process: ["Mobile Flow Mapping", "Service Worker Setup", "Offline Data Caching Coding", "Hardware API Integration", "Offline & Install Testing", "PWA Deployment & Launch"],
    whyChooseUs: [
      {
        title: "Code Efficiency",
        description: "One codebase covering web, mobile, and offline experiences."
      },
      {
        title: "App Store Bypass",
        description: "Ship updates instantly to users without waiting for app store reviews."
      },
      {
        title: "Offline Ready",
        description: "Apps continue to capture data when connectivity goes down."
      },
      {
        title: "Sub-Second Speed",
        description: "Immediate caching makes load times virtually nonexistent."
      }
    ],
    faqs: [
      {
        question: "Will a PWA work on both iOS and Android?",
        answer: "Yes. Both systems support PWAs directly. Android offers standard native-like installation options, while iOS users can easily add the app to their home screen using the \"Add to Home Screen\" option."
      },
      {
        question: "Can a PWA access device hardware like the camera or GPS?",
        answer: "Yes, modern browsers permit PWAs to access the camera, geolocation, audio records, and biometrics safely after user approval."
      },
      {
        question: "Do updates require users to download new files from an store?",
        answer: "No. Updates sync in the background whenever the browser loads the app, ensuring users always run the latest version instantly."
      },
      {
        question: "Can we still package a PWA for Google Play or Apple App Store?",
        answer: "Yes, using wrapper configurations like Trusted Web Activities (TWA) or Capacitor, we can package a PWA for submission to store networks if desired."
      }
    ],
    cta: {
      headline: "Need a Mobile Solution Without Native App Complexity?",
      subText: "Let's build an installable, offline-ready PWA that extends your web utility.",
      primaryBtn: "Build a PWA",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "cms-development": {
    slug: "cms-development",
    title: "CMS Development",
    icon: "FileText",
    shortDescription: "Structured content backends (headless or hybrid) allowing teams to publish updates without code updates.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-indigo-500/20 hover:shadow-indigo-500/30",
      ctaPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 shadow-indigo-500/10 hover:shadow-indigo-500/20",
      pricingPopularBorder: "border-indigo-500",
      pricingPopularBadge: "bg-indigo-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(99, 102, 241, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(99, 102, 241, 0.3)] group-hover:bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-500",
      groupHoverBorder: "group-hover:border-indigo-500",
    },
    hero: {
      badge: "CMS Development",
      title: "CMS Development & Architecture",
      subText: "Empower your marketing team to edit page text, create blog posts, and manage products without writing a single line of code.",
      primaryCtaText: "Build Your CMS",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Developer",
      secondaryCtaLink: "/contact"
    },
    overview: "Rigid content systems often force teams to choose: edit code for every tiny text change, or use a bloated template editor that ruins load speeds. We build custom content backends using modern headless CMS structures. This separates your data storage from the frontend interface. Your marketing team gets a clean dashboard to edit content, while your site remains a statically compiled React app that loads instantly.",
    problemsSolved: [
      "Marketing teams needing developers to change simple copy, pricing, or images.",
      "Slow site speeds caused by heavy page-builder CMS plugins.",
      "Security vulnerabilities from outdated CMS plugins needing frequent patching.",
      "Content siloed in one site, unable to feed mobile apps or external platforms.",
      "Unstructured data causing layout errors when editors paste text.",
      "Accidental changes by staff breaking layout designs."
    ],
    subServices: [
      {
        title: "Headless CMS Configuration",
        description: "Setting up platforms like Payload, Sanity, or Strapi with custom fields tailored to your content."
      },
      {
        title: "Visual Page Builders",
        description: "Creating custom component blocks so editors can assemble pages safely within your design system."
      },
      {
        title: "Multi-Language Localization",
        description: "Implementing CMS structures that support multi-language content translation."
      },
      {
        title: "Media Asset Management",
        description: "Integrating cloud media storage with automatic image compression and CDN delivery."
      },
      {
        title: "Approval Workflows",
        description: "Configuring draft states, publisher reviews, and revision histories for editorial teams."
      },
      {
        title: "Webhooks Integration",
        description: "Automating background site rebuilds whenever a content editor hits publish."
      }
    ],
    features: [
      "Tailored schema structure with custom fields, no rich-text copy-paste hacks",
      "Statically generated frontend (Next.js) pulling content on-demand via APIs",
      "Multi-tenant content delivery feeding websites, mobile apps, and kiosks from one source",
      "Version history logs allowing editors to restore previous revisions instantly",
      "Role-based access permissions restricting editor updates to specific pages",
      "Automatic image optimization pipelines delivering fast web formats"
    ],
    technologies: ["Payload CMS", "Sanity.io", "Strapi", "Next.js", "GraphQL / REST APIs", "AWS S3", "Vercel"],
    process: ["Content Audit & Schema Mapping", "CMS Dashboard Interface Design", "API & Schema Development", "Frontend Integration", "Editor Training & Workflows Setup", "Launch & Sync"],
    whyChooseUs: [
      {
        title: "Editor Friendly",
        description: "Dashboards built around how your team writes, no technical jargon."
      },
      {
        title: "Performance First",
        description: "Edits compile statically, preserving high PageSpeed scores."
      },
      {
        title: "Security Native",
        description: "The CMS backend is isolated from public traffic, stopping attacks."
      },
      {
        title: "Omnichannel Ready",
        description: "Content is delivered via APIs to feed any app or device."
      }
    ],
    faqs: [
      {
        question: "What is a headless CMS and how is it different from WordPress?",
        answer: "WordPress combines content storage and display templates in one system. A headless CMS stores only structured content (text, images) and serves it via an API to a fast, separate frontend like Next.js, eliminating template bloat and security risks."
      },
      {
        question: "Can our team add new pages without developer help?",
        answer: "Yes. We configure modular block editors so your team can build new pages, rearrange sections, and post blogs using approved components within your design system."
      },
      {
        question: "How long does a headless CMS setup take?",
        answer: "For a standard website, schema setup and frontend integration take about 2-3 weeks, depending on content structure complexity."
      },
      {
        question: "Is our data secure in a headless CMS?",
        answer: "Yes. Since the CMS database lives on a private server separate from your public site, it is virtually immune to common frontend hacking attempts."
      }
    ],
    cta: {
      headline: "Ready to Stop Editing Code for Every Simple Copy Change?",
      subText: "Let's build a custom headless CMS that empowers your editors and keeps your site fast.",
      primaryBtn: "Build Your CMS",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "custom-web-applications": {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    icon: "Code",
    shortDescription: "Bespoke, logic-driven web systems designed around a highly specific industry or business process.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-indigo-500/20 hover:shadow-indigo-500/30",
      ctaPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 shadow-indigo-500/10 hover:shadow-indigo-500/20",
      pricingPopularBorder: "border-indigo-500",
      pricingPopularBadge: "bg-indigo-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(99, 102, 241, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(99, 102, 241, 0.3)] group-hover:bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-500",
      groupHoverBorder: "group-hover:border-indigo-500",
    },
    hero: {
      badge: "Web Applications",
      title: "Custom Web Application Development",
      subText: "Build custom, interactive web applications designed around your specific business logic and workflows.",
      primaryCtaText: "Build Your App",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Some web systems need to go far beyond static pages or basic storefronts — requiring custom business logic, dynamic database relations, real-time syncs, and multi-role access controls. We design and build custom web applications in Next.js, Node.js, and SQL/NoSQL databases, offering scalable, high-performance architectures. From custom booking systems to administrative tools, we ensure your platform is responsive, fast, and engineered for long-term growth.",
    problemsSolved: [
      "Business workflows too complex for standard, pre-built web templates.",
      "Spreadsheets and manual tracking causing processing delays as you scale.",
      "Multiple user roles needing distinct, isolated visibility on one platform.",
      "High licensing fees for software carrying features you don't need.",
      "Existing web tools failing to sync with your database in real-time.",
      "Slow system responsiveness frustrating users on mobile screens."
    ],
    subServices: [
      {
        title: "Requirement Scoping & UI UX",
        description: "Mapping user flows, user access permissions, and page layouts in Figma before writing code."
      },
      {
        title: "Full-Stack Development",
        description: "Building responsive React frontend components connected to secure Node.js backend APIs."
      },
      {
        title: "Database Integration",
        description: "Designing database structures using PostgreSQL or MongoDB optimized for quick query speeds."
      },
      {
        title: "API Development & Pipeline Piping",
        description: "Developing REST/GraphQL APIs and connecting external tools (Stripe, Twilio, HubSpot)."
      },
      {
        title: "Security Auditing",
        description: "Implementing token auth (JWT), database row-level security, and input sanitation."
      },
      {
        title: "Hosting & Serverless Config",
        description: "Setting up deployments on AWS or Vercel with automated cloud backups and CDN scaling."
      }
    ],
    features: [
      "Custom business logic coded directly, no rigid template constraints",
      "Dynamic data queries yielding fast search and page load speeds",
      "Role-based access controls for security across different user levels",
      "Robust third-party integrations via secure, documented APIs",
      "Comprehensive test suites protecting code stability",
      "Responsive design optimized for desktop, tablet, and mobile views"
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL / MongoDB", "Tailwind CSS", "Vercel / AWS"],
    process: ["Discovery & Requirements Mapping", "Wireframing & UI UX Design", "Database & API Architecture Setup", "Frontend & Backend Development", "Testing & Security Audits", "Deployment & Support Launch"],
    whyChooseUs: [
      {
        title: "Custom Tailored",
        description: "Built around your actual business processes, not generic logic."
      },
      {
        title: "Engineered to Scale",
        description: "Architecture built to handle growth in users and data safely."
      },
      {
        title: "Developer Led",
        description: "Direct collaboration with senior engineers, avoiding communication layers."
      },
      {
        title: "Long-Term Value",
        description: "Clean code structure and documentation delivered for easy handoffs."
      }
    ],
    faqs: [
      {
        question: "How is a web application different from a standard website?",
        answer: "A website is mainly informational (text, images, blogs). A web application is interactive, processing user data, running business logic, and querying database records dynamically based on user inputs."
      },
      {
        question: "Can you build on top of our existing databases?",
        answer: "Yes. We connect custom web applications to your existing databases or external APIs using secure, authenticated pipelines."
      },
      {
        question: "How do you ensure our web application is secure?",
        answer: "We enforce JWT or OAuth 2.0 authentication, database row-level security, input sanitation to prevent SQL injection, and secure SSL connections across all transactions."
      },
      {
        question: "Will the web application work on mobile devices?",
        answer: "Yes, all our web applications are fully responsive, designed to scale and function on mobile, tablet, and desktop screens."
      }
    ],
    cta: {
      headline: "Need a Web Application Engineered Around Your Processes?",
      subText: "Let's design and build a scalable platform that automates operations and drives growth.",
      primaryBtn: "Build Your App",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
