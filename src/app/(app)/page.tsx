import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { 
  ArrowRight, Code, Cpu, ShieldCheck, Zap, Users, Sparkles, Star, Quote, 
  Clock, TrendingUp, Code2, Headphones, MessageSquareCode 
} from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import HoverTilt from '@/components/animations/HoverTilt'
import CountUp from '@/components/animations/CountUp'
import HeroBgParticles from '@/components/HeroBgParticles'
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('home', {
    title: 'VardhSoft | Premium Custom Software Development',
    description: 'VardhSoft delivers custom software development, cloud solutions, and digital transformation consulting for startups and enterprises in India and globally.',
  })
}

// Helper maps for CMS icons
const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="h-5 w-5 text-teal-400" />,
  Cpu: <Cpu className="h-5 w-5 text-indigo-400" />,
  Zap: <Zap className="h-5 w-5 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5 text-pink-400" />,
  Clock: <Clock className="w-5 h-5 text-teal-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-indigo-400" />,
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Headphones: <Headphones className="w-5 h-5 text-pink-400" />
}

const STAT_ICON_MAP: Record<string, React.ReactNode> = {
  'Happy Clients': <Users className="w-3.5 h-3.5 text-cyan-400" />,
  'Projects Delivered': <Code className="w-3.5 h-3.5 text-blue-400" />,
  'Technologies Mastered': <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />,
  'Client Satisfaction Focus': <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
}

