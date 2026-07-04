"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface CaseStudyItem {
  id: string | number
  category: string
  year: string
  title: string
  problem: string
  solution: string
  results: string
  slug: string
  link?: string
}

interface CaseStudiesCarouselProps {
  caseStudies?: CaseStudyItem[]
}

const DEFAULT_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 1,
    category: 'Enterprise E-Commerce',
    year: '2026 Integration',
    title: 'High-Performance Storefront Blueprint',
    problem: 'Legacy backend bottlenecks caused high server response latency (TTFB > 1.2s), resulting in checkout drops and poor SEO ranks.',
    solution: 'Migrated architectural layouts to Next.js App Router static-site cache structures and decoupled relational PostgreSQL pipelines.',
    results: 'Lighthouse Core Web Vitals reached a 99/100 score. Server response dropped under 80ms, boosting conversion metrics by 18%.',
    slug: 'high-performance-storefront-blueprint',
    link: '/portfolio'
  },
  {
    id: 2,
    category: 'Headless CMS Portal',
    year: '2025 Integration',
    title: 'Multi-Brand Marketing CMS Engine',
    problem: 'Marketing administrators faced hours of delay updating web landing pages due to rigid, hard-coded templates.',
    solution: 'Integrated a headless Payload CMS core backed by dynamic modular drag-and-drop structures for layout building.',
    results: 'Content deployment times dropped from 2 days to under 5 minutes with zero engineering intervention or compile delays.',
    slug: 'multi-brand-marketing-cms-engine',
    link: '/portfolio'
  },
  {
    id: 3,
    category: 'Custom SaaS Platform',
    year: '2026 Integration',
    title: 'Real-Time Operational Analytics Dashboard',
    problem: 'High-throughput logs overloaded databases, freezing dashboard queries for operations teams.',
    solution: 'Engineered a time-series database buffer with decoupled message queues and edge cached query routing.',
    results: 'Query response speed reduced from 8s to 12ms. Dashboard load failures dropped to absolute zero (99.999% uptime).',
    slug: 'real-time-operational-analytics-dashboard',
    link: '/portfolio'
  }
]

