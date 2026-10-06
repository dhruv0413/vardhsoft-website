'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Sparkles, Compass, Eye, Shield, Code, Server, Database,
  ShoppingBag, Cloud, Layers, Cpu, ArrowRight, Terminal,
  Users, MessageSquare, DollarSign, Zap, ExternalLink,
  ChevronRight, CheckCircle2, Heart, ShieldCheck, Play,
  FolderGit2, FileCode, Check, RefreshCw
} from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import HoverTilt from '@/components/animations/HoverTilt'

interface ServiceItem {
  id: string | number
  title: string
  shortDescription: string
  slug: string
  icon: string
}

interface MilestoneItem {
  badge: string
  title: string
  description: string
  tags: string
}

interface IdeFileItem {
  filename: string
  content: string
}

interface StoryParagraph {
  text: string
}

interface AboutContentProps {
  storyParagraphs: StoryParagraph[]
  milestones: MilestoneItem[]
  missionStatement: string
  visionStatement: string
  ideFiles: IdeFileItem[]
  services: ServiceItem[]
  hasProjects?: boolean
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Users: Users,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  MessageSquare: MessageSquare,
  Zap: Zap,
  DollarSign: DollarSign,
  Code: Code,
  ShoppingBag: ShoppingBag,
  Database: Database,
  Layers: Layers,
  Server: Server,
  RefreshCw: RefreshCw
}

const GLOW_COLORS = [
  'from-teal-500/20 to-emerald-500/20 hover:border-teal-500/30',
  'from-indigo-500/20 to-purple-500/20 hover:border-indigo-500/30',
  'from-emerald-500/20 to-teal-500/20 hover:border-emerald-500/30',
  'from-rose-500/20 to-amber-500/20 hover:border-rose-500/30',
  'from-cyan-500/20 to-blue-500/20 hover:border-cyan-500/30',
  'from-amber-500/20 to-orange-500/20 hover:border-amber-500/30',
  'from-blue-500/20 to-teal-500/20 hover:border-blue-500/30'
]

const CARD_ICONS = [
  <Code className="h-6 w-6 text-teal-400" />,
  <ShoppingBag className="h-6 w-6 text-indigo-400" />,
  <Database className="h-6 w-6 text-emerald-400" />,
  <Layers className="h-6 w-6 text-rose-400" />,
  <Server className="h-6 w-6 text-cyan-400" />,
  <Cpu className="h-6 w-6 text-amber-400" />,
  <RefreshCw className="h-6 w-6 text-blue-400" />
]

const whyChooseUs = [
  {
    title: 'Direct Access to the Team',
    desc: 'Work directly with the people building your product, keeping decisions, feedback, and technical context close to the work.',
    icon: <Users className="h-5 w-5 text-teal-400" />
  },
  {
    title: 'Technology With a Purpose',
    desc: "We choose technologies based on your product requirements, integrations, maintainability, and long-term needs—not simply because they're new.",
    icon: <Cpu className="h-5 w-5 text-indigo-400" />
  },
  {
    title: 'Accountable Delivery',
    desc: 'From the first requirements to the final release, we stay involved in the work and remain accountable for what we build.',
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />
  },
  {
    title: 'Visible Progress',
    desc: 'Regular milestones, working deliverables, and project updates give you a clear view of progress throughout development.',
    icon: <MessageSquare className="h-5 w-5 text-rose-400" />
  },
  {
    title: 'Built Around Your Context',
    desc: 'We adapt the solution to your workflows, users, and business requirements instead of forcing every project into the same approach.',
    icon: <Zap className="h-5 w-5 text-amber-400" />
  },
  {
    title: 'Clear Scope & Expectations',
    desc: 'Requirements, priorities, and deliverables are defined early so the project starts with a shared understanding of what needs to be built.',
    icon: <Layers className="h-5 w-5 text-cyan-400" />
  }
]

