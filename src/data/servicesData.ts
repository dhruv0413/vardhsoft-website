import { customSoftwareSubServices } from './sub-services/custom-software-development'
import { webDevelopmentSubServices } from './sub-services/web-development'
import { mobileAppSubServices } from './sub-services/mobile-app-development'
import { uiUxDesignSubServices } from './sub-services/ui-ux-design'
import { cloudDevOpsSubServices } from './sub-services/cloud-devops-services'
import { aiAutomationSubServices } from './sub-services/ai-automation-solutions'
import { eCommerceSolutionsSubServices } from './sub-services/e-commerce-solutions'
import { qualityAssuranceSubServices } from './sub-services/quality-assurance-testing'
import { maintenanceSupportSubServices } from './sub-services/maintenance-support'

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  theme: {
    glow: string;
    text: string;
    border: string;
    bg: string;
    borderPulse: string;
    bulletBg: string;
    heroPrimaryBtn: string;
    heroPrimaryShadow: string;
    ctaPrimaryBtn: string;
    pricingPopularBorder: string;
    pricingPopularBadge: string;
    cardHoverGlow: string;
    iconHoverGlow: string;
    hoverBorder: string;
    groupHoverBorder: string;
  };
  hero: {
    badge: string;
    title: string;
    subText: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
  };
  overview: string;
  problemsSolved: string[];
  subServices: {
    slug?: string;
    title: string;
    description: string;
  }[];
  features: string[];
  technologies: string[];
  process: string[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    headline: string;
    subText: string;
    primaryBtn: string;
    secondaryBtn: string;
    microLine?: string;
  };
}

export const mainServicesPageData = {
  hero: {
    eyebrow: "OUR OFFERINGS",
    headline: "Engineering Solutions Built for Your Operational Reality",
    subHeadline: "We design, build, and support software platforms shaped around how your business actually operates — from custom CRM/ERP applications and modern Next.js websites to cloud DevOps migrations and secure AI integrations.",
    primaryCta: {
      label: "Start Your Project",
      link: "/contact"
    },
    secondaryCta: {
      label: "Talk to an Engineer",
      link: "/contact"
    }
  },
  overview: {
    content: "Every agency claims to write clean code and build fast apps. We focus on a simpler standard: does the software solve the real business problem? We work alongside your operations to map workflows, document requirements, and deliver production-ready platforms using modern, maintainable stacks — without over-engineering or unnecessary feature bloat.",
    whatWeDo: "We provide end-to-end consulting, user interface styling design, software engineering, cloud architecture auditing, automated testing setups, and dedicated standby maintenance support packages.",
    whoWeHelp: "Growth-stage companies, enterprise operational teams, and SaaS product owners who have outgrown generic template software or slow administrative loops.",
    problemsSolved: [
      "Manual, paper-based, or spreadsheet-driven processes that no longer scale.",
      "Off-the-shelf software carrying expensive licenses for features your team never uses.",
      "Vulnerable, unpatched dependency packages and insecure databases.",
      "Lack of automated code test suites causing frequent production bugs."
    ]
  },
  industries: {
    title: "Industries We Serve",
    intro: "We configure specialized web platforms, mobile apps, and automation pipelines for sectors requiring strict data rules and fast scaling.",
    items: [
      {
        name: "SaaS & Digital Products",
        description: "Building scalable subscription apps, Stripe Connect billing splits, and multi-tenant database systems."
      },
      {
        name: "E-commerce & Retail",
        description: "Launching high-speed storefronts, inventory synchronization connectors, and checkout optimizations."
      },
      {
        name: "Enterprise Operations",
        description: "Developing custom CRM/ERP platforms, role-based admin portals, and workflow automation bots."
      }
    ],
    outro: "We build software around your operational compliance requirements — ensuring data is encrypted and private."
  },
  whyChooseUs: [
    {
      title: "Direct Engineer Access",
      description: "You work directly with the senior engineers building your platform — no middle managers or translation layers."
    },
    {
      title: "Right-Sized Architecture",
      description: "We build what solves your business problem, avoiding complex over-engineering and licensing overhead."
    },
    {
      title: "Agile, Visible Sprints",
      description: "You see continuous progress on staging environments, with regular demonstrations and releases."
    },
    {
      title: "Production Ready Quality",
      description: "Automated testing, security scanning, and detailed monitoring are standard in our builds."
    },
    {
      title: "Zero Vendor Lock-In",
      description: "We deliver full source code ownership, clean documentation, and standard stacks."
    },
    {
      title: "Post-Launch Support",
      description: "Structured SLAs and crash monitoring prevent outages and keep your platform updated."
    }
  ],
  process: [
    {
      title: "Discovery & Process Mapping",
      description: "We map your operational workflows and align on the exact problem to solve before proposing code."
    },
    {
      title: "Figma Wireframing & Prototyping",
      description: "We design detailed layouts and clickable mockups so you can test transitions and flows."
    },
    {
      title: "Core Architecture Setup",
      description: "We design clean database schemas (Postgres/MongoDB) and configure private VPC subnets."
    },
    {
      title: "Iterative Sprints Development",
      description: "We build React frontend widgets and secure backend APIs dynamically, delivering code in sprints."
    },
    {
      title: "Automated & Manual QA Testing",
      description: "We run Playwright end-to-end tests and test API response codes to ensure stability."
    },
    {
      title: "Deployment & Standby Launch",
      description: "We deploy builds to fast CDN edge networks (Vercel/AWS) and monitor error logs."
    }
  ],
  engagementModels: {
    title: "How We Partner with You",
    intro: "We work under flexible, milestone-based models designed to match your project stage and internal resource parameters.",
    items: [
      {
        name: "Project-Based Delivery",
        description: "Best for defined requirements. We map scopes, establish clear milestones, and deliver the complete build."
      },
      {
        name: "Dedicated Engineering Pods",
        description: "Best for scaling SaaS. You get a dedicated team of engineers, designers, and QA working on monthly cycles."
      }
    ]
  },
  faqs: [
    {
      question: "How do you start a project?",
      answer: "We begin with a discovery call to understand your operational workflow and document the requirements. We don't write a line of code or design mockups until we've aligned on what needs building."
    },
    {
      question: "Will we have direct contact with the developers?",
      answer: "Yes — you work directly with the senior engineers building your platform, removing the communication gaps that lead to feature misalignment."
    },
    {
      question: "Do you offer post-launch maintenance?",
      answer: "Yes — ongoing maintenance and support is one of our core services (see Maintenance & Support), covering monitoring, bug fixes, security updates, and future enhancements."
    },
    {
      question: "How do you handle project pricing?",
      answer: "Pricing depends on scope, complexity, and engagement model. We provide a clear, itemized quote after understanding your requirements — no hidden costs, and no billing surprises mid-project."
    },
    {
      question: "Can you take over or improve an existing system someone else built?",
      answer: "Yes — this is a common starting point for us. We begin with a technical audit of the existing system to understand what's salvageable, what needs rebuilding, and the most cost-effective path forward."
    }
  ],
  cta: {
    headline: "Ready to Build Something That Actually Works for You?",
    subText: "Tell us about your project — however early-stage or fully scoped it is — and we'll help you figure out the right approach, technology, and timeline.",
    primaryButton: "Start Your Project",
    secondaryButton: "Schedule a Consultation",
    microLine: "Let's talk about what you're building — reach out today."
  }
};

