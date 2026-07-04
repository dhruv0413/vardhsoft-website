import { ServiceDetail } from '../servicesData'

export const mobileAppSubServices: Record<string, ServiceDetail> = {
  "android-app-development": {
    slug: "android-app-development",
    title: "Android App Development",
    icon: "Smartphone",
    shortDescription: "Performance-focused Android applications built to run seamlessly on various mobile devices.",
    theme: {
      glow: "rgba(16, 185, 129, 0.15)",
      text: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      borderPulse: "border-emerald-500/20",
      bulletBg: "bg-emerald-500",
      heroPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
      ctaPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/10 hover:shadow-emerald-500/20",
      pricingPopularBorder: "border-emerald-500",
      pricingPopularBadge: "bg-emerald-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500",
      groupHoverBorder: "group-hover:border-emerald-500",
    },
    hero: {
      badge: "Android Development",
      title: "Android App Development",
      subText: "Reach millions of global users. We build responsive Android applications optimized for diverse device screens and operations.",
      primaryCtaText: "Build Android App",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "The Android ecosystem is massive but highly fragmented, spanning thousands of device manufacturers, screen resolutions, and OS versions. A poorly coded Android application will crash or display incorrectly on a significant portion of devices. We build custom Android applications utilizing modern Kotlin frameworks or cross-platform codebases, ensuring smooth performance, adaptive layouts, and full compliance with Google Play Store standards.",
    problemsSolved: [
      "Application lag or freeze on low-tier Android hardware.",
      "Layout distortion on non-standard screen sizes or aspect ratios.",
      "High battery drainage caused by unoptimized background thread operations.",
      "Google Play Store rejection due to security policy violations.",
      "Difficulty connecting offline databases with cloud servers.",
      "Clunky user onboarding flows causing drop-offs during signups."
    ],
    subServices: [
      {
        title: "Kotlin & Java Engineering",
        description: "Coding robust native Android architectures optimized for device performance."
      },
      {
        title: "Adaptive Layout Design",
        description: "Structuring UI screens that auto-scale beautifully on budget phones and high-tier tablets."
      },
      {
        title: "Google Play Sync & Launch",
        description: "Managing app setup, listings details, privacy policies, and release tracks in Play Console."
      },
      {
        title: "Local Database Integration",
        description: "Implementing secure offline databases (SQLite/Room) for offline field operations."
      },
      {
        title: "Push Notifications Piping",
        description: "Connecting Firebase Cloud Messaging (FCM) to trigger alerts even when the app is closed."
      },
      {
        title: "Hardware API Linking",
        description: "Integrating camera, biometrics access, Bluetooth, and GPS modules securely."
      }
    ],
    features: [
      "Native-grade rendering speeds with optimized rendering trees",
      "Adaptive UI conforming to Material Design parameters",
      "Frictionless background synchronization pipelines",
      "Low battery consumption footprint during idle states",
      "MFA and secure local biometric unlock setups",
      "Comprehensive device compatibility reports before launch"
    ],
    technologies: ["Kotlin", "Java", "Android Studio", "Firebase", "Room DB", "REST APIs", "Jetpack Compose"],
    process: ["Android Flow Mapping", "UI & Navigation Prototyping", "Core Architecture Setup", "Iterative Component Coding", "Google Play Release Prep", "Deploy & Monitoring"],
    whyChooseUs: [
      {
        title: "Device Optimized",
        description: "Tested across hundreds of physical and simulated Android screens."
      },
      {
        title: "Play Store Native",
        description: "We handle 100% of Google's security check guidelines."
      },
      {
        title: "Battery Conscious",
        description: "Efficient background processing to preserve phone life."
      },
      {
        title: "Offline Ready",
        description: "Structured storage ensuring the app runs without cell signals."
      }
    ],
    faqs: [
      {
        question: "Will our Android app work on older versions of Android?",
        answer: "Yes. We configure compatibility parameters to support Android versions representing over 95% of active devices globally, ensuring you don't alienate users."
      },
      {
        question: "How long does the Google Play Store approval process take?",
        answer: "Google typically reviews and approves new apps within 3 to 7 days, though this can vary depending on developer history and app complexity."
      },
      {
        question: "Can the app connect to our existing web database?",
        answer: "Yes, we build secure REST or GraphQL API connectors that sync data between the Android client and your cloud databases in real-time."
      },
      {
        question: "Do you build native or hybrid apps?",
        answer: "We offer both native Kotlin development (for maximum hardware access and speed) and hybrid React Native/Flutter (to share codebase resources with iOS)."
      }
    ],
    cta: {
      headline: "Ready to Reach the Global Android Market?",
      subText: "Let's build a fast, secure, and device-optimized Android application.",
      primaryBtn: "Build Android App",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "ios-app-development": {
    slug: "ios-app-development",
    title: "iOS App Development",
    icon: "Smartphone",
    shortDescription: "Apple ecosystem mobile applications designed with native feel, performance, and compliance.",
    theme: {
      glow: "rgba(16, 185, 129, 0.15)",
      text: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      borderPulse: "border-emerald-500/20",
      bulletBg: "bg-emerald-500",
      heroPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
      ctaPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/10 hover:shadow-emerald-500/20",
      pricingPopularBorder: "border-emerald-500",
      pricingPopularBadge: "bg-emerald-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500",
      groupHoverBorder: "group-hover:border-emerald-500",
    },
    hero: {
      badge: "iOS Development",
      title: "iOS App Development",
      subText: "Engage high-value Apple users. We build premium native iOS applications in Swift, matching Apple's strict design and performance rules.",
      primaryCtaText: "Build iOS App",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Apple users expect a highly polished, responsive, and secure experience. Apple's App Store Review guidelines are notoriously strict, and minor performance lags or UI alignment flaws will lead to app rejection. We build native iOS applications using Swift and SwiftUI, crafting fluid transitions, secure Apple Pay checkouts, and fully conforming to iOS Human Interface Guidelines.",
    problemsSolved: [
      "App Store rejection due to design guidelines or technical compliance failures.",
      "Laggy list scroll speeds or interface glitches on iPhone screens.",
      "Data leaks violating Apple's strict user privacy rules.",
      "Complicated in-app subscription setups causing payment failures.",
      "Notifications failing to wake device clients correctly.",
      "Poor iPad display adaptations leaving wasted blank spaces."
    ],
    subServices: [
      {
        title: "SwiftUI & Swift Coding",
        description: "Developing native iOS client logic utilizing Apple's modern rendering frameworks."
      },
      {
        title: "iOS Interface Design",
        description: "Aligning layouts with iOS Human Interface Guidelines for premium look and feel."
      },
      {
        title: "App Store Connect Launch",
        description: "Managing App Store metadata submissions, screenshots assets, and compliance approvals."
      },
      {
        title: "In-App Purchases (IAP)",
        description: "Integrating Apple Store subscriptions, one-time unlock payments, and billing validation."
      },
      {
        title: "Apple Ecosystem Linking",
        description: "Connecting Apple Pay, Sign in with Apple, CoreLocation, and FaceID modules."
      },
      {
        title: "Beta Flight Testing",
        description: "Managing internal user testing phases through TestFlight prior to release launch."
      }
    ],
    features: [
      "Smooth 60fps/120fps interface transitions",
      "Native Apple Pay checkouts with minimal user friction",
      "Strict data sandboxing protecting user account credentials",
      "Adaptive UI rendering across iPhone and iPad viewports",
      "Integrated Sign in with Apple authentication pathways",
      "Zero-downtime database pipelines caching data offline"
    ],
    technologies: ["Swift", "SwiftUI", "Xcode", "App Store Connect", "TestFlight", "CocoaPods / Swift Package Manager", "FaceID"],
    process: ["iOS Flow Discovery", "Figma Design Conformance", "Swift Native Coding", "Beta TestFlight Deploy", "App Store Submission", "Launch Support"],
    whyChooseUs: [
      {
        title: "Premium Finish",
        description: "Strict alignment with Apple's aesthetic standards."
      },
      {
        title: "App Store Approved",
        description: "We handle App Store review processes completely."
      },
      {
        title: "Hardware Integration",
        description: "Clean integration with FaceID, Apple Pay, and Apple APIs."
      },
      {
        title: "Iterative Feedback",
        description: "Continuous feedback via TestFlight beta builds."
      }
    ],
    faqs: [
      {
        question: "How long does App Store review take for iOS?",
        answer: "Apple reviews applications quickly nowadays, typically within 24 to 48 hours, though resolving guidelines rejections can extend this if not coded right initially."
      },
      {
        question: "Do you write native Swift or cross-platform code?",
        answer: "We write native Swift/SwiftUI for client platforms requiring high graphic speeds or close hardware connections, and React Native for unified cross-platform solutions."
      },
      {
        question: "Can we support Apple Watch or iPad screen resolutions?",
        answer: "Yes, we structure layouts using adaptive view parameters to scale app interfaces across iPhone, iPad, and wearable devices."
      },
      {
        question: "How do you handle user accounts security?",
        answer: "By utilizing iOS Keychain Services for storing login keys and configuring biometrics (FaceID/TouchID) for fast, secure access."
      }
    ],
    cta: {
      headline: "Ready to Capture the Premium iOS Marketplace?",
      subText: "Let's construct a beautiful, native Swift iOS application.",
      primaryBtn: "Build iOS App",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "cross-platform-app-development": {
    slug: "cross-platform-app-development",
    title: "Cross-Platform App Development",
    icon: "Smartphone",
    shortDescription: "Shared codebase applications (React Native/Flutter) that cut development overhead by up to 50% without compromising on speed.",
    theme: {
      glow: "rgba(16, 185, 129, 0.15)",
      text: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      borderPulse: "border-emerald-500/20",
      bulletBg: "bg-emerald-500",
      heroPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
      ctaPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/10 hover:shadow-emerald-500/20",
      pricingPopularBorder: "border-emerald-500",
      pricingPopularBadge: "bg-emerald-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500",
      groupHoverBorder: "group-hover:border-emerald-500",
    },
    hero: {
      badge: "Cross-Platform",
      title: "Cross-Platform App Development",
      subText: "Launch on iOS and Android simultaneously. Cut code development and maintenance overhead by up to 50% with high-speed React Native builds.",
      primaryCtaText: "Build Cross-Platform App",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to Our Engineers",
      secondaryCtaLink: "/contact"
    },
    overview: "Maintaining separate native iOS and Android developer teams is a major cost center that delays launch cycles. Cross-platform frameworks like React Native or Flutter allow a single engineering team to compile native app binaries for both operating systems from a single codebase. We build custom cross-platform applications with shared typescript logic, maintaining native rendering speeds and offering a cohesive customer experience on both app store networks.",
    problemsSolved: [
      "Maintaining two separate development pipelines for iOS and Android.",
      "High costs of custom feature iterations across two different codebases.",
      "Inconsistent user experience or feature mismatch between native platforms.",
      "Slow development cycles causing you to miss launch windows.",
      "High storage footprints on devices from bulky hybrid web containers.",
      "Difficulties syncing updates across both platforms at the same time."
    ],
    subServices: [
      {
        title: "React Native Development",
        description: "Building fast, native-rendering iOS and Android apps using JavaScript/TypeScript."
      },
      {
        title: "Shared Business Logic Architectures",
        description: "Structuring logic libraries so API endpoints data maps once to feed both layouts."
      },
      {
        title: "Native Bridge Engineering",
        description: "Writing custom Objective-C/Swift and Java bridges for platform-specific capabilities."
      },
      {
        title: "Dual Store Launch Management",
        description: "Managing deployment pipelines for both App Store Connect and Play Console simultaneously."
      },
      {
        title: "Responsive Interface Tuning",
        description: "Polishing layout grids so they match Android'sMaterial guidelines and Apple's interface standards."
      },
      {
        title: "Over-the-Air (OTA) Updates",
        description: "Deploying immediate bug fixes directly to users without waiting for app store cycles."
      }
    ],
    features: [
      "Up to 90% code reuse across iOS and Android builds",
      "Native UI rendering threads yielding fast scroll speeds",
      "Unified TypeScript typing from backend APIs to layouts",
      "Frictionless database storage caching offline input",
      "Integrated analytics tracking across both app builds",
      "Instant hot-reloading support for fast bug patches"
    ],
    technologies: ["React Native", "TypeScript", "Expo", "Redux Toolkit", "REST & GraphQL APIs", "Firebase", "App Store Connect & Play Console"],
    process: ["Requirements & UI Mapping", "Interface Wireframing", "Shared Codebase Coding", "Native Bridge Setup", "Dual Simulator Testing", "Stores Submission"],
    whyChooseUs: [
      {
        title: "Double the Launch Velocity",
        description: "Deploy on iOS and Android simultaneously."
      },
      {
        title: "Lower Cost of Ownership",
        description: "One development team to maintain and update one codebase."
      },
      {
        title: "Native Performance",
        description: "No slow webview wrapper issues — true native widgets."
      },
      {
        title: "Over-the-Air Fixes",
        description: "Push immediate hotfixes directly to devices without delay."
      }
    ],
    faqs: [
      {
        question: "Is cross-platform as fast as native development?",
        answer: "For 95% of standard B2B and SaaS applications, yes. React Native renders true native UI widgets, making it indistinguishable from native builds, though native code remains preferred for intensive 3D games."
      },
      {
        question: "Can we reuse our React web code in our mobile application?",
        answer: "Yes, we can share typescript type contracts, API utilities, and business logic between React web apps and React Native mobile apps, saving significant code overhead."
      },
      {
        question: "What is Expo and do you use it?",
        answer: "Expo is a modern development wrapper for React Native. We utilize it to speed up builds and deploy over-the-air hotfixes instantly without App Store review waits."
      },
      {
        question: "How do you handle OS-specific permissions (e.g. camera, notifications)?",
        answer: "We use unified cross-platform permissions APIs. The app automatically requests the appropriate system consent from the device user depending on the operating system."
      }
    ],
    cta: {
      headline: "Want to Launch on Both App Stores Without the Double Overhead?",
      subText: "Let's design and build a high-performance cross-platform application.",
      primaryBtn: "Build Cross-Platform App",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "mobile-ui-ux": {
    slug: "mobile-ui-ux",
    title: "Mobile App UI/UX Design",
    icon: "Smartphone",
    shortDescription: "Premium mobile screen layouts and workflows designed for intuitive navigation and conversion.",
    theme: {
      glow: "rgba(16, 185, 129, 0.15)",
      text: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      borderPulse: "border-emerald-500/20",
      bulletBg: "bg-emerald-500",
      heroPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
      ctaPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/10 hover:shadow-emerald-500/20",
      pricingPopularBorder: "border-emerald-500",
      pricingPopularBadge: "bg-emerald-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500",
      groupHoverBorder: "group-hover:border-emerald-500",
    },
    hero: {
      badge: "Mobile UI/UX",
      title: "Mobile UI/UX Design",
      subText: "Design intuitive interfaces that users love. We build premium, pixel-perfect layouts and flow mockups optimized for single-hand mobile use.",
      primaryCtaText: "Start Designing",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Designer",
      secondaryCtaLink: "/contact"
    },
    overview: "Designing for mobile goes beyond copying a website layout onto a smaller screen. Mobile users interact with apps via touch, in diverse lighting conditions, and often using a single hand. A poor mobile layout has tiny tap targets, confusing navigations, and excessive form inputs that cause user fatigue. We design bespoke mobile interfaces in Figma, optimizing finger reach parameters, input forms, and transition animations for frictionless customer workflows.",
    problemsSolved: [
      "User drop-off due to confusing navigation or tiny tap targets.",
      "High cart abandonment rates from complicated registration forms.",
      "Accessibility issues preventing visually impaired users from navigating interfaces.",
      "Cluttered displays that bury key calls to action.",
      "Inconsistent typography and layouts across screens.",
      "Design and engineering handoff errors causing code delays."
    ],
    subServices: [
      {
        title: "Mobile User Research",
        description: "Analyzing user behavior, mapping user journeys, and documenting wireframe requirements."
      },
      {
        title: "Interactive Prototyping",
        description: "Creating clickable Figma prototypes so you can experience user flows on a physical screen."
      },
      {
        title: "Reach & Tap Optimization",
        description: "Optimizing button placements within easy thumb-reach zones to reduce single-hand user fatigue."
      },
      {
        title: "Accessibility Design (WCAG)",
        description: "Ensuring high color contrast ratios, clear text sizing, and accessibility labels conform to standards."
      },
      {
        title: "Design System Development",
        description: "Building structured token-based UI kits (buttons, fields, color blocks) for developers."
      },
      {
        title: "Interactive Microcopy Design",
        description: "Writing clear, contextual tooltip text and alerts to guide users through flows."
      }
    ],
    features: [
      "Optimized finger-reach layouts for easy single-hand operations",
      "High-contrast text and inputs meeting WCAG AA accessibility levels",
      "Interactive clickable prototypes matching final interface looks",
      "Clean Figma design token files ready for react-native or Swift styling",
      "Frictionless registration and input flow layouts reducing screen drop-off",
      "Fluid transition animations conceptualized for developer reference"
    ],
    technologies: ["Figma", "Adobe Illustrator", "WCAG Guidelines", "Material Design Tokens", "iOS Design Guidelines"],
    process: ["Discovery & Wireframing", "Clickable Low-Fi Prototypes", "High-Fi Layout Mockups", "Reach & Color Audits", "Figma Design System Setup", "Developer Hand-off"],
    whyChooseUs: [
      {
        title: "Thumb Optimized",
        description: "Designs structured specifically for single-hand mobile reach parameters."
      },
      {
        title: "Accessibility Native",
        description: "High contrast and screen reader ready setups from day one."
      },
      {
        title: "Clean Figma Files",
        description: "Design variables mapped explicitly to help developers save build time."
      },
      {
        title: "UX Driven",
        description: "Fewer steps, faster task completion, and higher customer conversions."
      }
    ],
    faqs: [
      {
        question: "How long does a custom mobile design project take?",
        answer: "A comprehensive UI/UX design for a 15-20 screen application typically takes 3 to 4 weeks, from initial wireframing to developer-ready Figma files."
      },
      {
        question: "Do you design for tablets as well as phones?",
        answer: "Yes, dynamic viewport optimization is standard. We create adaptive layouts that display correctly on small phones and larger iPad screens."
      },
      {
        question: "What format will the design assets be delivered in?",
        answer: "In a fully structured Figma file containing design token libraries, interactive prototyping connections, components, and SVG graphics."
      },
      {
        question: "Will you coordinate with our development team?",
        answer: "Yes, we organize a formal designer-developer handoff review to walk engineers through component structures and animation triggers."
      }
    ],
    cta: {
      headline: "Does Your Mobile Interface Support or Stymie Your Users?",
      subText: "Let's design a custom, high-fidelity mobile app layout that's beautiful and intuitive.",
      primaryBtn: "Start Designing",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "app-store-optimization": {
    slug: "app-store-optimization",
    title: "App Store Optimization (ASO)",
    icon: "Smartphone",
    shortDescription: "Optimizing app metadata, keyword rankings, and storefront assets to increase organic downloads.",
    theme: {
      glow: "rgba(16, 185, 129, 0.15)",
      text: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      borderPulse: "border-emerald-500/20",
      bulletBg: "bg-emerald-500",
      heroPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
      ctaPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/10 hover:shadow-emerald-500/20",
      pricingPopularBorder: "border-emerald-500",
      pricingPopularBadge: "bg-emerald-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500",
      groupHoverBorder: "group-hover:border-emerald-500",
    },
    hero: {
      badge: "ASO Services",
      title: "App Store Optimization",
      subText: "Gain organic store visibility. We optimize keyword structures, meta description formatting, and promotional screenshots to double download rates.",
      primaryCtaText: "Optimize App Store",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Specialist",
      secondaryCtaLink: "/contact"
    },
    overview: "With millions of apps in the App Store and Google Play, launching without a clear keyword strategy means your product remains invisible to users. App Store Optimization (ASO) audits search keyword intents, structures metadata titles, and optimizes graphic assets (app icons, screenshot carousels) to maximize conversion rates when prospects view your store listing. We optimize store setups for organic discoverability, helping reduce reliance on paid install ads.",
    problemsSolved: [
      "Low app search ranking for relevant user intents.",
      "High page bounce rates due to unappealing store screenshots.",
      "Ineffective keyword targets wasting metadata characters.",
      "Poor description structure failing to explain utility in seconds.",
      "Lack of localized storefront metadata limits global reach.",
      "High acquisition costs from relying solely on paid install campaigns."
    ],
    subServices: [
      {
        title: "Keyword Intent Research",
        description: "Mapping search volume parameters and competitor difficulty keywords across App Store and Google Play."
      },
      {
        title: "Metadata Optimization",
        description: "Drafting optimized app titles, subtitles, keyword lists, and long descriptions."
      },
      {
        title: "App Store Screenshot Design",
        description: "Creating high-impact graphic screenshots explaining features visually with crisp callouts."
      },
      {
        title: "Storefront Translation",
        description: "Translating keywords and listings descriptions into target foreign languages for localization."
      },
      {
        title: "Listing A/B Testing",
        description: "Configuring Play Console experiments to test screenshot and icon variants."
      },
      {
        title: "User Review Pipelines",
        description: "Implementing in-app feedback triggers to secure positive customer reviews."
      }
    ],
    features: [
      "Keyword research mapping search volumes to description layouts",
      "High-impact screenshot graphics designed to increase download rates",
      "Structured metadata copy maximizing app store index scoring",
      "Localized descriptions targeting foreign language store searches",
      "A/B test setups comparing listing performance parameters",
      "In-app review pipelines prompting active users for store ratings"
    ],
    technologies: ["App Store Connect", "Google Play Console", "Keyword research tools", "Figma", "Firebase Analytics"],
    process: ["Listing Analysis", "Keyword Search Audit", "Screenshot Design Creation", "Metadata Drafting", "Listing Submission", "A/B Testing Review"],
    whyChooseUs: [
      {
        title: "Conversion Focused",
        description: "We optimize listing graphics to double download rates."
      },
      {
        title: "Data Audited",
        description: "Keyword selection based on search volumes and listing data."
      },
      {
        title: "Play & App Store Native",
        description: "Conforms to metadata formatting rules on both platforms."
      },
      {
        title: "Localization Savvy",
        description: "Localized keyword lists targeting global markets."
      }
    ],
    faqs: [
      {
        question: "How is ASO different from web SEO?",
        answer: "Web SEO focuses on search engines like Google. ASO optimizes listings for App Store and Play Store search algorithms, prioritizing keywords, app titles, user reviews, and app installation velocity."
      },
      {
        question: "How long does it take to see organic downloads increase?",
        answer: "Typically, updates show index shifts within 2 to 3 weeks of store approval, though conversion improvements from updated screenshots can be seen almost instantly."
      },
      {
        question: "Can ASO help lower our user acquisition costs?",
        answer: "Yes. By increasing organic discoverability and conversion rates, you acquire more free installs, reducing reliance on paid ad networks."
      },
      {
        question: "Do you design the app icons as well?",
        answer: "Yes, we design custom, high-impact app store icons optimized to stand out in search grids."
      }
    ],
    cta: {
      headline: "Is Your App Hidden in the Store Search Results?",
      subText: "Let's optimize your metadata and screenshots to drive organic downloads.",
      primaryBtn: "Optimize App Store",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "mobile-maintenance": {
    slug: "mobile-maintenance",
    title: "Mobile App Support & Maintenance",
    icon: "Smartphone",
    shortDescription: "Ongoing monitoring, library updates, and hotfixes to keep your app running on new iOS/Android releases.",
    theme: {
      glow: "rgba(16, 185, 129, 0.15)",
      text: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      borderPulse: "border-emerald-500/20",
      bulletBg: "bg-emerald-500",
      heroPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
      heroPrimaryShadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
      ctaPrimaryBtn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/10 hover:shadow-emerald-500/20",
      pricingPopularBorder: "border-emerald-500",
      pricingPopularBadge: "bg-emerald-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500",
      groupHoverBorder: "group-hover:border-emerald-500",
    },
    hero: {
      badge: "App Support",
      title: "Mobile App Maintenance & Support",
      subText: "Prevent crashes and version issues. We monitor uptime, keep package libraries updated, and run immediate patches for iOS and Android updates.",
      primaryCtaText: "Get App Support",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to our Team",
      secondaryCtaLink: "/contact"
    },
    overview: "Mobile apps require continuous maintenance to remain stable. Whenever Apple or Google releases a major OS update, unmaintained apps risk crashes due to deprecated APIs. Third-party integrations can also change their endpoints. We provide structured application maintenance, monitoring system logs, resolving crashes, updating library dependencies, and ensuring your app is fully compliant with store requirements.",
    problemsSolved: [
      "Apps crashing on launch after a user upgrades their mobile OS version.",
      "Broken integrations from outdated third-party API keys or certificates.",
      "Undetected runtime crashes causing negative user store reviews.",
      "Expired SSL certificates blocking device connections to servers.",
      "Outdated library dependencies leaving apps vulnerable to security exploits.",
      "Slow load times as the app's database grows over time."
    ],
    subServices: [
      {
        title: "Crash Monitoring & Resolution",
        description: "Integrating logging systems (Sentry, Crashlytics) to capture and patch runtime bugs proactively."
      },
      {
        title: "OS Compatibility Updates",
        description: "Testing and updating codebase libraries ahead of new iOS and Android OS launches."
      },
      {
        title: "Library Dependency Upgrades",
        description: "Updating React Native or native Gradle packages to maintain security compliance."
      },
      {
        title: "SSL Certificate Auditing",
        description: "Managing API configurations, SSL keys, and cloud server hosting settings."
      },
      {
        title: "Database Cleanups",
        description: "Optimizing client-side SQLite database tables to keep local cache lookups responsive."
      },
      {
        title: "Store Compliance Checks",
        description: "Updating privacy policy pages and developer info to meet store guidelines."
      }
    ],
    features: [
      "24/7 crash alerts via Crashlytics integrations",
      "OS updates testing checks ahead of public system releases",
      "Token database keys updates keeping API pathways secure",
      "Regular backups of remote data server pipelines",
      "Minor interface fixes and updates built into plans",
      "Monthly status reviews detailing app health and updates"
    ],
    technologies: ["Crashlytics", "Sentry", "Google Play Console", "App Store Connect", "React Native", "Flutter", "GitHub Actions"],
    process: ["Alert Setup & Integrations", "OS Beta Uptime Checks", "Crash Logs Review", "Patch Coding & Store Push", "SSL & Keys Updates", "Monthly Health Report"],
    whyChooseUs: [
      {
        title: "Proactive Response",
        description: "Crash monitoring caught and patched before users leave bad reviews."
      },
      {
        title: "OS Update Prepared",
        description: "Apps updated ahead of new Android or iOS version launches."
      },
      {
        title: "Clean Documentation",
        description: "All libraries and tokens securely managed."
      },
      {
        title: "Clear Support SLAs",
        description: "Guaranteed turnaround times for critical hotfixes."
      }
    ],
    faqs: [
      {
        question: "Can you maintain an app built by another developer?",
        answer: "Yes. We begin with a code audit to review the architecture, check dependencies, and set up crash logging pipelines."
      },
      {
        question: "What happens if our app crashes on a new iOS release?",
        answer: "Under our support packages, we monitor iOS/Android beta systems. We write and deploy compatible libraries before public releases occur."
      },
      {
        question: "Do you charge extra to upload updates to the app stores?",
        answer: "Store updates, including uploading and submitting metadata changes, are fully covered under our support plans."
      },
      {
        question: "Does support cover new feature additions?",
        answer: "Minor tweaks are covered. Larger feature additions are scoped separately as projects to keep your support hours focused on stability."
      }
    ],
    cta: {
      headline: "Is Your App Ready for the Next OS Updates?",
      subText: "Let's discuss a maintenance plan that keeps your mobile app secure, fast, and crash-free.",
      primaryBtn: "Get App Support",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
