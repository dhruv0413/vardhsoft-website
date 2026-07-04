import { ServiceDetail } from '../servicesData'

export const cloudDevOpsSubServices: Record<string, ServiceDetail> = {
  "cloud-migration-hosting": {
    slug: "cloud-migration-hosting",
    title: "Cloud Migration & Hosting",
    icon: "Cloud",
    shortDescription: "Moving legacy software systems and assets to secure, scalable cloud hosting pipelines (AWS/Vercel) without business downtime.",
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
      badge: "Cloud Migration",
      title: "Cloud Migration & Hosting",
      subText: "Migrate with zero downtime. We transition legacy database servers and frontend files to optimized, secure cloud environments.",
      primaryCtaText: "Migrate to Cloud",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Cloud Architect",
      secondaryCtaLink: "/contact"
    },
    overview: "Running software on local, unmanaged servers or legacy shared hosting creates significant downtime risks and limits scaling. Cloud Migration & Hosting plans and executes phased migrations to platforms like AWS, GCP, or Vercel. We set up robust database replication and DNS configurations, ensuring your business stays fully operational during the transition.",
    problemsSolved: [
      "Unexpected site crashes during sudden visitor traffic spikes.",
      "High costs of maintaining physical office servers.",
      "Lack of automated backups risking data loss during server failures.",
      "Slow database responsiveness due to poor server geographical location.",
      "Difficulties deploying new code updates to legacy shared hosts.",
      "Insecure server settings failing basic compliance reviews."
    ],
    subServices: [
      {
        title: "Infrastructure Auditing",
        description: "Reviewing your current code and databases to plan the most efficient cloud migration path."
      },
      {
        title: "Database Migration Planning",
        description: "Setting up read-replicas and secure data pipelines to move assets without loss."
      },
      {
        title: "DNS & SSL Configuration",
        description: "Configuring Cloudflare or Route 53 parameters to secure user traffic with auto-renewing SSL certificates."
      },
      {
        title: "Serverless Deployment Setup",
        description: "Deploying frontend applications to Vercel edges for faster page delivery."
      },
      {
        title: "Cloud Host Scaling (AWS)",
        description: "Configuring AWS EC2, RDS, and S3 structures to scale server capacity dynamically based on load."
      },
      {
        title: "Automated Backup Pathways",
        description: "Setting up daily encrypted cloud snapshots to ensure easy recovery if issues occur."
      }
    ],
    features: [
      "Phased migration strategy to prevent business downtime",
      "Dynamic auto-scaling infrastructure adjusting to traffic spikes",
      "Automated daily backups with offsite replication settings",
      "Global CDN edge hosting for faster page load speeds",
      "Fully encrypted databases (AES-256) protecting user data",
      "24/7 server health monitoring and alert notifications"
    ],
    technologies: ["AWS (S3, RDS, EC2)", "Vercel", "Cloudflare", "PostgreSQL / MongoDB", "Linux", "SSL / DNS"],
    process: ["Hosting Infrastructure Audit", "Target Cloud System Design", "Database Replication Setup", "Frontend CDN Deployment", "DNS Routing & Switchover", "Migration Support Audit"],
    whyChooseUs: [
      {
        title: "Zero Downtime Guarantee",
        description: "We transition services in phases to keep your app online."
      },
      {
        title: "Auto-Scaling Ready",
        description: "Server resources scale up automatically to handle traffic spikes."
      },
      {
        title: "Backup Confirmed",
        description: "Encrypted daily backup snapshots secure your business data."
      },
      {
        title: "Speed Optimized",
        description: "Edge CDN hosting delivers fast performance globally."
      }
    ],
    faqs: [
      {
        question: "Will our database be offline during the migration?",
        answer: "No. We configure live database replication pipelines, syncing records in the background so the final switchover takes only minutes without data loss."
      },
      {
        question: "How do you protect database records in the cloud?",
        answer: "By enforcing SSL database tunnels, private VPC subnet isolates, AES-256 encryption-at-rest, and strict IAM access permissions."
      },
      {
        question: "Can we migrate from shared GoDaddy or Hostgator setups?",
        answer: "Yes, migrating legacy shared PHP/WordPress accounts to modern, high-speed cloud setups is a common optimization project."
      },
      {
        question: "What are the hosting costs on AWS?",
        answer: "We design resource-efficient cloud setups, using serverless structures where possible to ensure you only pay for actual server usage."
      }
    ],
    cta: {
      headline: "Still Hosting on Unmanaged, Slow Legacy Servers?",
      subText: "Let's plan a secure, zero-downtime migration to optimized cloud hosting.",
      primaryBtn: "Migrate to Cloud",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "ci-cd-pipeline-implementation": {
    slug: "ci-cd-pipeline-implementation",
    title: "CI/CD Pipeline Implementation",
    icon: "Cloud",
    shortDescription: "Automating testing, compilation, and code deployments to eliminate manual release errors.",
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
      badge: "CI/CD Pipelines",
      title: "CI/CD Pipeline Automation",
      subText: "Automate code releases. We build robust GitHub Actions pipelines that test, build, and deploy your code automatically on every push.",
      primaryCtaText: "Implement CI/CD",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a DevOps Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Manual code deployments—copying files via FTP or logging into servers to pull updates—often lead to errors like missing configurations, broken routes, or untested bugs reaching users. CI/CD Pipeline Implementation automates this flow. Every code change is automatically tested, built, and deployed, reducing release errors and allowing your team to ship updates with confidence.",
    problemsSolved: [
      "Manual code deployment tasks eating up valuable developer hours.",
      "Bugs and code syntax errors slipping into production environments.",
      "Broken builds from missing environment variables or outdated dependencies.",
      "Inconsistent code testing before releases.",
      "No rollback plan when a manual code deploy breaks live services.",
      "Lack of visibility into deployment history and build logs."
    ],
    subServices: [
      {
        title: "Automated Build Workflows",
        description: "Configuring pipeline runners to compile assets and check for syntax errors automatically on push."
      },
      {
        title: "Automated Test Runners",
        description: "Integrating unit and integration tests to block broken code from reaching staging or production."
      },
      {
        title: "Staging & Production Pipeline Setup",
        description: "Configuring automated, isolated deployment runs for staging and production hosting."
      },
      {
        title: "Environment Variable Management",
        description: "Securing database credentials and API tokens within encrypted pipeline variables."
      },
      {
        title: "Automated Rollback Systems",
        description: "Implementing quick, one-click rollback triggers to restore previous stable builds if errors occur."
      },
      {
        title: "Pipeline Status Alerts",
        description: "Connecting build status updates to Slack or Teams channels to notify the team instantly."
      }
    ],
    features: [
      "Automated testing checks blocking broken code from deploying",
      "Fast, automated deployment pipelines replacing manual steps",
      "Encrypted credential variables management for security",
      "Staging environments for visual review before live launches",
      "One-click rollback triggers to quickly restore stable builds",
      "Real-time pipeline build logs for troubleshooting"
    ],
    technologies: ["GitHub Actions", "Docker", "Vercel API", "AWS CodePipeline", "Slack Webhooks", "Node.js / TS"],
    process: ["Deployment Audit", "Pipeline YAML Configuration", "Test Suite Integration", "Secure Variables Mapping", "Dry Run Verification", "Production Rollout"],
    whyChooseUs: [
      {
        title: "Error-Free Deploys",
        description: "Automation replaces manual deployment steps to eliminate typos."
      },
      {
        title: "Bugs Blocked Early",
        description: "Automated tests run on every push to catch issues early."
      },
      {
        title: "Instant Rollback",
        description: "Restore previous stable builds in seconds if problems arise."
      },
      {
        title: "Full Transparency",
        description: "Build status alerts keep the team informed in real-time."
      }
    ],
    faqs: [
      {
        question: "What is CI/CD and why do we need it?",
        answer: "CI (Continuous Integration) automatically tests and builds code changes. CD (Continuous Deployment) automatically deploys verified code to production, removing manual steps and reducing release errors."
      },
      {
        question: "Can you build pipelines for our existing hosting setup?",
        answer: "Yes, we build custom pipelines connecting code repositories to platforms like AWS, GCP, Vercel, or custom server setups."
      },
      {
        question: "How do you keep our database credentials secure in the pipeline?",
        answer: "By utilizing encrypted secrets managers (like GitHub Secrets), ensuring passwords are never exposed in codebase files."
      },
      {
        question: "Will setting up CI/CD interrupt our current developers?",
        answer: "No. We build and test the new pipeline configurations in a separate code branch, switching over only after full verification."
      }
    ],
    cta: {
      headline: "Still Deploying Code Updates Manually?",
      subText: "Let's build a secure, automated CI/CD pipeline to make your releases fast and reliable.",
      primaryBtn: "Implement CI/CD",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "infrastructure-as-code": {
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code (IaC)",
    icon: "Cloud",
    shortDescription: "Defining cloud server configurations as clean code (Terraform) for automated, reproducible cloud environments.",
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
      badge: "IaC Setup",
      title: "Infrastructure as Code (IaC)",
      subText: "Manage cloud setups with code. We build Terraform templates to automate, scale, and replicate your cloud environments cleanly.",
      primaryCtaText: "Define Infrastructure",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Architect",
      secondaryCtaLink: "/contact"
    },
    overview: "Manually configuring cloud servers, databases, and network settings in hosting panels leads to configuration drift and makes replication impossible. Infrastructure as Code (IaC) defines your server setups as clean code templates (Terraform), making configurations reproducible, version-controlled, and easy to scale.",
    problemsSolved: [
      "Configuration differences between staging and production environments.",
      "Difficulty replicating server setups for new regional deployments.",
      "No version control history for cloud infrastructure updates.",
      "Accidental configuration edits in hosting panels causing downtime.",
      "Slow, manual server and database resource configuration processes.",
      "High costs from unused or orphaned cloud resources."
    ],
    subServices: [
      {
        title: "Infrastructure Code Modeling",
        description: "Writing declarative configuration files defining your servers, databases, and network setups."
      },
      {
        title: "AWS Resource Provisioning",
        description: "Using code templates to set up AWS VPC, RDS, and EC2 configurations automatically."
      },
      {
        title: "Environment Replication Setup",
        description: "Creating duplicate staging and testing environments using the same code templates."
      },
      {
        title: "Version Controlled Infrastructure",
        description: "Tracking all infrastructure updates in Git repositories alongside application code."
      },
      {
        title: "Access Control Modeling",
        description: "Defining secure IAM policies and security groups configuration via code."
      },
      {
        title: "Cloud Cost Optimization Audits",
        description: "Auditing resource codes to find and terminate unused, costly setups."
      }
    ],
    features: [
      "Declarative code templates defining all cloud configurations",
      "Identical staging and production environments to prevent bugs",
      "Git version history tracking all infrastructure changes",
      "Automated environment replication for easy regional scaling",
      "Strict security policy definitions locked via code",
      "Cost-optimized resource configurations"
    ],
    technologies: ["Terraform", "AWS (EC2, RDS, VPC)", "Git", "Cloudflare API", "Linux scripting"],
    process: ["Infrastructure Audit", "Configuration Modeling in Terraform", "Replication & Environment Dry Run", "Variable Encryption Setup", "Git Workflow Mapping", "Production Deployment"],
    whyChooseUs: [
      {
        title: "Identical Environments",
        description: "Staging matches production perfectly to eliminate environment bugs."
      },
      {
        title: "Replication Ready",
        description: "Deploy duplicate environments in new regions in minutes, not days."
      },
      {
        title: "Git Documented",
        description: "Every cloud configuration change is documented and reviewed in Git."
      },
      {
        title: "Cost Management",
        description: "Declarative resource tracking avoids expensive orphaned setups."
      }
    ],
    faqs: [
      {
        question: "What is Infrastructure as Code and why use Terraform?",
        answer: "IaC manages server settings with code. Terraform is a leading cross-cloud tool, letting us define configurations (VPCs, databases, servers) in text files for automated, consistent setups."
      },
      {
        question: "Can we use IaC on our existing AWS account?",
        answer: "Yes. We import existing manual configurations into Terraform code, bringing your current setup under version control safely."
      },
      {
        question: "How do we make changes to our infrastructure later?",
        answer: "By editing the Terraform files and submitting a Git pull request, letting you review and track server updates before they deploy."
      },
      {
        question: "Does this require team retraining?",
        answer: "We handle the initial architecture setup and document simple workflows so your developers can run updates easily."
      }
    ],
    cta: {
      headline: "Managing Cloud Configurations Manually?",
      subText: "Let's bring your cloud setup under version control with Terraform.",
      primaryBtn: "Define Infrastructure",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "serverless-application-build": {
    slug: "serverless-application-build",
    title: "Serverless Application Build",
    icon: "Cloud",
    shortDescription: "Designing applications using serverless functions (AWS Lambda/Vercel) to scale automatically and reduce hosting costs.",
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
      badge: "Serverless Apps",
      title: "Serverless Application Engineering",
      subText: "Pay only for actual execution. We build serverless APIs and apps that scale instantly from zero to millions of requests without server management.",
      primaryCtaText: "Build Serverless App",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Developer",
      secondaryCtaLink: "/contact"
    },
    overview: "Running applications on traditional virtual servers means paying for idle capacity 24/7. Serverless Application Build structures backend code into isolated functions (AWS Lambda/Vercel) that spin up instantly on demand and scale down to zero when idle, lowering hosting costs and simplifying scaling.",
    problemsSolved: [
      "Paying high monthly bills for idle servers during low-traffic periods.",
      "Manual capacity adjustments needed to handle sudden traffic spikes.",
      "Complex OS patching, maintenance, and hosting security tasks.",
      "High database connection overhead under heavy visitor loads.",
      "API request timeouts during processing surges.",
      "Slow page delivery on global mobile connections."
    ],
    subServices: [
      {
        title: "Serverless Architecture Design",
        description: "Structuring backend logic into isolated, fast-booting serverless functions."
      },
      {
        title: "Next.js & Vercel Deployments",
        description: "Deploying React frontends and API routes to edge CDNs for instant loading."
      },
      {
        title: "AWS Lambda & Gateway Setup",
        description: "Configuring Lambda functions and API Gateway endpoints for backend tasks."
      },
      {
        title: "Serverless Database Connectors",
        description: "Setting up connection-pooled databases (MongoDB Atlas, Neon PostgreSQL) to prevent server timeouts."
      },
      {
        title: "Event-Driven Workflows",
        description: "Building background queues to process file uploads, emails, or reports asynchronously."
      },
      {
        title: "Cold-Start Optimization",
        description: "Optimizing code bundles to ensure serverless functions boot and respond in milliseconds."
      }
    ],
    features: [
      "Pay-per-execution model with zero idle capacity costs",
      "Instant, automated scaling to handle traffic spikes",
      "Zero server operating system updates or security patches needed",
      "Edge-hosted functions delivering sub-second global response times",
      "Optimized connection-pooled database architectures",
      "Robust event-driven task processing pipelines"
    ],
    technologies: ["Vercel Edge Functions", "AWS Lambda", "API Gateway", "Neon Serverless Postgres", "MongoDB Atlas", "TypeScript"],
    process: ["Architecture Discovery", "Serverless Code Modularization", "Database Connection Setup", "Edge API Deployment", "Performance Tuning", "Verification & Launch"],
    whyChooseUs: [
      {
        title: "Cost Efficient",
        description: "Pay only for actual processing time, with zero idle server bills."
      },
      {
        title: "Instant Scaling",
        description: "Scales automatically to handle sudden spikes with no manual adjustments."
      },
      {
        title: "No Server Upkeep",
        description: "Zero OS upgrades or patching required, freeing up team time."
      },
      {
        title: "Global Speed",
        description: "Functions run close to users on edge CDNs for fast response times."
      }
    ],
    faqs: [
      {
        question: "Does serverless mean there are no servers?",
        answer: "No, servers are still used, but the cloud provider manages all provisioning, OS patching, and scaling, so you don't have to manage servers manually."
      },
      {
        question: "What is a 'cold start' and how is it optimized?",
        answer: "A cold start is the minor latency when a serverless function boots up after being idle. We keep code bundles small to ensure startup takes milliseconds."
      },
      {
        question: "Can serverless databases handle complex SQL queries?",
        answer: "Yes. Serverless database providers (like Neon or AWS Aurora) support standard PostgreSQL features, adding connection pooling to handle dynamic scaling."
      },
      {
        question: "Is serverless suitable for long-running processes?",
        answer: "For tasks taking over 15 minutes, traditional container setups (like AWS ECS) are better. We use event queues to process long tasks offline."
      }
    ],
    cta: {
      headline: "Tired of High Hosting Bills for Idle Servers?",
      subText: "Let's build a serverless architecture to reduce costs and automate scaling.",
      primaryBtn: "Build Serverless App",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "cloud-security-compliance": {
    slug: "cloud-security-compliance",
    title: "Cloud Security & Compliance",
    icon: "Cloud",
    shortDescription: "Securing cloud database networks, implementing encryption, and auditing configurations for compliance.",
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
      badge: "Cloud Security",
      title: "Cloud Security & Compliance Auditing",
      subText: "Secure your cloud data. We implement strict VPC network isolation, configure encryption keys, and audit setups for industry compliance.",
      primaryCtaText: "Secure Your Cloud",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Security Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "Data leaks are major operational and reputational risks for modern businesses. Basic database configurations often lack proper network isolation, leaving them vulnerable. Cloud Security & Compliance secures cloud databases, VPC networks, and access keys, ensuring configurations meet strict compliance standards.",
    problemsSolved: [
      "Publicly exposed databases vulnerable to hacking attempts.",
      "Weak access keys and over-privileged IAM policies.",
      "Lack of encryption for sensitive data at rest or in transit.",
      "Failing security audits from corporate clients or compliance boards.",
      "No security monitoring or audit logs to track resource access.",
      "Data compliance risks under standard privacy regulations."
    ],
    subServices: [
      {
        title: "VPC & Subnet Isolation",
        description: "Configuring private network subnets so databases are inaccessible from the public internet."
      },
      {
        title: "IAM Role Least-Privilege Setup",
        description: "Auditing access keys to restrict user permissions to only what's required."
      },
      {
        title: "Data Encryption Configuration",
        description: "Implementing SSL connections in transit and AES-256 encryption at rest."
      },
      {
        title: "Cloud Security Configuration Auditing",
        description: "Reviewing setups to identify open ports and insecure configurations."
      },
      {
        title: "CloudTrail & Access Auditing",
        description: "Configuring logging to track and audit all cloud resource changes and access."
      },
      {
        title: "Compliance Preparation Checks",
        description: "Aligning infrastructure setups with industry security guidelines."
      }
    ],
    features: [
      "Private network subnets isolating databases from public traffic",
      "Strict least-privilege IAM policies protecting resources",
      "SSL connections in transit and AES-256 data encryption at rest",
      "Open port and security vulnerability reviews",
      "Logging systems tracking all resource access and changes",
      "Compliance-ready cloud infrastructure setups"
    ],
    technologies: ["AWS IAM", "VPC Security Groups", "CloudTrail", "SSL / TLS Encryption", "Security Scanner tools"],
    process: ["Security & Access Audit", "VPC Network Isolation Setup", "IAM Policy Tightening", "Data Encryption Configuration", "Access Logging Setup", "Verification Auditing"],
    whyChooseUs: [
      {
        title: "Private Network Native",
        description: "Databases isolated in private subnets, never exposed publicly."
      },
      {
        title: "Least Privilege Enforced",
        description: "Strict IAM policies ensure users only access what they need."
      },
      {
        title: "Full Audit History",
        description: "Log integrations track all system changes and access."
      },
      {
        title: "Compliance Ready",
        description: "Infrastructure configured to meet core industry security standards."
      }
    ],
    faqs: [
      {
        question: "How do you secure a database from the public internet?",
        answer: "By placing it in a private subnet within a Virtual Private Cloud (VPC), allowing access only from authenticated application servers."
      },
      {
        question: "What is least-privilege IAM access?",
        answer: "An access management practice ensuring users and application keys only receive the minimum permissions needed to complete tasks."
      },
      {
        question: "Do you provide formal compliance certifications?",
        answer: "We design and configure infrastructure to meet compliance standards (like SOC2/HIPAA) for audits, but formal certification requires third-party auditing."
      },
      {
        question: "How do you handle security updates?",
        answer: "We configure automated alerts and scheduled patching cycles to keep all operating systems and dependencies secure."
      }
    ],
    cta: {
      headline: "Is Your Cloud Infrastructure Secure from External Attacks?",
      subText: "Let's run a security audit and implement strict access and VPC network isolation.",
      primaryBtn: "Secure Your Cloud",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "performance-monitoring-tuning": {
    slug: "performance-monitoring-tuning",
    title: "Performance Monitoring & Tuning",
    icon: "Cloud",
    shortDescription: "Setting up real-time server dashboard monitors, alert configurations, and database query tuning for speed.",
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
      badge: "Cloud Monitoring",
      title: "Performance Monitoring & Tuning",
      subText: "Monitor system health in real-time. We configure server dashboards, set up error alerts, and tune database queries to maintain speed.",
      primaryCtaText: "Tune Performance",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a DevOps Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Undetected server memory leaks or slow database queries can cause slow page loads and user frustration before you realize there's an issue. Performance Monitoring & Tuning integrates real-time dashboard tracking and automated error alerting, optimizing queries to keep your platform fast.",
    problemsSolved: [
      "Slow application loading times due to unindexed database queries.",
      "Unnoticed server memory leaks causing sudden host crashes.",
      "Slow page speeds during periods of high user traffic.",
      "Lack of real-time visibility into database connection loads.",
      "Alert delays during critical system outages.",
      "High cloud bills from over-provisioned database instances."
    ],
    subServices: [
      {
        title: "Uptime & Health Monitoring",
        description: "Configuring monitors to track server CPU, memory, and database connections."
      },
      {
        title: "Database Query Indexing",
        description: "Analyzing slow database logs and adding indexes to speed up query response times."
      },
      {
        title: "Error Tracking Setup",
        description: "Integrating tools (Sentry) to capture and notify developers of runtime errors."
      },
      {
        title: "Cache Layer Implementation",
        description: "Configuring Redis cache layers to store frequent queries and reduce database loads."
      },
      {
        title: "Server Scale Configuration",
        description: "Tuning server capacity parameters to handle traffic efficiently without high cost."
      },
      {
        title: "Real-Time System Alerts",
        description: "Setting up SMS or Slack alerts to notify the team of system threshold issues."
      }
    ],
    features: [
      "Real-time health monitoring of server CPU, memory, and loads",
      "Database query optimization and index tuning for speed",
      "Sentry error logging capturing runtime client bugs",
      "Redis cache integrations reducing database overhead",
      "Slack/SMS alerts notifying the team of outages instantly",
      "Resource allocation reviews to manage cloud hosting bills"
    ],
    technologies: ["Sentry", "Redis", "PostgreSQL / MongoDB indexes", "AWS CloudWatch", "Datadog", "Linux tools"],
    process: ["Telemetry & Logger Setup", "Slow Query & Log Auditing", "Database Index Tuning", "Redis Cache Integration", "Slack Alerts Setup", "Performance Verification"],
    whyChooseUs: [
      {
        title: "Catch Issues Early",
        description: "Alerts flag issues before users experience slow loads or outages."
      },
      {
        title: "Fast Database Queries",
        description: "Index and cache optimization database speeds up response times."
      },
      {
        title: "Telemetry Driven",
        description: "Performance improvements backed by database metric logs."
      },
      {
        title: "Resource Efficient",
        description: "Tuned configurations prevent over-paying for host capacity."
      }
    ],
    faqs: [
      {
        question: "Why does our database get slow over time?",
        answer: "As database records grow, queries take longer without proper indexing. We analyze logs to find and index slow queries, keeping operations fast."
      },
      {
        question: "How does Redis cache speed up the application?",
        answer: "By caching frequent, static query results in memory, letting the app bypass database queries and serve data in milliseconds."
      },
      {
        question: "Will setting up monitoring slow down our app?",
        answer: "No. Modern monitoring tools run asynchronously in the background, having no measurable impact on page load speeds."
      },
      {
        question: "Can you configure alerts for our developers' Slack?",
        answer: "Yes, we integrate error alerts directly into your Slack or Teams channels, keeping your team informed in real-time."
      }
    ],
    cta: {
      headline: "Is Your Software Performance Lagging Under Load?",
      subText: "Let's configure monitoring dashboards and tune queries to keep your app fast.",
      primaryBtn: "Tune Performance",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