export const servicesList: Record<string, ServiceDetail> = {
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: "Cpu",
    shortDescription: "Enterprise software, SaaS products, CRM/ERP systems, and process automation built around your exact workflow.",
    theme: {
      glow: "rgba(20, 184, 166, 0.15)",
      text: "text-teal-400",
      border: "border-teal-500",
      bg: "bg-teal-500/10",
      borderPulse: "border-teal-500/20",
      bulletBg: "bg-teal-500",
      heroPrimaryBtn: "from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-teal-500/20 hover:shadow-teal-500/30",
      ctaPrimaryBtn: "from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 shadow-teal-500/10 hover:shadow-teal-500/20",
      pricingPopularBorder: "border-teal-500",
      pricingPopularBadge: "bg-teal-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(20, 184, 166, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(20, 184, 166, 0.3)] group-hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500",
      groupHoverBorder: "group-hover:border-teal-500",
    },
    hero: {
      badge: "Custom Software",
      title: "Custom Software Development Services",
      subText: "Purpose-built software designed around your exact business processes — not a generic template stretched to fit.",
      primaryCtaText: "Start Your Project",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Off-the-shelf software is built for the average use case — which means it's rarely a perfect fit for how your business actually operates. Custom software development closes that gap. We design and build applications, internal tools, and platforms shaped specifically around how your business operates — whether that's a completely new product or a system replacing a patchwork of spreadsheets, paper processes, and disconnected tools. Our approach centers on understanding the operational reality of your business first, then engineering a solution that fits it — rather than asking your business to adapt to a pre-built tool's limitations.",
    problemsSolved: [
      "Manual, paper-based, or spreadsheet-driven processes that no longer scale with your business.",
      "Generic off-the-shelf software that covers 70% of your needs and forces awkward workarounds for the rest.",
      "Disconnected tools and systems that don't talk to each other, creating duplicate data entry and errors.",
      "Operational bottlenecks caused by staff spending time on repetitive manual tasks instead of higher-value work.",
      "Legacy internal systems that are slow, hard to maintain, or built on outdated technology."
    ],
    subServices: [
      {
        slug: "enterprise-software-development",
        title: "Enterprise Software Development",
        description: "Custom internal platforms for managing operations, records, staff workflows, and business-specific processes."
      },
      {
        slug: "saas-product-development",
        title: "SaaS Product Development",
        description: "End-to-end build of subscription-based software products, from MVP to scalable production platforms."
      },
      {
        slug: "crm-erp-development",
        title: "CRM & ERP Development",
        description: "Bespoke systems for managing customer relationships, resources, and workflows tailored to your exact rules."
      },
      {
        slug: "business-process-automation",
        title: "Business Process Automation",
        description: "Software to automate repetitive manual tasks, reducing operational friction and errors."
      },
      {
        slug: "api-development-integration",
        title: "API Development & Integration",
        description: "Building secure, documented APIs and connecting third-party platforms with your internal databases."
      },
      {
        slug: "legacy-system-modernization",
        title: "Legacy System Modernization",
        description: "Auditing and rebuilding outdated core applications on modern, secure stacks without business downtime."
      }
    ],
    features: [
      "Built around your actual business logic, not a generic configuration",
      "Scalable architecture designed to grow with your organization",
      "Clean, structured data models that support reliable reporting",
      "Role-based access control for different user types",
      "Integration-ready design for connecting with existing tools",
      "Documentation delivered alongside the codebase for long-term maintainability"
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "REST & GraphQL APIs", "Tailwind CSS", "Vercel", "AWS"],
    process: ["Discovery & Process Mapping", "Requirement Documentation", "Architecture & Planning", "UI Design", "Iterative Development", "Testing & QA", "Deployment", "Ongoing Support"],
    whyChooseUs: [
      {
        title: "Workflow First",
        description: "We start with your actual workflow, not a pre-built template or arbitrary assumptions."
      },
      {
        title: "Direct Access",
        description: "Direct contact with the engineers building your system, removing interpretation errors."
      },
      {
        title: "Milestone-Based Track",
        description: "Transparent, milestone-based progress tracking and code delivery."
      },
      {
        title: "Long-Term Mindset",
        description: "Code built for long-term maintainability, scalability, and ease of future handovers."
      },
      {
        title: "Honest Scoping",
        description: "We will tell you if a simpler, cheaper off-the-shelf solution meets your needs instead of overselling."
      }
    ],
    faqs: [
      {
        question: "How is custom software different from buying an off-the-shelf tool?",
        answer: "Off-the-shelf tools are built for the average business in your category; custom software is built specifically around how your business actually operates, which usually means less workaround and higher long-term efficiency — at the tradeoff of upfront development time/cost versus an immediate subscription."
      },
      {
        question: "How long does a custom software project typically take?",
        answer: "It depends entirely on scope — a focused internal tool might take a few weeks, while a full SaaS product or ERP system can take several months. We provide a realistic timeline after the discovery phase, not before."
      },
      {
        question: "Can you integrate with our existing tools (accounting software, email, etc.)?",
        answer: "Yes, API integration with existing third-party tools is a core part of most custom software projects."
      },
      {
        question: "Do we own the code once the project is complete?",
        answer: "Yes — ownership terms are set out in your service agreement, and typically transfer to you upon final payment for client-specific deliverables."
      }
    ],
    cta: {
      headline: "Have a Process That Deserves Better Than a Spreadsheet?",
      subText: "Let's talk about what you're working with today, and what a purpose-built system could look like.",
      primaryBtn: "Start Your Project",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    icon: "Code",
    shortDescription: "Corporate websites, e-commerce platforms, web portals, PWAs, CMS builds, and custom web applications.",
    theme: {
      glow: "rgba(59, 130, 246, 0.15)",
      text: "text-blue-400",
      border: "border-blue-500",
      bg: "bg-blue-500/10",
      borderPulse: "border-blue-500/20",
      bulletBg: "bg-blue-500",
      heroPrimaryBtn: "from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-blue-500/20 hover:shadow-blue-500/30",
      ctaPrimaryBtn: "from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-blue-500/10 hover:shadow-blue-500/20",
      pricingPopularBorder: "border-blue-500",
      pricingPopularBadge: "bg-blue-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(59, 130, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.3)] group-hover:bg-blue-500/10",
      hoverBorder: "hover:border-blue-500",
      groupHoverBorder: "group-hover:border-blue-500",
    },
    hero: {
      badge: "Web Development",
      title: "Custom Web Development Services",
      subText: "Fast, scalable, and genuinely usable websites and web applications — built on modern technology, not stretched-out templates.",
      primaryCtaText: "Start Your Project",
      primaryCtaLink: "/contact",
      secondaryCtaText: "See Our Work",
      secondaryCtaLink: "/portfolio"
    },
    overview: "Your website or web application is often the first real interaction someone has with your business — and increasingly, it needs to do more than just look good. It needs to load fast, work flawlessly on mobile, rank well in search, and actually convert visitors into customers or users. We build web platforms using Next.js and React, prioritizing performance and clean architecture from the first line of code, whether that's a corporate website, a fully custom web application, or a complex portal handling real business logic behind the scenes.",
    problemsSolved: [
      "Slow-loading websites that lose visitors before the page even finishes loading.",
      "Legacy websites built on outdated platforms that are difficult to update or extend.",
      "Poor mobile experience on a site that was clearly designed desktop-first.",
      "Low conversion rates caused by confusing navigation or a slow checkout/contact flow.",
      "Websites that can't scale as traffic or content grows.",
      "Generic templates that don't reflect the business's actual brand or offering."
    ],
    subServices: [
      {
        slug: "corporate-websites",
        title: "Corporate Websites",
        description: "High-performance business websites designed to convey authority, explain offerings, and capture leads."
      },
      {
        slug: "e-commerce-development",
        title: "E-commerce Development",
        description: "Custom online stores and shopping platforms engineered for speed, responsiveness, and conversions."
      },
      {
        slug: "web-portals",
        title: "Web Portals",
        description: "Login-protected environments enabling clients, vendors, or partners to access records and internal databases."
      },
      {
        slug: "progressive-web-apps",
        title: "Progressive Web Apps (PWA)",
        description: "Web experiences featuring offline support and installability, delivering native-like mobile utility."
      },
      {
        slug: "cms-development",
        title: "CMS Development",
        description: "Structured content backends (headless or hybrid) allowing teams to publish updates without code updates."
      },
      {
        slug: "custom-web-applications",
        title: "Custom Web Applications",
        description: "Bespoke, logic-driven web systems designed around a highly specific industry or business process."
      }
    ],
    features: [
      "Responsive design tested across devices and screen sizes",
      "SEO-friendly architecture (clean URLs, fast load times, structured metadata)",
      "High-performance builds using Next.js server-side rendering and static generation",
      "Secure architecture with modern authentication practices",
      "Scalable codebase built to support future features without a rebuild",
      "Clean, intuitive UI aligned with your brand identity"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL", "Shopify", "Vercel"],
    process: ["Discovery", "Design (Figma)", "Development", "Content Integration", "Testing (functional, cross-browser, performance)", "Deployment", "Maintenance"],
    whyChooseUs: [
      {
        title: "Built for Speed",
        description: "Modern stack built for speed and SEO optimization out of the box."
      },
      {
        title: "Visible Progress",
        description: "Agile process with visible staging progress throughout the build."
      },
      {
        title: "Straight Talk",
        description: "Transparent, jargon-free communication — you always know what is being built."
      },
      {
        title: "Post-Launch Backing",
        description: "Dedicated support after launch to ensure smooth operations, not a sudden handoff."
      },
      {
        title: "Mobile-First Stand",
        description: "Mobile-first design as a standard engineering rule, not a responsive afterthought."
      }
    ],
    faqs: [
      {
        question: "How long does website development take?",
        answer: "A corporate website typically takes a few weeks; more complex web applications or portals can take longer depending on scope. We give a specific timeline after understanding your requirements."
      },
      {
        question: "What technologies do you use for web development?",
        answer: "Primarily Next.js and React on the frontend, Node.js on the backend, with MongoDB or PostgreSQL depending on data needs — chosen based on what your specific project requires."
      },
      {
        question: "Do you provide maintenance after the site is live?",
        answer: "Yes, ongoing maintenance (updates, fixes, performance monitoring) is available as a separate, optional engagement after launch."
      },
      {
        question: "Can you redesign or rebuild an existing website?",
        answer: "Yes — we start with an audit of your current site to identify what to preserve (content, SEO equity) and what to rebuild, then migrate you onto a modern, faster platform with minimal disruption."
      }
    ],
    cta: {
      headline: "Let's Build a Website That Actually Performs.",
      subText: "Fast, modern, and built to convert — not just built to exist.",
      primaryBtn: "Start Your Project",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    shortDescription: "Android, iOS, and cross-platform apps, including e-commerce and enterprise mobile solutions.",
    theme: {
      glow: "rgba(16, 185, 129, 0.15)",
      text: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      borderPulse: "border-emerald-500/20",
      bulletBg: "bg-emerald-500",
      heroPrimaryBtn: "from-emerald-500 to-indigo-500 hover:from-emerald-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
      ctaPrimaryBtn: "from-emerald-500 to-indigo-500 hover:from-emerald-600 hover:to-indigo-600 shadow-emerald-500/10 hover:shadow-emerald-500/20",
      pricingPopularBorder: "border-emerald-500",
      pricingPopularBadge: "bg-emerald-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(16, 185, 129, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(16, 185, 129, 0.3)] group-hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500",
      groupHoverBorder: "group-hover:border-emerald-500",
    },
    hero: {
      badge: "Mobile Apps",
      title: "Mobile App Development Services",
      subText: "Cross-platform and native mobile experiences that extend your product wherever your users are.",
      primaryCtaText: "Start Your Project",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to Our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "More of your users are on mobile than ever before, and for many businesses, a strong mobile experience is no longer optional. We approach mobile development pragmatically: for most business applications and e-commerce experiences, a well-built cross-platform app or Progressive Web App delivers excellent performance at a fraction of the cost and timeline of separate native builds — and we'll always recommend the approach that fits your actual users and budget, rather than the most expensive option by default.",
    problemsSolved: [
      "No mobile presence for a business whose customers are primarily on mobile devices.",
      "Web-only platforms that miss out on app-store visibility and native device features (push notifications, camera, offline access).",
      "High cost and long timelines associated with building fully separate native iOS and Android apps.",
      "Existing mobile apps that are slow, outdated, or difficult to maintain.",
      "Enterprise teams needing a mobile companion app to an existing web platform."
    ],
    subServices: [
      {
        slug: "android-app-development",
        title: "Android App Development",
        description: "Performance-focused Android applications built to run seamlessly on various mobile devices."
      },
      {
        slug: "ios-app-development",
        title: "iOS App Development",
        description: "Apple ecosystem mobile applications designed with native feel, performance, and compliance."
      },
      {
        slug: "cross-platform-app-development",
        title: "Cross-Platform Apps",
        description: "Single-codebase mobile applications built on React Native to run efficiently on both iOS and Android."
      },
      {
        slug: "mobile-ui-ux",
        title: "E-commerce Mobile Apps",
        description: "Mobile storefront applications optimized for high speed, swipe interactions, and instant checkouts."
      },
      {
        slug: "app-store-optimization",
        title: "Enterprise Mobile Solutions",
        description: "Companions to internal systems designed for field operatives, tracking, and remote reporting."
      },
      {
        slug: "mobile-maintenance",
        title: "App Maintenance & Support",
        description: "Routine testing, SDK patching, and OS compatibility updates to keep your mobile apps functional."
      }
    ],
    features: [
      "Cross-platform builds from a single codebase where appropriate, reducing cost and time-to-market",
      "Native device feature access (camera, location, push notifications) via React Native modules",
      "Offline-capable functionality for unreliable network conditions",
      "App-store-ready builds and submission support",
      "Performance-optimized for smooth interaction on a range of devices"
    ],
    technologies: ["React Native", "JavaScript/TypeScript", "Node.js", "Firebase", "REST APIs", "Progressive Web App (PWA) tooling"],
    process: ["Discovery & Platform Selection", "UI/UX Design", "Development", "Device/OS Testing", "App Store Submission Support", "Post-Launch Maintenance"],
    whyChooseUs: [
      {
        title: "Pragmatic Advice",
        description: "Honest guidance on native vs. cross-platform based on your actual needs and budget."
      },
      {
        title: "Shared Engineering",
        description: "Shared engineering expertise between your web and mobile products where relevant."
      },
      {
        title: "Regular Demos",
        description: "Transparent process with regular build/progress demos and test flight distributions."
      },
      {
        title: "OS Compliance",
        description: "Ongoing support for OS updates and app-store compliance changes."
      }
    ],
    faqs: [
      {
        question: "Should we build a native app or a cross-platform app?",
        answer: "For most e-commerce and SaaS platforms, React Native cross-platform apps deliver a beautiful interface and deep feature performance without doubling developer timelines."
      }
    ],
    cta: {
      headline: "Ready to Put Your Product in Your Users' Pockets?",
      subText: "Let's figure out the right mobile approach for your business and budget.",
      primaryBtn: "Start Your Project",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "Palette",
    shortDescription: "Research-driven design, wireframing, prototyping, and design systems that make software genuinely easy to use.",
    theme: {
      glow: "rgba(168, 85, 247, 0.15)",
      text: "text-purple-400",
      border: "border-purple-500",
      bg: "bg-purple-500/10",
      borderPulse: "border-purple-500/20",
      bulletBg: "bg-purple-500",
      heroPrimaryBtn: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-purple-500/20 hover:shadow-purple-500/30",
      ctaPrimaryBtn: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-purple-500/10 hover:shadow-purple-500/20",
      pricingPopularBorder: "border-purple-500",
      pricingPopularBadge: "bg-purple-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(168, 85, 247, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(168, 85, 247, 0.3)] group-hover:bg-purple-500/10",
      hoverBorder: "hover:border-purple-500",
      groupHoverBorder: "group-hover:border-purple-500",
    },
    hero: {
      badge: "UI/UX Design",
      title: "UI/UX Design Services",
      subText: "Interfaces designed around how real users actually think, not how a system happens to be structured internally.",
      primaryCtaText: "Start Your Design Project",
      primaryCtaLink: "/contact",
      secondaryCtaText: "See Our Design Approach",
      secondaryCtaLink: "/contact"
    },
    overview: "Good design isn't decoration — it's the difference between software people tolerate and software people actually want to use. We approach UI/UX as an integrated part of development, not a separate polish step at the end. Every design decision is grounded in how your actual users will interact with the product: what they need to accomplish, where they'll get confused, and what will make the experience feel effortless rather than effortful. Whether we're designing a brand-new product from scratch or improving an existing interface, the goal is always the same — reduce friction between your user and the outcome they're trying to achieve.",
    problemsSolved: [
      "Confusing navigation that causes users to abandon tasks partway through.",
      "Interfaces that look outdated or inconsistent across different screens.",
      "Low conversion or engagement caused by unclear calls-to-action or cluttered layouts.",
      "Inconsistent design across a growing product, making it feel disjointed.",
      "Mobile experiences that feel like an afterthought rather than a first-class design target.",
      "No design system, leading to duplicated effort and visual inconsistency as the product scales."
    ],
    subServices: [
      {
        slug: "user-research-strategy",
        title: "User Research",
        description: "Deep user interviews, persona mapping, and usability testing to validate design structure."
      },
      {
        slug: "wireframing-prototyping",
        title: "Wireframing & Prototyping",
        description: "High-fidelity visual wireframes and clickable layouts to map user flows before coding."
      },
      {
        slug: "visual-brand-design",
        title: "Web UI Design",
        description: "Responsive layouts, page flows, and visual systems for complex web environments and applications."
      },
      {
        slug: "interaction-design",
        title: "Mobile App Design",
        description: "Visual interfaces optimized for thumb-reach, mobile gestures, and screen orientations."
      },
      {
        slug: "design-system-development",
        title: "Design Systems",
        description: "Standardized UI components, layouts, and typography catalogs ensuring product consistency."
      },
      {
        slug: "usability-testing",
        title: "UX Audit & Improvements",
        description: "Performance review of current interfaces to pinpoint friction areas and drop-offs."
      }
    ],
    features: [
      "Designs built in Figma, with shareable, commentable prototypes for client feedback",
      "Mobile-first design approach as standard practice",
      "Accessibility considerations built into design decisions (contrast, readable typography, clear interactive states)",
      "Consistent design systems that scale with your product",
      "Design directly informed by user research and behavior, not just aesthetic preference"
    ],
    technologies: ["Figma", "Adobe XD", "Framer Motion (for interaction/motion design)", "Tailwind CSS (design-to-code handoff)"],
    process: ["Discovery & User Research", "Information Architecture & Wireframes", "Visual Design", "Interactive Prototyping", "Client Review & Iteration", "Design Handoff to Development"],
    whyChooseUs: [
      {
        title: "Under One Roof",
        description: "Design and development under one roof, reducing handoff friction."
      },
      {
        title: "User-Centered Logic",
        description: "User-centered process, not decoration applied after the fact."
      },
      {
        title: "Feedback Loops",
        description: "Iterative feedback loops before any development time or budget is spent."
      },
      {
        title: "Scalable Systems",
        description: "Practical design systems built for real-world scalability, not just a style guide document."
      }
    ],
    faqs: [
      {
        question: "Do you offer design-only engagements, or does it have to include development?",
        answer: "Design-only engagements are available — many clients come to us purely for UI/UX work, sometimes for a team that will build it in-house."
      }
    ],
    cta: {
      headline: "Let's Design Something Your Users Actually Enjoy Using.",
      subText: "Good design pays for itself in retention and conversion — let's start with a conversation about your product.",
      primaryBtn: "Start Your Design Project",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "cloud-devops-services": {
    slug: "cloud-devops-services",
    title: "Cloud & DevOps Services",
    icon: "Cloud",
    shortDescription: "Migration, CI/CD pipelines, containerization, infrastructure automation, and performance monitoring.",
    theme: {
      glow: "rgba(6, 182, 212, 0.15)",
      text: "text-cyan-400",
      border: "border-cyan-500",
      bg: "bg-cyan-500/10",
      borderPulse: "border-cyan-500/20",
      bulletBg: "bg-cyan-500",
      heroPrimaryBtn: "from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-cyan-500/20 hover:shadow-cyan-500/30",
      ctaPrimaryBtn: "from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 shadow-cyan-500/10 hover:shadow-cyan-500/20",
      pricingPopularBorder: "border-cyan-500",
      pricingPopularBadge: "bg-cyan-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(6, 182, 212, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(6, 182, 212, 0.3)] group-hover:bg-cyan-500/10",
      hoverBorder: "hover:border-cyan-500",
      groupHoverBorder: "group-hover:border-cyan-500",
    },
    hero: {
      badge: "Cloud & DevOps",
      title: "Cloud & DevOps Services",
      subText: "Reliable infrastructure and deployment pipelines that keep your application fast, stable, and easy to ship.",
      primaryCtaText: "Talk to Our Team",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Start Your Project",
      secondaryCtaLink: "/contact"
    },
    overview: "An application is only as good as the infrastructure it runs on. We help businesses set up cloud hosting, deployment pipelines, and monitoring that keep applications reliable as they grow — whether that means migrating an existing system to modern cloud infrastructure, setting up automated deployment so releases stop being a manual, error-prone event, or simply making sure you have visibility into your application's health before your users notice a problem. Our approach favors practical, right-sized infrastructure over unnecessarily complex setups that are hard to maintain without a dedicated DevOps team.",
    problemsSolved: [
      "Manual, error-prone deployment processes that make shipping updates stressful.",
      "Applications hosted on outdated or unreliable infrastructure.",
      "No visibility into application performance or errors until users report them.",
      "Slow, inconsistent environments between development, staging, and production.",
      "Infrastructure costs that scale inefficiently as usage grows.",
      "No disaster recovery or backup strategy in place."
    ],
    subServices: [
      {
        slug: "cloud-migration-hosting",
        title: "Cloud Migration",
        description: "Migrating databases, hosting, and systems from legacy servers to scalable AWS or Vercel cloud spaces."
      },
      {
        slug: "ci-cd-pipeline-implementation",
        title: "CI/CD Pipeline Setup",
        description: "Automated deployment flows that test and push code updates securely with zero manual friction."
      },
      {
        slug: "infrastructure-as-code",
        title: "Containerization with Docker",
        description: "Packaging services into standalone containers to guarantee consistent execution environments."
      },
      {
        slug: "serverless-application-build",
        title: "Infrastructure Automation",
        description: "Scripting infrastructure configs (Infrastructure as Code) for automated, secure system scaling."
      },
      {
        slug: "performance-monitoring-tuning",
        title: "Performance Monitoring",
        description: "Dashboards tracking resource loads, server response speeds, and runtime issues."
      },
      {
        slug: "cloud-security-compliance",
        title: "DevOps Consulting",
        description: "Practical architecture guidance to organize deployment paths and reduce monthly cloud billing."
      }
    ],
    features: [
      "Automated deployment pipelines reducing manual release effort",
      "Environment parity between development, staging, and production",
      "Real-time monitoring and alerting for application health",
      "Scalable infrastructure that grows with actual usage, not over-provisioned by default",
      "Documented infrastructure setup for team continuity"
    ],
    technologies: ["Vercel", "AWS (EC2, S3)", "Docker", "GitHub Actions (CI/CD)", "Git & GitHub", "Netlify"],
    process: ["Infrastructure Audit", "Migration/Setup Planning", "Implementation", "Pipeline & Monitoring Setup", "Testing & Validation", "Handover & Documentation", "Ongoing Support"],
    whyChooseUs: [
      {
        title: "Right-Sized Scoping",
        description: "Right-sized infrastructure recommendations, not over-engineered complexity."
      },
      {
        title: "Hands-on Setup",
        description: "Practical, hands-on setup rather than abstract consulting alone."
      },
      {
        title: "Production Ready",
        description: "Direct integration with our own development process, since we build on the same infrastructure we recommend."
      },
      {
        title: "Team Continuity",
        description: "Clear documentation so your team isn't dependent on us for basic operations."
      }
    ],
    faqs: [
      {
        question: "Do we need a dedicated DevOps engineer if we work with you?",
        answer: "Not necessarily — for most small-to-mid-sized applications, a well-set-up pipeline and hosting configuration removes the need for a dedicated DevOps hire."
      }
    ],
    cta: {
      headline: "Stop Losing Sleep Over Deployment Day.",
      subText: "Let's set up infrastructure that just works — reliably, and without drama.",
      primaryBtn: "Talk to Our Team",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "ai-automation-solutions": {
    slug: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    icon: "Sparkles",
    shortDescription: "Chatbots, generative AI features, workflow automation, and intelligent document processing.",
    theme: {
      glow: "rgba(139, 92, 246, 0.15)",
      text: "text-violet-400",
      border: "border-violet-500",
      bg: "bg-violet-500/10",
      borderPulse: "border-violet-500/20",
      bulletBg: "bg-violet-500",
      heroPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
      ctaPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/10 hover:shadow-violet-500/20",
      pricingPopularBorder: "border-violet-500",
      pricingPopularBadge: "bg-violet-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(139, 92, 246, 0.3)] group-hover:bg-violet-500/10",
      hoverBorder: "hover:border-violet-500",
      groupHoverBorder: "group-hover:border-violet-500",
    },
    hero: {
      badge: "AI & Automation",
      title: "AI & Automation Solutions",
      subText: "Practical AI features and workflow automation that save real time — not AI for the sake of a buzzword.",
      primaryCtaText: "Talk to Our Team",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Start Your Project",
      secondaryCtaLink: "/contact"
    },
    overview: "AI is genuinely useful when it removes real friction — answering repetitive questions, processing documents faster than a human can, or automating a workflow that's currently eating up staff hours. It's a liability when it's bolted onto a product just to check a marketing box. We approach AI and automation projects the same way we approach every engagement: starting with the actual business problem, then applying the right level of AI/automation to solve it — sometimes that's a full generative AI feature, and sometimes it's a much simpler rules-based automation that doesn't need a language model at all.",
    problemsSolved: [
      "Staff spending significant time on repetitive tasks that could be automated.",
      "Customer support teams overwhelmed by repetitive, answerable questions.",
      "Manual document processing (data entry, extraction, classification) that's slow and error-prone.",
      "Products that need intelligent search, recommendations, or content generation to stay competitive.",
      "Workflows spread across disconnected tools with no automation between steps."
    ],
    subServices: [
      {
        slug: "ai-chatbots-assistants",
        title: "AI Chatbots",
        description: "Context-aware conversational tools for automated support and lead collection, powered by custom LLM APIs."
      },
      {
        slug: "machine-learning-model-training",
        title: "Generative AI Applications",
        description: "Content generation, summary tools, and image analysis models embedded into your web apps."
      },
      {
        slug: "robotic-process-automation",
        title: "Workflow Automation",
        description: "Integrating web hooks and APIs to sync database values and automate cross-platform work steps."
      },
      {
        slug: "predictive-analytics-platforms",
        title: "Document Processing Solutions",
        description: "Automated parsing, classification, and text extraction from forms, invoices, and contracts."
      },
      {
        slug: "natural-language-processing",
        title: "Recommendation Systems",
        description: "Data-driven personalization scripts showing custom suggestions based on customer activity history."
      },
      {
        slug: "computer-vision-solutions",
        title: "Custom AI Integrations",
        description: "Securely linking your systems to Google Gemini, Anthropic Claude, or OpenAI API servers."
      }
    ],
    features: [
      "Prompt engineering and testing to ensure reliable, predictable AI behavior in production",
      "Guardrails and fallback handling for cases where AI output needs human review",
      "Integration with existing systems and data sources rather than a standalone bolt-on tool",
      "Clear cost/usage monitoring for API-based AI features",
      "Honest scoping — we'll tell you when a simpler, non-AI solution is the better fit"
    ],
    technologies: ["OpenAI API", "Anthropic Claude API", "Google Gemini API", "Node.js", "Python", "Vector databases (Pinecone/Supabase Vector) for retrieval-augmented use cases"],
    process: ["Use-Case Discovery", "Feasibility & Approach Selection", "Prompt/Model Design", "Development & Integration", "Testing (accuracy, edge cases, cost)", "Deployment", "Monitoring & Refinement"],
    whyChooseUs: [
      {
        title: "No AI Washing",
        description: "Honest, use-case-first approach rather than AI-washing every feature."
      },
      {
        title: "Prompt Fluency",
        description: "Real fluency with current LLM APIs and prompt engineering practices."
      },
      {
        title: "Controlled Execution",
        description: "AI features built with monitoring and fallback handling, not left to run unchecked."
      },
      {
        title: "Smooth Insertion",
        description: "Integrated into your existing product rather than delivered as a disconnected add-on."
      }
    ],
    faqs: [
      {
        question: "Do we actually need AI, or would simpler automation solve our problem?",
        answer: "Many workflow problems are better solved with straightforward rules-based automation, which is cheaper, faster to build, and easier to maintain."
      }
    ],
    cta: {
      headline: "Curious Where AI Actually Fits in Your Business?",
      subText: "Let's have an honest conversation about what's worth automating — and what isn't.",
      primaryBtn: "Talk to Our Team",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "e-commerce-solutions": {
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    icon: "ShoppingCart",
    shortDescription: "Custom stores, marketplaces, payment integrations, inventory systems, and subscription platforms.",
    theme: {
      glow: "rgba(244, 63, 94, 0.15)",
      text: "text-rose-400",
      border: "border-rose-500",
      bg: "bg-rose-500/10",
      borderPulse: "border-rose-500/20",
      bulletBg: "bg-rose-500",
      heroPrimaryBtn: "from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-rose-500/20 hover:shadow-rose-500/30",
      ctaPrimaryBtn: "from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 shadow-rose-500/10 hover:shadow-rose-500/20",
      pricingPopularBorder: "border-rose-500",
      pricingPopularBadge: "bg-rose-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(244, 63, 94, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(244, 63, 94, 0.3)] group-hover:bg-rose-500/10",
      hoverBorder: "hover:border-rose-500",
      groupHoverBorder: "group-hover:border-rose-500",
    },
    hero: {
      badge: "E-commerce Solutions",
      title: "E-commerce Development Solutions",
      subText: "Online stores built to convert — from custom builds to fully managed Shopify storefronts.",
      primaryCtaText: "Start Your Store",
      primaryCtaLink: "/contact",
      secondaryCtaText: "See Our E-commerce Work",
      secondaryCtaLink: "/portfolio"
    },
    overview: "An e-commerce store is judged on one thing above all else: does it turn visitors into buyers. We build e-commerce platforms — most commonly on Shopify, and custom-built where the business genuinely needs functionality beyond what Shopify's ecosystem supports — with a relentless focus on browsing ease, mobile performance, and checkout simplicity. This is one of the areas we have direct, hands-on delivery experience in, having built and launched a complete Shopify storefront for a clothing brand from the ground up: theme customization, catalog structuring, and checkout optimization included.",
    problemsSolved: [
      "No existing online sales channel for a brand currently selling offline or informally.",
      "Generic, unmodified store templates that don't reflect brand identity.",
      "Poor mobile shopping experience, despite most fashion/retail traffic being mobile.",
      "Complicated product catalogs (multiple variants, sizes, colors) that confuse rather than guide customers.",
      "High cart abandonment caused by checkout friction.",
      "Inventory and order management that doesn't scale as the store grows."
    ],
    subServices: [
      {
        slug: "custom-storefront-build",
        title: "Custom E-commerce Development",
        description: "Fully bespoke cart and checkout portals designed to support custom product configurations."
      },
      {
        slug: "shopify-setup-customization",
        title: "Marketplace Development",
        description: "Multi-vendor marketplace platforms allowing multiple merchants to sell and track orders in one place."
      },
      {
        slug: "multi-vendor-marketplace-platform",
        title: "Payment Gateway Integration",
        description: "Custom integrations with global and local providers (Razorpay, Stripe, etc.) for secure checkouts."
      },
      {
        slug: "payment-shipping-integration",
        title: "Inventory Management Systems",
        description: "Syncing stock values, catalog details, and warehouses with your storefront in real time."
      },
      {
        slug: "e-commerce-conversion-optimization",
        title: "Subscription Platforms",
        description: "Recurring billing setups, billing plans, and user account portals for subscription services."
      },
      {
        slug: "inventory-order-management",
        title: "E-commerce Maintenance",
        description: "Catalog updates, database backups, checkout speed tests, and plugin patches post-launch."
      }
    ],
    features: [
      "Custom-themed storefronts aligned to brand identity, not unmodified templates",
      "Mobile-first, fast-loading design for the majority-mobile shopping audience",
      "Structured product catalogs with clean variant handling (size, color, etc.)",
      "Streamlined, low-friction checkout flow",
      "Secure payment integration",
      "Store management setup that lets your team handle day-to-day updates independently"
    ],
    technologies: ["Shopify", "Shopify Liquid", "Shopify APIs", "Node.js (for custom integrations)", "Razorpay", "Stripe", "React/Next.js (for fully custom builds beyond Shopify's scope)"],
    process: ["Discovery & Brand Alignment", "Catalog & Store Architecture Planning", "Theme/Store Design", "Development & Integration", "Mobile & Checkout Testing", "Launch", "Ongoing Store Support"],
    whyChooseUs: [
      {
        title: "Shopify Delivery",
        description: "Direct, hands-on Shopify delivery experience — not theoretical knowledge."
      },
      {
        title: "Brand-First Theme",
        description: "Brand-first approach to theme customization rather than generic templates."
      },
      {
        title: "Mobile-First Testing",
        description: "Mobile-first testing as standard, not an afterthought."
      },
      {
        title: "Independence Target",
        description: "Store management setup designed for client independence post-launch."
      },
      {
        title: "Ongoing Backup",
        description: "Ongoing support available so your store doesn't stagnate after go-live."
      }
    ],
    faqs: [
      {
        question: "Should we build on Shopify or go fully custom?",
        answer: "For most e-commerce stores, Shopify offers optimal hosting, CMS control, and secure checkouts, while custom headless builds are ideal for unique user flow interactions."
      }
    ],
    cta: {
      headline: "Let's Build a Store That Actually Sells.",
      subText: "From first product upload to a fully optimized checkout — we'll handle the build, you handle the growth.",
      primaryBtn: "Start Your Store",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "quality-assurance-testing": {
    slug: "quality-assurance-testing",
    title: "Quality Assurance & Testing",
    icon: "ShieldCheck",
    shortDescription: "Manual, automated, API, performance, and security testing to catch problems before your users do.",
    theme: {
      glow: "rgba(245, 158, 11, 0.15)",
      text: "text-amber-400",
      border: "border-amber-500",
      bg: "bg-amber-500/10",
      borderPulse: "border-amber-500/20",
      bulletBg: "bg-amber-500",
      heroPrimaryBtn: "from-amber-500 to-indigo-500 hover:from-amber-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-amber-500/20 hover:shadow-amber-500/30",
      ctaPrimaryBtn: "from-amber-500 to-indigo-500 hover:from-amber-600 hover:to-indigo-600 shadow-amber-500/10 hover:shadow-amber-500/20",
      pricingPopularBorder: "border-amber-500",
      pricingPopularBadge: "bg-amber-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(245, 158, 11, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(245, 158, 11, 0.3)] group-hover:bg-amber-500/10",
      hoverBorder: "hover:border-amber-500",
      groupHoverBorder: "group-hover:border-amber-500",
    },
    hero: {
      badge: "Quality Assurance",
      title: "Quality Assurance & Testing Services",
      subText: "Catching problems before your users do — through structured, thorough testing at every stage of development.",
      primaryCtaText: "Talk to Our Team",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Start Your Project",
      secondaryCtaLink: "/contact"
    },
    overview: "Software that hasn't been properly tested is a liability waiting to surface at the worst possible time — usually in front of a paying customer. Quality assurance is built into our development process by default, not treated as an optional final step. We combine manual testing (for usability and edge-case judgment) with automated testing (for consistency and regression prevention) to make sure what ships actually works — across devices, browsers, and real-world usage patterns, not just the \"happy path\" scenario.",
    problemsSolved: [
      "Bugs discovered by users in production instead of caught before launch.",
      "Inconsistent behavior across different browsers or devices.",
      "Slow application performance under real-world load.",
      "Security vulnerabilities left unaddressed until they're exploited.",
      "Regressions introduced by new features breaking previously working functionality.",
      "No structured testing process, relying purely on informal \"it seems to work\" checks."
    ],
    subServices: [
      {
        slug: "functional-testing",
        title: "Manual Testing",
        description: "Thorough manual walkthroughs to test layout look, button behaviors, and responsive view limits."
      },
      {
        slug: "automated-test-pipeline-setup",
        title: "Automated Testing",
        description: "Unit and integration scripts verifying core database updates and calculations on every build."
      },
      {
        slug: "performance-load-testing",
        title: "API Testing",
        description: "Validating route behaviors, input formats, and response codes under various scenarios."
      },
      {
        slug: "security-audits-vulnerability-testing",
        title: "Performance Testing",
        description: "Simulating peak visitor loads to locate database bottle-necks and load-time slowdowns."
      },
      {
        slug: "cross-browser-cross-device-testing",
        title: "Security Testing",
        description: "Sanity checks tracking common threats (XSS, injections, authentication failures) to safeguard databases."
      },
      {
        slug: "usability-accessibility-review",
        title: "Regression Testing",
        description: "Ensuring new features or bug fixes do not break existing, stable functionalities."
      }
    ],
    features: [
      "Structured test plans mapped to actual user workflows, not just isolated feature checks",
      "Cross-browser and cross-device testing coverage",
      "Automated test suites integrated into the development/deployment pipeline",
      "Clear, actionable bug reports rather than vague \"something's broken\" notes",
      "Security-conscious testing practices aligned with common vulnerability categories (OWASP-informed)"
    ],
    technologies: ["Jest (unit/integration testing)", "Postman (API testing)", "Chrome DevTools", "GitHub Actions (automated test pipelines)"],
    process: ["Test Planning", "Test Case Design", "Manual & Automated Test Execution", "Bug Reporting & Prioritization", "Retesting & Verification", "Regression Testing on Future Changes"],
    whyChooseUs: [
      {
        title: "Built-In Quality",
        description: "Testing built into our standard development process, not billed as a rushed afterthought."
      },
      {
        title: "Actionable Bug Reports",
        description: "Clear, prioritized bug reports that make fixes fast and unambiguous."
      },
      {
        title: "Regression Prevention",
        description: "Automated testing reduces the risk of regressions as your product evolves."
      },
      {
        title: "Right-Sized Scope",
        description: "Practical, right-sized testing scope based on your product's actual risk areas."
      }
    ],
    faqs: [
      {
        question: "Can you test an application built by another team?",
        answer: "Yes — we regularly perform complete functional, security, and integration audits on pre-existing codebases."
      }
    ],
    cta: {
      headline: "Don't Let Your Users Find the Bugs First.",
      subText: "Let's talk about your current testing gaps and how to close them.",
      primaryBtn: "Talk to Our Team",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "maintenance-support": {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    icon: "Activity",
    shortDescription: "Monitoring, bug fixes, performance optimization, and ongoing technical support after launch.",
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
      badge: "Maintenance & Support",
      title: "Application Maintenance & Support Services",
      subText: "Keeping your software fast, secure, and reliable post-launch with ongoing bug fixes, monitoring, and updates.",
      primaryCtaText: "Talk to Our Team",
      primaryCtaLink: "/contact",
      secondaryCtaText: "View Support Packages",
      secondaryCtaLink: "/contact"
    },
    overview: "A software product is never \"done\" when it launches. Real-world usage, server updates, browser changes, and scaling demands mean your application requires ongoing attention to remain fast, secure, and fully operational. Maintenance & Support is designed to keep your systems running smoothly, resolving bugs as they arise, applying security patches, and introducing minor enhancements to ensure your digital asset continues to deliver value long after the initial build is complete.",
    problemsSolved: [
      "Unexpected downtime or errors in production causing business disruption.",
      "Security vulnerabilities left unpatched, risking data breaches or system compromise.",
      "Sluggish performance as data grows and database queries need optimization.",
      "Software breaking due to external API changes, browser updates, or server OS upgrades.",
      "No developer on standby to handle quick bug fixes or minor content/feature updates.",
      "Lack of backups or recovery plan in case of critical server failure."
    ],
    subServices: [
      {
        slug: "24-7-server-monitoring",
        title: "Application Monitoring",
        description: "24/7 tracking of server uptime, page speeds, and system logs to identify anomalies proactively."
      },
      {
        slug: "routine-security-patching",
        title: "Bug Fixes & Enhancements",
        description: "Resolving issues and implementing minor codebase tweaks as business needs scale."
      },
      {
        slug: "performance-audits-tuning",
        title: "Performance Optimization",
        description: "Query tuning, database cleanup, and script minification to keep operations fast."
      },
      {
        slug: "database-optimization",
        title: "Security Updates",
        description: "Applying software library patches, dependency upgrades, and SSL certifications."
      },
      {
        slug: "help-desk-bug-fix-support",
        title: "Technical Support",
        description: "Direct developer assistance for operational inquiries, configuration updates, and host issues."
      },
      {
        slug: "upgrades-enhancements",
        title: "Infrastructure Maintenance",
        description: "Managing domain renewals, cloud host options, server configuration, and backup pathways."
      }
    ],
    features: [
      "Dedicated support SLA for quick response times",
      "Automated daily backups and server monitoring",
      "Proactive library and dependency updates",
      "Shared ticketing or communication channel for support requests",
      "Monthly health check reports detailing updates and uptime"
    ],
    technologies: ["Next.js", "Node.js", "React", "MongoDB", "PostgreSQL", "Vercel", "AWS", "GitHub Actions", "Sentry", "Chrome DevTools"],
    process: ["Initial Audit & Access Setup", "Support Channel & Alert configuration", "Proactive Uptime & Security Checks", "Reactive Troubleshooting & Patching", "Enhancements & Small Updates", "Monthly Health & SLA Reporting"],
    whyChooseUs: [
      {
        title: "Direct Developers",
        description: "Direct access to developers who understand your codebase, not junior support agents."
      },
      {
        title: "Proactive Prevention",
        description: "Proactive prevention instead of just waiting for critical systems to crash or fail."
      },
      {
        title: "Clear SLA Tracking",
        description: "Clear ticketing and transparent time tracking for support tasks."
      },
      {
        title: "Right-Sized Support",
        description: "Right-sized support hours that fit your business scale and budget parameters."
      }
    ],
    faqs: [
      {
        question: "Can you maintain a codebase you didn't build?",
        answer: "Yes — we start with a code audit to understand the system architecture, identify technical debt, and establish a baseline support channel."
      }
    ],
    cta: {
      headline: "Keep Your Software Running at Peak Performance.",
      subText: "Let's discuss a support plan that gives you peace of mind and keeps your product secure.",
      primaryBtn: "Talk to Our Team",
      secondaryBtn: "Schedule a Consultation"
    }
  }
};

export const subServicesList: Record<string, ServiceDetail> = {
  ...customSoftwareSubServices,
  ...webDevelopmentSubServices,
  ...mobileAppSubServices,
  ...uiUxDesignSubServices,
  ...cloudDevOpsSubServices,
  ...aiAutomationSubServices,
  ...eCommerceSolutionsSubServices,
  ...qualityAssuranceSubServices,
  ...maintenanceSupportSubServices
};
