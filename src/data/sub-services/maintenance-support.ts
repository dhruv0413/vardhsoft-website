import { ServiceDetail } from '../servicesData'

export const maintenanceSupportSubServices: Record<string, ServiceDetail> = {
  "24-7-server-monitoring": {
    slug: "24-7-server-monitoring",
    title: "24/7 Server Monitoring",
    icon: "Activity",
    shortDescription: "Continuous tracking of server uptime, page speeds, and API endpoints to catch anomalies proactively.",
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
      badge: "Uptime Monitoring",
      title: "24/7 Server & System Monitoring",
      subText: "Catch outages before your users do. We configure real-time server health checks and alert pipelines.",
      primaryCtaText: "Setup Monitoring",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "Undetected server memory leaks or expired SSL keys can cause system downtime without warnings. 24/7 Server Monitoring implements continuous health checking dashboards, monitoring memory, database loads, and API endpoints to send immediate notifications to our standby developers.",
    problemsSolved: [
      "Unexpected server crashes during high traffic spikes.",
      "Expired SSL certificates blocking API connections.",
      "Unnoticed memory leaks causing gradual slowdowns.",
      "Delayed notifications during system outages.",
      "Lack of log files to diagnose checkout errors.",
      "Unknown cloud host resource bottlenecks."
    ],
    subServices: [
      {
        title: "Uptime Health Checks",
        description: "Configuring automated HTTP ping triggers to verify system availability every minute."
      },
      {
        title: "Server Memory Auditing",
        description: "Monitoring CPU usage and memory limits on AWS EC2 or cloud database hosts."
      },
      {
        title: "SSL Certificate Checks",
        description: "Configuring tracking alerts to notify the team before SSL certificates expire."
      },
      {
        title: "Telemetry Logging Integration",
        description: "Integrating logger dashboards (Sentry/CloudWatch) to capture runtime application errors."
      },
      {
        title: "SMS Alert Configurations",
        description: "Piping outage alerts directly to standby developers via Twilio or Slack."
      },
      {
        title: "Monthly Health Reporting",
        description: "Compiling monthly uptime audits and recommendations to improve server stability."
      }
    ],
    features: [
      "Continuous server uptime and speed checks",
      "Real-time tracking of memory and CPU limits",
      "SSL certificate expiration tracking alerts",
      "Error log integrations via Sentry dashboards",
      "Standby developer notifications for outages",
      "Monthly health check reporting logs"
    ],
    technologies: ["Sentry", "AWS CloudWatch", "Datadog", "Uptime Robot", "Slack webhooks", "Linux scripting"],
    process: ["Requirements Discovery", "Monitoring Tools Integration", "Alert Thresholds Setup", "DNS & SSL Auditing", "Staging Alert Checks", "Monitoring Launch"],
    whyChooseUs: [
      {
        title: "Proactive Response",
        description: "We identify and resolve issues before users experience slow loads or outages."
      },
      {
        title: "Real-Time Telemetry",
        description: "System health metrics are logged and monitored continuously."
      },
      {
        title: "Standby Support",
        description: "Alerts notify developers directly to speed up resolution times."
      },
      {
        title: "Comprehensive Logs",
        description: "Detailed error logs simplify debugging and prevent recurring issues."
      }
    ],
    faqs: [
      {
        question: "How quickly do you respond to server alerts?",
        answer: "Under our support SLAs, critical outage alerts notify developers directly, with response times typically under 15 minutes."
      },
      {
        question: "Will monitoring scripts slow down our application?",
        answer: "No, monitoring tools run asynchronously in the background and have no impact on page load speeds."
      },
      {
        question: "Can we view the monitoring dashboards ourselves?",
        answer: "Yes, we provide access to CloudWatch or Datadog dashboards so you can check metrics in real-time."
      },
      {
        question: "Do you monitor database connection limits?",
        answer: "Yes, we monitor connection pools and query speeds to identify database bottlenecks before they cause outages."
      }
    ],
    cta: {
      headline: "Is Your App Protected Against Unexpected Outages?",
      subText: "Let's configure real-time monitoring and alert systems to keep your servers running smoothly.",
      primaryBtn: "Setup Monitoring",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "routine-security-patching": {
    slug: "routine-security-patching",
    title: "Routine Security Patching",
    icon: "Activity",
    shortDescription: "Applying software updates, patching database vulnerabilities, and managing third-party dependency keys.",
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
      badge: "Security Patching",
      title: "Routine Security Patching & Upgrades",
      subText: "Keep dependencies secure. We patch software libraries, update database packages, and manage credentials.",
      primaryCtaText: "Schedule Patching",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Security Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "Unpatched dependencies are a primary entry point for hackers. Routine Security Patching monitors and updates NPM/Yarn packages, OS configurations, and database engines, applying security updates to protect customer data.",
    problemsSolved: [
      "Known vulnerabilities in unpatched software packages.",
      "Outdated server OS versions lacking security support.",
      "Weak or expired API credentials.",
      "Failing security reviews from corporate clients.",
      "Risks of database SQL injection exploits.",
      "Manual package update tasks eating up developer hours."
    ],
    subServices: [
      {
        title: "Dependency Security Scans",
        description: "Setting up automated tools (Snyk/GitHub Dependabot) to flag package vulnerabilities."
      },
      {
        title: "NPM & Yarn Package Updates",
        description: "Upgrading package dependencies and testing for compatibility issues."
      },
      {
        title: "Server OS Patching",
        description: "Updating operating system packages and security libraries on cloud hosts."
      },
      {
        title: "API Credential Audits",
        description: "Rotating database passwords and API tokens on a regular schedule."
      },
      {
        title: "SQL Injection Audits",
        description: "Reviewing code database queries to ensure input validation blocking is intact."
      },
      {
        title: "Compliance Verification",
        description: "Documenting updates to verify compliance with industry security guidelines."
      }
    ],
    features: [
      "Automated package vulnerability scanning",
      "Regular NPM and Yarn package upgrades",
      "Scheduled server OS security patching",
      "API credential rotation schedules",
      "SQL injection prevention reviews",
      "Update documentation for compliance reviews"
    ],
    technologies: ["Dependabot", "Snyk", "NPM Audit", "Linux updates", "Git config"],
    process: ["Security Vulnerability Audit", "Patch Schedule Planning", "Staging Environment Testing", "Package Upgrades Execution", "Credential Rotation Setup", "Compliance Update Logging"],
    whyChooseUs: [
      {
        title: "Saves Developer Time",
        description: "Automated alert scans identify dependency updates instantly."
      },
      {
        title: "Prevents Exploits",
        description: "Regular OS patching keeps systems protected against exploits."
      },
      {
        title: "Staging Verified",
        description: "Updates are fully verified in staging to prevent breaking live features."
      },
      {
        title: "Compliance Documented",
        description: "Update logs provide documentation for security compliance audits."
      }
    ],
    faqs: [
      {
        question: "Will patching dependencies break our website?",
        answer: "We test all upgrades in a staging environment first, resolving any compatibility issues before updating production."
      },
      {
        question: "How often do you run security patches?",
        answer: "We run security scans weekly, applying critical security patches immediately and scheduled package updates monthly."
      },
      {
        question: "Do you manage database credentials?",
        answer: "Yes, we rotate database passwords and API keys using encrypted environment variables to prevent exposure."
      },
      {
        question: "Can Dependabot run updates automatically?",
        answer: "We configure Dependabot alerts, but manual QA validation in staging is required before merging updates to prevent layout breaks."
      }
    ],
    cta: {
      headline: "Are Your Software Libraries Outdated and Vulnerable?",
      subText: "Let's schedule a security patch audit to upgrade packages and secure configurations.",
      primaryBtn: "Schedule Patching",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "performance-audits-tuning": {
    slug: "performance-audits-tuning",
    title: "Performance Audits & Tuning",
    icon: "Activity",
    shortDescription: "Conducting PageSpeed audits, tuning server configurations, and optimizing frontend files to maintain page speeds.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-indigo-600",
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
      badge: "Performance Tuning",
      title: "Performance Audits & Tuning",
      subText: "Optimize page speed. We run detailed audits, compress visual assets, and tune server caching to keep applications fast.",
      primaryCtaText: "Audit Performance",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a DevOps Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Slow loading speeds cause higher visitor bounce rates and hurt SEO index rankings. Performance Audits & Tuning runs detailed audits of page assets, optimizing server settings and image formats to keep load speeds fast.",
    problemsSolved: [
      "Slow page loading speeds causing users to bounce.",
      "Poor Lighthouse SEO rankings due to unoptimized assets.",
      "Bloated JavaScript files delaying interface responsiveness.",
      "High data transfer costs on mobile connections.",
      "Lack of page-caching optimizations on servers.",
      "Layout shifts frustrating mobile users."
    ],
    subServices: [
      {
        title: "Lighthouse Performance Auditing",
        description: "Analyzing Core Web Vitals to identify speed and rendering bottlenecks."
      },
      {
        title: "Image & Media Optimization",
        description: "Compressing images and migrating assets to WebP formats for faster loading."
      },
      {
        title: "JavaScript Code Splitting",
        description: "Modularizing code scripts to ensure browsers only download necessary assets."
      },
      {
        title: "Server Caching Setup",
        description: "Configuring cache settings on Vercel or Cloudflare CDN edge networks."
      },
      {
        title: "Layout Shift Corrections",
        description: "Writing layout adjustments to eliminate mobile screen layout shifts."
      },
      {
        title: "Performance Tuning Reports",
        description: "Compiling speed metrics and recommendations for optimization sprints."
      }
    ],
    features: [
      "Core Web Vitals auditing and speed optimization",
      "WebP image conversion and asset compression",
      "JavaScript bundle splitting reducing download weights",
      "Cloudflare edge caching configurations",
      "Layout styling fixes resolving layout shifts",
      "Actionable PageSpeed optimization reports"
    ],
    technologies: ["Lighthouse", "WebP converter", "Webpack bundle analyzer", "Cloudflare CDN", "Chrome DevTools"],
    process: ["Performance Score Audit", "Image & Asset Compression", "JavaScript Code Splitting", "CDN Caching Setup", "Layout Styling Adjustments", "Final Speed Verification"],
    whyChooseUs: [
      {
        title: "PageSpeed Certified",
        description: "We optimize all assets to hit perfect Lighthouse performance scores."
      },
      {
        title: "Low Data Footprint",
        description: "Image WebP conversions lower mobile bandwidth usage."
      },
      {
        title: "Edge Caching",
        description: "CDN optimizations deliver data in milliseconds globally."
      },
      {
        title: "Flicker-Free UI",
        description: "Layout shift fixes ensure page content loads smoothly without jumps."
      }
    ],
    faqs: [
      {
        question: "Why is our website getting slower over time?",
        answer: "As images are added and code files accumulate, page weights grow. Regular speed audits compress files and optimize scripting to maintain performance."
      },
      {
        question: "What are Core Web Vitals?",
        answer: "A set of page speed and rendering stability metrics defined by Google, used directly in mobile search index rankings."
      },
      {
        question: "Will optimizations change the look of our images?",
        answer: "No. We use modern, lossless WebP compression formats to keep images looking crisp while reducing file weights by up to 70%."
      },
      {
        question: "How long does a speed optimization sprint take?",
        answer: "A focused speed optimization sprint typically takes 1 to 2 weeks, yielding immediate load time improvements."
      }
    ],
    cta: {
      headline: "Is Your Software Speed Delaying Sales and Conversions?",
      subText: "Let's run a performance audit and optimize your assets to keep page load speeds fast.",
      primaryBtn: "Audit Performance",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "database-optimization": {
    slug: "database-optimization",
    title: "Database Optimization",
    icon: "Activity",
    shortDescription: "Tuning SQL/NoSQL databases, indexing queries, and organizing tables to maintain fast load speeds.",
    theme: {
      glow: "rgba(99, 102, 241, 0.15)",
      text: "text-indigo-400",
      border: "border-indigo-500",
      bg: "bg-indigo-500/10",
      borderPulse: "border-indigo-500/20",
      bulletBg: "bg-indigo-500",
      heroPrimaryBtn: "from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-indigo-600",
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
      badge: "Database Tuning",
      title: "Database Optimization & Tuning",
      subText: "Optimize database performance. We audit query logs, set up indexing rules, and configure connection pools for speed.",
      primaryCtaText: "Tune Database",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Database Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "As database records grow, unindexed queries take longer, causing slow page loads. Database Optimization analyzes query logs, adds table indexes, and configures cache layers to keep database lookups fast.",
    problemsSolved: [
      "Slow search query response times as databases grow.",
      "Connection limit errors during traffic spikes.",
      "High monthly database hosting costs.",
      "Duplicate records causing data processing errors.",
      "Unsynchronized staging and production databases.",
      "Lack of clean database backup schedules."
    ],
    subServices: [
      {
        title: "Slow Query Analysis",
        description: "Checking database logs to identify queries causing speed bottlenecks."
      },
      {
        title: "Table Index Tuning",
        description: "Adding index variables to table columns to speed up query execution."
      },
      {
        title: "Connection Pool Tuning",
        description: "Configuring server connection pools to prevent timeout errors during surges."
      },
      {
        title: "Redis Cache Setup",
        description: "Integrating memory caches to store frequent database queries."
      },
      {
        title: "Database Cleanups",
        description: "Archiving old log records and cleaning up tables to free up storage space."
      },
      {
        title: "Automated Backup Setup",
        description: "Setting up daily encrypted backup snapshots to ensure data safety."
      }
    ],
    features: [
      "Slow database query analysis and logging",
      "Table index tuning speeding up database response times",
      "Connection pool configurations preventing timeout errors",
      "Redis memory cache integrations reducing database overhead",
      "Scheduled table cleanup pipelines freeing up storage",
      "Daily encrypted database backup snapshots"
    ],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "AWS RDS", "SQL scripting"],
    process: ["Database Telemetry Review", "Slow Query Auditing", "Table Index Tuning", "Redis Caching Setup", "Connection Pools Configuration", "Backup Schedule Validation"],
    whyChooseUs: [
      {
        title: "Fast Query Speeds",
        description: "Index and cache optimization database speeds up response times."
      },
      {
        title: "Auto-Scaling Support",
        description: "Connection pooling settings prevent timeouts during traffic spikes."
      },
      {
        title: "Cost Management",
        description: "Table cleanups prevent database storage cost increases."
      },
      {
        title: "Backup Confirmed",
        description: "Daily automated database backups protect your business data."
      }
    ],
    faqs: [
      {
        question: "How does query indexing speed up our database?",
        answer: "By creating a lookup map for table columns, letting the database find records instantly without scanning every row."
      },
      {
        question: "Can we optimize our database without taking the site offline?",
        answer: "Yes. All index additions and table optimizations run in the background, keeping your site online."
      },
      {
        question: "Do you optimize SQL and NoSQL databases?",
        answer: "Yes, we tune both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, DynamoDB) database systems."
      },
      {
        question: "How long does a database tuning sprint take?",
        answer: "For standard database sizes, audit and indexing optimization takes about 1 week."
      }
    ],
    cta: {
      headline: "Is Your Database Slowing Down User Searches?",
      subText: "Let's audit query logs and implement index optimizations to speed up database lookups.",
      primaryBtn: "Tune Database",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "help-desk-bug-fix-support": {
    slug: "help-desk-bug-fix-support",
    title: "Help Desk & Bug Fix Support",
    icon: "Activity",
    shortDescription: "On-call developer assistance for quick bug patches, copy updates, and troubleshooting.",
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
      badge: "On-Call Support",
      title: "Help Desk & Bug Fix Support",
      subText: "Get developer support when you need it. We offer on-call assistance for copy edits, troubleshooting, and bug fixes.",
      primaryCtaText: "Get Support",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "Running into layout breaks or email template bugs without a developer on standby creates operational headaches. Help Desk & Bug Fix Support offers dedicated support hours, letting you submit copy edits, layout updates, or bug reports directly to developers for quick resolution.",
    problemsSolved: [
      "No developer available to handle minor content or layout updates.",
      "Broken link errors or layout issues disrupting campaigns.",
      "Email contact templates failing to send updates.",
      "Unnoticed user registration bugs driving down signups.",
      "Long wait times to get help from third-party hosting teams.",
      "Minor bugs accumulating due to lack of maintenance."
    ],
    subServices: [
      {
        title: "Developer On-Call Support",
        description: "Accessing direct developer help for content edits and database fixes via Slack or email."
      },
      {
        title: "Urgent Bug Patching",
        description: "Diagnosing and patching critical code bugs within guaranteed turnaround times."
      },
      {
        title: "Page Content Upgrades",
        description: "Editing copy, updating marketing images, and adding links to pages."
      },
      {
        title: "Contact Form Debugging",
        description: "Reviewing form APIs and email delivery scripts to ensure messages sync cleanly."
      },
      {
        title: "Hosting Settings Updates",
        description: "Updating domain routing settings, DNS records, and server settings."
      },
      {
        title: "Monthly SLA Audits",
        description: "Compiling monthly reports of support tickets resolved and hours used."
      }
    ],
    features: [
      "Direct developer support via Slack or email channels",
      "Guaranteed turnaround times for critical bugs",
      "Minor page content updates and copy edits",
      "Contact form and API connection fixes",
      "DNS configuration updates and domain adjustments",
      "Monthly SLA logs tracking support hours used"
    ],
    technologies: ["Next.js / React", "Node.js", "DNS config", "Git", "SLA tracking tools"],
    process: ["Access & Credential Setup", "Slack Support Channel Configuration", "Support Tickets Submission", "Developer Diagnosis & Patching", "Staging Verification", "Production Deploy & Sign-off"],
    whyChooseUs: [
      {
        title: "Direct Developers",
        description: "Get support directly from senior developers who understand your codebase."
      },
      {
        title: "Quick Turnaround",
        description: "Guaranteed turnaround SLAs ensure critical bugs are resolved quickly."
      },
      {
        title: "Clean Changes",
        description: "Updates are fully verified in Git before deployment to prevent layout breaks."
      },
      {
        title: "Flexible Hours",
        description: "Support packages fit your monthly budget and operational needs."
      }
    ],
    faqs: [
      {
        question: "How do we submit support tickets to developers?",
        answer: "Via a dedicated Slack channel or our support portal, where tickets are tracked and resolved."
      },
      {
        question: "What is your turnaround SLA for critical bugs?",
        answer: "Critical bugs causing server outages or blocking checkouts are resolved under priority SLAs, typically in under 2 hours."
      },
      {
        question: "Does support cover larger feature additions?",
        answer: "Minor tweaks are covered. Larger feature additions are scoped separately as projects to keep your support hours focused on stability."
      },
      {
        question: "Can we carry over unused support hours?",
        answer: "Support hours are allocated monthly to guarantee developer standby availability, so unused hours do not roll over."
      }
    ],
    cta: {
      headline: "Need a Standby Developer for Quick Bug Patches?",
      subText: "Let's discuss a monthly support plan to resolve layout issues and keep your site running smoothly.",
      primaryBtn: "Get Support",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "upgrades-enhancements": {
    slug: "upgrades-enhancements",
    title: "Upgrades & Enhancements",
    icon: "Activity",
    shortDescription: "Developing minor page additions, feature upgrades, and styling updates post-launch.",
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
      badge: "App Upgrades",
      title: "Upgrades & Product Enhancements",
      subText: "Keep growing. We build minor feature updates, design upgrades, and layout additions to keep your platform modern.",
      primaryCtaText: "Request Enhancements",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "Software must evolve with your business. Upgrades & Enhancements offers structured developer support, adding new landing pages, custom styling, or API connections without the overhead of full design sprints.",
    problemsSolved: [
      "No developer available to build new landing pages.",
      "Outdated layout styling making your app look old.",
      "New API connections needed to link databases to marketing tools.",
      "Lack of support blocks feature launches.",
      "High costs of custom design services for minor updates.",
      "Minor feature requests delayed due to lack of developers."
    ],
    subServices: [
      {
        title: "Minor Feature Upgrades",
        description: "Adding checkout coupon options, custom filter tags, or search features to your app."
      },
      {
        title: "Landing Page Development",
        description: "Building statically generated campaign pages matching your design guidelines."
      },
      {
        title: "Visual Theme Refreshing",
        description: "Updating layouts, button styles, and colors to modernize the visual design."
      },
      {
        title: "API Connector Updates",
        description: "Connecting database contacts to HubSpot, Mailchimp, or SMS alert APIs."
      },
      {
        title: "Interactive Component Setup",
        description: "Developing new accordion elements, form fields, or image carousels."
      },
      {
        title: "Pre-Launch Testing Checks",
        description: "QA testing new features in staging before deploying updates to production."
      }
    ],
    features: [
      "Minor feature updates added to existing pages",
      "Statically generated landing pages matching design systems",
      "Visual theme upgrades modernizing interface layouts",
      "API integrations syncing contacts to marketing tools",
      "Interactive accordion, carousel, and form component builds",
      "Pre-launch QA testing verifying staging updates"
    ],
    technologies: ["Next.js / React", "Tailwind CSS", "API pipelines", "Git", "Figma wireframes"],
    process: ["Enhancement Discovery", "Figma Design Drafting", "Staging Component Development", "API & Form Integration", "QA Testing Runs", "Deployment & Verification"],
    whyChooseUs: [
      {
        title: "Continuous Updates",
        description: "Keep your platform modern with regular updates."
      },
      {
        title: "Saves Design Time",
        description: "Visual design variables are mapped to speed up page builds."
      },
      {
        title: "Clean API Pipes",
        description: "Integrations are verified in staging to prevent checkout errors."
      },
      {
        title: "Staging Verified",
        description: "Updates are fully verified in Git before deployment to protect live code."
      }
    ],
    faqs: [
      {
        question: "How do we request a new page or feature?",
        answer: "By submitting layout wireframes or design drafts to our team, where they are scheduled for development."
      },
      {
        question: "Will new features slow down page loads?",
        answer: "No. We write clean, optimized code to keep page weights light and load speeds fast."
      },
      {
        question: "Can we refresh the color palette of our website?",
        answer: "Yes, we can update colors, button styles, and typography variables globally across the design system."
      },
      {
        question: "Does support cover major database migrations?",
        answer: "Minor upgrades are covered. Major database rebuilds are scoped separately as projects to keep your support hours focused on stability."
      }
    ],
    cta: {
      headline: "Ready to Add New Features to Your App?",
      subText: "Let's design and build minor feature updates and landing pages to keep your platform growing.",
      primaryBtn: "Request Enhancements",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
