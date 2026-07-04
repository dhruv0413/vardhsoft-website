'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowLeft, Clock, Tag, Briefcase, Users, CheckCircle2,
  Lightbulb, Zap, TrendingUp, Quote, ArrowRight, Code2,
  Shield, ShoppingBag, Target, Layers, BarChart3
} from 'lucide-react'
import Link from 'next/link'

// ─── Types ───────────────────────────────────────────────────────────────────

interface RichTextNode {
  type: string
  text?: string
  children?: RichTextNode[]
}

interface CaseStudyDetailProps {
  study: {
    id: string
    title: string
    slug: string
    clientName: string
    industry: string
    duration: string
    projectType?: string
    servicesProvided?: string
    overview?: { root?: { children?: RichTextNode[] } }
    problem?: { root?: { children?: RichTextNode[] } }
    approach?: { root?: { children?: RichTextNode[] } }
    solution?: { root?: { children?: RichTextNode[] } }
    implementation?: { root?: { children?: RichTextNode[] } }
    results?: { root?: { children?: RichTextNode[] } }
    keyTakeaway?: { root?: { children?: RichTextNode[] } }
    clientQuote?: string
    technologies?: Array<{ id: string; name: string; slug?: string } | string>
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function extractText(richText: any): string {
  if (!richText) return ''
  if (typeof richText === 'string') return richText
  const children = richText?.root?.children ?? []
  const parts: string[] = []
  function walk(nodes: RichTextNode[]) {
    for (const node of nodes) {
      if (node.text) parts.push(node.text)
      if (node.children) walk(node.children)
    }
  }
  walk(children)
  return parts.join(' ')
}

/** Split a long string by ". " or "— " into bullet array */
function toBullets(text: string): string[] {
  // Split on sentences that end with period + capital letter or em-dash separated items
  return text
    .split(/(?<=\.)\s+(?=[A-Z])|(?<=\.)\s+(?=Phase)|—\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 10)
}

// ─── Animation Wrapper ───────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Icon helper ─────────────────────────────────────────────────────────────
function industryIcon(industry: string) {
  if (industry.toLowerCase().includes('animal') || industry.toLowerCase().includes('welfare')) return Shield
  if (industry.toLowerCase().includes('fashion') || industry.toLowerCase().includes('e-commerce')) return ShoppingBag
  return Briefcase
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const IndustryIcon = industryIcon(study.industry)

  const overviewText = extractText(study.overview)
  const problemText = extractText(study.problem)
  const approachText = extractText(study.approach)
  const solutionText = extractText(study.solution)
  const implementationText = extractText(study.implementation)
  const resultsText = extractText(study.results)
  const keyTakeawayText = extractText(study.keyTakeaway)

  const problemBullets = toBullets(problemText)
  const approachBullets = toBullets(approachText)
  const solutionBullets = toBullets(solutionText)
  const resultsBullets = toBullets(resultsText)

  const techList = (study.technologies ?? []).map((t: any) =>
    typeof t === 'string' ? t : (t?.name ?? '')
  ).filter(Boolean)

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      {/* Background ambient glows */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-teal-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-[40%] right-0 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <FadeUp delay={0}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              All Case Studies
            </Link>
          </FadeUp>

          {/* Industry + Client badge row */}
          <FadeUp delay={0.1} className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <IndustryIcon className="h-3.5 w-3.5" />
              {study.industry}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium">
              <Users className="h-3.5 w-3.5" />
              {study.clientName}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {study.duration}
            </span>
          </FadeUp>

          {/* Title */}
          <FadeUp delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent leading-tight tracking-tight mb-6">
              {study.title}
            </h1>
          </FadeUp>

          {/* Meta row */}
          <FadeUp delay={0.2} className="flex flex-wrap gap-6 mb-8 text-sm text-slate-400">
            {study.servicesProvided && (
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-indigo-400" />
                {study.servicesProvided}
              </span>
            )}
            {study.projectType && (
              <span className="flex items-center gap-1.5">
                <Tag className="h-4 w-4 text-teal-400" />
                {study.projectType}
              </span>
            )}
          </FadeUp>

          {/* Tech stack pills */}
          {techList.length > 0 && (
            <FadeUp delay={0.25} className="flex flex-wrap gap-2">
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-white/8 text-xs text-slate-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <FadeUp delay={0} className="lg:col-span-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Lightbulb className="h-3.5 w-3.5" />
              Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              The Full Picture
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} className="lg:col-span-2">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {overviewText}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── THE CHALLENGE ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0} className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Target className="h-3.5 w-3.5" />
              The Challenge
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              What We Were Up Against
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problemBullets.map((bullet, idx) => (
              <FadeUp key={idx} delay={0.08 * idx}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-slate-900/50">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">{bullet}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────── */}
      {approachBullets.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-5xl mx-auto">
            <FadeUp delay={0} className="mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Code2 className="h-3.5 w-3.5" />
                Our Approach
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                How We Approached It
              </h2>
            </FadeUp>

            <div className="space-y-4">
              {approachBullets.map((step, idx) => (
                <FadeUp key={idx} delay={0.1 * idx}>
                  <div className="flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-slate-900/40 hover:border-indigo-500/20 transition-colors duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-300 text-sm font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-0.5">{step}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── THE SOLUTION ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0} className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="h-3.5 w-3.5" />
              The Solution
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              What We Built
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutionBullets.map((item, idx) => (
              <FadeUp key={idx} delay={0.08 * idx}>
                <div className="flex items-start gap-3 p-5 rounded-xl border border-white/5 bg-slate-900/60 hover:border-teal-500/20 transition-colors duration-300 h-full">
                  <CheckCircle2 className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION PHASES ──────────────────────────────────────────── */}
      {implementationText && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-5xl mx-auto">
            <FadeUp delay={0} className="mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Layers className="h-3.5 w-3.5" />
                Implementation
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                How We Delivered It
              </h2>
            </FadeUp>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-teal-500/20 to-transparent hidden sm:block" />
              <div className="space-y-4">
                {toBullets(implementationText).map((phase, idx) => (
                  <FadeUp key={idx} delay={0.1 * idx}>
                    <div className="sm:pl-12 relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-emerald-500/20 sm:absolute sm:left-0">
                        {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1 sm:pt-0">{phase}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0} className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <TrendingUp className="h-3.5 w-3.5" />
              Results
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              What We Delivered
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {resultsBullets.map((result, idx) => (
              <FadeUp key={idx} delay={0.1 * idx}>
                <div className="flex items-start gap-3 p-5 rounded-xl border border-amber-500/10 bg-gradient-to-br from-amber-500/5 to-transparent">
                  <BarChart3 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">{result}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Client quote */}
          {study.clientQuote && (
            <FadeUp delay={0.3}>
              <div className="relative p-8 rounded-2xl border border-white/8 bg-slate-900/50 overflow-hidden">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-teal-400/20" />
                <p className="text-lg text-slate-200 italic leading-relaxed pl-6">
                  {study.clientQuote}
                </p>
                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full" />
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── KEY TAKEAWAY ─────────────────────────────────────────────────── */}
      {keyTakeawayText && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-5xl mx-auto">
            <FadeUp delay={0}>
              <div className="relative p-8 sm:p-12 rounded-2xl border border-teal-500/15 bg-gradient-to-br from-teal-500/5 via-transparent to-indigo-500/5 overflow-hidden">
                {/* Ambient corner glow */}
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-6">
                    <Lightbulb className="h-3.5 w-3.5" />
                    Key Takeaway
                  </div>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                    {keyTakeawayText}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp delay={0}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Have a similar challenge?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We'd love to hear about your project. Let's figure out if we're the right team to build it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-400 hover:to-indigo-400 text-white font-bold text-sm shadow-lg shadow-teal-500/15 hover:shadow-teal-500/30 transition-all duration-300"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                More Case Studies
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
