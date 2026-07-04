import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Industry, Technology } from '../../../../../payload-types'
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle, Activity, ShoppingCart, GraduationCap, CreditCard, Cpu, Truck, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/animations/ScrollReveal'
import HoverTilt from '@/components/animations/HoverTilt'
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

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
  healthcare: 'hover:border-emerald-500/30',
  'e-commerce': 'hover:border-rose-500/30',
  education: 'hover:border-indigo-500/30',
  fintech: 'hover:border-teal-500/30',
  saas: 'hover:border-violet-500/30',
  logistics: 'hover:border-amber-500/30',
}

const BUTTON_THEMES: Record<string, string> = {
  healthcare: 'from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/20',
  'e-commerce': 'from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-rose-500/20',
  education: 'from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 shadow-indigo-500/20',
  fintech: 'from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 shadow-teal-500/20',
  saas: 'from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/20',
  logistics: 'from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 shadow-amber-500/20',
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const res = await payload.find({
    collection: 'industries',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (res.docs.length === 0) {
    return { title: 'Industry Not Found | VardhSoft' }
  }
  const doc = res.docs[0]
  const overview = (doc.overview as string) || ''
  const description = overview.length > 155 ? overview.slice(0, 152) + '...' : overview
  return {
    title: `${doc.title} Software Solutions | VardhSoft`,
    description: description || `VardhSoft delivers custom ${doc.title.toLowerCase()} software solutions tailored to your industry\'s specific challenges.`,
  }
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params
  
  const payload = await getPayload({ config })
  const res = await payload.find({
    collection: 'industries',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  if (res.docs.length === 0) {
    notFound()
  }

  const doc = res.docs[0] as Industry
  
  const IconComp = ICON_MAP[doc.icon] || Cpu
  const glowColor = GLOW_COLORS[doc.slug] || 'rgba(20, 184, 166, 0.15)'
  const textClass = TEXT_COLORS[doc.slug] || 'text-teal-400'
  const borderHover = BORDER_HOVER[doc.slug] || 'hover:border-teal-500/30'
  const btnTheme = BUTTON_THEMES[doc.slug] || BUTTON_THEMES.fintech

  const technologiesList = (doc.technologies ?? []).map((t) => {
    const tech = t as Technology
    return {
      name: tech.name ?? 'Tech',
      description: tech.description ?? '',
    }
  })

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen py-24">
      {/* Background Grids & Ambient Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-900/10 rounded-full blur-[120px] -z-10" style={{ backgroundColor: glowColor }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/industries" className="text-slate-400 hover:text-white text-sm font-semibold inline-flex items-center gap-1.5 transition-colors">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Industries We Serve
          </Link>
        </div>

        {/* 1. Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/5 bg-slate-900/45 ${textClass} text-xs font-bold uppercase tracking-wider mb-5`}>
              <IconComp className="h-4 w-4" />
              {doc.title} Software
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent tracking-tight leading-tight">
              {doc.hero?.title || doc.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {doc.hero?.subText || ''}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.4} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={doc.hero?.primaryCtaLink || '/contact'}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r ${btnTheme} text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer`}
            >
              {doc.hero?.primaryCtaText || 'Start Your Project'}
            </Link>
            <Link
              href={doc.hero?.secondaryCtaLink || '/book'}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer"
            >
              {doc.hero?.secondaryCtaText || 'Talk to Our Team'}
            </Link>
          </ScrollReveal>
        </div>

        {/* 2. Industry Overview */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-md relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Industry Overview
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {doc.overview}
          </p>
        </div>

        {/* 3. Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Challenges */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/5 bg-slate-900/20">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-rose-500 rounded-full" />
              Challenges We Solve
            </h3>
            <div className="space-y-6">
              {(doc.challenges ?? []).map((challenge, i) => (
                <div key={i} className="group border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-white font-bold mb-1.5 transition-colors group-hover:text-rose-400">{challenge.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/5 bg-slate-900/20">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
              Solutions We Offer
            </h3>
            <div className="space-y-6">
              {(doc.solutions ?? []).map((solution, i) => (
                <div key={i} className="group border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-white font-bold mb-1.5 transition-colors group-hover:text-teal-400">{solution.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Our Services for this Industry */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Services for {doc.title}</h2>
            <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
              Our targeted capabilities designed to modernize workflows and secure administrative operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {(doc.services ?? []).map((service, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-slate-900/10">
                <CheckCircle2 className={`h-5 w-5 ${textClass} shrink-0 mt-0.5`} />
                <span className="text-slate-300 text-sm sm:text-base leading-relaxed">{service.bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Key Features & Capabilities */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Key Features & Capabilities</h2>
            <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
              We construct software architectures focused on security, automation, and real-time visualization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(doc.features ?? []).map((feature, i) => (
              <div key={i} className={`p-6 rounded-2xl border border-white/5 bg-slate-900/10 transition-colors duration-300 ${borderHover}`}>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Technologies We Use */}
        {technologiesList.length > 0 && (
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Technologies We Use</h2>
              <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
                Modern, secure frameworks chosen for transaction integrity and frontend execution speed.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {technologiesList.map((tech, i) => (
                <div key={i} className="px-5 py-3 rounded-xl border border-white/10 bg-slate-900/50 flex flex-col items-center">
                  <span className="text-white font-bold text-sm sm:text-base">{tech.name}</span>
                  {tech.description && (
                    <span className="text-[10px] text-slate-500 mt-1 max-w-[200px] text-center hidden sm:block">{tech.description}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. Why Choose Us */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Choose Vardhsoft</h2>
            <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
              We treat clean code, audit trails, and direct communication as core pillars of every partnership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(doc.whyChooseUs ?? []).map((choose, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm transition-all duration-300">
                <div className="text-teal-400 text-lg font-bold mb-4">{`0${i + 1}`}</div>
                <h3 className="text-lg font-bold text-white mb-3">{choose.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{choose.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Development Process Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Engineering Process</h2>
            <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
              Our structured approach ensures workflow fidelity and security.
            </p>
          </div>
          <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 space-y-12">
            {(doc.process ?? []).map((step, i) => (
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

        {/* 9. FAQs Section */}
        <div className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-flex items-center gap-2.5 justify-center">
              <HelpCircle className="h-8 w-8 text-teal-400" />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="rounded-2xl border border-white/5 bg-slate-900/10 p-6 sm:p-10">
            <ServiceFaqAccordion faqs={doc.faqs ?? []} />
          </div>
        </div>

        {/* 10. Final CTA Section */}
        <div className="rounded-3xl border border-teal-500/20 bg-gradient-to-b from-slate-900/50 to-slate-950 p-8 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />
          <ScrollReveal variant="scale-in" duration={0.6}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              {doc.cta?.headline || `Ready to Build Your ${doc.title} System?`}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {doc.cta?.subText || 'Let\'s talk about your requirements and plan a scalable workflow.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r ${btnTheme} text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer`}
              >
                {doc.cta?.primaryBtn || 'Start Your Project'}
              </Link>
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {doc.cta?.secondaryBtn || 'Schedule a Consultation'}
              </Link>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  )
}
