import { getPayload } from 'payload'
import config from '../payload.config.js'
import fs from 'fs'
import path from 'path'

import { customSoftwareSubServices } from './data/sub-services/custom-software-development'
import { webDevelopmentSubServices } from './data/sub-services/web-development'
import { mobileAppSubServices } from './data/sub-services/mobile-app-development'
import { uiUxDesignSubServices } from './data/sub-services/ui-ux-design'
import { cloudDevOpsSubServices } from './data/sub-services/cloud-devops-services'
import { aiAutomationSubServices } from './data/sub-services/ai-automation-solutions'
import { eCommerceSolutionsSubServices } from './data/sub-services/e-commerce-solutions'
import { qualityAssuranceSubServices } from './data/sub-services/quality-assurance-testing'
import { maintenanceSupportSubServices } from './data/sub-services/maintenance-support'

async function uploadMedia(payload: any, filename: string, altText: string) {
  const filePath = path.join(process.cwd(), 'src/assets/seed', filename)
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️ Seed image not found at ${filePath}`)
    return null
  }
  const fileBuffer = fs.readFileSync(filePath)
  const size = fs.statSync(filePath).size
  
  try {
    const doc = await payload.create({
      collection: 'media',
      data: {
        altText,
      },
      file: {
        data: fileBuffer,
        name: filename,
        mimetype: 'image/png',
        size,
      },
    })
    console.log(`  📸 Uploaded media asset: ${filename} (ID: ${doc.id})`)
    return doc.id
  } catch (error) {
    console.error(`  ❌ Failed to upload media ${filename}:`, error)
    return null
  }
}

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting full database seed & image sync...')

  // ─── CLEARING DATABASE ───
  console.log('🧹 Clearing old collections database records...')
  const collectionsToClear = [
    'leads',
    'pages',
    'testimonials',
    'careers',
    'case-studies',
    'projects',
    'sub-services',
    'services',
    'industries',
    'technologies',
    'media',
  ]

  for (const coll of collectionsToClear) {
    try {
      await payload.delete({
        collection: coll as any,
        where: { id: { exists: true } }
      })
      console.log(`  🗑️ Cleared collection: ${coll}`)
    } catch (e) {
      console.error(`  ⚠️ Error clearing collection ${coll}:`, e)
    }
  }

  // ─── UPLOADING IMAGES ───
  console.log('📤 Uploading generated images to Media collection...')
  const serviceImages: Record<string, any> = {}
  const projectImages: Record<string, any> = {}

  // Upload service images
  const serviceImageFiles = {
    'product-engineering': { file: 'service_product_eng.png', alt: 'Product Engineering custom software blueprints design' },
    'web-engineering': { file: 'service_web_dev_1782476722634.png', alt: 'Custom Web Development UI UX Dashboard mock' },
    'mobile-engineering': { file: 'service_mobile_eng.png', alt: 'Mobile App Engineering layout mockup on smartphone' },
    'ai-development': { file: 'service_ai_dev.png', alt: 'AI Development neural networks digital brain nodes' },
    'business-automation': { file: 'service_business_auto.png', alt: 'Business Process Automation abstract workflow flows' },
    'cloud-devops': { file: 'service_cloud_devops_1782476768978.png', alt: 'Cloud computing server rack pipelines' },
    'design-experience': { file: 'service_ui_ux_1782476789792.png', alt: 'UI UX web dashboard mockup design wireframes' },
    'quality-support': { file: 'service_quality_support.png', alt: 'Quality Assurance shield emblem client support checklist' }
  }

  for (const [slug, info] of Object.entries(serviceImageFiles)) {
    const id = await uploadMedia(payload, info.file, info.alt)
    if (id) serviceImages[slug] = id
  }



  // Upload project images
  const projectImageFiles = {
    'vardhsoft-corporate-platform': { file: 'media__1782476178176.png', alt: 'VardhSoft corporate website interface' },
    'fintrack-analytics-dashboard': { file: 'media__1782476458315.png', alt: 'FinTrack analytics dashboard interface' },
    'shopease-ecommerce-platform': { file: 'vardhsoft_logo_1782473866580.png', alt: 'ShopEase E-Commerce platform product mock' }
  }

  for (const [slug, info] of Object.entries(projectImageFiles)) {
    const id = await uploadMedia(payload, info.file, info.alt)
    if (id) projectImages[slug] = id
  }

  // ─── TECHNOLOGIES ───
  console.log('🌱 Seeding Technologies...')
  const technologiesData = [
    { name: 'Next.js', slug: 'nextjs', category: 'frontend', description: 'React framework for production-grade web applications with SSR and SSG.' },
    { name: 'React', slug: 'react', category: 'frontend', description: 'Component-based UI library for building interactive user interfaces.' },
    { name: 'TypeScript', slug: 'typescript', category: 'frontend', description: 'Typed superset of JavaScript for safer, more scalable codebases.' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', category: 'frontend', description: 'Utility-first CSS framework for rapid, responsive UI development.' },
    { name: 'Node.js', slug: 'nodejs', category: 'backend', description: 'JavaScript runtime for building fast, scalable server-side applications.' },
    { name: 'Payload CMS', slug: 'payload-cms', category: 'backend', description: 'Headless CMS with code-first configuration and self-hosted flexibility.' },
    { name: 'Express', slug: 'express', category: 'backend', description: 'Minimal Node.js web framework for APIs and middleware.' },
    { name: 'PostgreSQL', slug: 'postgresql', category: 'database', description: 'Advanced open-source relational database with ACID compliance.' },
    { name: 'Supabase', slug: 'supabase', category: 'database', description: 'Open-source Firebase alternative with managed PostgreSQL and auth.' },
    { name: 'Redis', slug: 'redis', category: 'database', description: 'In-memory data store for caching, sessions, and real-time features.' },
    { name: 'Vercel', slug: 'vercel', category: 'cloud', description: 'Frontend cloud platform for Next.js deployments with global CDN.' },
    { name: 'AWS', slug: 'aws', category: 'cloud', description: 'Amazon Web Services for scalable cloud infrastructure and compute.' },
    { name: 'Docker', slug: 'docker', category: 'devops', description: 'Containerization platform for consistent environments across dev and prod.' },
    { name: 'GitHub Actions', slug: 'github-actions', category: 'devops', description: 'CI/CD automation directly integrated with GitHub repositories.' },
    { name: 'Figma', slug: 'figma', category: 'tools', description: 'Collaborative design tool for UI/UX wireframes and prototypes.' },
    { name: 'ESLint', slug: 'eslint', category: 'tools', description: 'Linting tool for identifying and fixing JavaScript/TypeScript code issues.' },
    { name: 'Flutter', slug: 'flutter', category: 'frontend', description: 'Google UI toolkit for building natively compiled mobile apps from a single codebase.' },
    { name: 'React Native', slug: 'react-native', category: 'frontend', description: 'React framework for building native mobile applications.' },
    { name: 'Firebase', slug: 'firebase', category: 'database', description: 'Google platform for hosting, database, analytics, and authentication.' },
    { name: 'Python', slug: 'python', category: 'backend', description: 'General purpose programming language widely used in AI and data analysis.' },
    { name: 'OpenAI', slug: 'openai', category: 'tools', description: 'Leading AI APIs and LLMs developer resources.' },
    { name: 'LangChain', slug: 'langchain', category: 'tools', description: 'Orchestration framework for LLMs and cognitive software agents.' },
    { name: 'Vector Databases', slug: 'vector-databases', category: 'database', description: 'Databases optimized for vector embeddings, similarity search, and RAG systems.' },
    { name: 'Kubernetes', slug: 'kubernetes', category: 'devops', description: 'Open-source container orchestration engine for automated scaling.' },
    { name: 'Linux', slug: 'linux', category: 'devops', description: 'Open-source operating system standard for hosting server applications.' },
    { name: 'Framer', slug: 'framer', category: 'tools', description: 'Interactive prototyping and website designing tool.' },
    { name: 'FigJam', slug: 'figjam', category: 'tools', description: 'Collaborative whiteboarding tool for planning and brainstorming.' },
    { name: 'Adobe XD', slug: 'adobe-xd', category: 'tools', description: 'UI/UX layout design and prototyping software.' },
    { name: 'Miro', slug: 'miro', category: 'tools', description: 'Visual collaboration whiteboard for mapping workflows and ideas.' },
    { name: 'Playwright', slug: 'playwright', category: 'tools', description: 'Modern end-to-end testing library for fast and reliable web automation.' },
    { name: 'Cypress', slug: 'cypress', category: 'tools', description: 'Frontend testing tool for building automated component and integration tests.' },
    { name: 'Jest', slug: 'jest', category: 'tools', description: 'Delightful JavaScript testing framework with a focus on simplicity.' },
    { name: 'Sentry', slug: 'sentry', category: 'tools', description: 'Application monitoring platform for tracking errors and diagnostic logs.' }
  ]

  const seededTechMap: Record<string, any> = {}
  for (const tech of technologiesData) {
    const doc = await payload.create({ collection: 'technologies', data: tech as any })
    seededTechMap[tech.slug] = doc.id
  }
  console.log(`  ✅ ${technologiesData.length} Technologies seeded`)

  // ─── TESTIMONIALS ───
  console.log('🌱 Seeding Testimonials...')
  const testimonialsData = [
    {
      clientName: 'Rajesh Krishnan',
      companyName: '',
      designation: '',
      review: 'VardhSoft digitized our entire logistics workflow from manual paper registers to a secure cloud platform. Our internal administrative processing speed increased by 60% and data access latency dropped to near zero.',
      rating: 5,
    },
    {
      clientName: 'Sarah Jenkins',
      companyName: '',
      designation: '',
      review: 'We migrated our multi-brand publishing platforms to a modular headless CMS architecture under their guidance. Our editorial team now publishes campaigns in minutes rather than days, with zero developer dependency.',
      rating: 5,
    },
    {
      clientName: 'Marcus Vance',
      companyName: '',
      designation: '',
      review: 'The transaction parsing engine and real-time dashboard they developed handles our financial pipeline with total integrity. Excellent communication, robust testing, and full code ownership.',
      rating: 5,
    },
  ]

  const testimonialIds: any[] = []
  for (const testimonial of testimonialsData) {
    const doc = await payload.create({ collection: 'testimonials', data: testimonial })
    testimonialIds.push(doc.id)
  }
  console.log(`  ✅ ${testimonialsData.length} Testimonials seeded`)

  // ─── CASE STUDIES ───
  console.log('🌱 Seeding Case Studies...')
  const makeRichText = (text: string) => ({
    root: {
      type: 'root',
      children: [{ type: 'paragraph', children: [{ type: 'text', text }], version: 1 }],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  })

  const caseStudiesData = [
    {
      title: 'Panjarapol Management System',
      slug: 'panjarapol-management-system',
      clientName: 'A Panjarapol Institution, Gujarat',
      industry: 'Animal Welfare & Institutional Management',
      duration: '3 Weeks',
      projectType: 'Digital transformation of manual, paper-based operations',
      servicesProvided: 'Custom Web Application Development',
      overview: 'A Panjarapol (traditional animal shelter) in Gujarat had been running day-to-day operations almost entirely on paper: animal intake records, health logs, feed schedules, and donor information tracked in physical registers. Vardhsoft was brought in to design and build a custom management system to bring these operations online.',
      problem: 'Fragmented records across multiple physical registers made historical retrieval difficult. Administrators had no single dashboard for shelter status. Handwritten logs were vulnerable to error, illegible handwriting, damage, or loss. Compiling reports for donors or regulatory purposes took hours or days of manual effort. As animal numbers grew, the paper-based system simply could not keep pace.',
      approach: 'Discovery & requirement gathering — spoke directly with the institution to map their existing paper-based workflow end-to-end. Simplicity-first design — prioritized a clean, intuitive interface over feature density, knowing that adoption would fail if the tool felt intimidating. Iterative build — shared progress incrementally and adjusted based on real feedback. Built for real-world conditions — designed for speed in the middle of daily shelter operations, not for extensive training.',
      solution: 'Animal Records Management — a digital registry for individual animals including intake details, health status, and ongoing care notes. Centralized Admin Dashboard — a single screen giving administrators an at-a-glance view of shelter operations. Simple, Role-Appropriate Interface — designed specifically for non-technical staff, minimizing the learning curve. Structured Data for Reporting — information in a structured database makes summaries dramatically faster. Scalable Architecture — built with room to add future modules (health tracking, donation management, adoption records).',
      implementation: 'Phase 1: Discovery and workflow mapping with shelter staff. Phase 2: Schema design for animal records, health logs, and admin roles. Phase 3: Frontend build with Next.js, backend with Node.js and MongoDB. Phase 4: Staff onboarding and feedback iteration. Phase 5: Go-live and handover.',
      results: 'Eliminated reliance on physical registers for day-to-day animal tracking. Gave shelter administrators real-time visibility into operations for the first time. Reduced report compilation time from hours to minutes. Onboarded non-technical staff with minimal training. Scalable foundation ready for future modules without rebuilding.',
      keyTakeaway: 'This project reflects how Vardhsoft approaches management system builds: we start with the workflow that is actually broken, not with the technology. A shelter does not need a feature-heavy platform — it needs a fast, reliable, understandable tool that fits into how its staff already work. That principle guided every design and engineering decision on this project.',
      clientQuote: '',
      technologies: [seededTechMap['nextjs'], seededTechMap['nodejs'], seededTechMap['tailwindcss']].filter(Boolean),
      featured: true,
      seoTitle: 'Panjarapol Management System | VardhSoft Case Study',
      seoDescription: 'How Vardhsoft digitized a Gujarat animal shelter\'s paper-based operations with a custom Next.js + Node.js management system.',
    },
    {
      title: 'Custom Clothing Store on Shopify',
      slug: 'custom-clothing-store-shopify',
      clientName: 'A Fashion & Apparel Brand',
      industry: 'Fashion & E-Commerce',
      duration: '2–3 Weeks',
      projectType: 'End-to-end e-commerce storefront launch',
      servicesProvided: 'Shopify Store Setup, Custom Theme Development, Store Optimization',
      overview: 'A clothing brand looking to sell online came to Vardhsoft without an existing e-commerce presence. They needed more than just "a Shopify store" — they needed a storefront that reflected their brand identity, made browsing and buying effortless, and gave them the tools to manage products and orders without needing a developer on standby.',
      problem: 'The brand had no online sales channel — products were previously sold offline or via social media DMs. Generic Shopify themes looked identical to thousands of other stores. Clothing variants (size, color, fabric) needed clean catalog structure. A large share of fashion traffic comes from mobile, demanding a mobile-first experience. Checkout friction directly costs sales, so the buying flow needed to be as frictionless as possible.',
      approach: 'Brand-first discovery — gathered visual identity (colors, typography, photography style) before touching the theme editor. Theme customization — customized layout and key sections to align with the brand\'s look, not use a stock template untouched. Catalog structuring — organized products into clear collections and configured variants for easy filtering. Mobile-first testing — every screen tested and refined for mobile responsiveness. Checkout optimization — streamlined the path from product page to completed purchase.',
      solution: 'Custom-Themed Storefront — a visually distinct store design aligned to the brand\'s identity. Structured Product Catalog — collections and variants (size, color) organized for easy browsing. Mobile-Optimized Experience — fast-loading, responsive design tested for mobile-first fashion shoppers. Streamlined Checkout Flow — simplified path from cart to completed purchase. Store Management Setup — Shopify admin tools configured so the client can manage products and orders independently without developer support.',
      implementation: 'Phase 1: Brand discovery and visual identity extraction. Phase 2: Shopify store creation and theme selection. Phase 3: Custom Liquid theme development and brand styling. Phase 4: Product catalog upload and variant configuration. Phase 5: Mobile testing and checkout flow optimization. Phase 6: Client handover and admin training.',
      results: 'Brand launched its first-ever online sales channel. Store fully manageable by the client\'s own team post-launch, with no developer dependency for routine updates. Mobile-optimized experience tested across major devices. Clean product catalog across all collections at go-live.',
      keyTakeaway: 'This project reflects our broader approach to Shopify builds: we treat the platform\'s flexibility as a tool for brand expression, not just a checkout mechanism. A store that looks and feels distinctly on-brand, paired with a catalog structure and checkout flow designed around how real customers actually shop, is what turns a functional store into one that actually converts.',
      clientQuote: '',
      technologies: [seededTechMap['tailwindcss']].filter(Boolean),
      featured: true,
      seoTitle: 'Custom Shopify Clothing Store | VardhSoft Case Study',
      seoDescription: 'How Vardhsoft built a custom-themed Shopify storefront for a fashion brand, launching their first online sales channel.',
    },
  ]

  const caseStudyIds: any[] = []
  for (const cs of caseStudiesData) {
    const doc = await payload.create({
      collection: 'case-studies',
      data: {
        ...cs,
        overview: makeRichText(cs.overview),
        problem: makeRichText(cs.problem),
        approach: makeRichText(cs.approach),
        solution: makeRichText(cs.solution),
        implementation: makeRichText(cs.implementation),
        results: makeRichText(cs.results),
        keyTakeaway: makeRichText(cs.keyTakeaway),
      },
    })
    caseStudyIds.push(doc.id)
  }
  console.log(`  ✅ ${caseStudiesData.length} Case Studies seeded`)


  // ─── PROJECTS ───
  console.log('🌱 Clearing existing portfolio data. (Admin-only creation bypassed).')
  await payload.delete({
    collection: 'projects',
    where: {
      id: { exists: true }
    }
  })
  console.log('  ✅ Projects cleared')

  // ─── SERVICES ───
  console.log('🌱 Seeding Services from Docs/services.json...')
  const servicesJsonPath = path.join(process.cwd(), 'Docs', 'services.json')
  const servicesRaw = fs.readFileSync(servicesJsonPath, 'utf-8')
  const servicesDataFromJson = JSON.parse(servicesRaw).services

  const serviceIconMap: Record<string, string> = {
    'custom-software-development': 'Cpu',
    'web-development': 'Code',
    'mobile-app-development': 'Smartphone',
    'ui-ux-design': 'Palette',
    'cloud-devops-services': 'Cloud',
    'ai-automation-solutions': 'Sparkles',
    'e-commerce-solutions': 'ShoppingCart',
    'quality-assurance-testing': 'ShieldCheck',
    'maintenance-support': 'Activity'
  }

  const serviceThemeColorMap: Record<string, string> = {
    'custom-software-development': 'teal',
    'web-development': 'blue',
    'mobile-app-development': 'emerald',
    'ui-ux-design': 'purple',
    'cloud-devops-services': 'cyan',
    'ai-automation-solutions': 'violet',
    'e-commerce-solutions': 'rose',
    'quality-assurance-testing': 'amber',
    'maintenance-support': 'indigo'
  }

  function findTechIdByName(name: string): string | null {
    const normalized = name.toLowerCase().replace(/[\s.-]/g, '');
    for (const tech of technologiesData) {
      const techNorm = tech.name.toLowerCase().replace(/[\s.-]/g, '');
      if (techNorm === normalized || tech.slug === normalized) {
        return seededTechMap[tech.slug] || null
      }
    }
    // fallback search
    for (const tech of technologiesData) {
      if (tech.name.toLowerCase().includes(normalized) || normalized.includes(tech.name.toLowerCase())) {
        return seededTechMap[tech.slug] || null
      }
    }
    return null
  }

  const serviceDocIds: Record<string, any> = {}
  
  for (const serviceJson of servicesDataFromJson) {
    const slug = serviceJson.slug
    console.log(`  🔧 Processing service: ${serviceJson.title} (${slug})...`)
    
    // Seed case studies if present
    const caseStudiesList: any[] = []
    if (serviceJson.caseStudies && serviceJson.caseStudies.length > 0) {
      for (const csJson of serviceJson.caseStudies) {
        const csTechIds = (csJson.technologies || [])
          .map((techName: string) => findTechIdByName(techName))
          .filter(Boolean)

        const csSlug = `${slug}-success-story`
        
        try {
          const csDoc = await payload.create({
            collection: 'case-studies',
            data: {
              title: csJson.title,
              slug: csSlug,
              clientName: 'Enterprise Partner',
              industry: serviceJson.title,
              duration: '3 Months',
              overview: makeRichText(csJson.solution),
              problem: makeRichText(csJson.problem),
              solution: makeRichText(csJson.solution),
              implementation: makeRichText("Phase 1: Discovery & Requirements Analysis. Phase 2: System Architecture Design. Phase 3: High-performance Implementation & Integrations. Phase 4: Thorough Quality Testing & Deployment."),
              results: makeRichText(csJson.impact),
              technologies: csTechIds,
              featured: true,
              seoTitle: `${csJson.title} | VardhSoft Portfolio`,
              seoDescription: csJson.impact,
            }
          })
          caseStudiesList.push(csDoc.id)
          console.log(`    📊 Seeded case study: "${csJson.title}"`)
        } catch (csErr) {
          console.error(`    ⚠️ Failed to seed case study for ${slug}:`, csErr)
        }
      }
    }

    const serviceTechIds = (serviceJson.technologies || [])
      .map((techName: string) => findTechIdByName(techName))
      .filter(Boolean)

    const serviceData = {
      title: serviceJson.title,
      slug: serviceJson.slug,
      shortDescription: serviceJson.hero.description,
      icon: serviceIconMap[slug] || 'Code',
      themeColor: (serviceThemeColorMap[slug] || 'teal') as any,
      featured: slug === 'custom-software-development' || slug === 'web-development' || slug === 'mobile-app-development',
      image: serviceImages[slug] || null,
      heroSection: {
        showSection: true,
        badge: serviceJson.hero.badge,
        heading: serviceJson.hero.heading,
        description: serviceJson.hero.description,
        primaryCtaText: serviceJson.hero.primaryCTA.label,
        primaryCtaLink: serviceJson.hero.primaryCTA.link,
        secondaryCtaText: serviceJson.hero.secondaryCTA.label,
        secondaryCtaLink: serviceJson.hero.secondaryCTA.link,
        stats: serviceJson.hero.stats || [],
      },
      overview: {
        showSection: true,
        title: 'Service Overview',
        subtitle: serviceJson.overview.why,
        whatIsIt: serviceJson.overview.what,
        whoIsItFor: serviceJson.overview.who,
        problemsItSolves: (serviceJson.problems || []).map((p: string) => `• ${p}`).join('\n'),
      },
      benefits: {
        showSection: true,
        title: 'Why Choose Us',
        subtitle: 'Partnering with VardhSoft ensures quality, speed, and support',
        items: (serviceJson.whyChooseUs || []).map((whyStr: string, idx: number) => {
          const chooseItems = [
            { icon: 'Cpu', title: 'Experienced Engineering Team', description: 'Our engineers bring years of experience building high-performance systems.' },
            { icon: 'Users', title: 'Transparent Communication', description: 'We keep you updated at every stage with clear, honest, and regular updates.' },
            { icon: 'Zap', title: 'Agile Delivery', description: 'We build in iterative cycles, allowing you to see progress and adapt quickly.' },
            { icon: 'Bookmark', title: 'Long-Term Partnership', description: 'We support you post-launch to ensure your software continues to deliver value.' },
            { icon: 'ShieldCheck', title: 'Quality-Focused Development', description: 'We enforce rigorous testing, clean code practices, and security standards.' }
          ]
          return chooseItems[idx] || { icon: 'CheckCircle2', title: whyStr, description: 'We deliver top-tier engineering solutions designed for scale.' }
        })
      },
      offerings: {
        showSection: true,
        title: 'What We Offer',
        subtitle: 'Comprehensive capabilities engineered for your success',
        items: (serviceJson.subServices || []).map((sub: any, idx: number) => {
          const subIcons = ['Code', 'Zap', 'Layers', 'Server', 'HardDrive', 'Smartphone', 'Cpu', 'Database', 'Cloud']
          return {
            icon: subIcons[idx % subIcons.length],
            title: sub.title,
            description: sub.description
          }
        })
      },
      subServices: serviceJson.subServices || [],
      process: {
        showSection: true,
        title: 'Our Process',
        subtitle: 'How we take your project from concept to production',
        steps: (serviceJson.process || []).map((stepName: string) => {
          const descriptions: Record<string, string> = {
            'Discovery': 'We analyze your business goals, requirements, and target audience to define the project scope.',
            'Planning': 'We create detailed timelines, architecture blueprints, and resource plans for development.',
            'Design': 'Our UI/UX design team crafts interactive prototypes and visual layouts of the product.',
            'Development': 'Our software engineers write clean, scalable, and tested code following modern practices.',
            'Testing': 'We conduct exhaustive manual and automated testing to ensure a bug-free experience.',
            'Launch & Support': 'We deploy the application to cloud servers and provide ongoing SLA maintenance and monitoring.'
          }
          return {
            title: stepName,
            description: descriptions[stepName] || 'We execute this phase with meticulous attention to detail and industry standards.'
          }
        })
      },
      technologiesSection: {
        showSection: true,
        title: 'Technologies We Use',
        subtitle: 'Powering your applications with the modern stack',
        technologies: serviceTechIds,
      },
      industries: {
        showSection: true,
        title: 'Industries We Serve',
        subtitle: 'Tailored solutions across diverse industry domains',
        items: (serviceJson.industries || []).map((indName: string) => {
          const indData: Record<string, { icon: string, desc: string }> = {
            'Healthcare': { icon: 'Activity', desc: 'Patient care platforms, telehealth systems, and secure medical data management.' },
            'Education': { icon: 'Award', desc: 'E-learning portals, student management systems, and interactive learning tools.' },
            'FinTech': { icon: 'CreditCard', desc: 'Secure transaction pipelines, financial dashboards, and banking automation.' },
            'E-Commerce': { icon: 'ShoppingCart', desc: 'Scalable storefronts, custom checkout pipelines, and inventory sync.' },
            'Logistics': { icon: 'Plane', desc: 'Real-time supply chain tracking, fleet management, and routing optimization.' },
            'Real Estate': { icon: 'Building', desc: 'Property listing portals, CRM workflows, and tenant management systems.' },
            'Startups': { icon: 'Zap', desc: 'Rapid MVP launches, scaling architecture, and flexible SaaS development.' },
            'Enterprise': { icon: 'Globe', desc: 'Robust system integrations, security compliance, and automated workflows.' }
          }
          const info = indData[indName] || { icon: 'Building', desc: 'Tailored digital solutions engineered for domain-specific workflows.' }
          return {
            icon: info.icon,
            title: indName,
            description: info.desc
          }
        })
      },
      whyChooseUs: {
        showSection: true,
        title: 'Why Choose Us',
        subtitle: 'Partnering with VardhSoft ensures quality, speed, and support',
        items: (serviceJson.whyChooseUs || []).map((whyStr: string, idx: number) => {
          const chooseItems = [
            { icon: 'Cpu', title: 'Experienced Engineering Team', description: 'Our engineers bring years of experience building high-performance systems.' },
            { icon: 'Users', title: 'Transparent Communication', description: 'We keep you updated at every stage with clear, honest, and regular updates.' },
            { icon: 'Zap', title: 'Agile Delivery', description: 'We build in iterative cycles, allowing you to see progress and adapt quickly.' },
            { icon: 'Bookmark', title: 'Long-Term Partnership', description: 'We support you post-launch to ensure your software continues to deliver value.' },
            { icon: 'ShieldCheck', title: 'Quality-Focused Development', description: 'We enforce rigorous testing, clean code practices, and security standards.' }
          ]
          return chooseItems[idx] || { icon: 'CheckCircle2', title: whyStr, description: 'We deliver top-tier engineering solutions designed for scale.' }
        })
      },
      caseStudiesSection: {
        showSection: caseStudiesList.length > 0,
        title: 'Featured Case Studies',
        subtitle: 'Real results from real projects',
        caseStudies: caseStudiesList,
      },
      testimonialsSection: {
        showSection: true,
        title: 'What Our Clients Say',
        subtitle: "Don't just take our word for it",
        testimonials: testimonialIds,
      },
      pricing: {
        showSection: false,
        title: 'Flexible Pricing Packages',
        subtitle: 'Choose the plan that fits your growth stage',
        plans: []
      },
      faqsSection: {
        showSection: true,
        title: 'Frequently Asked Questions',
        subtitle: "Got questions? We've got answers.",
      },
      faqs: serviceJson.faqs || [],
      finalCta: {
        showSection: true,
        title: serviceJson.cta.heading,
        description: serviceJson.cta.description,
        primaryCtaText: serviceJson.cta.buttons[0]?.label || 'Start Your Project',
        primaryCtaLink: serviceJson.cta.buttons[0]?.link || '/contact',
        secondaryCtaText: serviceJson.cta.buttons[1]?.label || 'Schedule a Consultation',
        secondaryCtaLink: serviceJson.cta.buttons[1]?.link || '/contact',
      },
      contactFormSection: {
        showSection: true,
        title: 'Start Your Project',
        subtitle: 'Fill out the form below and an engineer will contact you shortly.',
      },
      seoTitle: serviceJson.seo.metaTitle,
      seoDescription: serviceJson.seo.metaDescription,
    }

    const doc = await payload.create({
      collection: 'services',
      data: {
        ...serviceData,
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: serviceData.shortDescription }],
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    })
    serviceDocIds[slug] = doc.id
  }
  console.log(`  ✅ ${servicesDataFromJson.length} Services seeded with full metadata`)

  // ─── UPDATE SERVICES WITH RELATED SERVICES RELATION ───
  console.log('🔄 Linking related services dynamically...')
  const relatedMap: Record<string, string[]> = {
    'product-engineering': ['web-engineering', 'design-experience'],
    'web-engineering': ['product-engineering', 'design-experience'],
    'mobile-engineering': ['product-engineering', 'design-experience'],
    'ai-development': ['product-engineering', 'business-automation'],
    'business-automation': ['product-engineering', 'ai-development'],
    'cloud-devops': ['web-engineering', 'quality-support'],
    'design-experience': ['web-engineering', 'mobile-engineering'],
    'quality-support': ['web-engineering', 'cloud-devops'],
  }

  for (const [slug, relSlugs] of Object.entries(relatedMap)) {
    const serviceId = serviceDocIds[slug]
    const relatedIds = relSlugs.map(s => serviceDocIds[s]).filter(Boolean)
    if (serviceId && relatedIds.length > 0) {
      try {
        await payload.update({
          collection: 'services',
          id: serviceId,
          data: {
            relatedServicesSection: {
              showSection: true,
              title: 'Explore Related Services',
              subtitle: 'We provide end-to-end capabilities across the software landscape.',
              services: relatedIds,
            }
          }
        })
      } catch (updateErr) {
        console.error(`  ⚠️ Error updating related services for ${slug}:`, updateErr)
      }
    }
  }
  console.log('  ✅ Related services relationships updated')

  // ─── SUB-SERVICES ───
  console.log('🌱 Seeding Sub-Services from static files...')
  
  const subServicesMap: Record<string, Record<string, any>> = {
    'custom-software-development': customSoftwareSubServices,
    'web-development': webDevelopmentSubServices,
    'mobile-app-development': mobileAppSubServices,
    'ui-ux-design': uiUxDesignSubServices,
    'cloud-devops-services': cloudDevOpsSubServices,
    'ai-automation-solutions': aiAutomationSubServices,
    'e-commerce-solutions': eCommerceSolutionsSubServices,
    'quality-assurance-testing': qualityAssuranceSubServices,
    'maintenance-support': maintenanceSupportSubServices,
  }

  function getColorKey(textClass: string): string {
    const map: Record<string, string> = {
      'text-teal-400': 'teal',
      'text-blue-400': 'blue',
      'text-violet-400': 'violet',
      'text-purple-400': 'purple',
      'text-pink-400': 'pink',
      'text-cyan-400': 'cyan',
      'text-yellow-400': 'yellow',
      'text-emerald-400': 'emerald',
      'text-indigo-400': 'indigo',
      'text-rose-400': 'rose',
      'text-amber-400': 'amber',
    }
    return map[textClass] || 'teal'
  }

  let subServicesSeededCount = 0
  
  for (const [parentSlug, subList] of Object.entries(subServicesMap)) {
    const parentId = serviceDocIds[parentSlug]
    if (!parentId) {
      console.warn(`  ⚠️ Parent service ID not found for slug: ${parentSlug}`)
      continue
    }
    
    for (const [subSlug, subDetail] of Object.entries(subList)) {
      const subTechIds = (subDetail.technologies || [])
        .map((techName: string) => findTechIdByName(techName))
        .filter(Boolean)
        
      try {
        await payload.create({
          collection: 'sub-services',
          data: {
            title: subDetail.title,
            slug: subSlug,
            icon: subDetail.icon || 'Code',
            shortDescription: subDetail.shortDescription || '',
            themeColor: getColorKey(subDetail.theme.text) as any,
            parentService: parentId,
            hero: {
              badge: subDetail.hero.badge || '',
              title: subDetail.hero.title || '',
              subText: subDetail.hero.subText || '',
              primaryCtaText: subDetail.hero.primaryCtaText || 'Start Your Project',
              primaryCtaLink: subDetail.hero.primaryCtaLink || '/contact',
              secondaryCtaText: subDetail.hero.secondaryCtaText || 'Schedule a Consultation',
              secondaryCtaLink: subDetail.hero.secondaryCtaLink || '/book',
            },
            overview: subDetail.overview || '',
            problemsSolved: (subDetail.problemsSolved || []).map((p: string) => ({ problem: p })),
            features: (subDetail.features || []).map((f: string) => ({ feature: f })),
            technologies: subTechIds,
            process: (subDetail.process || []).map((step: string) => ({ step })),
            whyChooseUs: (subDetail.whyChooseUs || []).map((item: any) => ({ title: item.title, description: item.description })),
            faqs: (subDetail.faqs || []).map((faq: any) => ({ question: faq.question, answer: faq.answer })),
            cta: {
              headline: subDetail.cta.headline || '',
              subText: subDetail.cta.subText || '',
              primaryBtn: subDetail.cta.primaryBtn || 'Start Your Project',
              secondaryBtn: subDetail.cta.secondaryBtn || 'Schedule a Consultation',
            }
          }
        })
        subServicesSeededCount++
      } catch (subErr) {
        console.error(`  ❌ Failed to seed sub-service "${subDetail.title}":`, subErr)
      }
    }
  }
  console.log(`  ✅ Seeded ${subServicesSeededCount} Sub-Services successfully`)

  // ─── CAREERS ───
  console.log('🌱 Seeding Careers...')
  const careersData = [
    {
      title: 'Senior Full Stack Engineer',
      slug: 'senior-full-stack-engineer',
      department: 'Engineering',
      location: 'Mumbai, India (Hybrid)',
      employmentType: 'full-time' as const,
      experience: '4+ years',
      numberOfOpenings: 2,
      description: 'We are looking for a Senior Full Stack Engineer to lead development of client projects using Next.js, Node.js, and PostgreSQL.',
      requirements: 'Minimum 4 years experience with React/Next.js. Strong TypeScript skills. Experience with PostgreSQL and REST API design.',
      benefits: 'Competitive salary. Flexible hybrid work. Health insurance. Learning budget. Latest MacBook Pro.',
      status: 'published' as const,
    },
    {
      title: 'Product UI/UX Designer',
      slug: 'product-ui-ux-designer',
      department: 'Design',
      location: 'Remote (India)',
      employmentType: 'full-time' as const,
      experience: '3+ years',
      numberOfOpenings: 1,
      description: 'Join our design team to create premium user interfaces for enterprise web applications and SaaS platforms.',
      requirements: 'Portfolio demonstrating web app design expertise. Proficiency in Figma. Understanding of design systems and accessibility standards.',
      benefits: 'Competitive salary. Fully remote. Health insurance. Design conference budget.',
      status: 'published' as const,
    },
    {
      title: 'Software Engineer Intern',
      slug: 'software-engineer-intern',
      department: 'Engineering',
      location: 'Mumbai, India (On-site)',
      employmentType: 'internship' as const,
      experience: 'Fresher',
      numberOfOpenings: 3,
      description: 'A 6-month internship for aspiring developers to learn modern web development with Next.js, TypeScript, and Payload CMS.',
      requirements: 'Currently pursuing CS degree. Basic knowledge of JavaScript and React. Eagerness to learn and grow.',
      benefits: 'Monthly stipend. Mentorship from senior engineers. Certificate of completion. Potential full-time offer.',
      status: 'published' as const,
    },
    {
      title: 'Senior Business Development Executive (BDE) - (WFO - Ahmedabad)',
      slug: 'senior-business-development-executive-bde-wfo-ahmedabad',
      department: 'Business/Sales',
      location: 'Ahmedabad',
      employmentType: 'full-time' as const,
      experience: '6 - 8 years',
      numberOfOpenings: 1,
      description: 'We are looking for an experienced Senior Business Development Executive to lead our sales initiatives, client acquisitions, and proposal structuring.',
      requirements: 'Excellent communication skills. 6+ years experience in software agency sales. Proven track record of hitting sales targets.',
      benefits: 'Competitive salary. Uncapped commissions. Health benefits.',
      status: 'published' as const,
    },
    {
      title: 'QA Automation Engineer(WFO - Ahmedabad)',
      slug: 'qa-automation-engineer-wfo-ahmedabad',
      department: 'QA',
      location: 'Ahmedabad',
      employmentType: 'full-time' as const,
      experience: '2 - 4 years',
      numberOfOpenings: 1,
      description: 'We are seeking a QA Automation Engineer to write clean, automated end-to-end user tests using Playwright and Cypress.',
      requirements: 'Strong experience with automation frameworks. Knowledge of JavaScript/TypeScript. Familiarity with CI/CD deployment pipelines.',
      benefits: 'Competitive salary. Flexible hybrid terms. Learning budgets.',
      status: 'published' as const,
    },
  ]

  for (const career of careersData) {
    await payload.create({
      collection: 'careers',
      data: {
        ...career,
        description: makeRichText(career.description),
        requirements: makeRichText(career.requirements),
        benefits: makeRichText(career.benefits),
      },
    })
  }
  console.log(`  ✅ ${careersData.length} Careers seeded`)

  // ─── PAGES (Legal) ───
  console.log('🌱 Seeding Pages...')
  const pagesData = [
    {
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      published: true,
      seoTitle: 'Privacy Policy | VardhSoft',
      seoDescription: 'VardhSoft privacy policy — how we handle your data.',
      content: 'At VardhSoft, we respect your privacy. This policy outlines how we handle the contact information you submit on our website. When you fill out our contact lead form, we collect your name, email address, phone number, company name, and details of the service required. This information is stored securely in our PostgreSQL database via Payload CMS. We use this information to respond to your inquiry and scope potential business engagements. We do not sell or lease this information to third parties.',
    },
    {
      title: 'Terms & Conditions',
      slug: 'terms-and-conditions',
      published: true,
      seoTitle: 'Terms & Conditions | VardhSoft',
      seoDescription: 'VardhSoft terms and conditions of service.',
      content: 'Welcome to VardhSoft. By accessing our website, you agree to comply with our terms. All website designs, logos, and custom code are intellectual property of VardhSoft, built by Dhruv Shah, Jeet Shah, and Silvi Shah. By submitting your details via the contact form, you declare that all information supplied is accurate and that we have the consent to contact you.',
    },
    {
      title: 'Cookie Policy',
      slug: 'cookie-policy',
      published: true,
      seoTitle: 'Cookie Policy | VardhSoft',
      seoDescription: 'VardhSoft cookie policy — how we use cookies on our site.',
      content: 'We use essential cookies to maintain sessions and compile basic dashboard statistics. Our Payload CMS admin panel uses encrypted cookies to sign and secure administrator sessions. These cookies are strictly necessary for access security.',
    },
  ]

  for (const page of pagesData) {
    await payload.create({
      collection: 'pages',
      data: {
        ...page,
        content: makeRichText(page.content),
      },
    })
  }
  console.log(`  ✅ ${pagesData.length} Pages seeded`)

  // ─── INDUSTRIES ───
  console.log('🌱 Seeding Industries...')
  const industriesData = [
    {
      title: 'Healthcare',
      slug: 'healthcare',
      icon: 'Activity',
      themeColor: 'emerald',
      hero: {
        title: 'Healthcare Software Development',
        subText: 'Digital tools that help healthcare providers spend less time on paperwork and more time on patient care.',
        primaryCtaText: 'Start Your Project',
        primaryCtaLink: '/contact?industry=healthcare',
        secondaryCtaText: 'Talk to Our Team',
        secondaryCtaLink: '/contact',
      },
      overview: 'Healthcare organizations — clinics, hospitals, diagnostic centers, and care institutions — run on information that has to be accurate, accessible, and secure: patient records, appointment schedules, treatment histories, and staff coordination. Many of these organizations are still managing significant parts of this on paper or through disconnected tools that don\'t talk to each other, which creates real operational risk, not just inefficiency. We approach healthcare software the same way we approached our Panjarapol Management System project — starting with how care actually happens day-to-day on the ground, then building software that fits that reality, with particular attention to data accuracy, access control, and system reliability given how much depends on the information being right.',
      challenges: [
        { title: 'Manual Processes', description: 'Patient intake, scheduling, and record-keeping still handled on paper or fragmented spreadsheets, slowing down care delivery and increasing error risk.' },
        { title: 'Poor Patient Experience', description: 'Long wait times, confusing appointment booking, and lack of visibility into treatment status or records for patients.' },
        { title: 'Data Management Issues', description: 'Patient records scattered across systems or physical files, making it difficult to retrieve complete, accurate history quickly.' },
        { title: 'Lack of Automation', description: 'Manual reminders, follow-ups, and reporting that could be automated but currently depend on staff availability.' },
        { title: 'Scalability Problems', description: 'Systems that worked for a small clinic breaking down as patient volume or staff count grows.' },
        { title: 'Security Concerns', description: 'Sensitive patient data requiring careful access control and protection, often under-addressed in informal or ad-hoc systems.' }
      ],
      solutions: [
        { title: 'Custom Software Development', description: 'Patient/records management systems, staff coordination tools, and administrative platforms built around your specific care workflow.' },
        { title: 'Web Applications', description: 'Portals for staff, and where appropriate, patient-facing scheduling or information access.' },
        { title: 'Mobile Applications', description: 'Mobile-accessible tools for staff who need records or scheduling access outside a fixed desk (e.g., field or ward staff).' },
        { title: 'Cloud Solutions', description: 'Secure, reliable hosting for patient data with appropriate backup and uptime considerations.' },
        { title: 'AI & Automation', description: 'Automated appointment reminders, intelligent document/form processing, and administrative workflow automation.' },
        { title: 'System Integrations', description: 'Connecting scheduling, records, and billing systems that currently operate in isolation.' }
      ],
      services: [
        { bullet: 'Patient/animal or care-recipient records management systems (structured digital record-keeping, replacing paper registers)' },
        { bullet: 'Appointment scheduling and staff coordination platforms' },
        { bullet: 'Administrative dashboards giving management real-time operational visibility' },
        { bullet: 'Automated notification systems for appointments, follow-ups, and reminders' },
        { bullet: 'Secure, role-based staff portals for records and scheduling access' },
        { bullet: 'Reporting tools for regulatory, donor, or management transparency' }
      ],
      features: [
        { title: 'Analytics Dashboard', description: 'Real-time visibility into patient volume, resource usage, and operational metrics.' },
        { title: 'Real-Time Reporting', description: 'Instant access to summaries that previously required manual compilation from paper records.' },
        { title: 'Notifications', description: 'Automated reminders for appointments, follow-ups, and important patient/care updates.' },
        { title: 'Role-Based Access', description: 'Appropriately restricted access to sensitive patient data based on staff role.' },
        { title: 'Third-Party Integrations', description: 'Connecting with billing, lab, or external reporting systems where required.' },
        { title: 'Scalable Architecture', description: 'Systems designed to handle growth in patient volume, staff, or facility locations without a rebuild.' }
      ],
      technologies: ['nextjs', 'react', 'nodejs', 'mongodb', 'postgresql', 'vercel', 'aws'].map(slug => seededTechMap[slug]).filter(Boolean),
      whyChooseUs: [
        { title: 'Direct, Real-World System Experience', description: 'We\'ve built and delivered a full care-institution management system (Panjarapol) end-to-end, giving us practical, not just theoretical, understanding of digitizing manual care operations.' },
        { title: 'Modern, Secure Technology', description: 'Built on current frameworks with security and data integrity treated as core requirements, not afterthoughts.' },
        { title: 'Agile Development', description: 'Iterative delivery so you see and validate progress throughout the build, not just at the end.' },
        { title: 'Transparent Communication', description: 'Clear, honest updates on progress and timelines throughout the project.' },
        { title: 'Dedicated Support', description: 'Ongoing support after launch, since healthcare systems can\'t afford to go unmaintained.' },
        { title: 'Scalable Solutions', description: 'Systems built to grow with your organization\'s patient volume and staff.' }
      ],
      process: [
        { stepNumber: '01', title: 'Discovery & Workflow Mapping', description: 'Spoke directly with the institution to map their existing paper-based workflow end-to-end.' },
        { stepNumber: '02', title: 'Data & Security Architecture Planning', description: 'Designing schemas, access control list models, and safe backup systems.' },
        { stepNumber: '03', title: 'UI Design', description: 'Simple, role-appropriate interface design to maximize adoption by non-technical staff.' },
        { stepNumber: '04', title: 'Iterative Development', description: 'Iterative backend and frontend implementation, sharing incremental builds.' },
        { stepNumber: '05', title: 'Staff Testing & Feedback', description: 'Releasing to a test team to collect adjustments and resolve bugs.' },
        { stepNumber: '06', title: 'Security Review', description: 'Conducting access logs, encryption, and secure API audits.' },
        { stepNumber: '07', title: 'Launch & Onboarding', description: 'Deployment, database setup, and user training support.' },
        { stepNumber: '08', title: 'Ongoing Support', description: 'Maintaining code, databases, and monitoring health.' }
      ],
      faqs: [
        { question: 'How long does development take for a healthcare management system?', answer: 'Depends on scope — a focused records/scheduling system can take a few weeks; a more comprehensive platform spanning multiple departments takes longer. We provide a specific timeline after understanding your workflow.' },
        { question: 'What technologies do you use for healthcare projects?', answer: 'Primarily Next.js, React, and Node.js, with MongoDB or PostgreSQL for data storage, chosen based on your specific data structure and reporting needs.' },
        { question: 'Can you integrate with existing systems (billing, lab systems, etc.)?', answer: 'Yes, where those systems offer an API or data export capability, integration is a standard part of our approach.' },
        { question: 'Do you provide maintenance after launch?', answer: 'Yes, ongoing maintenance and support is available and strongly recommended for systems handling sensitive patient data.' },
        { question: 'How much does a healthcare software project cost?', answer: 'This depends on scope and complexity — we provide a clear, itemized quote after a discovery conversation about your specific requirements.' },
        { question: 'How do you ensure the security of patient data?', answer: 'Through role-based access control, secure authentication, encrypted data transmission and storage, and careful scoping of who can access what within the system — with security requirements addressed as a core part of planning, not added afterward.' }
      ],
      cta: {
        headline: 'Ready to Replace Paper Records With Something Your Staff Will Actually Trust?',
        subText: 'Let\'s talk about your current workflow and what a purpose-built system could look like.',
        primaryBtn: 'Start Your Project',
        secondaryBtn: 'Schedule a Consultation',
      }
    },
    {
      title: 'E-commerce',
      slug: 'e-commerce',
      icon: 'ShoppingCart',
      themeColor: 'rose',
      hero: {
        title: 'E-commerce Software Development',
        subText: 'Online stores and commerce platforms built to convert — from first product upload to a fully optimized checkout.',
        primaryCtaText: 'Start Your Store',
        primaryCtaLink: '/contact?industry=e-commerce',
        secondaryCtaText: 'See Our E-commerce Work',
        secondaryCtaLink: '/portfolio',
      },
      overview: 'E-commerce is one of the most competitive digital spaces there is — customers decide within seconds whether a store feels trustworthy and easy to use, and even small friction points (slow load times, confusing navigation, a clunky checkout) directly cost sales. This is also where we have direct, hands-on delivery experience: we designed and launched a complete Shopify storefront for a clothing brand, covering everything from custom theme development to catalog structuring and checkout optimization. We bring that same practical focus — brand identity, mobile performance, and conversion — to every e-commerce engagement.',
      challenges: [
        { title: 'Manual Processes', description: 'Order tracking, inventory updates, or customer communication handled manually instead of through integrated store tooling.' },
        { title: 'Poor Customer Experience', description: 'Confusing navigation, slow pages, or a complicated checkout process driving customers away before purchase.' },
        { title: 'Data Management Issues', description: 'Inventory, order, and customer data spread across disconnected spreadsheets or tools.' },
        { title: 'Lack of Automation', description: 'Manual order confirmations, shipping updates, or inventory reconciliation that should be automated.' },
        { title: 'Scalability Problems', description: 'A store that worked at a small catalog size struggling as product range or order volume grows.' },
        { title: 'Security Concerns', description: 'Payment and customer data requiring secure handling, particularly important for maintaining customer trust.' }
      ],
      solutions: [
        { title: 'Custom Software Development', description: 'Inventory management, order processing, and internal operations tools tailored to your specific catalog and fulfillment process.' },
        { title: 'Web Applications', description: 'Custom storefronts and admin tools beyond what standard e-commerce platforms provide out of the box.' },
        { title: 'Mobile Applications', description: 'Mobile shopping experiences and PWAs optimized for the majority-mobile e-commerce audience.' },
        { title: 'Cloud Solutions', description: 'Reliable, scalable hosting that handles traffic spikes (sales events, promotions) without downtime.' },
        { title: 'AI & Automation', description: 'Product recommendation features, automated customer support chatbots, and inventory forecasting.' },
        { title: 'System Integrations', description: 'Connecting your store to payment gateways, shipping providers, accounting tools, and marketing platforms.' }
      ],
      services: [
        { bullet: 'Custom-themed Shopify storefronts aligned to brand identity' },
        { bullet: 'Product catalog structuring for multi-variant products (size, color, etc.)' },
        { bullet: 'Checkout flow optimization to reduce cart abandonment' },
        { bullet: 'Payment gateway integration (Razorpay, Stripe, Shopify Payments)' },
        { bullet: 'Inventory management systems and stock tracking' },
        { bullet: 'Custom e-commerce platform development for requirements beyond standard platforms' }
      ],
      features: [
        { title: 'Analytics Dashboard', description: 'Visibility into sales, traffic, and product performance.' },
        { title: 'Real-Time Reporting', description: 'Up-to-date sales and inventory data without manual compilation.' },
        { title: 'Notifications', description: 'Automated order confirmations, shipping updates, and low-stock alerts.' },
        { title: 'Role-Based Access', description: 'Appropriate permissions for store staff versus administrators.' },
        { title: 'Third-Party Integrations', description: 'Payment gateways, shipping providers, email marketing, and accounting tools.' },
        { title: 'Scalable Architecture', description: 'Infrastructure that handles traffic spikes during sales events without performance degradation.' }
      ],
      technologies: ['shopify', 'nextjs', 'react', 'nodejs', 'postgresql'].map(slug => seededTechMap[slug]).filter(Boolean),
      whyChooseUs: [
        { title: 'Real, Delivered E-commerce Experience', description: 'A fully launched Shopify storefront is part of our direct project history, not just a listed capability.' },
        { title: 'Modern Technologies', description: 'Built on current, performance-focused platforms and frameworks.' },
        { title: 'Agile Development', description: 'Iterative builds with regular progress visibility.' },
        { title: 'Transparent Communication', description: 'Clear updates throughout, no vague status reports.' },
        { title: 'Dedicated Support', description: 'Ongoing store support and optimization after launch.' },
        { title: 'Scalable Solutions', description: 'Infrastructure and architecture built to grow with your catalog and order volume.' }
      ],
      process: [
        { stepNumber: '01', title: 'Discovery & Brand Alignment', description: 'Gathering assets, brand colors, and catalog structure requirements.' },
        { stepNumber: '02', title: 'Catalog & Store Architecture Planning', description: 'Defining collection categories, filtering tags, and variant structures.' },
        { stepNumber: '03', title: 'Theme/Store Design', description: 'Wireframing custom pages and design elements for Shopify theme styling.' },
        { stepNumber: '04', title: 'Development & Integration', description: 'Writing liquid theme sections, setting up third-party apps, and configuring payments.' },
        { stepNumber: '05', title: 'Mobile & Checkout Testing', description: 'Validating storefront conversion on mobile viewports and checkout logic.' },
        { stepNumber: '06', title: 'Launch', description: 'Domain routing, SEO configurations, and live store release.' },
        { stepNumber: '07', title: 'Ongoing Store Support', description: 'Updating assets, checking conversion rate metrics, and scaling integrations.' }
      ],
      faqs: [
        { question: 'How long does it take to launch an e-commerce store?', answer: 'A Shopify-based store typically takes a few weeks depending on catalog size and customization needs; fully custom platforms take longer. We provide a specific timeline after discovery.' },
        { question: 'What technologies do you use for e-commerce projects?', answer: 'Primarily Shopify for most stores, with Next.js/React/Node.js for fully custom builds when Shopify\'s ecosystem doesn\'t cover your specific requirements.' },
        { question: 'Can you integrate with our existing payment or shipping providers?', answer: 'Yes, payment gateway and shipping provider integration is a standard part of our e-commerce builds.' },
        { question: 'Do you provide maintenance after launch?', answer: 'Yes, ongoing store maintenance, updates, and optimization support are available after go-live.' },
        { question: 'How much does an e-commerce project cost?', answer: 'Cost depends on platform choice, catalog complexity, and customization scope — we provide an itemized quote after understanding your specific requirements.' },
        { question: 'How do you ensure the security of customer and payment data?', answer: 'Payment processing is handled through secure, PCI-compliant providers (Shopify Payments, Razorpay, Stripe), and we follow secure development practices for any custom-built components handling customer data.' }
      ],
      cta: {
        headline: 'Let\'s Build a Store That Actually Sells.',
        subText: 'From first product upload to a fully optimized checkout, we\'ll handle the build.',
        primaryBtn: 'Start Your Store',
        secondaryBtn: 'Schedule a Consultation',
      }
    },
    {
      title: 'Education',
      slug: 'education',
      icon: 'Award',
      themeColor: 'indigo',
      hero: {
        title: 'Education Software Development',
        subText: 'Digital platforms that make learning, administration, and communication easier for institutions, educators, and students.',
        primaryCtaText: 'Start Your Project',
        primaryCtaLink: '/contact?industry=education',
        secondaryCtaText: 'Talk to Our Team',
        secondaryCtaLink: '/contact',
      },
      overview: 'Educational institutions — schools, coaching centers, training organizations, and course providers — juggle a wide range of operational needs: student records, scheduling, communication with parents or students, content delivery, and administrative reporting. Many institutions rely on a mix of manual processes and disconnected tools that create extra work for already-stretched administrative staff. We approach education software with the same workflow-first mindset we bring to every project — understanding how an institution\'s day-to-day actually runs, then building tools that reduce administrative burden and improve communication, rather than adding another disconnected system to manage.',
      challenges: [
        { title: 'Manual Processes', description: 'Student registration, attendance, and record-keeping handled manually, consuming significant administrative time.' },
        { title: 'Poor Customer Experience', description: 'Students and parents lacking clear visibility into schedules, grades, fees, or communication from the institution.' },
        { title: 'Data Management Issues', description: 'Student records, attendance, and academic history scattered across spreadsheets or paper files.' },
        { title: 'Lack of Automation', description: 'Manual fee reminders, attendance tracking, or report generation that could be automated.' },
        { title: 'Scalability Problems', description: 'Systems or processes that worked for a small institution breaking down as enrollment grows.' },
        { title: 'Security Concerns', description: 'Student and family data requiring careful, appropriate protection.' }
      ],
      solutions: [
        { title: 'Custom Software Development', description: 'Student information systems, administrative platforms, and institution-specific management tools.' },
        { title: 'Web Applications', description: 'Parent/student portals, staff dashboards, and institutional websites.' },
        { title: 'Mobile Applications', description: 'Mobile access to schedules, notifications, and communication for students and parents.' },
        { title: 'Cloud Solutions', description: 'Reliable hosting for institutional data and content delivery platforms.' },
        { title: 'AI & Automation', description: 'Automated attendance tracking, fee reminders, and administrative report generation.' },
        { title: 'System Integrations', description: 'Connecting student information systems with communication tools, payment systems, or existing institutional software.' }
      ],
      services: [
        { bullet: 'Student information and records management systems' },
        { bullet: 'Parent/student communication portals' },
        { bullet: 'Attendance and academic performance tracking tools' },
        { bullet: 'Fee management and automated payment reminder systems' },
        { bullet: 'Administrative reporting dashboards' },
        { bullet: 'Institutional websites and enrollment/admission platforms' }
      ],
      features: [
        { title: 'Analytics Dashboard', description: 'Visibility into enrollment, attendance, and academic performance trends.' },
        { title: 'Real-Time Reporting', description: 'Instant access to attendance, grades, or fee status without manual compilation.' },
        { title: 'Notifications', description: 'Automated alerts for parents/students regarding attendance, fees, or important updates.' },
        { title: 'Role-Based Access', description: 'Appropriate access levels for administrators, teachers, students, and parents.' },
        { title: 'Third-Party Integrations', description: 'Connecting to payment gateways, communication tools (SMS/email), or existing institutional systems.' },
        { title: 'Scalable Architecture', description: 'Systems designed to handle growing student enrollment without a rebuild.' }
      ],
      technologies: ['nextjs', 'react', 'nodejs', 'mongodb', 'postgresql', 'tailwindcss', 'vercel', 'aws'].map(slug => seededTechMap[slug]).filter(Boolean),
      whyChooseUs: [
        { title: 'Workflow-First Approach', description: 'We start by understanding your institution\'s actual administrative process, not a generic education-software template.' },
        { title: 'Modern Technologies', description: 'Built on current, reliable frameworks.' },
        { title: 'Agile Development', description: 'Iterative delivery with regular progress visibility for your review.' },
        { title: 'Transparent Communication', description: 'Clear, honest updates throughout the project.' },
        { title: 'Dedicated Support', description: 'Ongoing support, since institutions depend on these systems working reliably during active terms.' },
        { title: 'Scalable Solutions', description: 'Built to handle enrollment growth over time.' }
      ],
      process: [
        { stepNumber: '01', title: 'Discovery & Administrative Workflow Mapping', description: 'Understanding admissions, tracking, and communication cycles.' },
        { stepNumber: '02', title: 'Data Architecture Planning', description: 'Designing student profile schemas, relationship models, and access logs.' },
        { stepNumber: '03', title: 'UI Design per Role', description: 'Creating specific, easy-to-use flows for staff, students, and parents.' },
        { stepNumber: '04', title: 'Iterative Development', description: 'Writing clean code for portal components and notification servers.' },
        { stepNumber: '05', title: 'Staff/Stakeholder Testing', description: 'Releasing beta version to administrative staff to verify usability.' },
        { stepNumber: '06', title: 'Launch & Onboarding', description: 'Deploying the system and supporting staff transition.' },
        { stepNumber: '07', title: 'Ongoing Support', description: 'System maintenance, scaling capabilities, and data backups.' }
      ],
      faqs: [
        { question: 'How long does development take for an education platform?', answer: 'Depends on scope — a focused student records or communication portal can take a few weeks; a comprehensive institutional platform takes longer. We scope this precisely after discovery.' },
        { question: 'What technologies do you use for education projects?', answer: 'Primarily Next.js, React, and Node.js, with MongoDB or PostgreSQL for data storage, based on your specific record-keeping needs.' },
        { question: 'Can you integrate with our existing systems (payment, communication tools)?', answer: 'Yes, integration with existing tools via API is a standard part of our approach where those systems support it.' },
        { question: 'Do you provide maintenance after launch?', answer: 'Yes, ongoing maintenance and support is available, which matters particularly for systems institutions depend on during active academic terms.' },
        { question: 'How much does an education software project cost?', answer: 'Cost depends on scope and complexity — we provide an itemized quote after understanding your specific requirements.' },
        { question: 'How do you ensure the security of student and family data?', answer: 'Through role-based access control, secure authentication, and careful scoping of data access by user type — security is addressed as part of planning, not an afterthought.' }
      ],
      cta: {
        headline: 'Ready to Give Your Administrative Team Their Time Back?',
        subText: 'Let\'s talk about your current process and what a purpose-built platform could look like.',
        primaryBtn: 'Start Your Project',
        secondaryBtn: 'Schedule a Consultation',
      }
    },
    {
      title: 'FinTech',
      slug: 'fintech',
      icon: 'CreditCard',
      themeColor: 'teal',
      hero: {
        title: 'FinTech Software Development',
        subText: 'Secure, reliable financial software — built with the accuracy and security this industry demands.',
        primaryCtaText: 'Start Your Project',
        primaryCtaLink: '/contact?industry=fintech',
        secondaryCtaText: 'Talk to Our Team',
        secondaryCtaLink: '/contact',
      },
      overview: 'FinTech software carries a different level of responsibility than most other categories — errors or security gaps don\'t just create inconvenience, they create real financial and trust consequences. We approach financial software with heightened attention to data accuracy, secure architecture, and clear audit trails, applying the same engineering discipline we bring to every project but with the additional care this space requires. This is a newer area of focus for us, and we\'re upfront about that: we bring strong general software engineering and security-conscious development practices to FinTech projects, and we recommend a specialized compliance/legal review (for regulatory requirements like PCI-DSS or applicable financial regulations) alongside our development work for anything handling real financial transactions at scale.',
      challenges: [
        { title: 'Manual Processes', description: 'Financial tracking, reconciliation, or reporting handled manually, increasing both time cost and error risk.' },
        { title: 'Poor Customer Experience', description: 'Confusing financial dashboards or transaction flows that erode user trust.' },
        { title: 'Data Management Issues', description: 'Financial records scattered across systems, complicating accurate reporting and auditing.' },
        { title: 'Lack of Automation', description: 'Manual transaction categorization, reporting, or reconciliation that could be automated.' },
        { title: 'Scalability Problems', description: 'Systems that can\'t handle growing transaction volume or user base without performance degradation.' },
        { title: 'Security Concerns', description: 'Financial data requiring rigorous protection, given the direct consequences of a breach.' }
      ],
      solutions: [
        { title: 'Custom Software Development', description: 'Financial dashboards, transaction tracking systems, and reporting tools built around your specific requirements.' },
        { title: 'Web Applications', description: 'Secure client-facing or internal financial platforms.' },
        { title: 'Mobile Applications', description: 'Mobile access to financial dashboards and transaction tracking.' },
        { title: 'Cloud Solutions', description: 'Secure, reliable hosting with attention to data backup and uptime.' },
        { title: 'AI & Automation', description: 'Automated transaction categorization, anomaly flagging, and reporting generation.' },
        { title: 'System Integrations', description: 'Connecting to banking APIs, payment processors, and accounting systems.' }
      ],
      services: [
        { bullet: 'Financial dashboards and reporting tools' },
        { bullet: 'Transaction tracking and reconciliation systems' },
        { bullet: 'Secure client portals for financial data access' },
        { bullet: 'Payment processing integration' },
        { bullet: 'Automated financial reporting tools' },
        { bullet: 'Custom fintech application development' }
      ],
      features: [
        { title: 'Analytics Dashboard', description: 'Clear visibility into financial data, transactions, and trends.' },
        { title: 'Real-Time Reporting', description: 'Up-to-date financial reporting without manual compilation.' },
        { title: 'Notifications', description: 'Automated alerts for transactions, thresholds, or account activity.' },
        { title: 'Role-Based Access', description: 'Strict, appropriate access control given the sensitivity of financial data.' },
        { title: 'Third-Party Integrations', description: 'Connections to banking APIs, payment processors, and accounting tools.' },
        { title: 'Scalable Architecture', description: 'Systems designed to handle growing transaction volume reliably.' }
      ],
      technologies: ['nextjs', 'react', 'nodejs', 'postgresql', 'stripe'].map(slug => seededTechMap[slug]).filter(Boolean),
      whyChooseUs: [
        { title: 'Security-Conscious Engineering', description: 'Data integrity and secure architecture treated as first-order requirements, not an afterthought, on every financial project.' },
        { title: 'Modern Technologies', description: 'Built on current, well-supported frameworks and secure coding practices.' },
        { title: 'Agile Development', description: 'Iterative delivery with careful testing at each stage, particularly important given the accuracy financial data demands.' },
        { title: 'Transparent Communication', description: 'Honest, clear updates throughout — including flagging when specialized compliance expertise beyond our scope is warranted.' },
        { title: 'Dedicated Support', description: 'Ongoing monitoring and support, critical for systems handling live financial data.' },
        { title: 'Scalable Solutions', description: 'Architecture built to handle growing transaction volume without a rebuild.' }
      ],
      process: [
        { stepNumber: '01', title: 'Discovery & Security Requirement Planning', description: 'Mapping data boundaries, auditing constraints, and scoping payment structures.' },
        { stepNumber: '02', title: 'Data Architecture Planning', description: 'Designing robust transactional relational tables in PostgreSQL for extreme reliability.' },
        { stepNumber: '03', title: 'UI Design', description: 'Creating clean dashboard interfaces focused on clarity, accessibility, and trust.' },
        { stepNumber: '04', title: 'Iterative Development', description: 'Building secure endpoints and dashboard charts with strict validation layers.' },
        { stepNumber: '05', title: 'Rigorous Testing & Security Review', description: 'Mocking high volume transactions and reviewing token auth behaviors.' },
        { stepNumber: '06', title: 'Launch', description: 'Production server release, environment variables lock down, and audit trails verification.' },
        { stepNumber: '07', title: 'Ongoing Support', description: 'Continuous uptime logging, database checkups, and SLA support.' }
      ],
      faqs: [
        { question: 'How long does development take for a FinTech platform?', answer: 'Depends on scope and required security review depth — a focused financial dashboard might take several weeks, while a more comprehensive transaction platform takes longer, given the additional testing and security review involved.' },
        { question: 'What technologies do you use for FinTech projects?', answer: 'Primarily Next.js, React, and Node.js, with PostgreSQL favored for its strong transactional data integrity, alongside secure, token-based authentication practices.' },
        { question: 'Can you integrate with banking APIs or payment processors?', answer: 'Yes, integration with banking APIs and payment processors (Stripe, Razorpay, etc.) is a standard part of FinTech project scoping.' },
        { question: 'Do you provide maintenance and monitoring after launch?', answer: 'Yes — and for FinTech projects specifically, ongoing monitoring is something we strongly recommend rather than treat as purely optional, given the consequences of undetected issues in financial systems.' },
        { question: 'How much does a FinTech project cost?', answer: 'Cost depends heavily on scope, security requirements, and compliance considerations — we provide a detailed quote after a thorough discovery process.' },
        { question: 'How do you ensure the security of financial data?', answer: 'Through secure authentication, encrypted data storage and transmission, rigorous access control, and careful architecture planning — and for projects handling significant real financial transactions, we recommend pairing our development work with a specialized compliance/security audit (e.g., for PCI-DSS or applicable financial regulations), which is outside our own scope as software engineers.' }
      ],
      cta: {
        headline: 'Building Financial Software That Needs to Get It Right?',
        subText: 'Let\'s talk about your requirements — including where specialized compliance expertise might be needed alongside our development work.',
        primaryBtn: 'Start Your Project',
        secondaryBtn: 'Schedule a Consultation',
      }
    },
    {
      title: 'SaaS',
      slug: 'saas',
      icon: 'Cpu',
      themeColor: 'violet',
      hero: {
        title: 'SaaS Software Development',
        subText: 'End-to-end product development for SaaS founders and teams — from MVP to scale.',
        primaryCtaText: 'Start Your Project',
        primaryCtaLink: '/contact?industry=saas',
        secondaryCtaText: 'Talk to Our Team',
        secondaryCtaLink: '/contact',
      },
      overview: 'End-to-end product development for SaaS founders and teams — from MVP validation through to a scalable, multi-tenant production platform with subscription billing built in.',
      challenges: [
        { title: 'Complex Subscriptions', description: 'Handling secure billing tiers, team accounts, and usage tracking.' },
        { title: 'Multi-Tenant Databases', description: 'Ensuring safe data isolation and partitioning for different corporate clients.' }
      ],
      solutions: [
        { title: 'Multi-Tenant Platforms', description: 'Robust, sandboxed custom databases for software-as-a-service architecture.' },
        { title: 'Billing Integration', description: 'Setting up Stripe customer portals and tiered webhooks.' }
      ],
      services: [
        { bullet: 'Multi-tenant database architectures and schemas' },
        { bullet: 'Stripe subscription cycle webhooks integration' },
        { bullet: 'Role-based invitation and team workspace setups' }
      ],
      features: [
        { title: 'SaaS Dashboard', description: 'Interactive multi-tenant administration tools.' },
        { title: 'Subscription Manager', description: 'Customer self-service subscription upgrade and downgrade portals.' }
      ],
      technologies: ['nextjs', 'react', 'nodejs', 'mongodb', 'stripe', 'vercel'].map(slug => seededTechMap[slug]).filter(Boolean),
      whyChooseUs: [
        { title: 'MVP to Scale Fast', description: 'We design robust SaaS modules meant for performance from the very first deploy.' }
      ],
      process: [
        { stepNumber: '01', title: 'MVP Discovery', description: 'Scoping the minimum viable product features.' },
        { stepNumber: '02', title: 'Database Partitioning Design', description: 'Choosing isolated schema models.' },
        { stepNumber: '03', title: 'Launch & Metrics Support', description: 'Uptime checks and webhook monitoring support.' }
      ],
      faqs: [
        { question: 'Can you implement Stripe subscription tiers?', answer: 'Yes, Stripe integration is a standard module we build for SaaS applications.' }
      ],
      cta: {
        headline: 'Ready to Build Your SaaS Product?',
        subText: 'Let\'s map out your MVP and technical roadmap.',
        primaryBtn: 'Start Your Project',
        secondaryBtn: 'Schedule a Consultation',
      }
    },
    {
      title: 'Logistics',
      slug: 'logistics',
      icon: 'Truck',
      themeColor: 'amber',
      hero: {
        title: 'Logistics Software Development',
        subText: 'Operational visibility tools for supply chain and logistics businesses.',
        primaryCtaText: 'Start Your Project',
        primaryCtaLink: '/contact?industry=logistics',
        secondaryCtaText: 'Talk to Our Team',
        secondaryCtaLink: '/contact',
      },
      overview: 'Operational visibility tools for supply chain and logistics businesses — inventory tracking, fleet/operations dashboards, and process digitization replacing manual coordination.',
      challenges: [
        { title: 'Manual Fleet Tracking', description: 'Tracking dispatch schedules, route updates, or cargo status on paper sheets.' },
        { title: 'Inventory Inefficiencies', description: 'Lack of real-time stock balances across multiple warehouses.' }
      ],
      solutions: [
        { title: 'Real-Time Dispatch Boards', description: 'Custom dispatch dashboards keeping track of driver states and route statuses.' },
        { title: 'Centralized Stock Inventories', description: 'Real-time sync of warehouse inbound and outbound logs.' }
      ],
      services: [
        { bullet: 'Fleet tracking and dispatch schedules' },
        { bullet: 'Inventory management and warehouse status dashboard' },
        { bullet: 'Driver trip logging and delivery confirmation portal' }
      ],
      features: [
        { title: 'Real-Time Map Dashboard', description: 'Live updates on dispatch routing and driver status.' },
        { title: 'Automated Status Alerts', description: 'Instant messaging when deliveries are confirmed.' }
      ],
      technologies: ['nextjs', 'react', 'nodejs', 'postgresql', 'aws'].map(slug => seededTechMap[slug]).filter(Boolean),
      whyChooseUs: [
        { title: 'Operational First', description: 'We focus on clear interfaces that dispatch teams can use on busy shifts.' }
      ],
      process: [
        { stepNumber: '01', title: 'Operational Mapping', description: 'Mapping route dispatches and terminal workflows.' },
        { stepNumber: '02', title: 'Database Sync Setup', description: 'Constructing robust PostgreSQL tables.' },
        { stepNumber: '03', title: 'Launch Support', description: 'Onboarding dispatch staff and configuring dashboard views.' }
      ],
      faqs: [
        { question: 'Can you integrate GPS tracking maps?', answer: 'Yes, Mapbox/Google Maps integrations are standard for logistics dispatches.' }
      ],
      cta: {
        headline: 'Ready to Digitize Your Dispatch Operations?',
        subText: 'Let\'s build a platform your dispatch team actually trusts.',
        primaryBtn: 'Start Your Project',
        secondaryBtn: 'Schedule a Consultation',
      }
    }
  ]

  for (const industry of industriesData) {
    await payload.create({
      collection: 'industries',
      data: industry as any
    })
    console.log(`  🏢 Seeded industry: ${industry.title}`)
  }
  console.log(`  ✅ ${industriesData.length} Industries seeded`)

  // ─── WEBSITE SETTINGS ───
  console.log('🌱 Seeding Website Settings (Global)...')
  await payload.updateGlobal({
    slug: 'website-settings',
    data: {
      companyName: 'VardhSoft',
      tagline: 'Empowering Businesses with Cutting-Edge Software Solutions',
      footerBrandText: 'Empowering businesses globally with state-of-the-art software engineering, design, and consulting.',
      email: 'vardhsoft.connect@gmail.com',
      phone: '+91 98765 43210',
      address: 'Ahmedabad, India',
      linkedinUrl: 'https://linkedin.com/company/vardhsoft',
      githubUrl: 'https://github.com/vardhsoft',
      instagramUrl: 'https://instagram.com/vardhsoft',
      heroBadge: '🚀 Trusted Technology Partner for Startups & Businesses',
      heroTitle: 'We Build Custom Software That Drives Business Growth',
      heroDescription: 'We design and develop scalable web applications, SaaS platforms, business automation systems, and modern websites that help startups and businesses launch faster, operate efficiently, and grow confidently.',
      heroPrimaryCtaText: 'Start Your Project',
      heroPrimaryCtaLink: '/contact',
      heroSecondaryCtaText: 'View Our Work',
      heroSecondaryCtaLink: '/portfolio',
      bookingTimeSlots: [
        { slot: '09:30 AM' },
        { slot: '10:30 AM' },
        { slot: '11:30 AM' },
        { slot: '02:00 PM' },
        { slot: '03:00 PM' },
        { slot: '04:30 PM' }
      ],
      features: [
        {
          title: 'Custom Software Development',
          description: 'Tailored web applications and business systems designed specifically for your workflows and growth requirements.',
          icon: 'Code',
          illustrationSvg: `<svg class="w-28 h-28 text-teal-400/70 group-hover:text-teal-400 transition-colors duration-500" viewBox="0 0 120 120" fill="none">
  <path d="M30 60 L60 30 M60 30 L90 60 M90 60 L60 90 M60 90 L30 60 Z" stroke="currentColor" stroke-width="1.5" class="opacity-40" />
  <path d="M30 60 L90 60 M60 30 L60 90" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="opacity-20" />
  <path d="M15 35 L25 45 L15 55" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  <path d="M105 35 L95 45 L105 55" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  <circle cx="60" cy="60" r="16" stroke="currentColor" stroke-width="1.5" class="opacity-30" />
  <circle cx="60" cy="60" r="6" fill="currentColor" class="animate-pulse" />
  <circle cx="30" cy="60" r="4" fill="#06b6d4" />
  <circle cx="90" cy="60" r="4" fill="#06b6d4" />
  <circle cx="60" cy="30" r="4" fill="#2dd4bf" />
  <circle cx="60" cy="90" r="4" fill="#6366f1" />
</svg>`
        },
        {
          title: 'Scalable Architecture',
          description: 'Modern, maintainable architectures that support future expansion and increasing user demands.',
          icon: 'Cpu',
          illustrationSvg: `<svg class="w-28 h-28 text-indigo-400/70 group-hover:text-indigo-400 transition-colors duration-500" viewBox="0 0 120 120" fill="none">
  <path d="M35 75 L55 65 L75 75 L55 85 Z" fill="currentColor" class="opacity-10" />
  <path d="M35 75 L35 90 L55 100 L55 85 Z" fill="currentColor" class="opacity-20" />
  <path d="M55 85 L55 100 L75 90 L75 75 Z" fill="currentColor" class="opacity-30" />
  <path d="M35 75 L55 65 L75 75 L55 85 Z" stroke="currentColor" stroke-width="1.5" />
  <path d="M35 75 L35 90 L55 100 L75 90 L75 75 M55 85 L55 100" stroke="currentColor" stroke-width="1.5" />
  <path d="M55 35 L75 25 L95 35 L75 45 Z" fill="currentColor" class="opacity-10" />
  <path d="M55 35 L55 50 L75 60 L75 45 Z" fill="currentColor" class="opacity-20" />
  <path d="M75 45 L75 60 L95 50 L95 35 Z" fill="currentColor" class="opacity-30" />
  <path d="M55 35 L75 25 L95 35 L75 45 Z" stroke="currentColor" stroke-width="1.5" />
  <path d="M55 35 L55 50 L75 60 L95 50 L95 35 M75 45 L75 60" stroke="currentColor" stroke-width="1.5" />
  <path d="M55 65 L55 50" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3" class="animate-pulse" />
  <path d="M75 75 L75 60" stroke="currentColor" stroke-width="1.5" />
</svg>`
        },
        {
          title: 'Performance Focused',
          description: 'Fast loading applications with excellent user experience, SEO, and optimized Core Web Vitals.',
          icon: 'Zap',
          illustrationSvg: `<svg class="w-28 h-28 text-emerald-400/70 group-hover:text-emerald-400 transition-colors duration-500" viewBox="0 0 120 120" fill="none">
  <path d="M25 85 A 40 40 0 1 1 95 85" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3" class="opacity-30" />
  <path d="M25 85 A 40 40 0 1 1 75 45" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  <path d="M60 60 L78 38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="origin-[60px_60px] transition-transform duration-700 group-hover:rotate-[30deg]" />
  <circle cx="60" cy="60" r="48" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" class="opacity-20" />
  <circle cx="108" cy="60" r="3" fill="#10b981" />
  <circle cx="60" cy="60" r="6" fill="currentColor" />
  <circle cx="60" cy="60" r="3" fill="#020617" />
</svg>`
        },
        {
          title: 'Security First',
          description: 'Secure authentication, protected APIs, and industry best practices implemented from day one.',
          icon: 'ShieldCheck',
          illustrationSvg: `<svg class="w-28 h-28 text-pink-400/70 group-hover:text-pink-400 transition-colors duration-500" viewBox="0 0 120 120" fill="none">
  <path d="M60 20 C60 20 85 24 85 45 C85 68 60 88 60 88 C60 88 35 68 35 45 C35 24 60 20 60 20 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="currentColor" class="opacity-5" />
  <path d="M60 20 C60 20 85 24 85 45 C85 68 60 88 60 88 C60 88 35 68 35 45 C35 24 60 20 60 20 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
  <rect x="50" y="48" width="20" height="15" rx="3" stroke="currentColor" stroke-width="1.5" />
  <path d="M55 48 V42 A 5 5 0 0 1 65 42 V48" stroke="currentColor" stroke-width="1.5" class="opacity-15 animate-pulse" />
  <circle cx="60" cy="55" r="32" stroke="currentColor" stroke-width="1" stroke-dasharray="5 5" class="opacity-25" />
  <path d="M28 55 H92" stroke="currentColor" stroke-width="1" class="opacity-15 animate-pulse" />
</svg>`
        }
      ],
      qualityStats: [
        { value: '45+', label: 'Happy Clients', subtext: 'Client Satisfaction Focus' },
        { value: '80+', label: 'Projects Delivered', subtext: 'Projects Delivered' },
        { value: '15+', label: 'Technologies Mastered', subtext: 'Technologies Mastered' },
        { value: '100%', label: 'Client Satisfaction Focus', subtext: 'Client Satisfaction Focus' }
      ],
      advantages: [
        {
          title: 'Fast Delivery',
          description: 'Agile development processes that help businesses launch products quickly without compromising quality.',
          icon: 'Clock'
        },
        {
          title: 'Scalable Solutions',
          description: 'Software architectures designed to support future business growth and increasing user demands.',
          icon: 'TrendingUp'
        },
        {
          title: 'Clean Engineering',
          description: 'Well-structured and maintainable codebases that are easy to extend and scale.',
          icon: 'Code2'
        },
        {
          title: 'Long-Term Support',
          description: 'Continuous maintenance, improvements, and technical assistance after launch.',
          icon: 'Headphones'
        }
      ],
      workflow: [
        {
          stepNumber: '01',
          title: 'Discovery',
          description: 'Understanding business goals, challenges, and project requirements.',
          colorClass: 'text-teal-400',
          pingClass: 'bg-teal-500/10 border-teal-500/30'
        },
        {
          stepNumber: '02',
          title: 'Planning',
          description: 'Creating architecture, timelines, and a development roadmap.',
          colorClass: 'text-indigo-400',
          pingClass: 'bg-indigo-500/10 border-indigo-500/30'
        },
        {
          stepNumber: '03',
          title: 'Design & Development',
          description: 'Building user-friendly interfaces and scalable backend systems.',
          colorClass: 'text-cyan-400',
          pingClass: 'bg-cyan-500/10 border-cyan-500/30'
        },
        {
          stepNumber: '04',
          title: 'Testing & Optimization',
          description: 'Ensuring quality, security, and performance before launch.',
          colorClass: 'text-pink-400',
          pingClass: 'bg-pink-500/10 border-pink-500/30'
        },
        {
          stepNumber: '05',
          title: 'Launch & Growth',
          description: 'Deploying, monitoring, and continuously improving your product.',
          colorClass: 'text-amber-400',
          pingClass: 'bg-amber-500/10 border-amber-500/30'
        }
      ],
      storyParagraphs: [
        { text: 'VardhSoft started with a simple belief: software should make a business better, not make its work more complicated.' },
        { text: 'We start by understanding how a business actually operates—its goals, workflows, challenges, and users. From there, we turn real requirements into practical digital products, choosing technology with purpose rather than complexity.' },
        { text: 'Different problems. Different industries. One consistent standard of work.' },
        { text: 'As VardhSoft grows, our focus remains simple: build useful software, learn from every project, and keep raising the standard of our work.' }
      ],
      milestones: [
        {
          badge: 'INSTITUTIONAL SYSTEMS',
          title: 'Panjarapol Animal Shelter CMS',
          description: 'A digital management platform bringing animal records, health information, and shelter operations into one centralized system.',
          tags: 'Next.js, Node.js, MongoDB'
        },
        {
          badge: 'E-COMMERCE DEVELOPMENT',
          title: 'Custom Clothing Store',
          description: "A tailored e-commerce experience built around the brand's products, customer journey, and online sales requirements.",
          tags: 'Shopify API, Liquid, CSS3'
        }
      ],
      missionStatement: 'To help businesses turn complex challenges into clear, useful solutions that improve the way they work and serve their customers.',
      visionStatement: 'To become a technology partner businesses can rely on for the ideas they want to bring to life and the challenges they need to solve.',
      ideFiles: [
        {
          filename: 'about.ts',
          content: `const VardhSoft = {\n\n  purpose:\n    "Solve real business problems",\n\n  approach:\n    "Understand before we build",\n\n  engineering:\n    "Simple. Reliable. Maintainable.",\n\n  mindset:\n    "Build with intent",\n\n  goal:\n    "Software that evolves"\n};`
        },
        {
          filename: 'principles.ts',
          content: `export const principles = [\n  "Problem First, Tech Second",\n  "Direct Developer Access",\n  "Clean & Scalable Code",\n  "Transparent Iteration"\n];`
        },
        {
          filename: 'approach.yml',
          content: `approach:\n  phase_1: "Deconstruct Problem"\n  phase_2: "Architect System"\n  phase_3: "Agile Development"\n  phase_4: "Deploy & Evolve"`
        },
        {
          filename: 'vision.md',
          content: `# Vision & Mission\n\nTurn real business challenges\ninto thoughtful digital products\nbuilt to evolve.`
        }
      ],
      coreValues: [
        {
          title: '01 — Learn by Doing',
          description: 'We believe the best growth comes from real experience. We encourage hands-on learning, curiosity, and opportunities to build practical skills through real projects.',
          bgGrad: 'from-teal-500/10 to-emerald-500/10',
          borderGlow: 'rgba(20, 184, 166, 0.15)',
          icon: 'GraduationCap'
        },
        {
          title: '02 — Take Ownership',
          description: 'We give people the space to take responsibility for their work, make decisions, solve problems, and see their contributions through from idea to delivery.',
          bgGrad: 'from-indigo-500/10 to-blue-500/10',
          borderGlow: 'rgba(99, 102, 241, 0.15)',
          icon: 'ShieldCheck'
        },
        {
          title: '03 — Build Together',
          description: 'Great software is built by people who communicate and collaborate. We share ideas, ask questions, give feedback, and solve problems as a team.',
          bgGrad: 'from-amber-500/10 to-orange-500/10',
          borderGlow: 'rgba(245, 158, 11, 0.15)',
          icon: 'Users'
        },
        {
          title: '04 — Quality Matters',
          description: 'We care about doing things properly — from thoughtful solutions and clean code to testing, documentation, and the details that make products reliable.',
          bgGrad: 'from-cyan-500/10 to-teal-500/10',
          borderGlow: 'rgba(6, 182, 212, 0.15)',
          icon: 'Award'
        },
        {
          title: '05 — A Healthy Work Culture',
          description: 'We believe people do their best work when they have room to learn, contribute, recharge, and maintain a healthy balance between work and life.',
          bgGrad: 'from-rose-500/10 to-orange-500/10',
          borderGlow: 'rgba(244, 63, 94, 0.15)',
          icon: 'HeartPulse'
        }
      ],
      benefits: [
        { title: 'PF & Gratuity', tag: 'Financial Security', description: 'Comprehensive financial savings and long-term security benefits through PF and Gratuity.', icon: 'ShieldCheck' },
        { title: 'Performance Bonus', tag: 'Surprise Bonuses', description: 'Earn regular surprise performance bonuses and recognition for going above and beyond.', icon: 'Award' },
        { title: 'Flexible Hours', tag: 'Work-Life Flow', description: 'Achieve work-life integration with flexible timings and hybrid remote flexibility.', icon: 'Clock' },
        { title: '5-Day Work Week', tag: 'Balanced Rest', description: 'Work hard Monday to Friday. Weekends are reserved for family, rest, and personal hobbies.', icon: 'Calendar' },
        { title: 'Learning & Dev', tag: 'Upskilling Support', description: 'Sponsored courses, certifications, and conferences to accelerate your professional growth.', icon: 'GraduationCap' },
        { title: 'Health Insurance', tag: 'Comprehensive Coverage', description: 'Protect yourself and your dependents with premium medical insurance coverage.', icon: 'HeartPulse' },
        { title: 'Parental Support', tag: 'Paid Leaves', description: 'Support your family transitions with dedicated paid maternity and paternity leave options.', icon: 'Baby' },
        { title: 'Leave Encashment', tag: 'Flexible Leaves', description: 'Enjoy paid leaves with the option to encash unused days at the end of the year.', icon: 'Palmtree' },
        { title: 'Team Outings', tag: 'Fun Activities', description: 'Recharge with team dinners, exciting outings, and annual retreats with your peers.', icon: 'Utensils' },
        { title: 'Workplace Perks', tag: 'Modern Setup', description: 'Work with top-tier equipment (MacBooks/ThinkPads) in a beautiful workspace environment.', icon: 'Briefcase' },
        { title: 'Rewards & Recognition', tag: 'Appreciation', description: 'Continuous spot awards, peer recognition programs, and career milestone celebrations.', icon: 'Gem' },
        { title: 'Gourmet Sprints', tag: 'Free Perks', description: 'Fully stocked pantry with healthy snacks, coffee, and sponsored dinners for late milestones.', icon: 'Coffee' }
      ],
      employeeTestimonials: [
        {
          name: 'Aarav Mehta',
          role: 'Lead Backend Architect',
          review: "Working at VardhSoft has been an incredible experience. The autonomy allowed me to take ownership of complex projects, while the team's engineering standards have pushed me to become a much better developer.",
          initials: 'AM',
          avatarColor: 'from-teal-500 to-emerald-500'
        },
        {
          name: 'Priya Sharma',
          role: 'Senior UI/UX Designer',
          review: "The collaborative culture here is unmatched. Every design is treated with respect and engineered with pixel-perfect accuracy. It's a place where creative and technical minds truly sync.",
          initials: 'PS',
          avatarColor: 'from-indigo-500 to-blue-500'
        },
        {
          name: 'Rahul Verma',
          role: 'QA Lead',
          review: "At VardhSoft, quality is everyone's responsibility. The support from management and colleagues is fantastic, making it easy to drive robust testing standards and deliver reliable products.",
          initials: 'RV',
          avatarColor: 'from-purple-500 to-pink-500'
        }
      ],
      whyTechPillars: [
        {
          title: 'Performance & Speed',
          description: 'Next.js and Node.js consistently deliver fast load times and responsive applications — which directly impacts user retention, SEO ranking, and (for e-commerce) conversion rates.',
          icon: 'Zap',
          color: 'from-teal-500/10 to-emerald-500/10 hover:border-teal-500/20'
        },
        {
          title: 'Scalability From Day One',
          description: "We build on frameworks and databases (Next.js, MongoDB, Vercel) that scale with your business, so a project built for 100 users today doesn't need to be rebuilt from scratch when you hit 10,000.",
          icon: 'Layers',
          color: 'from-indigo-500/10 to-blue-500/10 hover:border-indigo-500/20'
        },
        {
          title: 'One Language, Full Stack',
          description: "By centering our stack around JavaScript/TypeScript (Next.js, React, Node.js), we reduce complexity, speed up development, and make long-term maintenance simpler — there's no context-switching.",
          icon: 'Code2',
          color: 'from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/20'
        },
        {
          title: 'Strong Ecosystem & Support',
          description: 'Every technology in our core stack has a large, active community and strong corporate/open-source backing (Vercel, Meta, MongoDB Inc., Shopify) — meaning long-term reliability.',
          icon: 'ShieldCheck',
          color: 'from-rose-500/10 to-orange-500/10 hover:border-rose-500/20'
        },
        {
          title: 'Platform-Native E-Commerce',
          description: 'For online stores, we build directly on Shopify rather than reinventing e-commerce infrastructure — giving clients a secure, PCI-compliant, battle-tested foundation.',
          icon: 'Cpu',
          color: 'from-amber-500/10 to-yellow-500/10 hover:border-amber-500/20'
        },
        {
          title: 'Flexibility to Match Systems',
          description: 'Our "also working with" layer exists specifically so we can adapt to client environments (PHP, MySQL, AWS, etc.) rather than forcing a complete rebuild for our own convenience.',
          icon: 'Globe',
          color: 'from-cyan-500/10 to-sky-500/10 hover:border-cyan-500/20'
        }
      ],
      detailedWorkflow: [
        { stepNumber: '01', title: 'Discovery & Requirement Gathering', description: 'We start by understanding your actual business problem — not just the feature list, but the workflow, users, and constraints behind it. This includes stakeholder conversations, reviewing any existing systems, and defining clear project scope.' },
        { stepNumber: '02', title: 'Planning & Architecture', description: 'We map out the technical approach: which technologies fit the project, how data will be structured, what the system architecture looks like, and a realistic timeline — before a single line of production code is written.' },
        { stepNumber: '03', title: 'Design (UI/UX)', description: 'For projects requiring custom interfaces, we design in Figma first, giving you a clear visual reference to review and adjust before development begins — so there are no surprises when the build starts.' },
        { stepNumber: '04', title: 'Development (Iterative Builds)', description: 'We build in stages, sharing progress regularly rather than disappearing until "done." This lets you catch misalignments early and keeps the project honest to your actual needs, not our assumptions.' },
        { stepNumber: '05', title: 'Testing & Quality Assurance', description: 'Every build goes through functional testing, cross-browser/device checks, and — for applications with complex logic — automated testing, before anything reaches production.' },
        { stepNumber: '06', title: 'Deployment & Launch', description: 'We handle deployment to production (Vercel, AWS, or your preferred hosting), including domain configuration, environment setup, and final pre-launch checks.' },
        { stepNumber: '07', title: 'Support & Iteration', description: "Launch isn't the finish line. We remain available for bug fixes, refinements, and future feature additions — because software is never really \"done,\" it evolves alongside your business." }
      ],
      faqs: [
        { question: 'Do you only work with the technologies listed here, or can you adapt to our existing systems?', answer: "Our core stack (Next.js, React, Node.js, MongoDB, Shopify) is where we have the deepest, hands-on expertise, but we regularly work within a client's existing environment — including legacy PHP/MySQL systems or specific cloud providers — rather than forcing a full rebuild." },
        { question: 'Why do you focus on Next.js instead of other frameworks like Angular or plain React?', answer: "Next.js gives us server-side rendering, static generation, and API routes in a single framework, which typically means faster load times, better SEO out of the box, and less infrastructure complexity — a strong default for most business web applications, though we'll recommend an alternative if your specific project genuinely calls for one." },
        { question: 'Do you build native mobile apps (iOS/Android)?', answer: "Our primary strength is web and cross-platform development — including Progressive Web Apps and React Native for cross-platform mobile needs. For a fully native, platform-specific app (e.g., deep native iOS/Android integrations), we'll be upfront if that's outside our current core expertise and help you understand what that would require." },
        { question: 'Can you migrate our existing website/store to your stack?', answer: "Yes — migrations (e.g., from a legacy website to Next.js, or from another e-commerce platform to Shopify) are something we can scope and execute, starting with a full audit of your existing system so nothing gets lost in the move." },
        { question: 'Do you handle ongoing maintenance after launch, or just the initial build?', answer: "We offer ongoing support and maintenance post-launch — bug fixes, updates, and new feature development — so you're not left on your own once the project ships." },
        { question: 'How do you decide which database or cloud provider to use for a project?', answer: "It comes down to your data structure and scale needs. Flexible, document-style data (like our Panjarapol project) points us toward MongoDB; strict relational/transactional needs point toward PostgreSQL or MySQL. Hosting follows a similar logic — Vercel for most Next.js apps, AWS when a project needs more granular infrastructure control." }
      ],
      indHeroEyebrow: 'Industries We Serve',
      indHeroHeadline: 'Software That Understands Your Industry, Not Just Your Feature List',
      indHeroSubHeadline: 'Every industry has its own workflows, pressures, and non-negotiables. We build software that reflects that — starting with how your business actually operates, not a generic template stretched across every client we work with.',
      indHeroPrimaryCtaText: 'Find Your Industry',
      indHeroPrimaryCtaLink: '#industries-grid',
      indHeroSecondaryCtaText: 'Start a Conversation',
      indHeroSecondaryCtaLink: '/contact',
      indOverviewContent: 'Generic software solves generic problems — which is precisely why it so often falls short for real businesses. A healthcare provider\'s scheduling needs look nothing like a logistics company\'s fleet tracking needs; an e-commerce brand\'s checkout flow has almost nothing in common with a fintech dashboard\'s reporting requirements. At Vardhsoft, we don\'t treat "custom software" as a one-size-fits-all pitch — we bring an understanding of what actually matters in each industry we work with: where the operational pressure points are, what "good" looks like for that specific type of business, and what can\'t be compromised (data accuracy in healthcare and fintech, conversion and mobile performance in e-commerce, communication clarity in education, real-time visibility in logistics).',
      indOverviewSecondaryText: 'Below is an overview of the industries where our engineering approach applies directly, along with the kinds of problems we solve in each. Click into any industry for a full breakdown of the specific challenges, solutions, and capabilities we bring to that space.',
      indApproachItems: [
        { title: '1. We learn the workflow before we design the software.', description: 'Every industry has operational realities that don\'t show up in a feature list — a shelter\'s daily animal-care routine, a store\'s peak-season traffic patterns, a school\'s term-based administrative cycle. We start there, not with a generic requirements template.' },
        { title: '2. We identify what "can\'t break."', description: 'Every industry has a different non-negotiable: data accuracy for healthcare and fintech, uptime during sales events for e-commerce, communication reliability for education, real-time accuracy for logistics. We design around that priority explicitly, rather than treating all requirements as equally weighted.' },
        { title: '3. We build for the actual users, not just the buyer.', description: 'The person approving a project isn\'t always the person using it daily — shelter staff, store admins, teachers, or warehouse coordinators. We design for real day-to-day usability, since adoption is where most industry software actually fails.' },
        { title: '4. We stay honest about where our depth is.', description: 'We have direct, delivered experience in institutional management systems and e-commerce. In industries where we\'re applying strong general engineering practice rather than years of deep vertical specialization (FinTech, Logistics), we say so — and we\'ll flag when a project needs specialized compliance or regulatory expertise alongside our development work.' }
      ],
      indWhyItMattersItems: [
        { title: 'Off-the-shelf tools optimize for the average business in a category — not yours.', description: 'Generic software is built to serve the broadest possible customer base, which means it\'s rarely a precise fit for any single business. The gaps show up as workarounds, manual patches, and staff frustration.' },
        { title: 'Industry context changes what "good design" even means.', description: 'A checkout flow, a records system, and a fleet dashboard all have completely different definitions of success — conversion, accuracy, and real-time visibility respectively. Software built without that context optimizes for the wrong thing.' },
        { title: 'Compliance and risk profiles differ by industry.', description: 'Healthcare and fintech carry data-sensitivity and regulatory considerations that a generic development approach won\'t naturally account for. We build with those considerations front-of-mind rather than retrofitted after the fact.' },
        { title: 'Adoption depends on fitting real workflows.', description: 'Software that ignores how an industry\'s frontline staff actually work — regardless of how technically sound it is — tends to get quietly abandoned. Industry-aware design is what makes the difference between a system that\'s used and one that\'s tolerated.' }
      ],
      indProcessSteps: [
        { stepNumber: '01', title: 'Discover', description: 'Understand your specific industry context, workflow, and non-negotiables.' },
        { stepNumber: '02', title: 'Plan', description: 'Define scope, architecture, and technology approach suited to your industry\'s requirements.' },
        { stepNumber: '03', title: 'Design', description: 'UI/UX built around your actual users, reviewed with you before development starts.' },
        { stepNumber: '04', title: 'Develop', description: 'Iterative builds with regular progress visibility.' },
        { stepNumber: '05', title: 'Test', description: 'Functional, security, and (where relevant) compliance-aware testing appropriate to your industry.' },
        { stepNumber: '06', title: 'Launch', description: 'Deployment with attention to your industry\'s uptime and reliability expectations.' },
        { stepNumber: '07', title: 'Support', description: 'Ongoing maintenance, particularly critical in industries like healthcare and fintech where systems can\'t afford to go unmaintained.' }
      ],
      indCtaHeadline: "Don't See Your Exact Industry Listed? Let's Talk Anyway.",
      indCtaSubText: "Our approach is built around understanding your specific business first — industry experience informs how we work, but it's never a substitute for actually listening to how your business runs.",
      indCtaPrimaryBtnText: 'Find Your Industry',
      indCtaSecondaryBtnText: 'Schedule a Consultation',
      indCtaMicroLine: "Tell us about your business — we'll tell you honestly how we can help.",
    }
  })
  console.log('  ✅ Website Settings (Global) seeded')

  console.log('\n🎉 Database seed completed successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