const SLIDE_THEMES = [
  {
    gradient: 'from-teal-600/20 via-indigo-900/30 to-slate-950',
    borderColor: 'border-teal-500/20',
    textColor: 'text-teal-400',
    graphic: (
      <svg className="w-full h-full text-teal-400/80" viewBox="0 0 200 120" fill="none">
        <rect x="10" y="10" width="180" height="100" rx="6" fill="#0b1329" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="26" x2="190" y2="26" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="3" fill="#ef4444" />
        <circle cx="30" cy="18" r="3" fill="#f59e0b" />
        <circle cx="40" cy="18" r="3" fill="#10b981" />
        <path d="M30 90 L60 70 L90 85 L120 50 L150 65 L170 38" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 90 L60 70 L90 85 L120 50 L150 65 L170 38 L170 95 L30 95 Z" fill="url(#teal-grad)" opacity="0.1" />
        <circle cx="170" cy="38" r="4.5" fill="#10b981" />
        <defs>
          <linearGradient id="teal-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    gradient: 'from-indigo-600/20 via-slate-900/30 to-slate-950',
    borderColor: 'border-indigo-500/20',
    textColor: 'text-indigo-400',
    graphic: (
      <svg className="w-full h-full text-indigo-400/80" viewBox="0 0 200 120" fill="none">
        <rect x="10" y="10" width="180" height="100" rx="6" fill="#0b1329" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="22" width="40" height="76" rx="2" fill="#1e1b4b" opacity="0.6" />
        <line x1="24" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="44" x2="44" y2="44" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="56" x2="48" y2="56" stroke="currentColor" strokeWidth="1.5" />
        <rect x="68" y="22" width="112" height="24" rx="3" fill="#312e81" stroke="currentColor" strokeWidth="1" />
        <rect x="68" y="52" width="52" height="46" rx="3" fill="#1e1b4b" stroke="currentColor" strokeWidth="1" />
        <rect x="128" y="52" width="52" height="46" rx="3" fill="#1e1b4b" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    gradient: 'from-cyan-600/20 via-indigo-900/30 to-slate-950',
    borderColor: 'border-cyan-500/20',
    textColor: 'text-cyan-400',
    graphic: (
      <svg className="w-full h-full text-cyan-400/80" viewBox="0 0 200 120" fill="none">
        <rect x="10" y="10" width="180" height="100" rx="6" fill="#0b1329" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="60" r="12" fill="#065f46" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="40" r="10" fill="#1e1b4b" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="80" r="10" fill="#1e1b4b" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="150" cy="60" r="12" fill="#065f46" stroke="currentColor" strokeWidth="1.5" />
        <line x1="62" y1="55" x2="90" y2="45" stroke="currentColor" strokeWidth="1.5" />
        <line x1="62" y1="65" x2="90" y2="75" stroke="currentColor" strokeWidth="1.5" />
        <line x1="110" y1="45" x2="138" y2="55" stroke="currentColor" strokeWidth="1.5" />
        <line x1="110" y1="75" x2="138" y2="65" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
]

export default function CaseStudiesCarousel({ caseStudies = [] }: CaseStudiesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const caseStudiesList = caseStudies.length > 0 ? caseStudies : DEFAULT_CASE_STUDIES

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [activeIndex, caseStudiesList])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudiesList.length)
      setIsAnimating(false)
    }, 200)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + caseStudiesList.length) % caseStudiesList.length)
      setIsAnimating(false)
    }, 200)
  }

  const activeStudy = caseStudiesList[activeIndex]
  const currentTheme = SLIDE_THEMES[activeIndex % SLIDE_THEMES.length]
  const linkHref = activeStudy.slug ? `/case-studies/${activeStudy.slug}` : (activeStudy.link || '/portfolio')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* LEFT SIDE: Heading, info & controls */}
      <div className="lg:col-span-4 flex flex-col justify-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 self-start">
          Proven Results
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent leading-tight">
          Case Studies
        </h2>
        <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
          A trace of engineering integrations that resolved complex blocks and generated business outcomes. We focus on speed, scalability, and design metrics.
        </p>

        {/* Carousel buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 bg-slate-900/50 hover:bg-slate-950 hover:border-indigo-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Previous Case Study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 bg-slate-900/50 hover:bg-slate-950 hover:border-indigo-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Next Case Study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Interactive slide card */}
      <div className="lg:col-span-8 flex flex-col items-center w-full">
        <div
          className={`w-full md:h-[440px] p-6 sm:p-8 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-white/10 transition-all duration-500 flex flex-col md:grid md:grid-cols-12 gap-8 relative overflow-hidden bg-gradient-to-br ${currentTheme.gradient} ${isAnimating ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
            }`}
        >
          {/* Mock Graphic inside Card */}
          <div className="col-span-12 md:col-span-5 flex items-center justify-center bg-slate-950/40 rounded-xl p-4 border border-white/5 h-[160px] md:h-full">
            {currentTheme.graphic}
          </div>

          {/* Details details */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between h-full overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider ${currentTheme.textColor}`}>{activeStudy.category}</span>
                <span className="text-[10px] text-slate-500">{activeStudy.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">{activeStudy.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Problem</h4>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {activeStudy.problem}
                  </p>
                </div>
                {activeStudy.solution && (
                  <div className="border-t border-white/5 pt-3">
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Solution</h4>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {activeStudy.solution}
                    </p>
                  </div>
                )}
                {activeStudy.results && (
                  <div className="border-t border-white/5 pt-3">
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Results</h4>
                    <p className="text-xs text-emerald-400 font-semibold leading-relaxed line-clamp-2">
                      {activeStudy.results}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <Link
              href={linkHref}
              className={`text-xs font-semibold hover:underline inline-flex items-center gap-1.5 self-start mt-6 ${currentTheme.textColor}`}
            >
              Read Case Study
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Indicators below the card: - - - */}
        <div className="flex items-center gap-2.5 mt-6">
          {caseStudiesList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAnimating(true)
                setTimeout(() => {
                  setActiveIndex(idx)
                  setIsAnimating(false)
                }, 200)
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? 'w-8 bg-indigo-400' : 'w-4 bg-white/10 hover:bg-white/20'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
