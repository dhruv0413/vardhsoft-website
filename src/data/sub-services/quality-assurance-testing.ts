import { ServiceDetail } from '../servicesData'

export const qualityAssuranceSubServices: Record<string, ServiceDetail> = {
  "functional-testing": {
    slug: "functional-testing",
    title: "Functional Testing",
    icon: "ShieldCheck",
    shortDescription: "Ensuring all product options, form inputs, and custom business logics run exactly as specified without error bugs.",
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
      badge: "Functional Testing",
      title: "Functional Testing Services",
      subText: "Deliver error-free software. We audit input validation, check business logic compliance, and test buttons configuration to ensure stability.",
      primaryCtaText: "Run Functional Test",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a QA Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "Even minor logic bugs—a checkout form failing to update prices, or broken registration links—can frustrate users and impact sales. Functional Testing tests every interface element, form input validation, and database transaction against requirements, ensuring code stability before release.",
    problemsSolved: [
      "Bugs slipping into production, causing customer complaints.",
      "Broken checkout forms or input errors blocking transactions.",
      "Mismatched calculation outputs in accounting or inventory logs.",
      "System crashes when users enter unexpected characters into forms.",
      "Third-party integrations failing under specific conditions.",
      "Unresponsive navigation links creating dead-ends for users."
    ],
    subServices: [
      {
        title: "User Flow Validation",
        description: "Testing page paths (like signup and payment flows) to ensure users can complete tasks."
      },
      {
        title: "Input Validation Auditing",
        description: "Checking that forms handle empty inputs, numbers, and special characters safely."
      },
      {
        title: "Database Transaction Checks",
        description: "Verifying that data inputs save correctly to PostgreSQL or MongoDB without errors."
      },
      {
        title: "Integration Endpoint Testing",
        description: "Using Postman to test API connections with CRM, shipping, or payment tools."
      },
      {
        title: "Regression Run Inspections",
        description: "Retesting existing pages after code updates to ensure updates didn't introduce new bugs."
      },
      {
        title: "Detailed Bug Logging",
        description: "Compiling detailed bug reports with replication steps to help developers fix issues quickly."
      }
    ],
    features: [
      "Task-focused user flow validation testing",
      "Robust form input checks preventing database errors",
      "Verification of database transactions and logging",
      "API connection audits via Postman runs",
      "Regression testing protecting existing codebases",
      "Actionable, detailed bug reports for developers"
    ],
    technologies: ["Postman", "Chrome DevTools", "Jest", "Manual QA scripting"],
    process: ["Requirements Review", "Test Scenario Drafting", "Functional Test Execution", "API & Database Verifications", "Bug Logs Reporting", "Developer Verification Sync"],
    whyChooseUs: [
      {
        title: "Rigorous Checks",
        description: "Every button, link, and input is tested against specifications."
      },
      {
        title: "Clean API Pipes",
        description: "API connections are verified using Postman before live launches."
      },
      {
        title: "Actionable Bug Reports",
        description: "Reports include clear replication steps and logs to save developer time."
      },
      {
        title: "Regression Protection",
        description: "We ensure new updates don't break your existing features."
      }
    ],
    faqs: [
      {
        question: "What is the difference between manual and automated testing?",
        answer: "Manual testing involves QA engineers checking flows on devices. Automated testing uses scripts to run repetitive tests quickly, which is ideal for regression checks."
      },
      {
        question: "Do you write functional tests for mobile apps?",
        answer: "Yes, we test layouts and functionality on both iOS and Android platforms."
      },
      {
        question: "How do you log bugs for our development team?",
        answer: "We log bugs directly in Jira, GitHub Issues, or Trello, providing clear logs, screenshots, and replication steps."
      },
      {
        question: "Can you test a live site that is currently experiencing bugs?",
        answer: "Yes, we can run audits on live sites to identify issues and help your team patch them."
      }
    ],
    cta: {
      headline: "Is Your App Experiencing Intermittent Bugs?",
      subText: "Let's run a functional QA audit to find and log issues before your users encounter them.",
      primaryBtn: "Run Functional Test",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "automated-test-pipeline-setup": {
    slug: "automated-test-pipeline-setup",
    title: "Automated Test Pipeline Setup",
    icon: "ShieldCheck",
    shortDescription: "Building automated frontend and API test pipelines (Playwright/Cypress) that run on every code check-in.",
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
      badge: "Automated QA",
      title: "Automated Test Pipeline Setup",
      subText: "Automate regression tests. We build Playwright or Cypress scripts to test user flows on every code commit automatically.",
      primaryCtaText: "Setup Test Pipeline",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a DevOps Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Running manual tests for every code release is slow and bottleneck-prone. Automated Test Pipeline Setup writes testing scripts (Cypress/Playwright) that run automatically in your CI/CD pipeline on every code push, catching layout and routing bugs before they deploy.",
    problemsSolved: [
      "Manual regression testing cycles delaying code releases.",
      "Developer updates breaking existing features unnoticed.",
      "Confusing layout glitches slipping past manual review.",
      "High costs of maintaining large manual QA teams.",
      "No automated testing for API endpoints.",
      "Lack of clean, reproducible test environments."
    ],
    subServices: [
      {
        title: "E2E Flow Script Writing",
        description: "Writing scripts in Playwright or Cypress to test complete user paths (signup, payment, search) automatically."
      },
      {
        title: "API Endpoint Automated Auditing",
        description: "Writing integration tests to check API routing and database updates."
      },
      {
        title: "CI/CD Pipeline Integration",
        description: "Configuring GitHub Actions to run tests automatically on every pull request."
      },
      {
        title: "Visual Regression Setup",
        description: "Integrating screenshot testing to detect styling and layout changes."
      },
      {
        title: "Mock Data Seeding Configuration",
        description: "Setting up test environments to seed mock data automatically before test runs."
      },
      {
        title: "Test Report Generation",
        description: "Configuring dashboards to display test results and video recordings of failures."
      }
    ],
    features: [
      "Playwright or Cypress scripts automating end-to-end user paths",
      "Automated API endpoint integration checks",
      "GitHub Actions workflow runs testing code automatically on push",
      "Visual regression tests flagging styling issues",
      "Mock database seeding configurations",
      "HTML test reports with video recordings of failures"
    ],
    technologies: ["Playwright", "Cypress", "GitHub Actions", "Docker", "Node.js"],
    process: ["Testing Requirements Audit", "Test Suite Setup", "E2E Script Writing", "API Integration Testing", "GitHub Actions Setup", "Verification & Rollout"],
    whyChooseUs: [
      {
        title: "Saves Time",
        description: "Run comprehensive regression tests in minutes instead of hours."
      },
      {
        title: "Bugs Blocked Early",
        description: "Test pipelines catch errors before they deploy to production."
      },
      {
        title: "Visual Checks",
        description: "Screenshot comparisons catch minor styling alignment shifts."
      },
      {
        title: "Failure Videos",
        description: "Reports include video logs of failed test runs for easy debugging."
      }
    ],
    faqs: [
      {
        question: "Should we use Playwright or Cypress?",
        answer: "We recommend Playwright for its speed and support for multiple browser contexts, though we also support Cypress configurations."
      },
      {
        question: "Can automated tests check payment transactions?",
        answer: "Yes, by configuring payment gateways (like Stripe) to run in test-token mode, letting pipelines simulate successful checkouts safely."
      },
      {
        question: "How long does it take to run the automated tests?",
        answer: "A standard E2E test suite of 20-30 flows runs in parallel under 3 to 5 minutes, without slowing down releases."
      },
      {
        question: "Will you maintain the testing scripts as our app changes?",
        answer: "Yes. We offer updates to adapt selectors and test files as you introduce new features."
      }
    ],
    cta: {
      headline: "Tired of Manual Testing Delaying Your Releases?",
      subText: "Let's build a secure, automated Playwright test pipeline to speed up deployments.",
      primaryBtn: "Setup Test Pipeline",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "performance-load-testing": {
    slug: "performance-load-testing",
    title: "Performance & Load Testing",
    icon: "ShieldCheck",
    shortDescription: "Simulating heavy virtual user traffic (k6/JMeter) to identify database and server capacity limits.",
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
      badge: "Load Testing",
      title: "Performance & Load Testing",
      subText: "Test under traffic load. We simulate thousands of virtual user requests to find database bottlenecks before they cause outages.",
      primaryCtaText: "Run Load Test",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a DevOps Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Assuming your server setup will handle traffic spikes without testing leads to outage risks during launch promotions. Performance & Load Testing uses tools like k6 or JMeter to simulate heavy user traffic, identifying database and server resource bottlenecks.",
    problemsSolved: [
      "Server crashes during traffic spikes.",
      "Slow page speeds when multiple users log in simultaneously.",
      "Database connection pooling failures under heavy load.",
      "API timeouts during processing surges.",
      "Unknown server capacity limits causing over-spending on cloud bills.",
      "Unoptimized cache layers failing to handle traffic spikes."
    ],
    subServices: [
      {
        title: "Load Test Scenario Mapping",
        description: "Defining user metrics (e.g., simulating 1,000 concurrent checkout requests) for load tests."
      },
      {
        title: "k6 Script Writing",
        description: "Writing JavaScript-based scripts in k6 to simulate virtual users hitting API endpoints."
      },
      {
        title: "Resource Usage Monitoring",
        description: "Monitoring server CPU, memory, and database connections under load tests."
      },
      {
        title: "Database Bottleneck Audits",
        description: "Identifying slow queries and unoptimized indexes during heavy traffic simulations."
      },
      {
        title: "Connection Limit Testing",
        description: "Tuning server capacity parameters to handle traffic spikes without failures."
      },
      {
        title: "Scaling Recommendations",
        description: "Providing a detailed report outlining auto-scaling settings and optimizations."
      }
    ],
    features: [
      "k6 scripts simulating thousands of virtual user requests",
      "Uptime monitoring tracking server CPU and database load",
      "Identification of slow queries and database bottlenecks",
      "Analysis of connection pool limits",
      "Detailed reports outlining auto-scaling configurations",
      "Cache layer optimization recommendations"
    ],
    technologies: ["k6", "JMeter", "AWS CloudWatch", "PostgreSQL logs", "Docker"],
    process: ["Load Targets Definition", "k6 Script Development", "Load Test Execution", "Metrics & Logs Auditing", "Optimization Tuning", "Verification Runs"],
    whyChooseUs: [
      {
        title: "Proactive Outage Prevention",
        description: "Find and resolve scaling bottlenecks before users encounter outages."
      },
      {
        title: "Accurate Simulations",
        description: "Simulate realistic user actions, not just simple page visits."
      },
      {
        title: "Optimized Cloud Bills",
        description: "Tuned server resource allocation prevents over-paying for host capacity."
      },
      {
        title: "Telemetry Driven",
        description: "Optimization recommendations backed by database metrics."
      }
    ],
    faqs: [
      {
        question: "How is load testing different from stress testing?",
        answer: "Load testing measures performance under expected traffic levels. Stress testing pushes the system beyond its limits to see how it fails and recovers."
      },
      {
        question: "Can load tests run on our production website?",
        answer: "We recommend running load tests on a dedicated staging environment that matches production, avoiding any disruption to active users."
      },
      {
        question: "What is k6 and why do you use it?",
        answer: "k6 is a modern, developer-friendly load testing tool, letting us write tests in JavaScript to simulate concurrent traffic efficiently."
      },
      {
        question: "How long does a load testing project take?",
        answer: "A focused load test and optimization tuning typically takes 1 to 2 weeks, depending on system complexity."
      }
    ],
    cta: {
      headline: "Is Your App Ready for sudden Traffic Spikes?",
      subText: "Let's run a load test to identify bottlenecks and optimize your auto-scaling settings.",
      primaryBtn: "Run Load Test",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "security-audits-vulnerability-testing": {
    slug: "security-audits-vulnerability-testing",
    title: "Security Audits & Vulnerability Testing",
    icon: "ShieldCheck",
    shortDescription: "Conducting penetration tests, input checks, and configuration audits to protect database networks.",
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
      badge: "Security QA",
      title: "Security Audits & Vulnerability Testing",
      subText: "Protect your application. We run penetration tests, audit input validation, and scan configurations to identify security risks.",
      primaryCtaText: "Run Security Audit",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Security Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "Unpatched libraries, weak database access policies, or missing input validation are major security vulnerabilities. Security Audits & Vulnerability Testing runs penetration tests and scans configurations to identify and patch security risks.",
    problemsSolved: [
      "Cross-site scripting (XSS) or SQL injection vulnerabilities.",
      "Outdated software libraries with known security exploits.",
      "Misconfigured AWS settings exposing databases publicly.",
      "Lack of token-based API authentication controls.",
      "Failing client data compliance checks.",
      "Undefined backup restoration procedures in case of breaches."
    ],
    subServices: [
      {
        title: "Penetration Testing (Pen Test)",
        description: "Simulating attacks on endpoints to identify authentication and data access vulnerabilities."
      },
      {
        title: "Library Dependency Scanning",
        description: "Scanning packages and dependencies automatically to flag known security issues."
      },
      {
        title: "AWS Configuration Audits",
        description: "Reviewing VPC configurations and IAM access permissions to ensure data is secure."
      },
      {
        title: "Input Validation Auditing",
        description: "Checking form input validation to block cross-site scripting (XSS) and SQL injection attempts."
      },
      {
        title: "SSL/TLS Configuration Tuning",
        description: "Configuring SSL encryption settings to protect data in transit."
      },
      {
        title: "Vulnerability Patching",
        description: "Updating code dependencies and server settings to patch identified vulnerabilities."
      }
    ],
    features: [
      "Penetration testing audits identifying configuration risks",
      "Automated library scans checking for security exploits",
      "VPC network and database access policy audits",
      "Input validation checks blocking injection attempts",
      "SSL/TLS data transit encryption configurations",
      "Detailed patch reports documenting security fixes"
    ],
    technologies: ["OWASP ZAP", "NPM Audit", "AWS IAM / VPC", "SSL / TLS Encryption", "Security scanner tools"],
    process: ["Security Scope Mapping", "Vulnerability Scans Run", "Penetration Testing Simulation", "Audit Log Review", "Security Patching", "Verification Auditing"],
    whyChooseUs: [
      {
        title: "VPC Network Native",
        description: "We configure private subnet VPC settings to keep database servers isolated."
      },
      {
        title: "Input Validation Secure",
        description: "We audit input validation to block common SQL injection and XSS attempts."
      },
      {
        title: "Automated Package Alerts",
        description: "Alert tools notify the team automatically of package security updates."
      },
      {
        title: "Audit History Logs",
        description: "Integrations log cloud configuration changes and access for tracking."
      }
    ],
    faqs: [
      {
        question: "How often should we run a security audit?",
        answer: "We recommend running vulnerability scans quarterly and full penetration tests annually, or whenever you deploy major feature releases."
      },
      {
        question: "What is SQL injection and how do you block it?",
        answer: "SQL injection is an exploit where attackers input database commands in text fields. We block this by using Prisma or parameterized queries to sanitize inputs."
      },
      {
        question: "Do you provide certification for SOC2 or HIPAA?",
        answer: "We configure infrastructure to meet compliance requirements, but formal certification requires third-party auditing."
      },
      {
        question: "Will a security audit disrupt our live site?",
        answer: "No. We run penetration tests on a dedicated staging environment, ensuring zero impact on active users."
      }
    ],
    cta: {
      headline: "Is Your Software Vulnerable to Data Breaches?",
      subText: "Let's run a security audit and patch vulnerabilities to protect user data.",
      primaryBtn: "Run Security Audit",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "cross-browser-cross-device-testing": {
    slug: "cross-browser-cross-device-testing",
    title: "Cross-browser & Cross-device Testing",
    icon: "ShieldCheck",
    shortDescription: "Verifying that your application displays and functions correctly across mobile, tablet, and desktop browsers.",
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
      badge: "Device QA",
      title: "Cross-Device & Cross-Browser Testing",
      subText: "Ensure layout consistency. We test interfaces across Safari, Chrome, iOS, and Android to fix visual alignment issues.",
      primaryCtaText: "Run Cross-Device Test",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a QA Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "An app that looks perfect on Chrome for desktop might experience layout breaks on Safari for iOS or budget Android screens. Cross-browser & Cross-device Testing reviews layouts across devices and browsers to resolve alignment and styling discrepancies.",
    problemsSolved: [
      "Layout breaks on Safari for iOS due to rendering differences.",
      "Broken buttons or navigation links on budget mobile screens.",
      "Table grids overflowing desktop browser frames.",
      "Flickering transitions or animations on older hardware models.",
      "Unresponsive layout adjustments causing horizontal scroll errors.",
      "Difficulties identifying device-specific javascript errors."
    ],
    subServices: [
      {
        title: "Browser Compatibility Auditing",
        description: "Testing app features across Chrome, Safari, Firefox, and Edge browsers."
      },
      {
        title: "Mobile Viewport Testing",
        description: "Checking layouts on various iOS and Android screen resolutions."
      },
      {
        title: "Automated Layout Testing",
        description: "Using Playwright grid scripts to capture layout screenshots across viewports."
      },
      {
        title: "Touch Input Optimization",
        description: "Verifying tap targets, gestures, and inputs on touch-screen interfaces."
      },
      {
        title: "Device Error Debugging",
        description: "Analyzing browser console logs on iOS and Android to resolve device-specific errors."
      },
      {
        title: "Visual Alignment Adjustments",
        description: "Writing responsive CSS adjustments to ensure styling is consistent across viewports."
      }
    ],
    features: [
      "Multi-browser audits across Chrome, Safari, and Firefox",
      "Screen tests across iOS and Android viewports",
      "Playwright screenshot automation detecting styling breaks",
      "Optimized touch navigation tap targets",
      "Detailed error logging capturing device console alerts",
      "Responsive CSS adjustments ensuring layout consistency"
    ],
    technologies: ["Playwright grid configs", "Chrome DevTools", "CSS Media Queries", "Safari Web Inspector"],
    process: ["Device Scope Selection", "Automated Grid Scans", "Manual Viewport Audits", "Touch Flow Verification", "CSS Styling Fixes", "Final Verification Run"],
    whyChooseUs: [
      {
        title: "Multi-Browser Ready",
        description: "Your app is verified to run smoothly on Safari, Chrome, and Firefox."
      },
      {
        title: "Optimized for Mobile",
        description: "Adaptive grids prevent layouts from breaking on small mobile screens."
      },
      {
        title: "Flicker-Free Transitions",
        description: "We optimize transitions to run smoothly across hardware configurations."
      },
      {
        title: "Clean Responsive CSS",
        description: "Responsive layouts prevent horizontal scroll issues."
      }
    ],
    faqs: [
      {
        question: "Why does Safari render layouts differently than Chrome?",
        answer: "Different browsers use distinct rendering engines (WebKit for Safari, Blink for Chrome), causing minor discrepancies in CSS parsing. We write compatible CSS rules to resolve these."
      },
      {
        question: "Do you test on actual physical devices?",
        answer: "Yes, we test on primary iOS and Android phone models, supplementing with cloud simulators to cover a wide range of devices."
      },
      {
        question: "Will cross-browser testing speed up page loads?",
        answer: "By optimizing styling rules and scripts, we also streamline rendering speeds across devices."
      },
      {
        question: "How do you handle older phone models?",
        answer: "We define support levels, optimizing configurations to display and run smoothly on phone versions used by over 95% of active markets."
      }
    ],
    cta: {
      headline: "Are Users Encountering Styling Issues on Mobile Devices?",
      subText: "Let's run a cross-device QA audit and write responsive CSS adjustments to optimize layouts.",
      primaryBtn: "Run Cross-Device Test",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "usability-accessibility-review": {
    slug: "usability-accessibility-review",
    title: "Usability & Accessibility Review",
    icon: "ShieldCheck",
    shortDescription: "Auditing font sizes, contrast ratios, and screen reader compatibility to meet WCAG AA standards.",
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
      badge: "Accessibility QA",
      title: "Usability & Accessibility Auditing",
      subText: "Make your app accessible. We audit color contrast, set up screen reader compatibility, and verify accessibility labels.",
      primaryCtaText: "Run Accessibility Review",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a QA Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "Applications with low color contrast, tiny text scales, or missing keyboard navigation settings are inaccessible to users with visual or physical impairments, and risk compliance issues. Usability & Accessibility Review audits setups against WCAG AA standards, optimizing accessibility labels and styling rules.",
    problemsSolved: [
      "Low color contrast ratios making text hard to read in bright sunlight.",
      "Missing keyboard focus outlines preventing keyboard-only navigation.",
      "Screen readers failing to read links due to missing aria-labels.",
      "Tiny touch targets causing navigation mistakes on mobile screens.",
      "Compliance risks under standard accessibility regulations.",
      "Confusing layout terms causing user navigation errors."
    ],
    subServices: [
      {
        title: "Color Contrast Audits",
        description: "Checking text and button contrast ratios to meet WCAG AA guidelines."
      },
      {
        title: "Keyboard Navigation Testing",
        description: "Verifying users can navigate menus, links, and forms using only keyboard keys."
      },
      {
        title: "Screen Reader Auditing",
        description: "Testing compatibility with voice readers (JAWS, VoiceOver) and adding aria-labels."
      },
      {
        title: "Aria-Label Configurations",
        description: "Structuring HTML semantic tags to explain button and input utility to assistive tools."
      },
      {
        title: "Touch Target Size Tuning",
        description: "Adjusting button sizes to meet mobile touch zone guidelines (minimum 48px)."
      },
      {
        title: "Accessibility Compliance Reports",
        description: "Providing a detailed report of issues and steps to achieve WCAG compliance."
      }
    ],
    features: [
      "Color contrast checks meeting WCAG AA standards",
      "Keyboard navigation verification for all links and forms",
      "VoiceOver screen reader compatibility checks",
      "Aria-label integrations for non-text components",
      "Touch targets sized to meet mobile tap zone guidelines",
      "Actionable WCAG compliance recommendation reports"
    ],
    technologies: ["Lighthouse", "Axe Accessibility tools", "VoiceOver / NVDA screen readers", "WAI-ARIA specifications"],
    process: ["Accessibility Scoping", "Lighthouse & Automated Scans", "Screen Reader Manual Runs", "Keyboard Navigation Checks", "Aria-Label Updates", "Verification Reporting"],
    whyChooseUs: [
      {
        title: "Accessibility Native",
        description: "High contrast and screen reader compatibility are standard in our builds."
      },
      {
        title: "Compliance Confirmed",
        description: "We configure setups to meet core WCAG AA guidelines."
      },
      {
        title: "Thumb Optimized",
        description: "Larger touch zones prevent navigation errors on mobile devices."
      },
      {
        title: "Semantic HTML",
        description: "Clean semantic markup improves both accessibility and search index visibility."
      }
    ],
    faqs: [
      {
        question: "What is WCAG and why is compliance important?",
        answer: "WCAG (Web Content Accessibility Guidelines) defines international standards to make web content accessible, helping protect businesses from legal liability."
      },
      {
        question: "How do you test screen reader compatibility?",
        answer: "By navigating the app using standard screen reader software (VoiceOver on macOS, NVDA on Windows) to verify that all content is read clearly."
      },
      {
        question: "Will accessibility updates change our visual design?",
        answer: "Usually not. Visual adjustments are typically subtle, such as slightly darkening colors to meet contrast rules, or adding hidden labeling tags."
      },
      {
        question: "Do accessibility updates improve SEO?",
        answer: "Yes. Search crawlers parse page layouts using the same semantic tags (like headers and aria-labels) that screen readers rely on, boosting index rankings."
      }
    ],
    cta: {
      headline: "Is Your App Accessible to All Users?",
      subText: "Let's run an accessibility audit and implement WCAG AA guidelines to protect your business.",
      primaryBtn: "Run Accessibility Review",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
