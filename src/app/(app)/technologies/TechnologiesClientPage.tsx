'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Wrench,
  Zap,
  Layers,
  ShieldCheck,
  Globe,
  CheckCircle2,
  ChevronRight,
  Workflow,
  Sparkles
} from 'lucide-react'
import HoverTilt from '@/components/animations/HoverTilt'
import ScrollReveal from '@/components/animations/ScrollReveal'

interface Technology {
  id: string | number
  name: string
  category: string
  proficiency?: string
  featured?: boolean
  description?: string
}

interface PillarItem {
  title: string
  description: string
  icon: string
  color: string
}

interface DetailedWorkflowItem {
  stepNumber: string
  title: string
  description: string
}

interface FaqItem {
  question: string
  answer: string
}

interface TechnologiesClientPageProps {
  technologies: Technology[]
  whyTechPillars: PillarItem[]
  detailedWorkflow: DetailedWorkflowItem[]
  faqs: FaqItem[]
  hasProjects?: boolean
}

const PILLAR_ICON_MAP: Record<string, React.ComponentType<any>> = {
  Zap,
  Layers,
  Code2,
  ShieldCheck,
  Cpu,
  Globe
}

const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    eyebrow: 'User Interface & Interaction',
    icon: <Code2 className="h-5 w-5" />,
    description: 'We prioritize frameworks that produce fast-rendering, highly SEO-compatible pages and fluid interface animations.'
  },
  {
    id: 'backend',
    title: 'Backend Platforms',
    eyebrow: 'API & Orchestration Systems',
    icon: <Server className="h-5 w-5" />,
    description: 'We structure Node.js, Express, and Serverless services designed to handle secure application workflows.'
  },
  {
    id: 'mobile',
    title: 'Mobile Frameworks',
    eyebrow: 'Native Mobile Engineering',
    icon: <Smartphone className="h-5 w-5" />,
    description: 'We configure high-speed natively compiled applications targeting iOS and Android platforms.'
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    eyebrow: 'Relational & Structured Storage',
    icon: <Database className="h-5 w-5" />,
    description: 'We structure PostgreSQL, MongoDB, and cached memory tiers optimized for strict data rules.'
  },
  {
    id: 'cloud',
    title: 'DevOps & Tooling',
    eyebrow: 'Infrastructure & Automation',
    icon: <Cpu className="h-5 w-5" />,
    description: 'Automated testing and deployment pipelines ensure we ship updates securely and consistently.'
  },
  {
    id: 'tools',
    title: 'Development Tools',
    eyebrow: 'Quality & Process Management',
    icon: <Wrench className="h-5 w-5" />,
    description: 'Great software isn\'t just about the code — it\'s about the process, tools, and habits that keep a project organized, testable, and easy to maintain long after launch.'
  }
]

