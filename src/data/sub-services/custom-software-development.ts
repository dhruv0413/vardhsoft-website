import { ServiceDetail } from '../servicesData'

export const customSoftwareSubServices: Record<string, ServiceDetail> = {
  "enterprise-software-development": {
    slug: "enterprise-software-development",
    title: "Enterprise Software Development",
    icon: "Cpu",
    shortDescription: "Custom-built internal platforms designed to run your organization's core operations — not a rigid, one-size-fits-all system.",
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
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500",
      groupHoverBorder: "group-hover:border-teal-500",
    },
    hero: {
      badge: "Enterprise Software",
      title: "Enterprise Software Development",
      subText: "Custom-built internal platforms designed to run your organization's core operations — not a rigid, one-size-fits-all system.",
      primaryCtaText: "Start Your Project",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Enterprise software is the backbone that keeps a growing organization running — managing staff, records, operations, and the day-to-day processes that don't show up on a customer-facing website but determine whether the business actually functions efficiently. Off-the-shelf enterprise tools are built for the average organization in a category, which usually means significant compromise: workflows bent to fit the software instead of the other way around. We build enterprise platforms shaped specifically around how your organization actually operates — its departments, approval chains, records structure, and reporting needs — so the software fits the business, not the reverse.",
    problemsSolved: [
      "Core operations still running on spreadsheets, paper registers, or a patchwork of disconnected tools.",
      "Off-the-shelf enterprise software that covers general needs but breaks down for your organization's specific processes.",
      "No centralized visibility into operations across departments or locations.",
      "Manual reporting processes that take days to compile information that should be available instantly.",
      "Staff time lost to repetitive administrative tasks that could be handled by software.",
      "Data scattered across systems that don't communicate with each other."
    ],
    subServices: [
      {
        title: "Operational Workflow Mapping",
        description: "Documenting your actual processes before any software design begins."
      },
      {
        title: "Custom Data Architecture",
        description: "A database structure built around your organization's specific records and relationships, not a generic schema."
      },
      {
        title: "Role-Based Dashboards",
        description: "Different views and permissions for different staff roles (admin, department heads, general staff)."
      },
      {
        title: "Centralized Reporting",
        description: "Structured data that makes organization-wide reporting fast and reliable instead of a manual compilation exercise."
      },
      {
        title: "Multi-Department Support",
        description: "Systems designed to handle distinct but connected departments or business units within one platform."
      },
      {
        title: "Audit Trails & Records History",
        description: "Tracking changes and activity for accountability and historical reference."
      }
    ],
    features: [
      "Built around your organization's actual structure and approval chains",
      "Scalable to support growth in staff, departments, or locations",
      "Role-based access control to protect sensitive information",
      "Centralized data eliminating duplicate entry across departments",
      "Custom reporting dashboards replacing manual compilation",
      "Designed for adoption by non-technical staff, not just power users"
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "REST APIs", "Tailwind CSS", "role-based authentication (JWT/OAuth)"],
    process: ["Operational Discovery & Process Mapping", "Data Architecture Planning", "UI Design per Role", "Iterative Development", "Department-Level Testing", "Staff Rollout & Training Support", "Ongoing Support"],
    whyChooseUs: [
      {
        title: "Workflow First",
        description: "We map your actual workflow before writing a line of code, not after."
      },
      {
        title: "Direct Access",
        description: "Direct access to the engineers building your system."
      },
      {
        title: "User Adoption Target",
        description: "Designed for realistic staff adoption, not just technical completeness."
      },
      {
        title: "Future Proof",
        description: "Built to scale with your organization's growth, not just its current size."
      }
    ],
    faqs: [
      {
        question: "How is this different from buying enterprise software off the shelf?",
        answer: "Off-the-shelf enterprise tools are built for the average organization in your category; a custom build is shaped around your organization's specific structure, approval processes, and data — which usually means far less workaround once it's live, at the tradeoff of a longer initial build versus an instant subscription."
      },
      {
        question: "Can the system handle multiple departments or locations?",
        answer: "Yes — multi-department and multi-location support is a common requirement we design for directly, including role-based visibility so each team sees only what's relevant to them."
      },
      {
        question: "Will our non-technical staff be able to use this easily?",
        answer: "Adoption by non-technical staff is a core design priority — we test workflows specifically with the actual end users in mind, not just technical stakeholders."
      },
      {
        question: "Can this integrate with software we already use (accounting, HR, etc.)?",
        answer: "Yes, API integration with existing tools is a standard part of enterprise builds where relevant."
      }
    ],
    cta: {
      headline: "Ready to Replace the Spreadsheets Running Your Organization?",
      subText: "Let's map your actual operations and see what a purpose-built system could look like.",
      primaryBtn: "Start Your Project",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "saas-product-development": {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    icon: "Cpu",
    shortDescription: "From first concept to a scalable, production-ready subscription platform — built to support real users and real growth.",
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
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500",
      groupHoverBorder: "group-hover:border-teal-500",
    },
    hero: {
      badge: "SaaS Development",
      title: "SaaS Product Development",
      subText: "From first concept to a scalable, production-ready subscription platform — built to support real users and real growth.",
      primaryCtaText: "Start Your SaaS Build",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to Our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "Building a SaaS product is fundamentally different from building a one-off website or internal tool — it needs to support multiple customers (tenants) simultaneously, handle subscription billing, scale as usage grows, and stay maintainable as you continuously ship new features after launch. We help founders and businesses take a SaaS idea from concept through to a working MVP, and from MVP through to a scalable production platform — with architecture decisions made upfront that won't force a costly rebuild once you start gaining real traction.",
    problemsSolved: [
      "An idea for a SaaS product with no technical team to build it.",
      "An existing MVP that was built quickly but can't scale or is difficult to maintain.",
      "Uncertainty about which features are essential for a first launch versus what can wait.",
      "No subscription billing or multi-tenant architecture in place.",
      "Slow development velocity making it hard to ship new features to stay competitive.",
      "Technical debt accumulating from early, rushed development decisions."
    ],
    subServices: [
      {
        title: "MVP Scoping & Prioritization",
        description: "Helping define the minimum feature set needed to validate your product with real users."
      },
      {
        title: "Multi-Tenant Architecture",
        description: "Designing the system so multiple customer accounts run securely and efficiently on shared infrastructure."
      },
      {
        title: "Subscription & Billing Integration",
        description: "Recurring payment setup (Stripe, Razorpay) including plan tiers, upgrades, and cancellations."
      },
      {
        title: "User Onboarding Flows",
        description: "Signup, authentication, and first-use experience designed to reduce drop-off."
      },
      {
        title: "Admin & Analytics Dashboards",
        description: "Internal tooling for you to monitor usage, customers, and product health."
      },
      {
        title: "Scalable Infrastructure Setup",
        description: "Hosting and architecture built to handle growth without a rebuild at each stage."
      }
    ],
    features: [
      "Multi-tenant data architecture with proper account isolation",
      "Subscription billing with plan management built in",
      "Fast iteration cycles to support continuous feature shipping post-launch",
      "Secure authentication and role-based access within customer accounts",
      "Analytics-ready structure for tracking product usage and growth metrics",
      "Architecture built to scale from first users to significant growth without a full rewrite"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB/PostgreSQL", "Stripe/Razorpay", "Vercel", "AWS"],
    process: ["Product Discovery & MVP Scoping", "Architecture Planning", "UI/UX Design", "Iterative Development (Sprint-Based)", "Testing & QA", "Launch", "Post-Launch Feature Development & Support"],
    whyChooseUs: [
      {
        title: "Built for Scale",
        description: "Architecture decisions made with future scale in mind from day one."
      },
      {
        title: "Full-Stack Control",
        description: "Full-stack capability across frontend, backend, billing, and infrastructure under one team."
      },
      {
        title: "Agile Sprints",
        description: "Iterative, sprint-based delivery so you see continuous progress, not a long black-box build."
      },
      {
        title: "No Feature Bloat",
        description: "Honest MVP scoping — we'll push back on feature bloat that delays your launch."
      }
    ],
    faqs: [
      {
        question: "How do you decide what goes into the MVP versus a later release?",
        answer: "We prioritize based on what's needed to validate the core value proposition with real users — features that are \"nice to have\" but not essential to that validation get deferred to a post-launch roadmap, so you launch faster and learn from real usage sooner."
      },
      {
        question: "Can you take over an existing SaaS codebase built by someone else?",
        answer: "Yes — we start with a technical audit of the existing codebase to assess what's salvageable and what needs rebuilding, then plan a path forward that avoids unnecessary rework."
      },
      {
        question: "Do you handle subscription billing and payment processing?",
        answer: "Yes, including plan tiers, upgrades/downgrades, and cancellation flows, integrated with providers like Stripe or Razorpay."
      },
      {
        question: "How do you ensure the product can scale as we grow?",
        answer: "We design multi-tenant data architecture and infrastructure with growth in mind from the start, avoiding common early-stage shortcuts that create expensive rebuilds later."
      }
    ],
    cta: {
      headline: "Have a SaaS Idea That's Ready to Become Real Software?",
      subText: "Let's scope your MVP and get a clear path to launch.",
      primaryBtn: "Start Your SaaS Build",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "crm-erp-development": {
    slug: "crm-erp-development",
    title: "Custom CRM & ERP Development",
    icon: "Cpu",
    shortDescription: "Systems for managing customers, resources, and operations — built around your actual processes, not a rigid configuration.",
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
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500",
      groupHoverBorder: "group-hover:border-teal-500",
    },
    hero: {
      badge: "CRM & ERP",
      title: "Custom CRM & ERP Development",
      subText: "Systems for managing customers, resources, and operations — built around your actual processes, not a rigid configuration.",
      primaryCtaText: "Start Your Project",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Off-the-shelf CRM and ERP platforms are powerful, but they're built to serve a broad range of businesses — which often means your team spends more time configuring workarounds than actually using the system productively. A custom-built CRM or ERP is designed around your specific sales process, customer data structure, resource planning needs, and reporting requirements from the start — giving your team a tool that matches how you actually work, without unnecessary features cluttering the interface or missing capabilities forcing workarounds elsewhere.",
    problemsSolved: [
      "Generic CRM/ERP platforms with rigid workflows that don't match your sales or operations process.",
      "Paying for expensive licenses covering features your team never uses.",
      "Customer or resource data structured in a way that doesn't reflect how your business actually categorizes information.",
      "Reporting limitations in off-the-shelf tools that require manual export and manipulation.",
      "Integration difficulties connecting an off-the-shelf CRM/ERP with your other business systems.",
      "Staff resistance to adopting a system that feels disconnected from their actual daily workflow."
    ],
    subServices: [
      {
        title: "Sales/Operations Process Mapping",
        description: "Documenting your actual pipeline, resource planning, or operational flow before design begins."
      },
      {
        title: "Custom Data Models",
        description: "Structuring customer, inventory, or resource data to match your business's specific categorization."
      },
      {
        title: "Pipeline & Workflow Automation",
        description: "Automating stage transitions, notifications, and follow-ups within your sales or operations process."
      },
      {
        title: "Custom Reporting & Dashboards",
        description: "Reports built around the metrics that actually matter to your business."
      },
      {
        title: "Third-Party Integrations",
        description: "Connecting to email, accounting, or other tools your team already relies on."
      },
      {
        title: "Role-Based Access",
        description: "Appropriate visibility and permissions across sales, operations, and management roles."
      }
    ],
    features: [
      "Built around your actual sales pipeline or operational workflow",
      "Custom fields and data structures matching your business's terminology and categorization",
      "Automated notifications and follow-up reminders within the workflow",
      "Reporting dashboards tailored to metrics you actually track",
      "Integration-ready design for connecting with existing tools",
      "No unused feature clutter — only what your team actually needs"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "MongoDB", "REST APIs", "Tailwind CSS"],
    process: ["Process & Pipeline Discovery", "Data Model Design", "UI Design", "Iterative Development", "Staff Testing & Feedback", "Rollout & Training Support", "Ongoing Support"],
    whyChooseUs: [
      {
        title: "Process Customization",
        description: "Built around your specific process, not configured around a rigid template."
      },
      {
        title: "Developer Contact",
        description: "Direct engineering access rather than a licensing/support ticket relationship."
      },
      {
        title: "Lean & Focus",
        description: "No unnecessary feature bloat driving up cost and complexity."
      },
      {
        title: "Adoption Driven",
        description: "Designed with staff adoption in mind, not just technical functionality."
      }
    ],
    faqs: [
      {
        question: "Why build custom instead of using Salesforce, HubSpot, or SAP?",
        answer: "Off-the-shelf platforms are strong general-purpose tools, but they come with licensing costs, feature bloat, and configuration limitations. A custom build makes sense when your process is specific enough that configuration workarounds are costing you more in time and staff frustration than a purpose-built system would cost to develop."
      },
      {
        question: "Can you migrate our existing CRM/ERP data into a custom system?",
        answer: "Yes — data migration planning is part of our process for any project replacing an existing system, to ensure historical records aren't lost."
      },
      {
        question: "How long does a custom CRM/ERP build typically take?",
        answer: "It depends on the complexity of your process and data model — a focused CRM might take several weeks, while a more comprehensive ERP system spanning multiple operational areas takes longer. We scope this precisely after discovery."
      },
      {
        question: "Will this integrate with our existing accounting or email tools?",
        answer: "Yes, third-party integrations are a standard part of these builds where APIs are available from the other tools involved."
      }
    ],
    cta: {
      headline: "Tired of Configuring Around Software That Doesn't Fit?",
      subText: "Let's build a CRM or ERP shaped around how your business actually works.",
      primaryBtn: "Start Your Project",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "business-process-automation": {
    slug: "business-process-automation",
    title: "Business Process Automation",
    icon: "Cpu",
    shortDescription: "Turning repetitive manual work into automated workflows — freeing your team to focus on what actually needs a human.",
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
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500",
      groupHoverBorder: "group-hover:border-teal-500",
    },
    hero: {
      badge: "Process Automation",
      title: "Business Process Automation",
      subText: "Turning repetitive manual work into automated workflows — freeing your team to focus on what actually needs a human.",
      primaryCtaText: "Start Automating",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to Our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "Every growing business accumulates repetitive processes — data entry, approvals, notifications, report generation, status updates — that consume staff time without requiring real judgment. Business process automation identifies these workflows and builds software to handle them automatically, reducing errors, freeing up staff time for higher-value work, and making operations more consistent and predictable. We start by understanding your actual process end-to-end, then design automation that fits into your existing tools and workflow rather than forcing a disruptive overhaul.",
    problemsSolved: [
      "Staff spending significant time on repetitive, rules-based tasks.",
      "Manual data entry between systems that don't communicate with each other.",
      "Inconsistent process execution due to manual steps being skipped or done differently by different staff.",
      "Delayed approvals or notifications due to manual follow-up requirements.",
      "Errors introduced by manual, repetitive data handling.",
      "Difficulty scaling operations because processes are tied to manual staff capacity."
    ],
    subServices: [
      {
        title: "Process Audit & Mapping",
        description: "Identifying which workflows are genuinely good automation candidates versus those needing human judgment."
      },
      {
        title: "Workflow Automation Design",
        description: "Mapping the automated logic, triggers, and exception handling for each process."
      },
      {
        title: "System Integration",
        description: "Connecting the tools and data sources involved in the automated workflow."
      },
      {
        title: "Notification & Approval Automation",
        description: "Automated alerts, reminders, and routing for approval-based processes."
      },
      {
        title: "Data Sync Automation",
        description: "Keeping information consistent across systems without manual re-entry."
      },
      {
        title: "Exception Handling Design",
        description: "Ensuring edge cases are flagged for human review rather than silently mishandled."
      }
    ],
    features: [
      "Automation scoped to genuinely repetitive, rules-based tasks",
      "Integration with your existing tools rather than requiring a full system replacement",
      "Clear exception handling so edge cases are flagged, not silently processed incorrectly",
      "Reduced manual data entry and associated error rates",
      "Faster process execution (approvals, notifications, reporting)",
      "Designed for maintainability as your processes evolve"
    ],
    technologies: ["Node.js", "Python", "REST APIs", "Webhooks", "MongoDB/PostgreSQL"],
    process: ["Process Audit & Automation Candidate Identification", "Workflow Design", "Integration & Development", "Exception Handling Testing", "Staff Rollout", "Monitoring & Refinement"],
    whyChooseUs: [
      {
        title: "Smart Automation Scopes",
        description: "We identify genuine automation opportunities rather than automating everything indiscriminately."
      },
      {
        title: "Existing Tool Respect",
        description: "Integration-focused approach that respects your existing toolset."
      },
      {
        title: "Careful Exception Safety",
        description: "Careful exception handling design, not just happy-path automation."
      },
      {
        title: "Iterative Refinements",
        description: "Ongoing refinement as your processes evolve."
      }
    ],
    faqs: [
      {
        question: "How do you decide what should be automated versus left manual?",
        answer: "We look for tasks that are repetitive, rules-based, and don't require nuanced human judgment — anything requiring case-by-case discretion is generally better left manual, or designed as an automation with a human-review step built in."
      },
      {
        question: "Will automation replace staff roles?",
        answer: "Most process automation we build is designed to remove repetitive administrative burden, freeing staff for higher-value work rather than eliminating roles outright — though the specific impact depends entirely on your business and the processes involved."
      },
      {
        question: "Can automation integrate with the tools we already use?",
        answer: "Yes, integrating with your existing systems (via APIs or webhooks) is central to how we approach automation projects, rather than requiring you to adopt entirely new tools."
      },
      {
        question: "What happens when an automated process hits an edge case it can't handle?",
        answer: "We design explicit exception handling so unusual cases are flagged for human review rather than processed incorrectly or silently — this is a core part of the automation design, not an afterthought."
      }
    ],
    cta: {
      headline: "How Much Staff Time Is Going to Tasks a System Could Handle?",
      subText: "Let's map your processes and find out what's worth automating.",
      primaryBtn: "Start Automating",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "api-development-integration": {
    slug: "api-development-integration",
    title: "API Development & Integration",
    icon: "Cpu",
    shortDescription: "Secure, well-structured APIs that connect your systems — and reliable integrations with the third-party tools you already depend on.",
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
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500",
      groupHoverBorder: "group-hover:border-teal-500",
    },
    hero: {
      badge: "APIs & Integrations",
      title: "API Development & Integration",
      subText: "Secure, well-structured APIs that connect your systems — and reliable integrations with the third-party tools you already depend on.",
      primaryCtaText: "Start Your Integration",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Modern software rarely operates in isolation — applications need to talk to payment processors, third-party platforms, internal systems, and external partners. We build APIs designed for clarity, security, and long-term maintainability, and handle integration work connecting your systems to the third-party services your business relies on. Whether you need a new API built from scratch to support a mobile app or partner integration, or need an existing system connected to external tools, we approach this with the same discipline: clear documentation, proper error handling, and security built in from the start.",
    problemsSolved: [
      "No API currently exists to support a mobile app, partner integration, or third-party connection.",
      "Existing APIs that are poorly documented, inconsistent, or difficult to maintain.",
      "Manual data transfer between systems that should be automated via integration.",
      "Security gaps in existing API authentication or data handling.",
      "Third-party services (payment, shipping, email, etc.) that need to be connected to your platform.",
      "Slow or unreliable API performance affecting application responsiveness."
    ],
    subServices: [
      {
        title: "API Design & Architecture",
        description: "Structuring endpoints, data models, and authentication for clarity and long-term maintainability."
      },
      {
        title: "RESTful & GraphQL API Development",
        description: "Building APIs using the approach best suited to your data complexity."
      },
      {
        title: "Third-Party Integration",
        description: "Connecting to external services (payment gateways, shipping providers, email platforms, CRMs, etc.)."
      },
      {
        title: "Authentication & Security",
        description: "Implementing token-based authentication (JWT, OAuth) and proper access control."
      },
      {
        title: "API Documentation",
        description: "Clear, structured documentation so your team or external partners can work with the API confidently."
      },
      {
        title: "Webhook Implementation",
        description: "Real-time event handling for systems that need to react to changes as they happen."
      }
    ],
    features: [
      "Clean, well-documented endpoint structure",
      "Secure, token-based authentication and access control",
      "Error handling designed for clarity, not cryptic failure states",
      "Rate limiting and performance considerations built in for production use",
      "Structured for versioning, so future changes don't break existing integrations",
      "Tested thoroughly using tools like Postman before deployment"
    ],
    technologies: ["Node.js", "Express.js", "Next.js API Routes", "REST APIs", "GraphQL", "JWT/OAuth 2.0", "Postman", "MongoDB", "PostgreSQL"],
    process: ["Requirement & Integration Discovery", "API/Integration Architecture Design", "Development", "Security Review", "API Testing (Postman)", "Documentation", "Deployment & Monitoring"],
    whyChooseUs: [
      {
        title: "Documentation Centered",
        description: "APIs built with documentation and long-term maintainability in mind, not just functional endpoints."
      },
      {
        title: "Security Native",
        description: "Security treated as a core requirement, not an afterthought."
      },
      {
        title: "Proven Connections",
        description: "Experience integrating a range of third-party services (payment, e-commerce, communication tools)."
      },
      {
        title: "Rigorous Test Suites",
        description: "Thorough testing before anything reaches production."
      }
    ],
    faqs: [
      {
        question: "Do you build REST APIs, GraphQL APIs, or both?",
        answer: "Both, depending on your data needs — REST for most standard use cases, GraphQL when your frontend requires flexible, nested data queries that REST handles inefficiently."
      },
      {
        question: "Can you integrate our platform with [specific third-party service]?",
        answer: "In most cases, yes — if the third-party service offers an API (which the vast majority of modern platforms do), we can build the integration. We'll confirm feasibility during discovery based on the specific service's documentation."
      },
      {
        question: "How do you handle API security?",
        answer: "Through token-based authentication (JWT/OAuth), proper access control, input validation, and rate limiting — security is built into the API design from the start, not added after the fact."
      },
      {
        question: "Will we get documentation for the API you build?",
        answer: "Yes, clear API documentation is a standard deliverable, so your team or any external partners can work with the API confidently without needing us for every question."
      }
    ],
    cta: {
      headline: "Need Your Systems to Actually Talk to Each Other?",
      subText: "Let's design an API or integration that's secure, reliable, and built to last.",
      primaryBtn: "Start Your Integration",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "legacy-system-modernization": {
    slug: "legacy-system-modernization",
    title: "Legacy System Modernization",
    icon: "Cpu",
    shortDescription: "Rebuilding outdated systems on modern technology — without disrupting the operations that depend on them.",
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
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500",
      groupHoverBorder: "group-hover:border-teal-500",
    },
    hero: {
      badge: "Modernization",
      title: "Legacy System Modernization",
      subText: "Rebuilding outdated systems on modern technology — without disrupting the operations that depend on them.",
      primaryCtaText: "Start Your Modernization",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to Our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "Legacy systems accumulate risk quietly — outdated technology becomes harder to maintain, harder to secure, and harder to find developers who understand it, while the business built around it keeps depending on it working every day. Modernization isn't just a technical upgrade; it's a careful process of understanding what the existing system actually does (including the undocumented quirks that have become part of how the business operates), then rebuilding it on modern, maintainable technology with minimal disruption to ongoing operations.",
    problemsSolved: [
      "Systems built on outdated technology that's difficult or expensive to maintain.",
      "Increasing difficulty finding developers familiar with an old technology stack.",
      "Security vulnerabilities in unpatched or unsupported legacy platforms.",
      "Slow performance that legacy architecture can't resolve without a rebuild.",
      "Legacy systems that block integration with modern tools and APIs.",
      "Fear of migration risk keeping a business locked into a system it's outgrown."
    ],
    subServices: [
      {
        title: "Legacy System Audit",
        description: "A thorough review of the existing system's functionality, data, and undocumented business logic."
      },
      {
        title: "Migration Strategy Planning",
        description: "A phased approach designed to minimize disruption to ongoing operations."
      },
      {
        title: "Data Migration",
        description: "Carefully moving historical data into the new system without loss or corruption."
      },
      {
        title: "Modern Rebuild",
        description: "Reconstructing core functionality on current, maintainable technology."
      },
      {
        title: "Parallel-Run Support",
        description: "Where appropriate, running old and new systems in parallel during transition to reduce risk."
      },
      {
        title: "Staff Retraining Support",
        description: "Helping your team transition to the new system smoothly."
      }
    ],
    features: [
      "Careful discovery to preserve business logic that isn't documented anywhere",
      "Phased migration approach to minimize operational disruption",
      "Modern, secure, and maintainable technology replacing outdated infrastructure",
      "Data integrity prioritized throughout the migration process",
      "Improved performance and scalability as a direct result of modernization",
      "Reduced long-term maintenance risk and dependency on hard-to-find legacy skills"
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "migration/ETL scripting tools", "Vercel", "AWS"],
    process: ["Legacy System Audit", "Migration Strategy & Risk Planning", "Data Migration Planning", "Modern Rebuild (Phased)", "Parallel Testing", "Cutover", "Post-Migration Support"],
    whyChooseUs: [
      {
        title: "Risk-Aware Approach",
        description: "Careful, risk-aware approach rather than a rushed \"rip and replace\"."
      },
      {
        title: "Preserves Logic",
        description: "Experience treating undocumented legacy behavior as real requirements, not noise to ignore."
      },
      {
        title: "True Tech Upgrade",
        description: "Modern technology stack that resolves the root maintainability problem, not just a surface refresh."
      },
      {
        title: "Supportive Transition",
        description: "Ongoing support through the transition, not a handoff the moment the new system is live."
      }
    ],
    faqs: [
      {
        question: "Will modernizing our system disrupt our current operations?",
        answer: "We plan migrations specifically to minimize disruption — often using a phased approach or parallel-run period so your team can continue operating on the legacy system until the new one is fully verified."
      },
      {
        question: "How do you make sure we don't lose functionality the old system had, even if it's undocumented?",
        answer: "Our audit phase specifically looks for undocumented business logic and quirks that staff have built workflows around — this is one of the most important (and most often skipped) part of a responsible modernization project."
      },
      {
        question: "What happens to our historical data during migration?",
        answer: "Data migration is planned and tested carefully as its own phase of the project, with verification steps to confirm data integrity before the legacy system is retired."
      },
      {
        question: "How do we know if our system actually needs modernization versus incremental fixes?",
        answer: "We're honest about this during the audit — sometimes targeted fixes or partial upgrades solve the real problem without the cost and risk of a full modernization. We'll recommend the right-sized approach, not automatically the biggest project."
      }
    ],
    cta: {
      headline: "Still Depending on a System You're Afraid to Touch?",
      subText: "Let's audit what you have and map out a modernization path that doesn't put your operations at risk.",
      primaryBtn: "Start Your Modernization",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
