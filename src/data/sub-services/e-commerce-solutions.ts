import { ServiceDetail } from '../servicesData'

export const eCommerceSolutionsSubServices: Record<string, ServiceDetail> = {
  "custom-storefront-build": {
    slug: "custom-storefront-build",
    title: "Custom Storefront Build",
    icon: "ShoppingCart",
    shortDescription: "Bespoke, high-performance e-commerce storefronts designed around your specific brand and complex product rules.",
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
      badge: "Custom Storefronts",
      title: "Custom E-commerce Storefront Builds",
      subText: "Ditch generic templates. We design custom storefronts matching your unique brand guidelines, optimizing page loads and sales.",
      primaryCtaText: "Build Custom Storefront",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Developer",
      secondaryCtaLink: "/contact"
    },
    overview: "Generic e-commerce themes often limit complex product rules, subscription setups, or custom bundle options. Custom Storefront Build creates optimized, high-fidelity online stores tailored specifically to your conversion goals, using modern headless frameworks to yield sub-second page loads.",
    problemsSolved: [
      "Slow page speeds causing high mobile cart abandonment.",
      "Rigid product options templates limiting bundle logic setups.",
      "Generic theme layouts diluting brand equity.",
      "Difficulties configuring custom subscription or membership plans.",
      "Unresponsive mobile cart displays frustrating buyers.",
      "Difficulties connecting store checkouts to third-party ERP databases."
    ],
    subServices: [
      {
        title: "Bespoke Visual Design",
        description: "Figma layouts designed around your brand style, maximizing image interest and search visibility."
      },
      {
        title: "React Storefront Engineering",
        description: "Building fast storefront components in Next.js/React connected to Shopify or Medusa APIs."
      },
      {
        title: "Dynamic Bundle Setup",
        description: "Coding rules allowing buyers to customize product bundles or add-on items easily."
      },
      {
        title: "Frictionless Checkout Design",
        description: "Tuning cart drawer steps and payment interfaces to reduce single-hand user fatigue."
      },
      {
        title: "Global CDN Configuration",
        description: "Hosting storefront assets on edge networks (Vercel) for instant page deliveries."
      },
      {
        title: "Analytics Sync Setup",
        description: "Piping conversion events directly to Google Analytics, Facebook Pixel, and CRM logs."
      }
    ],
    features: [
      "Bespoke visual layouts custom-tailored to brand identity",
      "Statically generated pages (Next.js) loading in milliseconds",
      "Dynamic bundle and volume pricing logics coded directly",
      "Frictionless, responsive checkout layout pipelines",
      "Global CDN edge hosting ensuring rapid speeds globally",
      "Conversion tracking metrics synced to marketing pixels"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Shopify Storefront API", "Medusa", "Stripe", "Tailwind CSS"],
    process: ["Requirements Discovery", "Wireframes & Figma Design", "Storefront React Engineering", "API Integration & Checkout Setup", "Mock Checkout Auditing", "Live Deployment Support"],
    whyChooseUs: [
      {
        title: "High Performance",
        description: "Sub-second load times reduce cart bounce rates on mobile."
      },
      {
        title: "Unlimited Customization",
        description: "Code custom bundle or product options logic directly."
      },
      {
        title: "Conversion Focused",
        description: "Every section is optimized to guide users to checkout."
      },
      {
        title: "Secure Payments",
        description: "Fully PCI-compliant payment integrations keep customer data safe."
      }
    ],
    faqs: [
      {
        question: "Why choose a custom storefront over a standard Shopify theme?",
        answer: "Standard themes are often slowed down by heavy plugin scripts. A custom frontend (headless) allows for unique designs and custom logic while keeping the store incredibly fast."
      },
      {
        question: "Can we still manage products in our Shopify admin?",
        answer: "Yes. Headless setups connect your custom frontend to Shopify via APIs, so your team can still manage catalogs, pricing, and orders in the Shopify dashboard."
      },
      {
        question: "How do you optimize mobile conversion rates?",
        answer: "By streamlining cart drawers, adding quick-buy buttons, and optimizing the checkout flow for easy mobile touch actions."
      },
      {
        question: "Do you handle payment integration configurations?",
        answer: "Yes, we securely integrate checkouts with major payment gateways like Stripe, PayPal, and Apple Pay."
      }
    ],
    cta: {
      headline: "Need a High-Performance Storefront Tailored to Your Brand?",
      subText: "Let's build a custom e-commerce storefront designed to convert more visitors into buyers.",
      primaryBtn: "Build Custom Storefront",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "shopify-setup-customization": {
    slug: "shopify-setup-customization",
    title: "Shopify Setup & Customization",
    icon: "ShoppingCart",
    shortDescription: "End-to-end Shopify store configuration, bespoke Liquid theme development, and secure app installations.",
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
      badge: "Shopify Setup",
      title: "Shopify Store Setup & Customization",
      subText: "Configure your Shopify store. We build custom Liquid themes, set up inventory parameters, and integrate apps cleanly.",
      primaryCtaText: "Setup Shopify Store",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Shopify Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "Launching a Shopify store requires careful configuration: setting up domain routing, tax logic, shipping settings, and domain keys correctly. Standard themes can also look generic without custom code. We offer complete Shopify setup and Liquid optimization, customizing sections, configuring checkouts, and installing apps cleanly to avoid script bloat.",
    problemsSolved: [
      "Standard Shopify themes looking generic or basic.",
      "Tax rules or shipping settings configured incorrectly.",
      "Too many apps slowing down store load speeds.",
      "Difficulties importing product lists from WooCommerce or spreadsheets.",
      "Domain and email verification issues (DKIM/DMARC) causing notification failures.",
      "Payment gateway configuration errors blocking checkouts."
    ],
    subServices: [
      {
        title: "Bespoke Liquid Theme Development",
        description: "Writing custom Liquid code to add unique layout sections and features to your Shopify theme."
      },
      {
        title: "Catalog Setup & Imports",
        description: "Structuring collections, product tags, variant options, and importing catalog data cleanly."
      },
      {
        title: "App Audits & Installations",
        description: "Selecting and installing apps for reviews, search, and marketing, optimizing scripts to maintain speed."
      },
      {
        title: "Shipping & Tax Configuration",
        description: "Setting up shipping rates, carrier rules, and local tax settings."
      },
      {
        title: "Notification Email Customization",
        description: "Designing and styling order confirmation emails to match your brand."
      },
      {
        title: "Domain & DNS Setup",
        description: "Routing domains and setting up SPF/DKIM/DMARC records to ensure email delivery."
      }
    ],
    features: [
      "Custom visual layouts designed via Liquid theme code",
      "Clean product catalog data structuring and tag management",
      "Fast page speeds maintained through regular app audits",
      "Accurate tax and shipping rules set up automatically",
      "Branded customer notification emails",
      "Verified DNS records ensuring email deliverability"
    ],
    technologies: ["Shopify Liquid", "HTML / CSS", "JavaScript", "Shopify Apps ecosystem", "DNS configurations"],
    process: ["Shopify Account Setup", "Liquid Theme Customization", "Catalog Data Imports", "Shipping & Tax Audits", "Email Styling & Domain verification", "Storefront Launch support"],
    whyChooseUs: [
      {
        title: "Clean Code Theme",
        description: "Custom sections coded directly in Liquid, avoiding heavy apps."
      },
      {
        title: "Accurate Settings",
        description: "Tax and shipping rules configured correctly to prevent checkout errors."
      },
      {
        title: "Optimized Speed",
        description: "App script optimization keeps your storefront fast."
      },
      {
        title: "Verified Delivery",
        description: "DKIM/DMARC DNS setups ensure order emails reach inboxes."
      }
    ],
    faqs: [
      {
        question: "How long does a custom Shopify store setup take?",
        answer: "A custom Liquid theme and catalog setup typically takes 2 to 3 weeks, depending on catalog size and design complexity."
      },
      {
        question: "Can you help migrate our store from WooCommerce?",
        answer: "Yes. We migrate products, variants, customer lists, and order histories to Shopify safely using secure import tools."
      },
      {
        question: "Will installing apps slow down our Shopify store?",
        answer: "Yes, too many apps can slow down load speeds. We audit apps and write custom Liquid code to add features directly where possible."
      },
      {
        question: "Do you configure Shopify POS for physical retail?",
        answer: "Yes, we configure inventory sync settings between online catalogs and physical retail POS points."
      }
    ],
    cta: {
      headline: "Need Your Shopify Store Configured Correctly?",
      subText: "Let's build a custom Liquid theme and configure your store settings to launch safely.",
      primaryBtn: "Setup Shopify Store",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "multi-vendor-marketplace-platform": {
    slug: "multi-vendor-marketplace-platform",
    title: "Multi-vendor Marketplace Platform",
    icon: "ShoppingCart",
    shortDescription: "Developing marketplace platforms (like Etsy or Amazon) featuring vendor portals, payout splits, and order routing.",
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
      badge: "Marketplaces",
      title: "Multi-Vendor Marketplace Platforms",
      subText: "Build custom marketplaces. We develop vendor portals, configure split payouts (Stripe Connect), and design clean product dashboards.",
      primaryCtaText: "Build Marketplace",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Architect",
      secondaryCtaLink: "/contact"
    },
    overview: "Multi-vendor marketplaces require complex data relationships and transaction handling: managing distinct vendor catalog lists, routing payouts, and split invoicing. We build custom marketplace applications featuring isolated vendor portals, Stripe Connect splits, and automated order routing systems.",
    problemsSolved: [
      "Managing vendor registrations and payouts manually.",
      "Complex split payments failing at checkout.",
      "No isolated dashboards for vendors to manage their catalog items.",
      "Incorrect commission calculations on multi-seller orders.",
      "Difficulties routing order details to different seller warehouses.",
      "Scale limitations in standard e-commerce platform setups."
    ],
    subServices: [
      {
        title: "Vendor Onboarding Portals",
        description: "Building secure registration and login portals for vendors to manage settings and catalog items."
      },
      {
        title: "Stripe Connect Integration",
        description: "Configuring split payments to route commission cuts to you and product sales to vendors automatically."
      },
      {
        title: "Automated Order Routing",
        description: "Piping order details to appropriate seller dashboard accounts for packaging."
      },
      {
        title: "Unified Cart Checkout",
        description: "Designing checkouts allowing buyers to purchase from multiple vendors in one transaction."
      },
      {
        title: "Seller Analytics Dashboards",
        description: "Configuring custom analytics charts for sellers to track sales and orders."
      },
      {
        title: "Review & Moderation Systems",
        description: "Building systems for admins to review and approve product listings before they go live."
      }
    ],
    features: [
      "Isolated onboarding dashboards for vendors",
      "Stripe Connect split payouts handling transactions automatically",
      "Automated order routing sending details to sellers instantly",
      "Unified checkouts processing multi-seller carts cleanly",
      "Custom analytics widgets tracking seller performance",
      "Admin moderation flows to review vendor listings"
    ],
    technologies: ["Next.js", "Node.js", "Stripe Connect", "PostgreSQL / Prisma", "Tailwind CSS", "AWS S3"],
    process: ["Database & Flow Modeling", "Portal & UI Mockups Design", "Stripe Connect & API Setup", "Unified Cart Development", "Security & Payout Testing", "Platform Launch"],
    whyChooseUs: [
      {
        title: "Scale Ready",
        description: "Robust data architectures built to support thousands of vendors."
      },
      {
        title: "Automated Payouts",
        description: "Stripe Connect handles splits, tax documentation, and payouts automatically."
      },
      {
        title: "Isolated Dashboards",
        description: "Sellers manage inventory and orders in their own secure dashboard."
      },
      {
        title: "Moderation Controls",
        description: "Admin portals keep you in control of product quality and listings."
      }
    ],
    faqs: [
      {
        question: "How do splits and payouts work in the marketplace?",
        answer: "By integrating Stripe Connect. Buyers pay a single total at checkout, and Stripe splits the funds automatically, routing your commission and the seller's share instantly."
      },
      {
        question: "Can vendors upload bulk product listings?",
        answer: "Yes. We build CSV import tools within vendor portals, letting them import large catalogs easily."
      },
      {
        question: "Are vendors restricted from accessing other sellers' data?",
        answer: "Yes. We enforce database row-level security (RLS), isolating seller records and dashboards completely."
      },
      {
        question: "How long does a custom marketplace platform build take?",
        answer: "A custom marketplace involves complex features. A focused first version typically takes 6 to 8 weeks, scoped precisely after discovery."
      }
    ],
    cta: {
      headline: "Ready to Build the Next Major Multi-Vendor Platform?",
      subText: "Let's design and build a scalable marketplace featuring automated split payments and seller portals.",
      primaryBtn: "Build Marketplace",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "payment-shipping-integration": {
    slug: "payment-shipping-integration",
    title: "Payment & Shipping Integration",
    icon: "ShoppingCart",
    shortDescription: "Linking online checkouts to Stripe, PayPal, Razorpay, and configuring automated shipping carriers API (Shippo/ShipStation).",
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
      badge: "Integrations",
      title: "Payment & Shipping Integrations",
      subText: "Automate checkout pipelines. We connect your store to secure payment gateways and configure shipping carrier APIs cleanly.",
      primaryCtaText: "Integrate Checkout",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Developer",
      secondaryCtaLink: "/contact"
    },
    overview: "Connecting checkouts to payment gateways and shipping calculators manually leads to transaction errors. Payment & Shipping Integration connects APIs from gateways (Stripe, PayPal) and shipping coordinators (ShipStation, Shippo) to automate payment capture and tracking generation.",
    problemsSolved: [
      "Failed checkouts due to payment API integration errors.",
      "Manual address checks delaying product packaging.",
      "Shipping rates calculated incorrectly, losing margin on heavy orders.",
      "Customers receiving tracking numbers late or not at all.",
      "Payment credentials stored insecurely, risking compliance issues.",
      "Downtime during payment failures with no backup gateway routing."
    ],
    subServices: [
      {
        title: "Secure Payment Integrations",
        description: "Connecting checkouts to Stripe, PayPal, or local processors, enforcing encryption standards."
      },
      {
        title: "Dynamic Shipping Calculators",
        description: "Connecting shipping APIs (UPS, FedEx, DHL) to show live rate estimations in checkouts."
      },
      {
        title: "Label Generation Setup",
        description: "Linking checkouts to ShipStation or Shippo to generate shipping labels automatically."
      },
      {
        title: "Tracking Status Sync",
        description: "Piping package tracking updates back to customer order dashboard files."
      },
      {
        title: "Refund Process Automation",
        description: "Configuring API pipelines to process customer refunds and inventory updates automatically."
      },
      {
        title: "Subscription Billing Setup",
        description: "Integrating Stripe Billing workflows for automatic recurring customer subscriptions."
      }
    ],
    features: [
      "Secure payment processing via major gateways",
      "Dynamic, real-time shipping rate calculators",
      "Automated label generation APIs in the backend",
      "Real-time shipping tracking alerts for customers",
      "Automated refund processing pipelines",
      "Recurring subscription billing configurations"
    ],
    technologies: ["Stripe API", "PayPal SDK", "Shippo / ShipStation APIs", "Node.js", "REST APIs", "Secure webhooks"],
    process: ["API Scoping & Audit", "Secure Payment Gateway Integration", "Shipping Carrier API Connections", "Label Printing Automation", "Webhook & Testing Runs", "Verification & Launch"],
    whyChooseUs: [
      {
        title: "Secure Checkouts",
        description: "Fully PCI-compliant payment integrations protect client data."
      },
      {
        title: "Automated Shipping Labels",
        description: "Labels and tracking numbers generate automatically on order."
      },
      {
        title: "Accurate Rates",
        description: "Dynamic rate calculators prevent undercharging for shipping."
      },
      {
        title: "Robust Webhooks",
        description: "Webhook logs ensure orders sync even during network hiccups."
      }
    ],
    faqs: [
      {
        question: "How do you secure payment details in our app?",
        answer: "We use hosted token fields (like Stripe Elements). Sensitive card numbers never touch your servers, ensuring compliance."
      },
      {
        question: "Can we support local dynamic payment options?",
        answer: "Yes. We configure gateways to support localized options like iDEAL, Bancontact, Klarna, or UPI based on buyer region."
      },
      {
        question: "What is a webhook and why is it needed?",
        answer: "A webhook is an API alert sent by the gateway to confirm payment success, ensuring orders are logged even if users close browsers."
      },
      {
        question: "Can we connect multiple shipping carriers?",
        answer: "Yes, using platforms like Shippo or ShipStation, we can pull rates from dozens of global carriers in one interface."
      }
    ],
    cta: {
      headline: "Is Your Checkout Process Prone to Payment Errors?",
      subText: "Let's integrate secure payment gateways and automate shipping label generation.",
      primaryBtn: "Integrate Checkout",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "e-commerce-conversion-optimization": {
    slug: "e-commerce-conversion-optimization",
    title: "E-commerce Conversion Optimization",
    icon: "ShoppingCart",
    shortDescription: "Analyzing store telemetry, optimizing page speeds, and refining layouts to increase average order values.",
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
      badge: "CRO Services",
      title: "E-commerce Conversion Optimization (CRO)",
      subText: "Increase sales conversions. We optimize page speeds, refine checkouts, and build upsell modules to elevate order values.",
      primaryCtaText: "Optimize Conversions",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a CRO Expert",
      secondaryCtaLink: "/contact"
    },
    overview: "High traffic means little if your storefront conversion rate remains low. E-commerce Conversion Optimization analyzes user action paths, fixes layout speed bottlenecks, and builds upsell tools to turn more visitors into buyers.",
    problemsSolved: [
      "High visitor counts with low checkouts conversion rates.",
      "High cart abandonment rates on the checkout page.",
      "Slow product page loads causing mobile users to bounce.",
      "Low average order values (AOV) from lack of upsell options.",
      "Confusing filters making it hard for users to find products.",
      "Lack of product review visibility undermining buyer trust."
    ],
    subServices: [
      {
        title: "Store Performance Tuning",
        description: "Optimizing code files and compressing images to keep product pages loading instantly."
      },
      {
        title: "Checkout Flow Streamlining",
        description: "Reducing checkout steps and form inputs to minimize purchase friction."
      },
      {
        title: "Upsell & Cross-Sell Setup",
        description: "Building automated product recommendation widgets to increase average order values."
      },
      {
        title: "Search & Filter Optimization",
        description: "Structuring fast, relevant search filters to help buyers locate items easily."
      },
      {
        title: "Social Proof Integrations",
        description: "Integrating reviews, trust badges, and testimonials to build buyer confidence."
      },
      {
        title: "Listing A/B Testing",
        description: "Configuring tests comparing CTA button placements, colors, and headers."
      }
    ],
    features: [
      "Millisecond page load optimizations reducing bounce rates",
      "Frictionless, single-page checkout templates",
      "Automated post-purchase upsell and cross-sell setups",
      "Fast, dynamic product search and indexing filters",
      "Verified customer review and trust badge displays",
      "A/B test configurations comparing layout updates"
    ],
    technologies: ["Shopify Liquid", "A/B testing tools", "Google Analytics", "Hotjar heatmap logging", "PageSpeed Insights"],
    process: ["Conversion & Speed Audit", "Heatmap & Funnel Tracking Setup", "Checkout & Layout Streamlining", "Upsell Module Development", "A/B Testing Deploy", "Performance Review"],
    whyChooseUs: [
      {
        title: "Speed Native",
        description: "Code optimizations yield immediate page load improvements."
      },
      {
        title: "Metric Driven",
        description: "Design changes are based on analytics data and heatmaps."
      },
      {
        title: "AOV Focused",
        description: "Upsell integrations help increase your average order value."
      },
      {
        title: "Seamless Handoff",
        description: "We update layouts directly without introducing third-party script bloat."
      }
    ],
    faqs: [
      {
        question: "What is a good e-commerce conversion rate?",
        answer: "Most online stores average a 1.5% to 2.5% conversion rate. A successful optimization project can double this by closing usability gaps."
      },
      {
        question: "Will optimization changes affect our store's design?",
        answer: "We focus on streamlining existing designs, optimizing margins, button size contrast, and speeds without altering your core brand style."
      },
      {
        question: "How do you identify checkout friction points?",
        answer: "By using heatmap recorders and conversion funnel trackers to see exactly where users abandon tasks or pause on checkouts."
      },
      {
        question: "Do you use third-party apps for upsell widgets?",
        answer: "We prefer writing custom Liquid code for upsell widgets where possible, preventing third-party script bloat from slowing down your site."
      }
    ],
    cta: {
      headline: "Is Your Store Traffic Failing to Turn into Completed Sales?",
      subText: "Let's run a conversion audit and implement layout speed and cart optimizations.",
      primaryBtn: "Optimize Conversions",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "inventory-order-management": {
    slug: "inventory-order-management",
    title: "Inventory & Order Management",
    icon: "ShoppingCart",
    shortDescription: "Connecting storefront inventories to ERPs, sync systems, and automated stock alerts.",
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
      badge: "Inventory Systems",
      title: "Inventory & Order Management",
      subText: "Sync stock automatically. We connect storefront inventories to ERP databases, warehouse platforms, and set up low-stock alerts.",
      primaryCtaText: "Sync Inventory",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Developer",
      secondaryCtaLink: "/contact"
    },
    overview: "Mismatched stock counts can lead to selling out-of-stock items, double-sales, and customer disappointment. Inventory & Order Management connects storefronts to warehouse platforms, ERP databases, and channel distributors to automate inventory updates.",
    problemsSolved: [
      "Selling out-of-stock items due to slow inventory updates.",
      "Manual stock count entry errors across sales channels.",
      "Lack of real-time stock visibility across physical and online stores.",
      "Delays processing order files due to legacy warehouse setups.",
      "Inventory reconciliation issues causing bookkeeping delays.",
      "High costs of custom ERP integration services."
    ],
    subServices: [
      {
        title: "ERP Database Integrations",
        description: "Connecting store catalogs to NetSuite, SAP, or custom ERP systems via secure APIs."
      },
      {
        title: "Multi-Channel Stock Sync",
        description: "Automating stock updates across Shopify, Amazon, and physical retail POS points."
      },
      {
        title: "Low-Stock Alert Setup",
        description: "Configuring automated email or SMS notifications when inventory levels drop below thresholds."
      },
      {
        title: "Warehouse Management Piping",
        description: "Routing order details automatically to warehouse packing queues (ShipStation API)."
      },
      {
        title: "Returns Sync Automation",
        description: "Updating stock counts and databases automatically when customers return items."
      },
      {
        title: "Inventory Auditing Dashboards",
        description: "Designing dashboards in React to track stock histories and sync records."
      }
    ],
    features: [
      "Direct API integrations connecting catalogs to ERP databases",
      "Multi-channel stock sync across Shopify, Amazon, and POS points",
      "Automated alerts flagging low-stock items",
      "Warehouse packing integration routing orders automatically",
      "Dynamic returns inventory adjustment setups",
      "React dashboards tracking stock sync histories"
    ],
    technologies: ["Shopify API", "ERP systems APIs (NetSuite / SAP)", "Node.js", "PostgreSQL", "Cron sync scripting"],
    process: ["Inventory Audit & Mapping", "API Integration Setup", "Multi-Channel Sync Configuration", "Alert Threshold Setup", "Staging Sync Testing", "Launch & Monitoring Setup"],
    whyChooseUs: [
      {
        title: "Accurate Sync",
        description: "Real-time updates prevent selling out-of-stock items."
      },
      {
        title: "Unified Inventory",
        description: "Sync stock across online, retail, and marketplace channels."
      },
      {
        title: "Low-Stock Alerts",
        description: "Automatic alerts notify you when it's time to reorder."
      },
      {
        title: "Clean ERP Sync",
        description: "Integrate with NetSuite or SAP without high custom development overhead."
      }
    ],
    faqs: [
      {
        question: "Can you sync stock with our physical retail POS?",
        answer: "Yes, we integrate POS APIs (like Shopify POS, Square, or Clover) to sync stock counts with online store databases in real-time."
      },
      {
        question: "How do you prevent data transfer errors in the sync?",
        answer: "We write error-retry loops and transaction logs, logging any sync alerts for quick troubleshooting."
      },
      {
        question: "Do you support multi-warehouse setups?",
        answer: "Yes. We configure routing rules to fulfill orders from the closest warehouse with available stock."
      },
      {
        question: "How long does a custom ERP sync integration take?",
        answer: "NetSuite or SAP integrations involve complex testing. Simple setups take 3 to 4 weeks, while custom architectures are scoped during discovery."
      }
    ],
    cta: {
      headline: "Still Typing Inventory Updates Manually into Spreadsheets?",
      subText: "Let's build an automated sync connecting storefronts to your warehouse and ERP systems.",
      primaryBtn: "Sync Inventory",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
