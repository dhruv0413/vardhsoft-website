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
  let featuredServices: any[] = []
  let testimonials: any[] = []
  let settings: any = null
  let caseStudiesRes: any = { docs: [] }
  let hasProjects = false

  try {
    const payload = await getPayload({ config })

    const [servRes, testRes, setRes, csRes, projRes] = await Promise.all([
      payload.find({ collection: 'services', where: { featured: { equals: true } }, limit: 3, sort: 'title', depth: 1, pagination: false }).catch(() => ({ docs: [] })),
      payload.find({ collection: 'testimonials', limit: 6, pagination: false }).catch(() => ({ docs: [] })),
      payload.findGlobal({ slug: 'website-settings', depth: 1 }).catch(() => null),
      payload.find({ collection: 'case-studies', limit: 6, depth: 1, pagination: false }).catch(() => ({ docs: [] })),
      payload.find({ collection: 'projects', limit: 1, depth: 0, pagination: false }).catch(() => ({ docs: [], totalDocs: 0 }))
    ])

    featuredServices = servRes?.docs || []
    testimonials = testRes?.docs || []
    settings = setRes
    caseStudiesRes = csRes
    hasProjects = Boolean((projRes?.docs && projRes.docs.length > 0) || (projRes?.totalDocs && projRes.totalDocs > 0))
  } catch (err) {
    console.error('Failed to load home page data from Payload:', err)
  }

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

  const formattedCaseStudies = (caseStudiesRes?.docs || []).map((cs: any) => ({
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
  const features = settings?.features || []
  const advantages = settings?.advantages || []
  const defaultWorkflow = [
    {
      stepNumber: '01',
      title: 'Discovery',
      subTitle: 'Understand Before We Build',
      description: 'We learn about your business, users, goals, workflows, challenges, and project requirements to define the right problem to solve.',
      colorClass: 'text-teal-400',
      pingClass: 'bg-teal-500/10 border-teal-500/30',
    },
    {
      stepNumber: '02',
      title: 'Planning & Design',
      subTitle: 'Turn Requirements Into a Clear Plan',
      description: 'We define the scope, priorities, user flows, architecture, technology direction, and interface design before development begins.',
      colorClass: 'text-indigo-400',
      pingClass: 'bg-indigo-500/10 border-indigo-500/30',
    },
    {
      stepNumber: '03',
      title: 'Development',
      subTitle: 'Build in Focused Iterations',
      description: 'We develop the product in structured iterations, integrating the frontend, backend, APIs, databases, and required third-party services.',
      colorClass: 'text-cyan-400',
      pingClass: 'bg-cyan-500/10 border-cyan-500/30',
    },
    {
      stepNumber: '04',
      title: 'Testing & QA',
      subTitle: 'Validate Before It Goes Live',
      description: 'We test functionality, responsiveness, integrations, security, and key user flows to identify and resolve issues before release.',
      colorClass: 'text-pink-400',
      pingClass: 'bg-pink-500/10 border-pink-500/30',
    },
    {
      stepNumber: '05',
      title: 'Launch & Support',
      subTitle: 'Deploy, Monitor & Improve',
      description: 'We deploy the product, monitor its operation, resolve issues, and support ongoing improvements as your needs evolve.',
      colorClass: 'text-amber-400',
      pingClass: 'bg-amber-500/10 border-amber-500/30',
    },
  ]

  const rawWorkflow = settings?.workflow || []
  const workflowList = rawWorkflow.length > 0
    ? rawWorkflow.map((item: any, idx: number) => {
        const parts = (item.description || '').split(': ')
        const hasCustomSub = parts.length > 1
        return {
          stepNumber: item.stepNumber || defaultWorkflow[idx]?.stepNumber || `0${idx + 1}`,
          title: item.title || defaultWorkflow[idx]?.title,
          subTitle: hasCustomSub ? parts[0] : (defaultWorkflow[idx]?.subTitle || ''),
          description: hasCustomSub ? parts.slice(1).join(': ') : item.description,
          colorClass: item.colorClass || defaultWorkflow[idx]?.colorClass || 'text-teal-400',
          pingClass: item.pingClass || defaultWorkflow[idx]?.pingClass || 'bg-teal-500/10 border-teal-500/30',
        }
      })
    : defaultWorkflow

  const defaultCapabilities = [
    { value: 'Custom Software', label: 'Built Around Your Requirements' },
    { value: 'SaaS Development', label: 'From MVP to Production' },
    { value: 'AI Solutions', label: 'AI-Powered Business Applications' },
    { value: 'Business Automation', label: 'Automate Repetitive Workflows' },
  ]

  const capabilityStrip = (settings?.capabilityStrip && settings.capabilityStrip.length > 0)
    ? settings.capabilityStrip
    : (settings?.qualityStats && settings.qualityStats.length > 0 && !settings.qualityStats[0]?.value?.includes('+'))
      ? settings.qualityStats
      : defaultCapabilities

  const heroBadge = settings?.heroBadge || '🚀 Trusted Technology Partner for Startups & Businesses'
  const heroTitle = settings?.heroTitle || 'We Build Custom Software That Drives Business Growth'
  const heroDescription = settings?.heroDescription || 'We design and develop scalable web applications, SaaS platforms, business automation systems, and modern websites that help startups and businesses launch faster, operate efficiently, and grow confidently.'
  const heroPrimaryCtaText = settings?.heroPrimaryCtaText || 'Start Your Project'
  const heroPrimaryCtaLink = settings?.heroPrimaryCtaLink || '/contact'
  const heroSecondaryCtaText = settings?.heroSecondaryCtaText || 'View Our Work'
  const heroSecondaryCtaLink = settings?.heroSecondaryCtaLink === '/portfolio' || !settings?.heroSecondaryCtaLink
    ? (hasProjects ? '/portfolio' : '/case-studies')
    : settings?.heroSecondaryCtaLink

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center border-b border-white/5 py-14 lg:py-18">
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-teal-500/12 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/12 rounded-full blur-[100px] -z-10 animate-pulse" />
        <HeroBgParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
          <ScrollReveal variant="fade-up" delay={0.1} duration={0.6}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/25 bg-teal-500/10 text-teal-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md">
              {heroBadge}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2} duration={0.7}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-200 via-emerald-100 to-indigo-200 bg-clip-text text-transparent max-w-4xl mx-auto leading-[1.15]">
              {heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3} duration={0.7}>
            <p className="mt-6 text-base sm:text-lg lg:text-xl lg:leading-[1.7] text-slate-100 max-w-3xl mx-auto font-normal">
              {heroDescription}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.4} duration={0.7}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={heroPrimaryCtaLink}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400 hover:from-teal-300 hover:to-indigo-300 text-slate-950 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 hover:-translate-y-0.5"
              >
                {heroPrimaryCtaText}
                <ArrowRight className="ml-2 h-5 w-5 stroke-[2.5]" />
              </Link>
              <Link
                href={heroSecondaryCtaLink}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
              >
                {heroSecondaryCtaText}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capability Strip Banner */}
      {capabilityStrip.length > 0 && (
        <section className="relative border-b border-white/5 bg-slate-950/60 py-6 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-indigo-500/5 to-purple-500/5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-left">
              {capabilityStrip.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center p-4 rounded-2xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-xl hover:border-teal-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    {STAT_ICON_MAP[item.value] || <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />}
                    <div className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug">
                      {item.value}
                    </div>
                  </div>
                  <div className="text-xs text-slate-200 font-medium leading-tight pl-6 -mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md shadow-sm">
            OUR TECH STACK
          </div>
          <p className="text-xl sm:text-2xl font-bold text-white">Technologies We Use to Engineer Assets</p>
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
              <div key={`s1-${idx}`} className="w-36 p-4 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-center group transition-all duration-300 shrink-0 hover:border-teal-500/30 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(45,212,191,0.15)]">
                {tech.icon}
                <span className="text-xs font-semibold text-white mt-2 transition-colors">{tech.name}</span>
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
              <div key={`s2-${idx}`} className="w-36 p-4 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-center group transition-all duration-300 shrink-0 hover:border-teal-500/30 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(45,212,191,0.15)]">
                {tech.icon}
                <span className="text-xs font-semibold text-white mt-2 transition-colors">{tech.name}</span>
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
              <p className="mt-4 text-slate-100 text-base sm:text-lg font-medium">
                We focus on how we build—not just what we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feat: any, idx: number) => (
                <ScrollReveal
                  key={idx}
                  variant="fade-up"
                  delay={idx * 0.1}
                  duration={0.6}
                >
                  <div className="h-full">
                    <div
                      className="rounded-2xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl transition-all duration-500 group min-h-[320px] md:h-[350px] flex flex-col overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] cursor-pointer hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]"
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
                          <p className="text-[13px] text-slate-100 leading-relaxed font-normal">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* VardhSoft Engineering Standards */}
            <div className="mt-16 pt-16 border-t border-white/5">
              <div className="text-center mb-10">
                <h3 className="text-xs sm:text-sm font-bold text-teal-400 uppercase tracking-[0.2em] mb-3">
                  VardhSoft Engineering Standards
                </h3>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent max-w-2xl mx-auto">
                  How We Build Software That&apos;s Ready for Production
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Standard 1 */}
                <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-teal-500/30 transition-all duration-300 flex flex-col items-center text-center group shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    Code Quality &amp; Testing
                  </h4>
                  <p className="text-sm text-slate-100 font-semibold">
                    Review &rarr; Test &rarr; Improve
                  </p>
                </div>

                {/* Standard 2 */}
                <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-indigo-500/30 transition-all duration-300 flex flex-col items-center text-center group shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    Performance &amp; Scalability
                  </h4>
                  <p className="text-sm text-slate-100 font-semibold">
                    Fast Today. Ready for Tomorrow.
                  </p>
                </div>

                {/* Standard 3 */}
                <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center group shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    Security by Design
                  </h4>
                  <p className="text-sm text-slate-100 font-semibold">
                    Security From the Start
                  </p>
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
              <p className="mt-4 text-slate-100 text-lg max-w-2xl font-normal">
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
                      <p className="text-xs text-slate-100 leading-relaxed font-normal">{service.shortDescription as string}</p>
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
                          <p className="text-sm text-slate-100 leading-relaxed font-normal">
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


      {/* Development Process Section (Glassmorphism Vertical Timeline) */}
      {workflowList.length > 0 && (
        <section className="py-24 border-b border-white/5 bg-slate-950 relative overflow-hidden">
          {/* Ambient Glass Glow Orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.15)]">
                OUR WORKFLOW
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="mt-4 text-slate-100 text-base sm:text-lg font-normal">
                A clear, collaborative process that takes your product from discovery to launch and beyond.
              </p>
            </div>

            {/* Workflow Steps Glass Stack */}
            <div className="space-y-6">
              {workflowList.map((item: any, idx: number) => {
                const borderColors = [
                  'border-l-teal-400/80 hover:border-l-teal-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]',
                  'border-l-indigo-400/80 hover:border-l-indigo-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
                  'border-l-cyan-400/80 hover:border-l-cyan-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
                  'border-l-pink-400/80 hover:border-l-pink-300 hover:shadow-[0_0_30px_rgba(244,114,182,0.15)]',
                  'border-l-amber-400/80 hover:border-l-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
                ]
                const borderColor = borderColors[idx % borderColors.length]

                return (
                  <ScrollReveal
                    key={idx}
                    variant="fade-up"
                    delay={idx * 0.1}
                    duration={0.6}
                  >
                    <div className={`p-6 sm:p-8 rounded-2xl border border-white/15 border-l-4 ${borderColor} bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl group relative overflow-hidden`}>
                      {/* Glass Highlight Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 relative z-10">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-sm font-black font-mono ${item.colorClass} shadow-inner backdrop-blur-md`}>
                            {item.stepNumber}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        {item.subTitle && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm self-start sm:self-auto">
                            {item.subTitle}
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-slate-100 leading-relaxed sm:pl-[52px] relative z-10 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
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
              <p className="mt-4 text-slate-100 text-sm font-normal">
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
                      className="p-6 sm:p-8 rounded-2xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col gap-4 h-full justify-between"
                    >
                      <div>
                        <Quote className="h-6 w-6 text-teal-500/40" />
                        <p className="text-sm text-slate-100 leading-relaxed mt-2 font-normal">{t.review as string}</p>
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
            <p className="mt-6 text-slate-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
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