const DEFAULT_IDE_FILES: IdeFileItem[] = [
  {
    filename: 'about.ts',
    content: `const VardhSoft = {

  purpose:
    "Solve real business problems",

  approach:
    "Understand before we build",

  engineering:
    "Simple. Reliable. Maintainable.",

  mindset:
    "Build with intent",

  goal:
    "Software that evolves"
};`
  },
  {
    filename: 'principles.ts',
    content: `export const principles = [
  "Problem First, Tech Second",
  "Direct Developer Access",
  "Clean & Scalable Code",
  "Transparent Iteration"
];`
  },
  {
    filename: 'approach.yml',
    content: `approach:
  phase_1: "Deconstruct Problem"
  phase_2: "Architect System"
  phase_3: "Agile Development"
  phase_4: "Deploy & Evolve"`
  },
  {
    filename: 'vision.md',
    content: `# Vision & Mission

Turn real business challenges
into thoughtful digital products
built to evolve.`
  }
]

export default function AboutContent({
  storyParagraphs,
  milestones,
  missionStatement,
  visionStatement,
  ideFiles,
  services,
  hasProjects = false
}: AboutContentProps) {
  // Developer Workspace File Selector State
  const [activeFileIdx, setActiveFileIdx] = useState(0)

  // Tech Stack Hub State
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend_db' | 'ecommerce_cms' | 'devops_cloud' | 'mobile' | 'tools_design'>('frontend')

  const activeIdeFiles = ideFiles && ideFiles.length > 0 && ideFiles.some(f => f.filename === 'about.ts') ? ideFiles : DEFAULT_IDE_FILES
  const activeFile = activeIdeFiles[activeFileIdx] || activeIdeFiles[0] || { filename: 'about.ts', content: '' }

  const renderTechCategory = () => {
    const techData = {
      frontend: [
        'Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3'
      ],
      backend_db: [
        'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL'
      ],
      ecommerce_cms: [
        'Shopify', 'Shopify Liquid', 'Shopify APIs', 'WooCommerce', 'WordPress'
      ],
      devops_cloud: [
        'AWS', 'Vercel', 'Docker', 'Git', 'GitHub Actions', 'Nginx'
      ],
      mobile: [
        'React Native', 'Expo', 'Progressive Web Apps'
      ],
      tools_design: [
        'Figma', 'GitHub', 'Postman', 'Framer Motion', 'Storybook'
      ]
    }

    const currentList = techData[activeCategory]

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 animate-fadeIn">
        {currentList.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-3.5 h-14 rounded-lg bg-slate-900/30 border border-white/5 hover:border-teal-500/20 hover:bg-slate-900/50 transition-all duration-300 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform duration-300 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug">
              {tech}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen py-20">
      {/* Background Gradients & Grids */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-950/20 via-indigo-950/10 to-transparent -z-10" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 pt-8">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                ABOUT VARDHSOFT
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-black leading-tight tracking-tight text-white">
                <span className="block">Building Digital Products</span>
                <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent block">
                  That Matter.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <div className="space-y-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                <p>
                  <strong className="text-slate-200">VardhSoft</strong> is a software development company focused on turning real business challenges into thoughtful digital products. We work with startups and growing businesses to transform ideas, workflows, and opportunities into software that is practical, reliable, and built to evolve.
                </p>
                <p className="text-slate-300 font-medium border-l-2 border-teal-500/40 pl-3 py-0.5">
                  We believe good software starts with understanding the problem—not choosing the technology first.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-zinc-950 font-bold hover:brightness-110 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all flex items-center gap-2 group text-sm"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={hasProjects ? "/portfolio" : "/case-studies"}
                  className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/40 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-500 transition-colors text-sm font-semibold"
                >
                  See How We Work
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive IDE Console Workspace */}
          <div className="lg:col-span-5">
            <ScrollReveal variant="scale-in" delay={0.3}>
              <div className="rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur-md shadow-2xl overflow-hidden h-[395px] flex flex-col justify-between select-none">
                {/* Header Window */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-white/5 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="h-3 w-3 text-slate-500" />
                    &gt; workspace — vardhsoft
                  </div>
                  <div className="w-8" />
                </div>

                {/* Editor Layout */}
                <div className="grid grid-cols-3 flex-1 overflow-hidden min-h-0">
                  {/* File Sidebar */}
                  <div className="col-span-1 bg-slate-900/30 border-r border-white/5 p-3 flex flex-col gap-1 overflow-hidden h-full">
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1 shrink-0">
                      <FolderGit2 className="h-3 w-3" /> EXPLORER
                    </div>
                    {activeIdeFiles.map((file, idx) => (
                      <button
                        key={file.filename}
                        onClick={() => setActiveFileIdx(idx)}
                        className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-mono flex items-center gap-1.5 transition-all shrink-0 ${activeFileIdx === idx
                            ? 'bg-teal-500/10 text-teal-300 font-bold border-l-2 border-teal-400'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                          }`}
                      >
                        <FileCode className="h-3 w-3 text-teal-400 shrink-0" />
                        <span className="truncate">{file.filename}</span>
                      </button>
                    ))}
                  </div>

                  {/* Code Editor */}
                  <div className="col-span-2 p-3.5 font-mono text-[11px] leading-normal bg-[#030712] overflow-hidden text-slate-300 h-full">
                    <div className="flex gap-3 min-w-0 h-full">
                      {/* Lines numbers */}
                      <div className="text-slate-600 select-none text-right shrink-0 pr-1 leading-normal">
                        {activeFile.content.split('\n').map((_, index) => (
                          <div key={index}>{index + 1}</div>
                        ))}
                      </div>
                      {/* Content */}
                      <pre className="text-slate-300 whitespace-pre-wrap break-words min-w-0 flex-1 font-mono leading-normal overflow-hidden">
                        <code className="block">{activeFile.content}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Footer status */}
                <div className="px-4 py-2 bg-slate-900/80 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Building with purpose
                  </span>
                  <span>UTF-8 · TypeScript</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================= OUR STORY SECTION ================= */}
        {storyParagraphs.length > 0 && (
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Story Text */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal variant="fade-right">
                  <div className="space-y-3 mb-6">
                    <div className="text-xs uppercase tracking-widest text-teal-400 font-extrabold">Our Story</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      Built to Solve Real Problems.
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded mt-2" />
                  </div>

                  <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {storyParagraphs.map((p, idx) => {
                      const isHighlightLine = p.text.includes('Different problems') || p.text.includes('One consistent standard')

                      if (isHighlightLine) {
                        return (
                          <div key={idx} className="font-semibold text-teal-300 text-sm sm:text-base border-l-2 border-teal-500 pl-4 py-2.5 my-4 bg-slate-900/60 rounded-r border-white/5">
                            {p.text}
                          </div>
                        )
                      }

                      return (
                        <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {p.text}
                        </p>
                      )
                    })}
                  </div>
                </ScrollReveal>
              </div>

              {/* Visual Milestones Card */}
              {milestones.length > 0 && (
                <div className="lg:col-span-5 lg:sticky lg:top-24">
                  <ScrollReveal variant="fade-left" delay={0.2}>
                    <div className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/20 backdrop-blur-md relative overflow-hidden shadow-xl">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl -z-10" />

                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-6 flex items-center gap-2 font-bold">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                        Our First Projects
                      </h3>

                      <div className="relative">
                        {milestones.map((item, idx) => (
                          <React.Fragment key={idx}>
                            <div className="relative pl-7 group">
                              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-teal-500/40 bg-slate-950 flex items-center justify-center group-hover:border-teal-400 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[10px] font-mono font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                                    0{idx + 1}
                                  </span>
                                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                                    {item.badge}
                                  </span>
                                </div>
                                <h4 className="text-base font-bold text-white">{item.title}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                  {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                  {item.tags.split(',').map((t) => (
                                    <span key={t} className="text-[9px] font-mono bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-white/10">
                                      {t.trim()}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {idx < milestones.length - 1 && (
                              <div className="my-6 border-t border-white/10" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              )}

            </div>
          </section>
        )}

        {/* ================= MISSION & VISION ================= */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-slate-900/20 backdrop-blur-md relative overflow-hidden h-full hover:border-teal-500/30 transition-colors duration-300 shadow-xl group">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-colors duration-300" />

                <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                  <Compass className="h-6 w-6 text-teal-400" />
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">Our Mission</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {missionStatement}
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal variant="fade-up" delay={0.25}>
              <div className="p-8 rounded-2xl border border-white/10 bg-slate-900/20 backdrop-blur-md relative overflow-hidden h-full hover:border-indigo-500/30 transition-colors duration-300 shadow-xl group">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-300" />

                <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                  <Eye className="h-6 w-6 text-indigo-400" />
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">Our Vision</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {visionStatement}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================= WHAT WE DO (SERVICES GRID) ================= */}
        {services.length > 0 && (
          <section className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal variant="fade-up" delay={0.1}>
                <div className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-2">Capabilities</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What We Do</h2>
                <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                  Vardhsoft partners with businesses at every stage — from an idea on a napkin to an existing platform that needs to scale.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const glow = GLOW_COLORS[index % GLOW_COLORS.length]
                const iconComponent = CARD_ICONS[index % CARD_ICONS.length]
                const isLarge = index === 0 || index === 5

                return (
                  <ScrollReveal
                    key={service.id}
                    variant="fade-up"
                    delay={index * 0.08}
                    className={isLarge ? 'md:col-span-2' : 'col-span-1'}
                  >
                    <div
                      className="p-6 rounded-xl border border-white/5 bg-slate-900/15 relative overflow-hidden group h-full flex flex-col justify-between hover:bg-slate-900/25 transition-all duration-300"
                    >
                      {/* Decorative glowing gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-950/60 border border-white/10 flex items-center justify-center">
                          {iconComponent}
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="mt-6 flex justify-between items-center">
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-xs font-semibold text-teal-400 hover:underline inline-flex items-center gap-1"
                        >
                          Learn More <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </section>
        )}

        {/* ================= WHY CHOOSE US SECTION ================= */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-2">Our Edge</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Choose VardhSoft?</h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base">
                What you can expect when you build with VardhSoft.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal
                key={index}
                variant="fade-up"
                delay={index * 0.08}
              >
                <div className="p-7 rounded-2xl border border-white/10 bg-slate-900/20 backdrop-blur-md hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-colors duration-300 -z-10" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-teal-500/30 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-700/80 group-hover:text-teal-400/40 transition-colors select-none">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ================= TECHNOLOGIES WE WORK WITH ================= */}
        <section className="mb-32 border-t border-white/5 pt-24">
          <div className="max-w-3xl mb-12">
            <ScrollReveal variant="fade-up">
              <div className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-2">Our Stack</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                Technologies We Work With
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We work primarily with modern JavaScript and TypeScript technologies, using the right tools to build fast, scalable products without unnecessary complexity.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal variant="fade-up" delay={0.15}>
              {/* Category tab selector */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-950 border border-white/5 rounded-lg mb-6">
                {[
                  { id: 'frontend', label: '01 — Frontend' },
                  { id: 'backend_db', label: '02 — Backend & DB' },
                  { id: 'ecommerce_cms', label: '03 — E-Commerce / CMS' },
                  { id: 'devops_cloud', label: '04 — Cloud & DevOps' },
                  { id: 'mobile', label: '05 — Mobile / PWA' },
                  { id: 'tools_design', label: '06 — Tools & Design' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`px-2.5 py-2 sm:py-2.5 rounded text-[11px] sm:text-xs font-semibold text-center flex items-center justify-center min-h-[38px] transition-all cursor-pointer ${activeCategory === tab.id
                        ? 'bg-teal-500 text-zinc-950 font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tech chips panel */}
              <div className="p-6 sm:p-8 rounded-xl border border-white/5 bg-slate-900/10 h-[580px] sm:h-[260px] overflow-hidden">
                {renderTechCategory()}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================= CALL TO ACTION SECTION ================= */}
        <section className="mt-20">
          <ScrollReveal variant="scale-in">
            <div className="p-10 md:p-16 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-md relative overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-teal-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-2">Let's Collaborate</div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Have an Idea? <br className="sm:hidden" />
                  <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent">
                    Let's Build It Right.
                  </span>
                </h2>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Whether you're a startup with a bold idea, an institution that needs to modernize, or a brand ready to sell online — Vardhsoft is ready to build it with you, from the first line of code to launch day and beyond.
                </p>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-lg bg-teal-400 text-zinc-950 font-bold hover:bg-teal-300 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/25 transition-all text-sm"
                  >
                    Get a Free Consultation
                  </Link>
                  <Link
                    href={hasProjects ? "/portfolio" : "/case-studies"}
                    className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/30 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-500 transition-colors text-sm font-semibold"
                  >
                    View Our Portfolio
                  </Link>
                </div>

                <p className="text-xs text-slate-500 pt-2 italic">
                  Let's turn your idea into working software — reach out today.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </div>
  )
}
