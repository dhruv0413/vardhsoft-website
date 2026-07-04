import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Sparkles, BarChart, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('caseStudies', {
    title: 'Client Case Studies | VardhSoft',
    description: 'Read how VardhSoft has helped clients across industries solve complex business challenges with custom software — real outcomes, real impact.',
  })
}

export default async function CaseStudiesPage() {
  const payload = await getPayload({ config })
  const { docs: caseStudies } = await payload.find({
    collection: 'case-studies',
    depth: 1,
    limit: 100,
    sort: '-createdAt',
  })

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen py-24">
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Impact
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Read about the metrics, outcomes, and business impact we have delivered.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="p-8 rounded-2xl border border-white/5 bg-slate-900/30 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest leading-relaxed">
                    {study.industry as string} • {study.clientName as string}
                  </span>
                  {study.duration && (
                    <span className="flex items-center gap-1 text-xs text-slate-500 shrink-0 whitespace-nowrap pt-0.5">
                      <Clock className="h-3 w-3" />
                      {study.duration as string}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>

                {/* Results highlight */}
                <div className="p-4 rounded-lg bg-slate-950 border border-white/5 space-y-2 mb-6">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BarChart className="h-3.5 w-3.5" /> Business Outcome
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {(study as any).results
                      ? typeof (study as any).results === 'string'
                        ? (study as any).results
                        : (study as any).results?.root?.children?.[0]?.children?.[0]?.text ?? ''
                      : ''}
                  </p>
                </div>

                {/* Technologies */}
                {((study.technologies as any[]) ?? []).length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {((study.technologies as any[]) ?? []).map((tech: any) => (
                      <span
                        key={tech.id ?? tech}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-xs text-slate-400"
                      >
                        {tech.name ?? tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href={`/case-studies/${study.slug}`}
                className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 group/link"
              >
                Read Case Study
                <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <div className="text-center py-20 text-slate-500">No case studies found.</div>
        )}
      </div>
    </div>
  )
}
