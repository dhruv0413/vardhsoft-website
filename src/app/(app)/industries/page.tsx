import React from 'react'
import type { Metadata } from 'next'
import type { Industry } from '../../../../payload-types'
import { Sparkles, ArrowRight, Activity, ShoppingCart, GraduationCap, CreditCard, Cpu, Truck, HelpCircle, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/animations/ScrollReveal'
import HoverTilt from '@/components/animations/HoverTilt'
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('industries', {
    title: 'Industries We Serve | VardhSoft',
    description: 'VardhSoft builds industry-specific software for healthcare, fintech, e-commerce, education, SaaS, and logistics. Discover how we solve real business problems across sectors.',
  })
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  ShoppingCart,
  GraduationCap,
  CreditCard,
  Cpu,
  Truck,
}

const GLOW_COLORS: Record<string, string> = {
  healthcare: 'rgba(16, 185, 129, 0.15)', // Emerald
  'e-commerce': 'rgba(244, 63, 94, 0.15)', // Rose
  education: 'rgba(99, 102, 241, 0.15)',   // Indigo
  fintech: 'rgba(20, 184, 166, 0.15)',     // Teal
  saas: 'rgba(139, 92, 246, 0.15)',        // Violet
  logistics: 'rgba(245, 158, 11, 0.15)',   // Amber
}

const TEXT_COLORS: Record<string, string> = {
  healthcare: 'text-emerald-400',
  'e-commerce': 'text-rose-400',
  education: 'text-indigo-400',
  fintech: 'text-teal-400',
  saas: 'text-violet-400',
  logistics: 'text-amber-400',
}

const BORDER_HOVER: Record<string, string> = {
  healthcare: 'group-hover:border-emerald-500/30',
  'e-commerce': 'group-hover:border-rose-500/30',
  education: 'group-hover:border-indigo-500/30',
  fintech: 'group-hover:border-teal-500/30',
  saas: 'group-hover:border-violet-500/30',
  logistics: 'group-hover:border-amber-500/30',
}

const TRUST_TAGS: Record<string, string> = {
  healthcare: 'Panjarapol Animal Shelter CMS experience',
  'e-commerce': 'Custom Shopify Clothing Store launch experience',
}