export default function TechnologiesClientPage({
  technologies,
  whyTechPillars,
  detailedWorkflow,
  faqs,
  hasProjects = false
}: TechnologiesClientPageProps) {
  const [activeTab, setActiveTab] = useState<string>('frontend')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [hoveredProcessStep, setHoveredProcessStep] = useState<number | null>(null)

  const activeCategoryData = CATEGORIES.find((cat) => cat.id === activeTab) || CATEGORIES[0]
  const catTechs = technologies.filter((t) => t.category === activeTab)

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen pt-12 pb-20 animate-fadeIn">
      {/* Background Gradients & Grids */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-950/20 via-indigo-950/10 to-transparent -z-10" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO SECTION ================= */}
        <section className="text-center max-w-6xl mx-auto mb-8 pt-4">
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5 text-teal-400" />
              Our Technology Stack
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mb-3">
              The Right Technology for Every Problem,{' '}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent">
                Not Just the Familiar One
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="text-slate-400 text-sm sm:text-base max-w-4xl mx-auto mb-6 leading-relaxed">
              We build with modern, battle-tested tools — chosen based on what your project actually needs, not what's trendy. From lightning-fast web platforms to fully custom e-commerce stores, here's what powers the software we build.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-zinc-950 font-bold hover:brightness-110 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all flex items-center gap-2 text-sm group"
              >
                Discuss Your Tech Stack
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={hasProjects ? "/portfolio" : "/case-studies"}
                className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/40 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-500 transition-colors text-sm font-semibold flex items-center gap-1.5"
              >
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* ================= OVERVIEW SECTION ================= */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <section className="mb-28">
            <div className="p-8 sm:p-12 rounded-2xl border border-white/5 bg-slate-900/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl -z-10" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Our Architecture</h3>
                    <p className="text-xs text-teal-400 font-semibold tracking-wider uppercase">Philosophy in Practice</p>
                  </div>
                </div>
                <div className="lg:col-span-8 text-slate-400 text-sm leading-relaxed space-y-4">
                  <p>
                    At Vardhsoft, technology choices are never arbitrary. Every project starts with a simple question: <strong className="text-slate-200 font-semibold">what does this specific business problem actually require?</strong> — not &ldquo;what do we already know how to build.&rdquo; That said, we do have a core stack we specialize in, built around modern JavaScript/TypeScript frameworks (Next.js, React, Node.js), flexible databases like MongoDB, and platform expertise in Shopify for e-commerce — because these tools consistently deliver the best combination of performance, scalability, developer velocity, and long-term maintainability for the kinds of projects we take on: business web applications, internal management systems, and e-commerce storefronts.
                  </p>
                  <p>
                    Beyond our core stack, we work across a broader ecosystem of frontend, backend, database, cloud, and DevOps tools — allowing us to adapt to a client&apos;s existing systems, integrate with third-party services, and choose the right tool for each specific requirement rather than forcing every project into the same mold. This page breaks down our full technology landscape by category, so you know exactly what we bring to the table before we ever start talking about your project.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ================= CATEGORIES SECTION ================= */}
        <section className="mb-32">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-white mb-3">Explore Our Stack By Category</h2>
              <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                We group our technology stack into the categories that matter most for how modern software actually gets built, run, and maintained.
              </p>
            </div>
          </ScrollReveal>

          {/* Dynamic Explorer Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-2 max-h-[600px] lg:sticky lg:top-24">
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider pl-2 mb-3">Categories</div>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pb-2 lg:pb-0 scrollbar-thin scrollbar-thumb-slate-850 scrollbar-track-transparent">
                {CATEGORIES.map((cat) => {
                  const isActive = activeTab === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 border border-teal-500/20 text-white shadow-xl shadow-teal-500/5'
                          : 'border border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                      }`}
                    >
                      <span className={`p-1.5 rounded-lg border transition-colors ${
                        isActive 
                          ? 'bg-teal-500/10 border-teal-500/20 text-teal-400' 
                          : 'bg-slate-950 border-white/5 text-slate-500'
                      }`}>
                        {cat.icon}
                      </span>
                      <span className="text-left">{cat.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Content pane */}
            <div className="lg:col-span-8 min-h-[420px] lg:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className="border-b border-white/5 pb-6">
                    <span className="text-xs font-bold tracking-wider text-teal-400 uppercase">
                      {activeCategoryData.eyebrow}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-1 mb-3">
                      {activeCategoryData.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {activeCategoryData.description}
                    </p>
                  </div>

                  {/* Standard Category Grid */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {catTechs.map((tech) => (
                        <HoverTilt
                          key={tech.id}
                          maxTilt={5}
                          glowColor="rgba(20, 184, 166, 0.12)"
                          className="h-full"
                        >
                          <div className="p-5 rounded-xl border border-white/5 bg-slate-900/30 hover:border-teal-500/20 hover:bg-slate-900/50 transition-colors h-full flex flex-col justify-between">
                            <div className="space-y-2">
                              <h5 className="text-sm font-bold text-white flex items-center gap-1.5">
                                {tech.name}
                              </h5>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                {tech.description || ''}
                              </p>
                            </div>
                          </div>
                        </HoverTilt>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ================= WHY CHOOSE US PILLARS ================= */}
        {whyTechPillars.length > 0 && (
          <section className="mb-32">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase mb-3">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                  Strategic Engineering
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-4">Why We Choose These Technologies</h2>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                  We don&apos;t pick technologies because they&apos;re trending on developer forums — we pick them because they hold up under real business workloads.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyTechPillars.map((pillar, idx) => {
                const Icon = PILLAR_ICON_MAP[pillar.icon] || Zap
                return (
                  <ScrollReveal
                    key={pillar.title}
                    variant="fade-up"
                    delay={idx * 0.1}
                    className="h-full"
                  >
                    <HoverTilt className="h-full" maxTilt={6}>
                      <div className={`p-6 rounded-2xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/50 hover:border-slate-800 transition-all duration-300 h-full flex flex-col gap-4 relative overflow-hidden group`}>
                        <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:border-teal-500/30 transition-colors">
                          <Icon className="h-6 w-6 text-teal-400" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </HoverTilt>
                  </ScrollReveal>
                )
              })}
            </div>
          </section>
        )}

        {/* ================= DEVELOPMENT PROCESS ================= */}
        {detailedWorkflow.length > 0 && (
          <section className="mb-32">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16">
                <span className="text-xs font-bold tracking-wider text-teal-400 uppercase">
                  From Concept to Code
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-1 mb-4">Our Development Process</h2>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                  Technology choices only matter if they&apos;re applied through a disciplined process. Here&apos;s how a typical Vardhsoft project moves from idea to launch.
                </p>
              </div>
            </ScrollReveal>

            {/* Interactive Timeline Layout */}
            <div className="relative border-l border-white/5 pl-6 sm:pl-8 space-y-10 max-w-4xl mx-auto">
              {/* Active tracking bar indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-indigo-500 to-transparent -z-10" />

              {detailedWorkflow.map((step, idx) => {
                const isHovered = hoveredProcessStep === idx
                return (
                  <ScrollReveal
                    key={step.stepNumber}
                    variant="fade-left"
                    delay={idx * 0.05}
                  >
                    <div
                      onMouseEnter={() => setHoveredProcessStep(idx)}
                      onMouseLeave={() => setHoveredProcessStep(null)}
                      className="relative group cursor-default"
                    >
                      {/* Timeline Node Bullet */}
                      <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-slate-950 ${
                        isHovered
                          ? 'border-teal-400 scale-125 shadow-lg shadow-teal-500/30'
                          : 'border-white/10'
                      }`}>
                        <div className={`w-1 h-1 rounded-full transition-colors ${
                          isHovered ? 'bg-teal-400' : 'bg-slate-700'
                        }`} />
                      </div>

                      <div className={`p-6 rounded-xl border transition-all duration-300 ${
                        isHovered
                          ? 'bg-slate-900/50 border-teal-500/20 translate-x-1 shadow-lg shadow-teal-500/5'
                          : 'bg-slate-900/10 border-white/5'
                      }`}>
                        <div className="flex items-center gap-3.5 mb-2">
                          <span className={`text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded transition-colors duration-300 ${
                            isHovered ? 'bg-teal-500/10 text-teal-300' : 'bg-slate-950 text-slate-500'
                          }`}>
                            {step.stepNumber}
                          </span>
                          <h3 className={`text-base font-bold transition-colors duration-300 ${
                            isHovered ? 'text-white' : 'text-slate-300'
                          }`}>
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pl-0 sm:pl-10">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </section>
        )}

        {/* ================= FAQs SECTION ================= */}
        {faqs.length > 0 && (
          <section className="mb-32 max-w-4xl mx-auto">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16">
                <span className="text-xs font-bold tracking-wider text-teal-400 uppercase">
                  Got Questions?
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-1 mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-400 text-sm max-w-xl mx-auto">
                  Honest answers about how we select technologies, support projects, and integrate with client workflows.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx
                return (
                  <ScrollReveal
                    key={idx}
                    variant="fade-up"
                    delay={idx * 0.05}
                  >
                    <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'border-indigo-500/30 bg-slate-900/40' 
                        : 'border-white/5 bg-slate-900/10 hover:border-slate-800'
                    }`}>
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-white transition-colors cursor-pointer select-none"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronRight className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-90 text-indigo-400' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div className="p-5 pt-0 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 bg-slate-950/20">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </section>
        )}

        {/* ================= CALL TO ACTION BANNER ================= */}
        <ScrollReveal variant="scale-in" threshold={0.01}>
          <section className="relative rounded-3xl border border-white/10 bg-slate-950 overflow-hidden p-8 sm:p-14 text-center">
            {/* Glowing background highlights inside CTA */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-2xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold uppercase">
                Let&apos;s Connect
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Not Sure Which Technology Your Project Needs?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                That&apos;s exactly the kind of question we like to start with. Tell us about your project, and we&apos;ll recommend the right stack for your actual goals — not just the tools we happen to like.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-zinc-950 font-bold hover:brightness-110 shadow-lg shadow-teal-500/20 transition-all text-sm flex items-center gap-2 group"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/40 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-500 transition-colors text-sm font-semibold flex items-center gap-1.5"
                >
                  See Our Case Studies
                </Link>
              </div>

              <p className="text-[11px] text-slate-500 font-medium italic pt-2">
                Let&apos;s figure out the right technology fit for your project — together.
              </p>
            </div>
          </section>
        </ScrollReveal>

      </div>
    </div>
  )
}
