'use client'

import React, { useRef, useState, useEffect } from 'react'
import {
  Sparkles,
  Users,
  Award,
  Clock,
  Calendar,
  GraduationCap,
  HeartPulse,
  Baby,
  Utensils,
  Briefcase,
  Palmtree,
  Gem,
  ShieldCheck,
  Coffee,
  ChevronLeft,
  ChevronRight,
  Target,
  ArrowRight,
  Code2,
  CheckCircle2,
} from 'lucide-react'
import HoverTilt from '@/components/animations/HoverTilt'
import ScrollReveal from '@/components/animations/ScrollReveal'
import OpeningsList from './OpeningsList'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Gem,
  GraduationCap,
  ShieldCheck,
  Users,
  Award,
  Coffee,
  Clock,
  Calendar,
  HeartPulse,
  Baby,
  Palmtree,
  Utensils,
  Briefcase
}

interface Position {
  id: string | number
  title: string
  slug: string
  department: string
  location: string
  employmentType: string
  experience: string
  numberOfOpenings: number
}

interface CoreValueItem {
  title: string
  description: string
  bgGrad: string
  borderGlow: string
  icon: string
}

interface BenefitItem {
  title: string
  tag: string
  description: string
  icon: string
}

interface TestimonialItem {
  name: string
  role: string
  review: string
  initials: string
  avatarColor: string
}

const DEFAULT_CORE_VALUES: CoreValueItem[] = [
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
]

interface CareersContentProps {
  positions: Position[]
  coreValues: CoreValueItem[]
  benefits: BenefitItem[]
  employeeTestimonials: TestimonialItem[]
}

