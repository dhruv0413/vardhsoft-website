import React from 'react'
import type { Metadata } from 'next'
import { Sparkles, ArrowRight, Cpu, Code, Smartphone, Palette, Cloud, Sparkles as SparklesIcon, ShoppingCart, ShieldCheck, Activity, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/animations/ScrollReveal'
import HoverTilt from '@/components/animations/HoverTilt'
import { mainServicesPageData } from '@/data/servicesData'
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('services', {
    title: 'Software Development Services | VardhSoft',
    description: "Explore VardhSoft's full range of custom software development services — web apps, mobile apps, cloud & DevOps, AI automation, UI/UX design, and more.",
  })
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6 text-teal-400" />,
  Code: <Code className="h-6 w-6 text-blue-400" />,
  Smartphone: <Smartphone className="h-6 w-6 text-violet-400" />,
  Palette: <Palette className="h-6 w-6 text-purple-400" />,
  Cloud: <Cloud className="h-6 w-6 text-pink-400" />,
  Sparkles: <SparklesIcon className="h-6 w-6 text-cyan-400" />,
  ShoppingCart: <ShoppingCart className="h-6 w-6 text-yellow-400" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
  Activity: <Activity className="h-6 w-6 text-indigo-400" />,
}

const getGroupHoverColor = (colorClass: string) => {
  const map: Record<string, string> = {
    'text-teal-400': 'group-hover:text-teal-400',
    'text-blue-400': 'group-hover:text-blue-400',
    'text-violet-400': 'group-hover:text-violet-400',
    'text-purple-400': 'group-hover:text-purple-400',
    'text-pink-400': 'group-hover:text-pink-400',
    'text-cyan-400': 'group-hover:text-cyan-400',
    'text-yellow-400': 'group-hover:text-yellow-400',
    'text-emerald-400': 'group-hover:text-emerald-400',
    'text-indigo-400': 'group-hover:text-indigo-400',
    'text-rose-400': 'group-hover:text-rose-400',
    'text-amber-400': 'group-hover:text-amber-400',
  }
  return map[colorClass] || 'group-hover:text-teal-400'
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

export default async function ServicesPage() {
  let list: any[] = []

  try {
    const payload = await getPayload({ config })
    const servicesRes = await payload.find({
      collection: 'services',
      limit: 100,
      sort: 'title',
    })

    list = servicesRes.docs.map((doc) => {
      const theme = getThemeConfig(doc.themeColor || 'teal')
      return {
        slug: doc.slug,
        title: doc.title,
        icon: doc.icon || 'Code',
        shortDescription: doc.shortDescription || '',
        theme,
      }
    })
  } catch (err) {
    console.error('Failed to load services from Payload:', err)
  }

  const pageData = mainServicesPageData

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen py-24">
      {/* Background Grids & Ambient Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 1. Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              {pageData.hero.eyebrow}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent tracking-tight leading-tight">
              {pageData.hero.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {pageData.hero.subHeadline}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.4} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={pageData.hero.primaryCta.link}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              {pageData.hero.primaryCta.label}
            </Link>
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              {pageData.hero.secondaryCta.label}
            </Link>
          </ScrollReveal>
        </div>

        {/* 2. Services Overview Section */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[80px]" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Our Capabilities
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                {pageData.overview.content}
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                {pageData.overview.whatWeDo}
              </p>
            </div>
            <div className="lg:col-span-6 space-y-6 lg:pl-8 lg:border-l border-white/5">
              <div>
                <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">Who We Help</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{pageData.overview.whoWeHelp}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">Problems We Solve</h3>
                <ul className="space-y-2">
                  {pageData.overview.problemsSolved.map((prob, i) => (
                    <li key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed flex items-start gap-2.5">
                      <span className="text-teal-400 shrink-0 mt-1.5">•</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Our Services Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Software Services Menu</h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Explore our core capabilities, structured to scale your products and optimize operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((service, index) => {
              const theme = service.theme
              
              return (
                <ScrollReveal
                  key={service.slug}
                  variant="fade-up"
                  delay={0.1 + (index % 3) * 0.1}
                  duration={0.7}
                >
                  <HoverTilt className="h-full" glowColor={theme.glow}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="rounded-2xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/40 transition-colors duration-300 flex flex-col justify-between overflow-hidden group h-full relative block cursor-pointer"
                    >
                      <div className="p-8">
                        <div className={`w-11 h-11 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center ${theme.text} shadow-lg mb-6 group-hover:border-white/20 transition-colors duration-300`}>
                          {ICON_MAP[service.icon] ?? <Code className="h-5 w-5" />}
                        </div>
                        <h3 className={`text-xl font-bold text-white mb-4 transition-colors ${getGroupHoverColor(theme.text)}`}>
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                          {service.shortDescription}
                        </p>
                      </div>
                      <div className="px-8 pb-8">
                        <span
                          className={`text-xs font-bold ${theme.text} inline-flex items-center gap-1.5 border-b border-transparent group-hover:border-current transition-all pb-0.5`}
                        >
                          Explore service details
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </HoverTilt>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* 4. Industries We Serve Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{pageData.industries.title}</h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              {pageData.industries.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pageData.industries.items.map((ind, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 hover:border-white/10 transition-colors duration-300">
                <h3 className="text-lg font-bold text-white mb-3">{ind.name}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-slate-950/40 text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed">
              {pageData.industries.outro}
            </p>
          </div>
        </div>

        {/* 5. Why Choose Us Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Choose Vardhsoft</h2>
            <p className="mt-4 text-slate-400 text-base">
              A partnership focused on clean execution, clear progress, and long-term codebase viability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageData.whyChooseUs.map((choose, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm hover:border-teal-500/20 transition-all duration-300">
                <div className="text-teal-400 text-lg font-bold mb-4">{`0${i + 1}`}</div>
                <h3 className="text-lg font-bold text-white mb-3">{choose.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{choose.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Development Process Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Engineering Process</h2>
            <p className="mt-4 text-slate-400 text-base">
              From requirement lookup to production deploy and support — how we build your custom software.
            </p>
          </div>

          <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 space-y-12">
            {pageData.process.map((p, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-teal-500/50 flex items-center justify-center text-[10px] font-bold text-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Engagement Models Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{pageData.engagementModels.title}</h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              {pageData.engagementModels.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pageData.engagementModels.items.map((model, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{model.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. FAQs Section */}
        <div className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-flex items-center gap-2.5 justify-center">
              <HelpCircle className="h-8 w-8 text-teal-400" />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="rounded-2xl border border-white/5 bg-slate-900/10 p-6 sm:p-10">
            <ServiceFaqAccordion faqs={pageData.faqs} />
          </div>
        </div>

        {/* 9. Final CTA Section */}
        <div className="rounded-3xl border border-teal-500/20 bg-gradient-to-b from-slate-900/50 to-slate-950 p-8 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />
          <ScrollReveal variant="scale-in" duration={0.6}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              {pageData.cta.headline}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {pageData.cta.subText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
              >
                {pageData.cta.primaryButton}
              </Link>
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                {pageData.cta.secondaryButton}
              </Link>
            </div>
            <div className="mt-8 text-xs text-slate-500">
              {pageData.cta.microLine}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  )
}
