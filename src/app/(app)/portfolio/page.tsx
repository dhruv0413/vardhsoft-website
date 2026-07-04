import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Sparkles, Globe, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import ScrollReveal from '@/components/animations/ScrollReveal'
import HoverTilt from '@/components/animations/HoverTilt'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('portfolio', {
    title: 'Portfolio | VardhSoft',
    description: "Browse VardhSoft's portfolio of completed software projects — web platforms, mobile apps, SaaS products, and business automation systems built for real clients.",
  })
}

export default async function PortfolioPage() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    depth: 1,
    limit: 100,
    sort: '-createdAt',
  })

  if (projects.length === 0) {
    redirect('/case-studies')
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen py-24">
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal variant="fade-up" delay={0.1} duration={0.6}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Case Showcase
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2} duration={0.7}>
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent">
              Our Work & Projects
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3} duration={0.7}>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Discover how we build scalable digital solutions for our partners.
            </p>
          </ScrollReveal>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const techs = (project.technologies as any[]) ?? []
            const firstImage = Array.isArray(project.gallery) && project.gallery.length > 0 ? project.gallery[0] : null
            const imageUrl = typeof firstImage === 'object' && firstImage && 'url' in firstImage ? (firstImage.url as string) : null
            const imageAlt = typeof firstImage === 'object' && firstImage && 'altText' in firstImage ? (firstImage.altText as string) : project.title

            return (
              <ScrollReveal
                key={project.id}
                variant="fade-up"
                delay={idx * 0.1}
                duration={0.6}
              >
                <HoverTilt className="h-full">
                  <div
                    className="rounded-2xl border border-white/5 bg-slate-900/30 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
                  >
                    <div>
                      {/* Project Cover Image */}
                      <div className="relative aspect-[16/10] w-full bg-slate-950 border-b border-white/5 overflow-hidden">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={imageAlt}
                            fill
                            sizes="(max-w-768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-950 opacity-20 text-teal-400">
                            <span className="text-[10px] uppercase font-bold tracking-widest">Premium Project</span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block mb-2">
                          {project.industry as string}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                          {/* description is richtext – show shortDescription if available */}
                          {(project as any).shortDescription ?? 'A high-performance product designed and built by VardhSoft.'}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {techs.map((tech: any) => (
                            <span
                              key={tech.id ?? tech}
                              className="px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-[10px] text-slate-300"
                            >
                              {tech.name ?? tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-4 border-t border-white/5 flex gap-4 text-xs font-semibold text-slate-400 mt-auto">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-teal-400 transition-colors"
                        >
                          <Globe className="h-3.5 w-3.5" /> Live Site
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 opacity-30">
                          <Globe className="h-3.5 w-3.5" /> Live Site
                        </span>
                      )}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-teal-400 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> GitHub
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 opacity-30">
                          <ExternalLink className="h-3.5 w-3.5" /> GitHub
                        </span>
                      )}
                    </div>
                  </div>
                </HoverTilt>
              </ScrollReveal>
            )
          })}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20 text-slate-500">No projects found.</div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <ScrollReveal variant="scale-in" duration={0.8}>
            <p className="text-slate-400 mb-6">Have a project in mind? Let's build it together.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