const parseStat = (val: string) => {
  const num = parseInt(val) || 0
  const suffix = val.replace(/^[0-9]+/, '')
  return { num, suffix }
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  const [servicesRes, testimonialsRes, settings, caseStudiesRes, projectsRes] = await Promise.all([
    payload.find({ collection: 'services', where: { featured: { equals: true } }, limit: 3, sort: 'title', depth: 1 }),
    payload.find({ collection: 'testimonials', limit: 6 }),
    payload.findGlobal({ slug: 'website-settings', depth: 1 }),
    payload.find({ collection: 'case-studies', limit: 6, depth: 1 }),
    payload.find({ collection: 'projects', limit: 1, depth: 0 })
  ])

  const featuredServices = servicesRes.docs
  const testimonials = testimonialsRes.docs
  const hasProjects = projectsRes.totalDocs > 0

  type LexicalRichText = { root: { children: Record<string, unknown>[] } } | null | undefined

  const getPlainText = (richText: LexicalRichText): string => {
    if (!richText?.root?.children) return ''
    return richText.root.children
      .map((child) => {
        const c = child as { children?: { text?: string }[] }
        if (c.children) {
          return c.children.map((leaf) => leaf.text ?? '').join('')
        }
        return ''
      })
      .join(' ')
  }

  const formattedCaseStudies = (caseStudiesRes?.docs || []).map((cs) => ({
    id: cs.id,
    category: cs.projectType || cs.industry,
    year: cs.duration || 'Integration',
    title: cs.title,
    problem: getPlainText(cs.problem),
    solution: getPlainText(cs.solution),
    results: getPlainText(cs.results),
    slug: cs.slug,
  }))

  // Fallbacks in case CMS Settings aren't seeded
  const features = settings.features || []
  const qualityStats = settings.qualityStats || []
  const advantages = settings.advantages || []
  const workflow = settings.workflow || []

  const heroBadge = settings.heroBadge || '🚀 Trusted Technology Partner for Startups & Businesses'
  const heroTitle = settings.heroTitle || 'We Build Custom Software That Drives Business Growth'
  const heroDescription = settings.heroDescription || 'We design and develop scalable web applications, SaaS platforms, business automation systems, and modern websites that help startups and businesses launch faster, operate efficiently, and grow confidently.'
  const heroPrimaryCtaText = settings.heroPrimaryCtaText || 'Start Your Project'
  const heroPrimaryCtaLink = settings.heroPrimaryCtaLink || '/contact'
  const heroSecondaryCtaText = settings.heroSecondaryCtaText || 'View Our Work'
  const heroSecondaryCtaLink = settings.heroSecondaryCtaLink === '/portfolio' || !settings.heroSecondaryCtaLink
    ? (hasProjects ? '/portfolio' : '/case-studies')
    : settings.heroSecondaryCtaLink

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-200px)] lg:h-[calc(100vh-200px)] flex items-center justify-center border-b border-white/5 py-12 lg:py-0">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <HeroBgParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full pt-8 lg:pt-12">
          <ScrollReveal variant="fade-up" delay={0.1} duration={0.6}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-6">
              {heroBadge}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2} duration={0.7}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent max-w-4xl mx-auto leading-[1.15]">
              {heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3} duration={0.7}>
            <p className="mt-8 text-base sm:text-lg lg:text-[18px] lg:leading-[1.8] text-slate-400 max-w-3xl mx-auto">
              {heroDescription}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.4} duration={0.7}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={heroPrimaryCtaLink}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                {heroPrimaryCtaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href={heroSecondaryCtaLink}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-200"
              >
                {heroSecondaryCtaText}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Banner */}
      {qualityStats.length > 0 && (
        <section className="relative border-b border-white/5 bg-slate-950/40 py-6 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
              {qualityStats.map((stat, idx) => {
                const parsed = parseStat(stat.value)
                return (
                  <div key={idx} className={`flex flex-col items-center justify-center p-2 ${idx > 0 ? 'border-l border-white/5' : ''}`}>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-none">
                      <CountUp to={parsed.num} suffix={parsed.suffix} delay={0.6} />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase mt-2">
                      {STAT_ICON_MAP[stat.label] || <Users className="w-3.5 h-3.5 text-cyan-400" />}
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Technologies We Use Logo Cloud */}
      <section className="py-16 border-b border-white/5 bg-slate-900/10 relative overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-scroll {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h3 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Our Tech Stack</h3>
          <p className="text-xl font-semibold text-white">Technologies We Use to Engineer Assets</p>
        </div>

        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Gradient fade masks - using theme variables */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-scroll flex items-center gap-6">
            {/* Set 1 */}
            {[
              {
                name: 'Next.js',
                hover: 'hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]',
                text: 'group-hover:text-white',
                icon: (
                  <svg className="w-8 h-8 text-white opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 180 180" fill="none">
                    <circle cx="90" cy="90" r="85" fill="black" stroke="currentColor" strokeWidth="8" />
                    <path d="M135 125 L75 45 H63 V135 H76 V65 L130 135 H135 Z" fill="currentColor" />
                  </svg>
                )
              },
              {
                name: 'React',
                hover: 'hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]',
                text: 'group-hover:text-cyan-300',
                icon: (
                  <svg className="w-8 h-8 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(30 50 50)" />
                    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(90 50 50)" />
                    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(150 50 50)" />
                    <circle cx="50" cy="50" r="3" fill="currentColor" />
                  </svg>
                )
              },
              {
                name: 'Node.js',
                hover: 'hover:border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]',
                text: 'group-hover:text-emerald-300',
                icon: (
                  <svg className="w-8 h-8 text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 15 L22 31 V63 L50 79 L78 63 V31 Z" fill="none" stroke="currentColor" strokeWidth="6" />
                    <circle cx="50" cy="47" r="8" fill="currentColor" />
                    <path d="M50 47 L36 39 M50 47 L64 39 M50 47 L50 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                name: 'TypeScript',
                hover: 'hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]',
                text: 'group-hover:text-blue-300',
                icon: (
                  <svg className="w-8 h-8 text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="10" y="10" width="80" height="80" rx="8" />
                    <text x="50" y="75" fill="black" fontSize="40" fontWeight="bold" fontFamily="sans-serif">TS</text>
                  </svg>
                )
              },
              {
                name: 'PostgreSQL',
                hover: 'hover:border-sky-500/20 hover:shadow-[0_0_20px_rgba(14,165,233,0.08)]',
                text: 'group-hover:text-sky-300',
                icon: (
                  <svg className="w-8 h-8 text-sky-400 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <path d="M30 65 C25 50 35 30 50 30 C65 30 75 50 70 65 Z" stroke="currentColor" strokeWidth="6" />
                    <path d="M50 30 V65" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="45" r="4" fill="currentColor" />
                    <path d="M25 65 H75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                name: 'AWS',
                hover: 'hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]',
                text: 'group-hover:text-amber-300',
                icon: (
                  <svg className="w-8 h-8 text-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <path d="M20 55 Q 50 75 80 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <path d="M72 58 L82 52 L80 64" fill="currentColor" />
                    <text x="35" y="42" fill="currentColor" fontSize="22" fontWeight="bold" fontFamily="sans-serif">aws</text>
                  </svg>
                )
              },
              {
                name: 'Docker',
                hover: 'hover:border-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]',
                text: 'group-hover:text-cyan-300',
                icon: (
                  <svg className="w-8 h-8 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <rect x="25" y="40" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="42" y="40" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="59" y="40" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="33" y="24" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="50" y="24" width="12" height="12" rx="1" fill="currentColor" />
                    <path d="M15 65 C30 75 70 75 85 65" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                name: 'Payload CMS',
                hover: 'hover:border-slate-200/20 hover:shadow-[0_0_20px_rgba(241,245,249,0.08)]',
                text: 'group-hover:text-white',
                icon: (
                  <svg className="w-8 h-8 text-slate-300 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" />
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                  </svg>
                )
              }
            ].map((tech, idx) => (
              <div key={`s1-${idx}`} className="w-36 p-4 rounded-xl border border-white/5 bg-slate-900/30 flex flex-col items-center justify-center text-center group transition-all duration-300 shrink-0 hover:border-teal-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]">
                {tech.icon}
                <span className="text-xs font-medium text-slate-400 mt-2 transition-colors group-hover:text-white">{tech.name}</span>
              </div>
            ))}

            {/* Set 2 (Duplicate for loop) */}
            {[
              {
                name: 'Next.js',
                hover: 'hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]',
                text: 'group-hover:text-white',
                icon: (
                  <svg className="w-8 h-8 text-white opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 180 180" fill="none">
                    <circle cx="90" cy="90" r="85" fill="black" stroke="currentColor" strokeWidth="8" />
                    <path d="M135 125 L75 45 H63 V135 H76 V65 L130 135 H135 Z" fill="currentColor" />
                  </svg>
                )
              },
              {
                name: 'React',
                hover: 'hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]',
                text: 'group-hover:text-cyan-300',
                icon: (
                  <svg className="w-8 h-8 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(30 50 50)" />
                    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(90 50 50)" />
                    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(150 50 50)" />
                    <circle cx="50" cy="50" r="3" fill="currentColor" />
                  </svg>
                )
              },
              {
                name: 'Node.js',
                hover: 'hover:border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]',
                text: 'group-hover:text-emerald-300',
                icon: (
                  <svg className="w-8 h-8 text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 15 L22 31 V63 L50 79 L78 63 V31 Z" fill="none" stroke="currentColor" strokeWidth="6" />
                    <circle cx="50" cy="47" r="8" fill="currentColor" />
                    <path d="M50 47 L36 39 M50 47 L64 39 M50 47 L50 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                name: 'TypeScript',
                hover: 'hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]',
                text: 'group-hover:text-blue-300',
                icon: (
                  <svg className="w-8 h-8 text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="10" y="10" width="80" height="80" rx="8" />
                    <text x="50" y="75" fill="black" fontSize="40" fontWeight="bold" fontFamily="sans-serif">TS</text>
                  </svg>
                )
              },
              {
                name: 'PostgreSQL',
                hover: 'hover:border-sky-500/20 hover:shadow-[0_0_20px_rgba(14,165,233,0.08)]',
                text: 'group-hover:text-sky-300',
                icon: (
                  <svg className="w-8 h-8 text-sky-400 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <path d="M30 65 C25 50 35 30 50 30 C65 30 75 50 70 65 Z" stroke="currentColor" strokeWidth="6" />
                    <path d="M50 30 V65" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="45" r="4" fill="currentColor" />
                    <path d="M25 65 H75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                name: 'AWS',
                hover: 'hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]',
                text: 'group-hover:text-amber-300',
                icon: (
                  <svg className="w-8 h-8 text-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <path d="M20 55 Q 50 75 80 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <path d="M72 58 L82 52 L80 64" fill="currentColor" />
                    <text x="35" y="42" fill="currentColor" fontSize="22" fontWeight="bold" fontFamily="sans-serif">aws</text>
                  </svg>
                )
              },
              {
                name: 'Docker',
                hover: 'hover:border-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]',
                text: 'group-hover:text-cyan-300',
                icon: (
                  <svg className="w-8 h-8 text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <rect x="25" y="40" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="42" y="40" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="59" y="40" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="33" y="24" width="12" height="12" rx="1" fill="currentColor" />
                    <rect x="50" y="24" width="12" height="12" rx="1" fill="currentColor" />
                    <path d="M15 65 C30 75 70 75 85 65" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                )
              },
              {
                name: 'Payload CMS',
                hover: 'hover:border-slate-200/20 hover:shadow-[0_0_20px_rgba(241,245,249,0.08)]',
                text: 'group-hover:text-white',
                icon: (
                  <svg className="w-8 h-8 text-slate-300 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" />
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                  </svg>
                )
              }
            ].map((tech, idx) => (
              <div key={`s2-${idx}`} className="w-36 p-4 rounded-xl border border-white/5 bg-slate-900/30 flex flex-col items-center justify-center text-center group transition-all duration-300 shrink-0 hover:border-teal-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]">
                {tech.icon}
                <span className="text-xs font-medium text-slate-400 mt-2 transition-colors group-hover:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      {features.length > 0 && (
        <section className="py-20 border-b border-white/5 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Why VardhSoft?
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                We align design precision with clean code parameters to deliver products that perform and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feat, idx) => (
                <ScrollReveal
                  key={idx}
                  variant="fade-up"
                  delay={idx * 0.1}
                  duration={0.6}
                >
                  <div className="h-full">
                    <div
                      className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm transition-all duration-500 group min-h-[320px] md:h-[350px] flex flex-col overflow-hidden shadow-lg cursor-pointer"
                    >
                      {/* Top Vector Illustration */}
                      <div className="w-full h-[140px] md:h-[160px] bg-slate-950/40 flex items-center justify-center relative overflow-hidden border-b border-white/10 shrink-0">
                        <div 
                          className="transition-transform duration-700 group-hover:scale-110"
                          dangerouslySetInnerHTML={{ __html: feat.illustrationSvg }}
                        />
                      </div>
                      {/* Bottom Content Body */}
                      <div className="p-6 flex-1 flex flex-col justify-center overflow-hidden">
                        <div className="flex items-center gap-2">
                          {ICON_MAP[feat.icon] || <Code className="h-5 w-5 text-teal-400" />}
                          <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">
                            {feat.title}
                          </h3>
                        </div>
                        <div className="overflow-hidden transition-all duration-500 ease-out md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-[100px] md:group-hover:mt-2.5 mt-2 opacity-100 max-h-[100px]">
                          <p className="text-[13px] text-slate-400 leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Option B: Performance Proof Grid (integrated under core highlights) */}
            <div className="mt-16 pt-16 border-t border-white/5">
              <div className="text-center mb-10">
                <h3 className="text-sm lg:text-base font-bold text-cyan-400 uppercase tracking-[0.2em] mb-3">VardhSoft Quality Parameters</h3>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">How we back up our custom engineering services</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stat 1 */}
                <div className="p-6 rounded-xl border border-white/5 bg-slate-900/10 hover:border-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-black text-white">100k+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">Lines of Clean Code Written</div>
                  <p className="text-[11px] text-slate-500 mt-1">Modular, fully typed, TS-checked codebases</p>
                </div>
                {/* Stat 2 */}
                <div className="p-6 rounded-xl border border-white/5 bg-slate-900/10 hover:border-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-black text-white">99/100</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">Avg. Lighthouse PageSpeed</div>
                  <p className="text-[11px] text-slate-500 mt-1">Near-instant loading on mobile & desktop</p>
                </div>
                {/* Stat 3 */}
                <div className="p-6 rounded-xl border border-white/5 bg-slate-900/10 hover:border-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-black text-white">0</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">Critical Vulnerabilities</div>
                  <p className="text-[11px] text-slate-500 mt-1">Sanitized inputs, secure routing parameters</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="mt-4 text-slate-400 text-lg max-w-2xl">
                We design and build bespoke software solutions to enable digital transformations.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
            >
              See All Services
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => {
              // Custom SVGs
              const serviceSvg =
                idx === 0 ? (
                  <svg className="w-12 h-12 text-indigo-400 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="10" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="8" y="26" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="8" y="42" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="16" cy="16" r="1.5" fill="#10b981" />
                    <circle cx="16" cy="32" r="1.5" fill="#10b981" />
                    <circle cx="16" cy="48" r="1.5" fill="#10b981" />
                    <line x1="24" y1="16" x2="48" y2="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="24" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="24" y1="48" x2="48" y2="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                ) : idx === 1 ? (
                  <svg className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 64 64" fill="none">
                    <rect x="10" y="10" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="34" y="10" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="34" y="24" width="20" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="10" y="34" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16 20 H24 M40 15 H48 M16 44 H24" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ) : (
                  <svg className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 64 64" fill="none">
                    <rect x="6" y="10" width="52" height="44" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="6" y1="20" x2="58" y2="20" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="15" r="1" fill="currentColor" />
                    <circle cx="16" cy="15" r="1" fill="currentColor" />
                    <circle cx="20" cy="15" r="1" fill="currentColor" />
                    <path d="M22 36 L16 42 L22 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42 36 L48 42 L42 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="35" y1="34" x2="29" y2="50" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                );

              return (
                <ScrollReveal
                  key={service.id}
                  variant="fade-up"
                  delay={idx * 0.15}
                  duration={0.6}
                >
                  {/* Mobile Flat Card (Always visible, direct access) */}
                  <div className="md:hidden p-6 rounded-2xl border border-white/5 bg-slate-900/40 flex flex-col justify-between h-[280px]">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center mb-4">
                        {serviceSvg}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{service.shortDescription as string}</p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold text-teal-400 hover:underline inline-flex items-center gap-1.5 self-start mt-4"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Desktop 3D Flip Card */}
                  <div className="hidden md:block group h-[320px] w-full [perspective:1200px] cursor-pointer">
                    <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_4px_30px_rgba(0,0,0,0.2)]">

                      {/* FRONT FACE (Illustration & Title) */}
                      <div className="absolute inset-0 h-full w-full rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] z-20">
                        <div className="w-20 h-20 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/30 transition-all duration-500">
                          {serviceSvg}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>

                      {/* BACK FACE (Description & CTA) - using dynamic bg color instead of hardcoded hex */}
                      <div className="absolute inset-0 h-full w-full rounded-2xl border border-indigo-500/20 bg-slate-900 p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] z-10">
                        <div>
                          <h4 className="text-lg font-bold text-indigo-300 mb-3">{service.title}</h4>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {service.shortDescription as string}
                          </p>
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-xs font-semibold text-teal-400 hover:underline inline-flex items-center gap-1.5 self-start"
                        >
                          Learn More
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {advantages.length > 0 && (
        <section className="py-20 border-b border-white/5 bg-slate-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1 lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  Our Advantages
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Why Choose Us
                </h2>
                <p className="mt-4 text-slate-400 text-base leading-relaxed">
                  VardhSoft is built on professional alignment, pristine code standards, and transparent delivery structures. We align technical performance parameters with actual business outcomes.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-white/5 bg-slate-900/40 hover:border-teal-500/20 transition-all duration-300 flex flex-col group">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-105 transition-transform">
                      {ICON_MAP[adv.icon] || <Clock className="w-5 h-5" />}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Development Process Section */}
      {workflow.length > 0 && (
        <section className="py-20 border-b border-white/5 bg-slate-950/30 relative overflow-hidden">
          <style>{`
            @keyframes shimmer-line {
              0% { left: -30%; }
              100% { left: 130%; }
            }
          `}</style>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
                Our Workflow
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="mt-4 text-slate-400 text-base">
                A structured 5-step pipeline engineered to bring ideas from discovery to deployment seamlessly.
              </p>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative">
              {/* Horizontal connecting line (hidden on mobile, visible on desktop) */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-white/10 overflow-hidden -z-10">
                {/* Spark line flow animation */}
                <div className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-[shimmer-line_6s_linear_infinite]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                {workflow.map((item, idx) => (
                  <ScrollReveal
                    key={idx}
                    variant="fade-up"
                    delay={idx * 0.15}
                    duration={0.6}
                  >
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className={`relative w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl font-extrabold ${item.colorClass} shadow-md group-hover:bg-slate-950 transition-all duration-500 hover:border-teal-500/30 hover:shadow-[0_0_25px_rgba(45,212,191,0.15)]`}>
                        {/* Pulse glowing ring overlay */}
                        <span className={`absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none ${item.pingClass}`} />
                        {item.stepNumber}
                      </div>
                      <h3 className="text-lg font-bold text-white mt-5 mb-2 transition-colors">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      <section className="py-20 border-b border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesCarousel caseStudies={formattedCaseStudies} />
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 border-b border-white/5 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="h-3.5 w-3.5" />
                Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Client & Partner Feedback
              </h2>
              <p className="mt-4 text-slate-400 text-sm">
                Direct client reviews, LinkedIn recommendations, and partner recommendations confirming our dedication to code standard delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <ScrollReveal
                  key={t.id}
                  variant="fade-up"
                  delay={idx * 0.1}
                  duration={0.6}
                >
                  <HoverTilt className="h-full" glowColor="rgba(245, 158, 11, 0.1)">
                    <div
                      className="p-6 rounded-2xl border border-white/5 bg-slate-900/30 flex flex-col gap-4 h-full justify-between"
                    >
                      <div>
                        <Quote className="h-6 w-6 text-teal-500/40" />
                        <p className="text-sm text-slate-300 leading-relaxed mt-2">{t.review as string}</p>
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                          {(t.clientName as string).charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{t.clientName as string}</p>
                        </div>
                      </div>
                    </div>
                  </HoverTilt>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal variant="scale-in" duration={0.8}>
            <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent pb-2">
              Ready to Build Your Next Digital Product?
            </h2>
            <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Let's discuss your idea and explore how we can help you build scalable software that drives business growth.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/45 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