export default async function IndustriesHubPage() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'website-settings',
  })
  
  const industriesRes = await payload.find({
    collection: 'industries',
    limit: 100,
    sort: 'title',
  })

  // Normalize settings or fallback to static defaults
  const indHeroEyebrow = settings.indHeroEyebrow || 'Industries We Serve'
  const indHeroHeadline = settings.indHeroHeadline || 'Software That Understands Your Industry, Not Just Your Feature List'
  const indHeroSubHeadline = settings.indHeroSubHeadline || 'Every industry has its own workflows, pressures, and non-negotiables. We build software that reflects that — starting with how your business actually operates, not a generic template stretched across every client we work with.'
  const indHeroPrimaryCtaText = settings.indHeroPrimaryCtaText || 'Find Your Industry'
  const indHeroPrimaryCtaLink = settings.indHeroPrimaryCtaLink || '#industries-grid'
  const indHeroSecondaryCtaText = settings.indHeroSecondaryCtaText || 'Start a Conversation'
  const indHeroSecondaryCtaLink = settings.indHeroSecondaryCtaLink || '/contact'
  
  const indOverviewContent = settings.indOverviewContent || ''
  const indOverviewSecondaryText = settings.indOverviewSecondaryText || ''
  const indApproachItems = settings.indApproachItems || []
  const indWhyItMattersItems = settings.indWhyItMattersItems || []
  const indProcessSteps = settings.indProcessSteps || []
  const indFaqs = settings.indFaqs || []
  const indCtaHeadline = settings.indCtaHeadline || ''
  const indCtaSubText = settings.indCtaSubText || ''
  const indCtaPrimaryBtnText = settings.indCtaPrimaryBtnText || ''
  const indCtaSecondaryBtnText = settings.indCtaSecondaryBtnText || ''
  const indCtaMicroLine = settings.indCtaMicroLine || ''

  const industriesList = industriesRes.docs.map((doc: Industry) => {
    return {
      title: doc.title,
      slug: doc.slug,
      icon: doc.icon || 'Cpu',
      overview: doc.overview || '',
      themeColor: doc.themeColor || 'teal',
      glow: GLOW_COLORS[doc.slug] || 'rgba(20, 184, 166, 0.15)',
      textClass: TEXT_COLORS[doc.slug] || 'text-teal-400',
      borderHover: BORDER_HOVER[doc.slug] || 'group-hover:border-teal-500/30',
      trustTag: TRUST_TAGS[doc.slug] || null,
    }
  })

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
              {indHeroEyebrow}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent tracking-tight leading-tight">
              {indHeroHeadline}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {indHeroSubHeadline}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.4} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={indHeroPrimaryCtaLink}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer"
            >
              {indHeroPrimaryCtaText}
            </Link>
            <Link
              href={indHeroSecondaryCtaLink}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer"
            >
              {indHeroSecondaryCtaText}
            </Link>
          </ScrollReveal>
        </div>

        {/* 2. Industries Overview Section */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[80px]" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Tailored Approaches
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                {indOverviewContent}
              </p>
            </div>
            <div className="lg:col-span-6 lg:pl-8 lg:border-l border-white/5">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {indOverviewSecondaryText}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Industries We Serve Grid */}
        <div id="industries-grid" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Industry Segments</h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Explore how we translate software excellence into specific workflows and vertical frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((industry, index) => {
              const IconComp = ICON_MAP[industry.icon] || Cpu
              
              return (
                <ScrollReveal
                  key={industry.slug}
                  variant="fade-up"
                  delay={0.1 + (index % 3) * 0.1}
                  duration={0.7}
                >
                  <HoverTilt className="h-full" glowColor={industry.glow}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="rounded-2xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/40 transition-colors duration-300 flex flex-col justify-between overflow-hidden group h-full relative block cursor-pointer"
                    >
                      <div className="p-8">
                        <div className={`w-11 h-11 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center ${industry.textClass} shadow-lg mb-6 group-hover:border-white/20 transition-colors duration-300`}>
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 transition-colors">
                          {industry.title}
                        </h3>
                        {industry.trustTag && (
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-4 uppercase tracking-wide">
                            {industry.trustTag}
                          </div>
                        )}
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mt-2 line-clamp-4">
                          {industry.overview}
                        </p>
                      </div>
                      <div className="px-8 pb-8">
                        <span
                          className={`text-xs font-bold ${industry.textClass} inline-flex items-center gap-1.5 border-b border-transparent group-hover:border-current transition-all pb-0.5`}
                        >
                          Explore industry approach
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

        {/* 4. How We Approach Every Industry */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How We Approach Every Industry</h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              We apply consistent, transparent, and honest workflows to build systems that perfectly align with your operational realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {indApproachItems.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-teal-300 mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Why Industry-Specific Software Matters */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Industry-Specific Software Matters</h2>
            <p className="mt-4 text-slate-400 text-base">
              A bespoke application respects your actual users and minimizes overhead from standard, bloated alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {indWhyItMattersItems.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-slate-900/10 hover:border-indigo-500/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Development Process Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Engineering Process</h2>
            <p className="mt-4 text-slate-400 text-base">
              From requirement discovery to deployment and SLAs support — how we build your custom software.
            </p>
          </div>

          <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 space-y-12">
            {indProcessSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-teal-500/50 flex items-center justify-center text-[10px] font-bold text-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
                  {step.stepNumber}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. FAQs Section */}
        <div className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-flex items-center gap-2.5 justify-center">
              <HelpCircle className="h-8 w-8 text-teal-400" />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="rounded-2xl border border-white/5 bg-slate-900/10 p-6 sm:p-10">
            <ServiceFaqAccordion faqs={indFaqs} />
          </div>
        </div>

        {/* 8. Final CTA Section */}
        <div className="rounded-3xl border border-teal-500/20 bg-gradient-to-b from-slate-900/50 to-slate-950 p-8 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />
          <ScrollReveal variant="scale-in" duration={0.6}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              {indCtaHeadline}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {indCtaSubText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {indCtaPrimaryBtnText}
              </Link>
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {indCtaSecondaryBtnText}
              </Link>
            </div>
            <div className="mt-8 text-xs text-slate-500">
              {indCtaMicroLine}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  )
}
