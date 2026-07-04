import { ServiceDetail } from '../servicesData'

export const uiUxDesignSubServices: Record<string, ServiceDetail> = {
  "user-research-strategy": {
    slug: "user-research-strategy",
    title: "User Research & Strategy",
    icon: "Palette",
    shortDescription: "Mapping user behaviors, target audience demographics, and features checklists to build software people actually use.",
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
      badge: "User Research",
      title: "User Research & UX Strategy",
      subText: "Understand user needs before building. We analyze target audience behaviors, build user journey maps, and establish concrete design strategies.",
      primaryCtaText: "Define UX Strategy",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Designer",
      secondaryCtaLink: "/contact"
    },
    overview: "Building software without understanding your target user results in feature bloat, complex navigations, and low user engagement. User Research & UX Strategy conducts structured target audience interviews, maps user behavior pathways, and outlines product features. This ensures engineering effort is spent only on capabilities that drive real value.",
    problemsSolved: [
      "Building features that users don't interact with or need.",
      "High drop-off rates due to confusing user onboarding steps.",
      "Vague project scoping causing endless development iterations.",
      "Inability to justify product features layout design choices to stakeholders.",
      "No clear profile of who the core user persona actually is.",
      "Lack of product conversion pathways alignment."
    ],
    subServices: [
      {
        title: "User Persona Creation",
        description: "Drafting detailed demographic profiles of your primary users to guide design constraints."
      },
      {
        title: "User Journey Mapping",
        description: "Outlining user navigation pathways from signup landing pages to core user goals."
      },
      {
        title: "Competitor UI Audits",
        description: "Reviewing industry products to discover visual trends and usability gaps."
      },
      {
        title: "Information Architecture",
        description: "Structuring sitemaps and app folders layouts so data is logical and easy to locate."
      },
      {
        title: "User Interview Sessions",
        description: "Gathering honest customer input on prototype flows to refine screen checkmarks."
      },
      {
        title: "Feature Scoping Outline",
        description: "Compiling detailed feature lists matching business targets to keep builds lean."
      }
    ],
    features: [
      "Structured profile of user personas representing target audiences",
      "Journey maps outlining steps users take to complete goals",
      "Interactive information hierarchy sitemaps defining menu flows",
      "Competitor audit reviews revealing interface design opportunities",
      "Clean research reports guiding product interface design sprints",
      "Feature scoping checklists to guide developer sprint scoping"
    ],
    technologies: ["Figma", "User research systems", "Journey maps documentation", "Figma FigJam"],
    process: ["Research Alignment Discovery", "Target Audience Interviews", "User Journey Mapping", "Information Architecture Setup", "UX Strategy Presentation", "Developer Scoping Sync"],
    whyChooseUs: [
      {
        title: "Data Grounded",
        description: "Design choices backed by research, not random aesthetic guesses."
      },
      {
        title: "Lean Feature Scope",
        description: "We help prevent feature bloat to speed up your launch timeline."
      },
      {
        title: "User Aligned",
        description: "Bespoke user layouts built for how your target customers navigate."
      },
      {
        title: "Seamless Handoff",
        description: "Research data guides visual UI designers immediately."
      }
    ],
    faqs: [
      {
        question: "Why invest in UX research before designing UI?",
        answer: "UX research identifies layout flaws early. Fixing a wireframe takes minutes, while refactoring database code after launch is expensive."
      },
      {
        question: "How long does a research phase typically take?",
        answer: "For a new product, we map journeys and target audiences in 1-2 weeks before visual interface design starts."
      },
      {
        question: "Can we use UX research data to pitch to investors?",
        answer: "Yes. Journey maps and user profile grids show a deep understanding of target markets, which is highly valuable for funding presentations."
      },
      {
        question: "Do you interview our actual customers?",
        answer: "Yes, we coordinate target user interview loops or survey feedback to gather real operational insights."
      }
    ],
    cta: {
      headline: "Building Features Without Knowing Who Your Users Are?",
      subText: "Let's map user journeys and target profiles to refine your product features scope.",
      primaryBtn: "Define UX Strategy",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "wireframing-prototyping": {
    slug: "wireframing-prototyping",
    title: "Wireframing & Prototyping",
    icon: "Palette",
    shortDescription: "Interactive, clickable mockups that allow you to validate user experiences before writing any code.",
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
      badge: "UX Prototyping",
      title: "Wireframing & Interactive Prototyping",
      subText: "Visualize your application layout. We design detailed layout wireframes and clickable mockups to test user flows before coding.",
      primaryCtaText: "Create a Prototype",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Designer",
      secondaryCtaLink: "/contact"
    },
    overview: "Developing software directly from ideas without visual validation leads to expensive coding revisions when layouts don't work in practice. Wireframing & Prototyping builds low-fidelity screen grids and clickable mockups, letting you test button paths, navigation systems, and user inputs before developers write code.",
    problemsSolved: [
      "Misalignment on feature placement causing developers to rewrite layout code.",
      "Difficulties explaining project concepts to stakeholders without visual mockups.",
      "User navigation loops feeling awkward when testing code.",
      "Vague design descriptions creating confusion during developer handoffs.",
      "High cost of database refactoring due to post-launch layout edits.",
      "Ineffective user test runs without interactive interfaces."
    ],
    subServices: [
      {
        title: "Low-Fidelity Sketching",
        description: "Mapping out basic screen divisions and layout placements to align on content hierarchy."
      },
      {
        title: "High-Fidelity Wireframing",
        description: "Designing detailed layout cards, grids, and lists without brand styling to focus on interface structures."
      },
      {
        title: "Clickable Prototyping",
        description: "Connecting Figma screen layouts with interactive triggers and transitions to simulate live apps."
      },
      {
        title: "Navigation Architecture Layout",
        description: "Structuring sidebar menus, header links, and button grids for intuitive navigation."
      },
      {
        title: "Device Layout Scaling",
        description: "Wireframing adaptive layouts for mobile viewports, tablet screens, and desktop displays."
      },
      {
        title: "Interactive Flow Feedback Loops",
        description: "Collecting feedback directly on Figma nodes from stakeholders and developers."
      }
    ],
    features: [
      "Low-fidelity layout sketches defining content structures",
      "High-fidelity wireframes detailing exact button placements",
      "Clickable, interactive prototypes simulating live operations",
      "Sidebar and header menu navigation pathways mapping",
      "Responsive wireframe layouts scaling across device viewports",
      "Developer-ready Figma documentation files"
    ],
    technologies: ["Figma Wireframes", "Interactive Prototyping Nodes", "UI layout tokens"],
    process: ["Layout Ideation Discovery", "Low-Fidelity Grid Mapping", "High-Fidelity Screen Wireframing", "Clickable Trigger Piping", "Simulated User Feedback Runs", "Interactive Mockup Hand-off"],
    whyChooseUs: [
      {
        title: "Interactive Early Validation",
        description: "Test your app idea on a simulated device before writing any code."
      },
      {
        title: "Clear Developer Specs",
        description: "Removes guesswork, giving developers exact wireframe guidelines."
      },
      {
        title: "Faster Build Velocity",
        description: "Align on layouts first to prevent post-launch codebase refactoring."
      },
      {
        title: "Stakeholder Alignment",
        description: "Figma interactive prototypes make it easy to pitch concepts."
      }
    ],
    faqs: [
      {
        question: "What is the difference between a wireframe and a prototype?",
        answer: "A wireframe is a static blueprint of a page layout (often using grayscale boxes). A prototype connects these screens with clickable triggers, simulating how users navigate the live app."
      },
      {
        question: "Can we test the prototype on a mobile phone?",
        answer: "Yes. Figma's mobile app lets you load interactive prototypes on actual devices to test single-hand reach and touch zones."
      },
      {
        question: "Do you include colors and brand logos in wireframes?",
        answer: "Low-fi and high-fi wireframes use grayscale blocks to focus on user flow and structure first. Colors, typography, and logos are added in the Visual Design phase."
      },
      {
        question: "Will developers use the wireframes directly to write code?",
        answer: "Yes. Grayscale wireframes serve as the structural layout blueprints, while the visual design files supply CSS color and styling tokens."
      }
    ],
    cta: {
      headline: "Have an App Concept That Needs Visual Validation?",
      subText: "Let's design a clickable mockup to test user flows and sitemaps before coding.",
      primaryBtn: "Create a Prototype",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "visual-brand-design": {
    slug: "visual-brand-design",
    title: "Visual & Brand Design",
    icon: "Palette",
    shortDescription: "Premium interfaces featuring custom typography, colors, and graphics that align with your corporate identity.",
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
      badge: "Visual Design",
      title: "Visual & Brand Interface Design",
      subText: "Establish absolute visual credibility. We design premium user interfaces matching your corporate identity using modern typography and layouts.",
      primaryCtaText: "Start Visual Design",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Designer",
      secondaryCtaLink: "/contact"
    },
    overview: "A product with poor typography, generic styling, and cluttered colors looks cheap and untrustworthy. Visual & Brand Design adds color systems, clean typography, custom icons, and layout styles to wireframes. This creates a cohesive brand experience that feels premium and establishes trust.",
    problemsSolved: [
      "Websites looking cheap or generic due to bad color choices.",
      "Inconsistent typography styles across layout sections.",
      "Lack of unique brand graphics, forcing the use of generic stock icons.",
      "Low visual interest causing users to bounce quickly.",
      "Design systems failing to reflect updated brand parameters.",
      "Cluttered interfaces overwhelming users."
    ],
    subServices: [
      {
        title: "Color Palette Design",
        description: "Designing a curated color system with primary brand tones and dark-mode styling variables."
      },
      {
        title: "Typography Hierarchy Mapping",
        description: "Selecting premium typography pairings and setting up readable font scaling."
      },
      {
        title: "Custom Vector Iconography",
        description: "Designing unique interface icons and graphics to replace generic options."
      },
      {
        title: "High-Fidelity UI Mockups",
        description: "Transforming wireframe layouts into polished visual screens using your brand style."
      },
      {
        title: "Visual Asset Optimization",
        description: "Compressing images and vectors for fast loading speeds."
      },
      {
        title: "Brand Layout Guidelines",
        description: "Documenting rules for design spacing, grids, and padding."
      }
    ],
    features: [
      "Curated color palette matching brand identity",
      "Typography hierarchy defining heading and text scales",
      "Custom vector icons and interface graphics",
      "High-fidelity visual mockups of key user paths",
      "Optimized design assets ready for developer use",
      "Comprehensive design styling guidelines"
    ],
    technologies: ["Figma Design Kit", "Adobe Illustrator", "Modern typography styling"],
    process: ["Visual Identity Alignment", "Moodboard & Style Direction Setup", "UI Color & Type Implementation", "High-Fidelity Screen Polishing", "Asset Optimization Check", "Developer Handoff"],
    whyChooseUs: [
      {
        title: "Premium Identity",
        description: "Interfaces designed to look premium, modern, and credible."
      },
      {
        title: "Design Cohesion",
        description: "Unified typography, colors, and layout spacing across all screens."
      },
      {
        title: "Developer Ready",
        description: "Figma files deliver clean CSS styling codes to developers."
      },
      {
        title: "Optimized Assets",
        description: "Lightweight vector icons and compressed files to preserve speeds."
      }
    ],
    faqs: [
      {
        question: "Can you design matching dark and light mode screens?",
        answer: "Yes. We create design styles mapping variables for both modes, ensuring clean contrast parameters in both themes."
      },
      {
        question: "Do you design corporate logo marks?",
        answer: "We focus on interface layouts, custom icons, and vector graphics. If you need a corporate logo rebuild, we can coordinate with brand designers."
      },
      {
        question: "How do you select font pairings?",
        answer: "Based on readability and brand personality. We prefer modern, highly readable web fonts (like Inter or Outfit) to ensure fast rendering."
      },
      {
        question: "Can we edit design styles in Figma ourselves later?",
        answer: "Yes. All design styles (colors, typography scales, buttons) are saved as global Figma variables, making edits simple."
      }
    ],
    cta: {
      headline: "Does Your Interface Reflect Your Brand Quality?",
      subText: "Let's design a high-fidelity visual layout that is clean, cohesive, and premium.",
      primaryBtn: "Start Visual Design",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "interaction-design": {
    slug: "interaction-design",
    title: "Interaction Design",
    icon: "Palette",
    shortDescription: "Designing responsive screen transitions, hover effects, and micro-animations that make apps feel alive.",
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
      badge: "Interaction Design",
      title: "Interaction Design & Micro-Animations",
      subText: "Make your app feel alive. We design fluid screen transitions, interactive hover effects, and subtle micro-animations that improve user experience.",
      primaryCtaText: "Define Interactions",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Designer",
      secondaryCtaLink: "/contact"
    },
    overview: "Static interfaces can feel clinical or unresponsive. Interaction Design focuses on how the application responds to user actions, using hover shifts, card expansions, and button loading states. These subtle animations provide feedback, guide task completion, and create a premium, polished experience.",
    problemsSolved: [
      "Confusing status updates (e.g., users clicking buttons multiple times because of missing loading indicators).",
      "Stiff screen transitions that feel laggy or abrupt.",
      "Low user engagement with static landing page sections.",
      "Inability to guide users visually toward primary calls to action.",
      "Complex menus that lack intuitive layout changes on click.",
      "Lack of visual cues to suggest elements are interactive."
    ],
    subServices: [
      {
        title: "Micro-Interaction Mapping",
        description: "Designing layout states for buttons, switches, and tabs (normal, hover, active, loading)."
      },
      {
        title: "Fluid Page Transitions",
        description: "Designing screen transitions (slide, fade, scale) to make user navigation feel natural."
      },
      {
        title: "Visual Feedback Triggers",
        description: "Creating alerts, toasts, and input errors that respond dynamically to user actions."
      },
      {
        title: "Scroll-Driven Animations",
        description: "Designing sections that fade or slide in on scroll, drawing attention to content."
      },
      {
        title: "Figma Motion Prototyping",
        description: "Creating animated prototypes in Figma using Smart Animate to guide developers."
      },
      {
        title: "Developer Interaction Specs",
        description: "Documenting CSS transition timings and cubic-bezier variables for developer reference."
      }
    ],
    features: [
      "Micro-interaction designs for buttons, fields, and toggle states",
      "Clickable prototypes with custom transition timings",
      "Dynamic visual alerts and form feedback states",
      "Scroll-driven animation triggers for marketing layouts",
      "Cubic-bezier and animation timing variables specifications",
      "Polished interactive components design systems"
    ],
    technologies: ["Figma Smart Animate", "Interactive component tokens", "CSS transition variables"],
    process: ["Interaction Requirements Discovery", "Wireframe State Mapping", "Interactive Prototype Development", "Timings & Transition Refinements", "Animation Specs Documentation", "Developer Sync"],
    whyChooseUs: [
      {
        title: "Engaging & Responsive",
        description: "Fluid transitions that make your app feel fast and alive."
      },
      {
        title: "Clear User Feedback",
        description: "Clear loading and validation states reduce user errors."
      },
      {
        title: "Modern Interactive Motion",
        description: "Tasteful animations that elevate the brand's premium feel."
      },
      {
        title: "Developer Ready",
        description: "Specs define transition values directly to save coding loops."
      }
    ],
    faqs: [
      {
        question: "Will animations slow down our website?",
        answer: "No. We design hardware-accelerated CSS animations and lightweight transitions that run smoothly without impacting performance."
      },
      {
        question: "Do you create complex 3D graphic animations?",
        answer: "We focus on clean interface transitions, hover effects, and micro-interactions. For complex 3D or logo animations, we partner with motion designers."
      },
      {
        question: "How do you specify animation values for developers?",
        answer: "We document ease settings, timing durations (e.g., 200ms), and keyframe paths in Figma dev notes to ensure accurate code implementation."
      },
      {
        question: "Can we preview the screen transitions before coding?",
        answer: "Yes. Our Figma prototypes use Smart Animate to simulate screen transitions, button hovers, and menu slides."
      }
    ],
    cta: {
      headline: "Does Your Software Experience Feel Rigid and Static?",
      subText: "Let's design fluid, responsive interactions that make your app feel premium and alive.",
      primaryBtn: "Define Interactions",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "usability-testing": {
    slug: "usability-testing",
    title: "Usability Testing",
    icon: "Palette",
    shortDescription: "Conducting user tests on clickable prototypes to identify and resolve layout issues before writing code.",
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
      badge: "Usability Testing",
      title: "Usability Testing & UX Auditing",
      subText: "Test layout wireframes with actual users. We run structured usability tests on prototypes to find and fix flow bugs before coding.",
      primaryCtaText: "Run Usability Test",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Designer",
      secondaryCtaLink: "/contact"
    },
    overview: "Designing in isolation often creates blind spots. Usability Testing runs structured tests with actual users on clickable Figma prototypes, observing where they run into friction, get confused, or abandon tasks. This allows us to refine layouts and solve user experience issues before developers write code.",
    problemsSolved: [
      "Users failing to complete key actions (e.g., checkout or registration) due to layout friction.",
      "Unanticipated user paths causing design confusion.",
      "Internal bias leading to features that aren't clear to external users.",
      "Confusing layout terminology causing navigation errors.",
      "Post-launch customer support volume driven by usability issues.",
      "Wasted development hours writing code for confusing user flows."
    ],
    subServices: [
      {
        title: "Test Script Writing",
        description: "Drafting scenario scripts to observe users as they complete core app tasks."
      },
      {
        title: "Moderated User Testing",
        description: "Observing target users on video calls as they navigate clickable prototypes."
      },
      {
        title: "Heatmap & Click Audits",
        description: "Reviewing click coordinates and screen heatmaps to see where users get stuck."
      },
      {
        title: "System Usability Score (SUS)",
        description: "Using standardized UX questionnaires to measure interface ease of use."
      },
      {
        title: "Friction Point Auditing",
        description: "Identifying complex forms or links that delay task completion."
      },
      {
        title: "UX Recommendations Report",
        description: "Creating actionable design adjustments based on test results."
      }
    ],
    features: [
      "Detailed test scenarios focused on core user tasks",
      "Recorded video feedback of actual users interacting with prototypes",
      "Clear metrics showing task completion success rates",
      "Analysis of friction points in form fields and buttons",
      "Prioritized UX recommendation lists to adjust layouts",
      "Standardized System Usability Scale (SUS) reports"
    ],
    technologies: ["Figma prototypes", "Video conferencing tools", "UX testing platforms", "SUS metrics"],
    process: ["Testing Goals Definition", "Test Script Writing", "User Recruiting", "Usability Test Runs", "Feedback Analysis", "UX Design Adjustments"],
    whyChooseUs: [
      {
        title: "User Validated",
        description: "Every layout choice is validated by target user feedback."
      },
      {
        title: "Saves Developer Time",
        description: "Fixing usability issues in wireframes is much faster than editing code."
      },
      {
        title: "Reduced Support Cost",
        description: "Intuitive layouts mean fewer customer support inquiries post-launch."
      },
      {
        title: "Biases Removed",
        description: "Unbiased feedback from real users highlights true friction points."
      }
    ],
    faqs: [
      {
        question: "How many users are needed for a usability test?",
        answer: "Studies show that testing with 5 users reveals over 80% of usability issues, making it highly cost-effective."
      },
      {
        question: "Can you test live applications as well as prototypes?",
        answer: "Yes. We run usability tests on existing websites or software to identify conversion blockers before scoping a redesign."
      },
      {
        question: "How do you recruit users for the test?",
        answer: "We can recruit users from your existing customer base, or find target audience profiles on dedicated recruitment networks."
      },
      {
        question: "Will we get video recordings of the test runs?",
        answer: "Yes, we share recorded video sessions of users completing tasks alongside our analysis report."
      }
    ],
    cta: {
      headline: "Unsure Where Users Face Friction in Your App?",
      subText: "Let's run usability tests on your prototype to identify and fix navigation issues.",
      primaryBtn: "Run Usability Test",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "design-system-development": {
    slug: "design-system-development",
    title: "Design System Development",
    icon: "Palette",
    shortDescription: "Structured UI component libraries (Figma & CSS) that ensure visual consistency across all products.",
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
      badge: "Design Systems",
      title: "Design System Development",
      subText: "Ensure brand consistency. We build Figma UI component kits and CSS tokens to speed up design and code cycles.",
      primaryCtaText: "Build Design System",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Designer",
      secondaryCtaLink: "/contact"
    },
    overview: "As software products grow, interfaces often become fragmented, with inconsistent button sizes, colors, and input styles across pages. This slows down developers and dilutes the user experience. Design System Development creates a unified Figma library of UI components and styling tokens. This acts as a single source of truth, ensuring visual consistency and cutting future development times.",
    problemsSolved: [
      "Inconsistent button styles, margins, and colors across layout pages.",
      "Developers spending hours writing custom CSS for recurring interface components.",
      "Diluted brand experience due to mismatched typography and inputs.",
      "Design revisions taking days instead of minutes.",
      "Onboarding new designers or developers causing styling inconsistencies.",
      "Difficulty maintaining brand consistency across web and mobile platforms."
    ],
    subServices: [
      {
        title: "Design Tokens Mapping",
        description: "Defining brand variables for colors, typography scales, margins, and rounded corner radii."
      },
      {
        title: "Figma Component Kits",
        description: "Building master components in Figma with Auto Layout variables (buttons, cards, menus)."
      },
      {
        title: "CSS & Utility Styling Systems",
        description: "Mapping design styles to Tailwind CSS configs or global CSS variables."
      },
      {
        title: "Component State Auditing",
        description: "Ensuring components have clear states (normal, hover, disabled, active)."
      },
      {
        title: "Design Documentation",
        description: "Creating a reference guide explaining how and when to use each component."
      },
      {
        title: "Ongoing System Upkeep",
        description: "Refining and scaling the component library as the product grows."
      }
    ],
    features: [
      "Design token variables for colors, spacing, and typography",
      "Figma component library built with Auto Layout and variants",
      "Tailwind configuration mapping design tokens to code variables",
      "Interactive state designs for all interface components",
      "Visual style documentation for designers and developers",
      "Scalable system structure to easily add new components"
    ],
    technologies: ["Figma Component libraries", "Tailwind CSS configuration", "CSS variables systems"],
    process: ["Interface Component Audit", "Design Tokens Mapping", "Figma Component Kit Building", "CSS/Tailwind Mapping", "System Documentation Setup", "Developer Rollout"],
    whyChooseUs: [
      {
        title: "Consistent Brand UI",
        description: "Unified design guidelines and components across all screens."
      },
      {
        title: "Cuts Code Overhead",
        description: "Reusable components save developers hours of styling time."
      },
      {
        title: "Figma Optimized",
        description: "Auto Layout and variable variants make design edits fast."
      },
      {
        title: "Grows with You",
        description: "Easily update the entire product by changing master tokens."
      }
    ],
    faqs: [
      {
        question: "When is the right time to build a design system?",
        answer: "If you have more than 10 core screens or plan to scale features across multiple platforms, a basic design system will save time and ensure consistency immediately."
      },
      {
        question: "Can the design system map directly to Tailwind CSS?",
        answer: "Yes. We configure design tokens (colors, font sizes, screen breakpoints) directly in the `tailwind.config.js` configuration file."
      },
      {
        question: "Do you update the design system as our product grows?",
        answer: "Yes. We offer ongoing maintenance to expand the component library as you introduce new features."
      },
      {
        question: "Does the system cover mobile screens as well as web?",
        answer: "Yes, component variables are built with adaptive states, ensuring they fit both mobile layout files and desktop screens."
      }
    ],
    cta: {
      headline: "Tired of Inconsistent UI and Wasted Styling Code?",
      subText: "Let's build a unified design system that speeds up design and code iterations.",
      primaryBtn: "Build Design System",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
