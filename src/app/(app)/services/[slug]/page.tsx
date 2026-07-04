import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  Sparkles, Code, Server, FileText, Cloud, Palette, Database, 
  ArrowRight, CheckCircle2, Zap, Cpu, ShieldCheck, Star, 
  ShoppingCart, Activity, Smartphone, HelpCircle
} from 'lucide-react'
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import HoverTilt from '@/components/animations/HoverTilt'

export const dynamic = 'force-dynamic'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Code: Code,
  Server: Server,
  FileText: FileText,
  Cloud: Cloud,
  Palette: Palette,
  Database: Database,
  Zap: Zap,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Star: Star,
  ShoppingCart: ShoppingCart,
  Activity: Activity,
  Smartphone: Smartphone,
  HelpCircle: HelpCircle,
}

const getThemeConfig = (color: string) => {
  const map: Record<string, any> = {
    teal: {
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
    blue: {
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
    violet: {
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
    purple: {
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
    pink: {
      glow: "rgba(236, 72, 153, 0.15)",
      text: "text-pink-400",
      border: "border-pink-500",
      bg: "bg-pink-500/10",
      borderPulse: "border-pink-500/20",
      bulletBg: "bg-pink-500",
      heroPrimaryBtn: "from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-pink-500/20 hover:shadow-pink-500/30",
      ctaPrimaryBtn: "from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 shadow-pink-500/10 hover:shadow-pink-500/20",
      pricingPopularBorder: "border-pink-500",
      pricingPopularBadge: "bg-pink-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(236, 72, 153, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(236, 72, 153, 0.3)] group-hover:bg-pink-500/10",
      hoverBorder: "hover:border-pink-500",
      groupHoverBorder: "group-hover:border-pink-500",
    },
    cyan: {
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
    yellow: {
      glow: "rgba(234, 179, 8, 0.15)",
      text: "text-yellow-400",
      border: "border-yellow-500",
      bg: "bg-yellow-500/10",
      borderPulse: "border-yellow-500/20",
      bulletBg: "bg-yellow-500",
      heroPrimaryBtn: "from-yellow-500 to-indigo-500 hover:from-yellow-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-yellow-500/20 hover:shadow-yellow-500/30",
      ctaPrimaryBtn: "from-yellow-500 to-indigo-500 hover:from-yellow-600 hover:to-indigo-600 shadow-yellow-500/10 hover:shadow-yellow-500/20",
      pricingPopularBorder: "border-yellow-500",
      pricingPopularBadge: "bg-yellow-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(234, 179, 8, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(234, 179, 8, 0.3)] group-hover:bg-yellow-500/10",
      hoverBorder: "hover:border-yellow-500",
      groupHoverBorder: "group-hover:border-yellow-500",
    },
    emerald: {
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
    indigo: {
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
    rose: {
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
    amber: {
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
    }
  }
  return map[color] || map.teal
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  try {
    const payload = await getPayload({ config })
    const { docs: services } = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      depth: 1,
    })
    const dbService = services[0]
    if (dbService) {
      return {
        title: dbService.seoTitle || `${dbService.title} | VardhSoft`,
        description: dbService.seoDescription || dbService.shortDescription,
      }
    }
  } catch (e) {
    console.error('Error generating metadata:', e)
  }

  return {
    title: 'Service Details | VardhSoft',
    description: 'Bespoke custom software and web applications.',
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const payload = await getPayload({ config })
  const { docs: services } = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    depth: 2,
  })
  const dbService = services[0]
  if (!dbService) {
    notFound()
  }
  
  // Convert dbService format to match ServiceDetail interface where possible
  const mappedService = {
    slug: dbService.slug,
    title: dbService.title,
    icon: dbService.icon || 'Code',
    shortDescription: dbService.shortDescription || '',
    theme: getThemeConfig(dbService.themeColor || 'teal'),
    hero: {
      badge: dbService.heroSection?.badge || 'Services',
      title: dbService.heroSection?.heading || dbService.title,
      subText: dbService.heroSection?.description || dbService.shortDescription || '',
      primaryCtaText: dbService.heroSection?.primaryCtaText || 'Get Started',
      primaryCtaLink: '#inquire',
      secondaryCtaText: dbService.heroSection?.secondaryCtaText || 'Contact Us',
      secondaryCtaLink: '#inquire',
    },
    overview: dbService.overview?.whatIsIt || '',
    problemsSolved: dbService.overview?.problemsItSolves ? dbService.overview.problemsItSolves.split('\n').filter(Boolean).map((p: string) => p.trim().replace(/^[•-]\s*/, '')) : [],
    subServices: (dbService.subServices || []).map((s: any) => ({ title: s.title, description: s.description })),
    features: [],
    technologies: [],
    process: (dbService.process?.steps || []).map((s: any) => s.title),
    whyChooseUs: (dbService.whyChooseUs?.items || []).map((i: any) => ({ title: i.title, description: i.description })),
    faqs: (dbService.faqs || []).map((f: any) => ({ question: f.question, answer: f.answer })),
    cta: {
      headline: dbService.finalCta?.title || '',
      subText: dbService.finalCta?.description || '',
      primaryBtn: dbService.finalCta?.primaryCtaText || 'Get Started',
      secondaryBtn: dbService.finalCta?.secondaryCtaText || 'Contact Us',
    }
  }

  return renderServiceLayout(mappedService)
}

function renderServiceLayout(service: any) {
  const theme = service.theme
  const IconComponent = ICON_MAP[service.icon] ?? Code

  const getStepDescription = (title: string) => {
    const t = title.toLowerCase()
    if (t.includes('discover') || t.includes('audit') || t.includes('research')) {
      return 'Analyzing operational workflows, existing architecture, and compliance requirements to map out the solution blueprint.'
    }
    if (t.includes('design') || t.includes('wireframe') || t.includes('architecture')) {
      return 'Creating interactive mockups, high-fidelity user interfaces, and robust systems architecture blueprints.'
    }
    if (t.includes('develop') || t.includes('code') || t.includes('engine')) {
      return 'Writing clean, typed modular code and assembling APIs, database schemas, and external integrations.'
    }
    if (t.includes('test') || t.includes('qa') || t.includes('quality') || t.includes('review')) {
      return 'Running comprehensive regression test suites, cross-device QA audits, and client feedback cycles.'
    }
    if (t.includes('deploy') || t.includes('launch') || t.includes('release')) {
      return 'Deploying production builds to optimized cloud nodes under secure GitOps pipelines.'
    }
    if (t.includes('support') || t.includes('maintenance') || t.includes('monitoring')) {
      return 'Providing post-launch operational support, security updates, uptime checks, and backup scheduling.'
    }
    return 'Executing standard engineering phases under our structured development lifecycle.'
  }

  const contactFormSec = {
    title: 'Start Your Project',
    subtitle: 'Fill out the form below and an engineer will contact you shortly.',
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
          <span className="text-slate-600">/</span>
          <Link href="/services" className="hover:text-teal-400 transition-colors">Services</Link>
          <span className="text-slate-600">/</span>
          <span className={`${theme.text} truncate max-w-[200px]`}>{service.title}</span>
        </nav>

        {/* 1. Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-white/5 overflow-hidden">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-up" delay={0.1} duration={0.6}>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${theme.borderPulse} ${theme.bg} ${theme.text} text-xs font-bold uppercase tracking-wider`}>
                <IconComponent className="h-4 w-4" />
                <span>{service.hero.badge}</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-up" delay={0.2} duration={0.7}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent leading-tight">
                {service.hero.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3} duration={0.7}>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.hero.subText}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.4} duration={0.7}>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href={service.hero.primaryCtaLink === '/contact' || service.hero.primaryCtaLink === '#inquire' ? `/contact?service=${service.slug}` : service.hero.primaryCtaLink}
                  className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r ${theme.heroPrimaryBtn} text-white shadow-lg ${theme.heroPrimaryShadow} transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center`}
                >
                  {service.hero.primaryCtaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                {service.hero.secondaryCtaText.toLowerCase().includes('schedule') || service.hero.secondaryCtaLink === '/contact' || service.hero.secondaryCtaLink === '#inquire' ? (
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-200 text-center"
                  >
                    {service.hero.secondaryCtaText}
                  </Link>
                ) : (
                  <Link
                    href={service.hero.secondaryCtaLink}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-200 text-center"
                  >
                    {service.hero.secondaryCtaText}
                  </Link>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Icon Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ScrollReveal variant="fade-left" delay={0.3} duration={0.8}>
              <HoverTilt maxTilt={5} scale={1.02} glowColor={theme.glow}>
                <div className="relative w-72 h-72 rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
                  <div className={`w-24 h-24 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center ${theme.text} mb-4 shadow-lg group-hover:border-white/20 transition-all duration-300`}>
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">VardhSoft service</span>
                </div>
              </HoverTilt>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. Service Overview */}
        <section className="mb-24 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className={`text-xs font-extrabold uppercase tracking-[0.2em] ${theme.text}`}>
              Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              How We Approach This Service
            </h2>
            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              {service.overview}
            </p>
          </div>

          {/* Problems Solved */}
          {service.problemsSolved && service.problemsSolved.length > 0 && (
            <ScrollReveal variant="scale-in" delay={0.2}>
              <div className="max-w-5xl mx-auto border border-white/5 bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl -z-10" />
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-8">
                  Problems We Solve
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {service.problemsSolved.map((problem: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 text-xs font-bold shrink-0 font-mono">
                        {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-0.5 font-normal">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </section>

        {/* 3. Sub-Services / Offerings Grid */}
        {service.subServices && service.subServices.length > 0 && (
          <section className="mb-24 space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className={`text-xs font-extrabold uppercase tracking-[0.2em] ${theme.text}`}>
                Sub-Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Capabilities Under {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.subServices.map((sub: any, idx: number) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-white/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{sub.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{sub.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Features & Tech Badges */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          {/* Key Features */}
          {service.features && service.features.length > 0 && (
            <div className="p-8 rounded-2xl border border-white/5 bg-slate-900/20 space-y-6">
              <h3 className="text-xl font-bold text-white">Key Features</h3>
              <ul className="space-y-4">
                {service.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 ${theme.text} shrink-0 mt-0.5`} />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="p-8 rounded-2xl border border-white/5 bg-slate-900/20 space-y-6">
              <h3 className="text-xl font-bold text-white">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className={`px-3.5 py-1.5 rounded-lg border border-white/5 bg-slate-950 text-xs font-bold text-slate-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 5. Process Timeline */}
        {service.process && service.process.length > 0 && (
          <section className="mb-32 space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className={`text-xs font-extrabold uppercase tracking-[0.2em] ${theme.text}`}>
                Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Service Delivery Process
              </h2>
            </div>

            <div className="relative max-w-5xl mx-auto pl-6 md:pl-12 space-y-8">
              {/* Vertical timeline track line */}
              <div className="absolute left-[31px] md:left-[47px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-500/50 via-indigo-500/30 to-transparent" />

              {service.process.map((step: any, idx: number) => {
                const stepNum = idx + 1;
                const formattedNum = stepNum < 10 ? `0${stepNum}` : `${stepNum}`;
                
                const title = typeof step === 'string' ? step : step.title;
                const description = typeof step === 'string' ? '' : step.description;
                
                return (
                  <div key={idx} className="relative flex items-start gap-6 md:gap-10 group">
                    {/* Horizontal Connector Line */}
                    <div className="absolute left-[8px] md:left-[24px] top-6 w-4 md:w-6 h-[1px] bg-white/10 group-hover:bg-teal-500/30 transition-colors" />

                    {/* Timeline Node */}
                    <div className="relative z-10 shrink-0 mt-3">
                      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-950 border-2 ${theme.border} flex items-center justify-center text-xs md:text-sm font-black ${theme.text} shadow-lg shadow-black group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all duration-300`}>
                        {formattedNum}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 p-6 rounded-2xl border border-white/5 bg-slate-900/10 backdrop-blur-sm group-hover:border-white/10 group-hover:bg-slate-900/25 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                          {title}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md">
                          Phase {formattedNum}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {description || getStepDescription(title)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 6. Why Choose Us (Custom list) */}
        {service.whyChooseUs && service.whyChooseUs.length > 0 && (
          <section className="mb-24 space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Choose Vardhsoft for This Service</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {service.whyChooseUs.map((choose: any, idx: number) => (
                <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 hover:border-white/10 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{choose.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{choose.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="mb-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white inline-flex items-center gap-2.5 justify-center">
                <HelpCircle className={`h-7 w-7 ${theme.text}`} />
                Frequently Asked Questions
              </h2>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/10 p-6 sm:p-10">
              <ServiceFaqAccordion faqs={service.faqs} />
            </div>
          </section>
        )}

        {/* 8. CTA Section */}
        <section className="rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/40 to-slate-950 p-8 sm:p-16 text-center relative overflow-hidden mb-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] -z-10" />
          <ScrollReveal variant="scale-in" duration={0.6}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              {service.cta.headline}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {service.cta.subText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r ${theme.heroPrimaryBtn} text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5`}
              >
                {service.cta.primaryBtn}
              </Link>
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                {service.cta.secondaryBtn}
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </div>
  )
}