export default function CareersContent({ 
  positions,
  coreValues,
  benefits,
  employeeTestimonials
}: CareersContentProps) {
  const activeCoreValues = coreValues && coreValues.length > 0 ? coreValues : DEFAULT_CORE_VALUES
  const coreValuesRef = useRef<HTMLDivElement>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Scroll Core Values Carousel
  const scrollCoreValues = (direction: 'left' | 'right') => {
    if (coreValuesRef.current) {
      const { scrollLeft, clientWidth } = coreValuesRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75
      coreValuesRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  // Auto-scroll testimonials
  useEffect(() => {
    if (employeeTestimonials.length === 0) return
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % employeeTestimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [employeeTestimonials])

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen">
      {/* Background Glow Elements */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-[30%] right-10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[20%] left-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <ScrollReveal variant="fade-up" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          CAREERS AT VARDHSOFT
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Build. Learn. Make an Impact.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" delay={0.2}>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join a growing engineering team where you&apos;ll work on real projects, solve meaningful problems, take ownership of your work, and learn through hands-on experience.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.3} className="mt-8 flex justify-center gap-4">
          <a
            href="#openings"
            className="px-6 py-3 rounded-lg bg-teal-400 text-zinc-950 font-bold hover:bg-teal-300 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/25 transition-all text-sm flex items-center gap-2 group cursor-pointer"
          >
            Explore Openings
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </ScrollReveal>
      </div>

      {/* Core Values Section */}
      {activeCoreValues.length > 0 && (
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <ScrollReveal variant="fade-right" className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Core Values
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                The engineering parameters and operating philosophies that guide our work and define our daily interactions.
              </p>
            </ScrollReveal>

            {/* Slider controls */}
            <ScrollReveal variant="fade-left" className="flex gap-2 mt-6 md:mt-0">
              <button
                onClick={() => scrollCoreValues('left')}
                className="p-2 rounded-lg border border-white/10 hover:border-teal-500/40 bg-slate-900/40 text-slate-400 hover:text-teal-400 transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollCoreValues('right')}
                className="p-2 rounded-lg border border-white/10 hover:border-teal-500/40 bg-slate-900/40 text-slate-400 hover:text-teal-400 transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </ScrollReveal>
          </div>

          {/* Core Values Slider */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div
              ref={coreValuesRef}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {activeCoreValues.map((val, idx) => {
                const Icon = ICON_MAP[val.icon] || ShieldCheck
                return (
                  <div key={idx} className="min-w-[280px] sm:min-w-[360px] max-w-[360px] snap-start flex-shrink-0">
                    <HoverTilt className="h-full rounded-2xl overflow-hidden" glowColor="rgba(0,0,0,0)">
                      <div className="p-8 rounded-2xl border border-white/5 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-between h-[340px] group transition-all duration-300 hover:border-white/10">
                        <div className="space-y-6">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.bgGrad} flex items-center justify-center border border-white/10`}>
                            <Icon className="h-5 w-5 text-teal-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                            {val.title}
                          </h3>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {val.description}
                          </p>
                        </div>
                        <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-300" />
                      </div>
                    </HoverTilt>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      )}

      {/* What Are We Looking For? Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fade-right" className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Target className="h-3.5 w-3.5" />
              Ideal Profile
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Are We Looking For?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We look for individuals who bring technical depth, a collaborative attitude, and a focus on high standards. We value clean code, strong architectural foundations, and developers who write tests as part of their feature lifecycle.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether you are an engineer, designer, or product strategist, we value individuals who operate with high bandwidth communication and take full ownership of their outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" className="space-y-6">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-teal-500/20 transition-all duration-300 flex items-start gap-4">
                <Code2 className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white">Continuous Growth Mindset</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    We look for builders who treat learning as a perpetual state, constantly honing their craft and sharing their findings.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-teal-500/20 transition-all duration-300 flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white">Technical Proficiency</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Strong technical skills, solid software design fundamentals, and familiarity with modern technology stacks.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-indigo-500/20 transition-all duration-300 flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white">Extreme Accountability</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    A self-starting mindset that drives project execution, identifies roadblocks proactively, and works to overcome them.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-purple-500/20 transition-all duration-300 flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white">High Bandwidth Communication</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Articulating engineering trade-offs clearly, presenting ideas concisely, and giving constructive feedback.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-emerald-500/20 transition-all duration-300 flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white">Creative Problem Solving</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Deconstructing complex problems into minimal steps, and looking at challenges as engineering opportunities.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Benefits & Perks Section */}
      {benefits.length > 0 && (
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Benefits & Perks
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              We provide a supportive, secure, and growth-focused workspace environment so you can do your best work.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = ICON_MAP[benefit.icon] || ShieldCheck
              return (
                <HoverTilt key={idx} className="h-full rounded-2xl overflow-hidden" glowColor="rgba(0,0,0,0)">
                  <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/60 hover:border-white/10 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-teal-400" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-[10px] font-bold tracking-wide">
                          {benefit.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </HoverTilt>
              )
            })}
          </ScrollReveal>
        </div>
      )}

      {/* Testimonials ("How Our Employees Think About Us") Section */}
      {employeeTestimonials.length > 0 && (
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-white/5">
          <ScrollReveal variant="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How Our Employees Feel About Us
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Read stories and experiences from team members driving technology development at VardhSoft.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale-in" delay={0.2}>
            <div className="relative p-8 sm:p-12 rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-md overflow-hidden min-h-[320px] flex flex-col justify-between">
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl -z-10" />

              <div className="relative space-y-6">
                <span className="text-6xl text-teal-400/20 font-serif leading-none absolute -top-4 -left-2 select-none">“</span>
                <p className="text-base sm:text-lg text-slate-300 italic leading-relaxed relative z-10 pl-6 pr-4 pt-2">
                  {employeeTestimonials[activeTestimonial].review}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${employeeTestimonials[activeTestimonial].avatarColor} flex items-center justify-center text-white text-sm font-bold shadow-md shadow-slate-950/50`}>
                    {employeeTestimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {employeeTestimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {employeeTestimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + employeeTestimonials.length) % employeeTestimonials.length)}
                    className="p-2 rounded-lg border border-white/10 hover:border-teal-500/40 bg-slate-950/40 text-slate-400 hover:text-teal-400 transition-all duration-300 cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % employeeTestimonials.length)}
                    className="p-2 rounded-lg border border-white/10 hover:border-teal-500/40 bg-slate-950/40 text-slate-400 hover:text-teal-400 transition-all duration-300 cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {employeeTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTestimonial === idx ? 'w-6 bg-teal-400' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      )}

      {/* Current Openings Section */}
      <div id="openings" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Join the VardhSoft Team
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Current Openings
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Take the first step now by browsing our open roles and applying with your updated resume.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.2}>
          <div>
            <OpeningsList initialPositions={positions} />
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
