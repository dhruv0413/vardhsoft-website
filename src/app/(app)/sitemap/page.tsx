import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import {
  Sparkles, Map, ChevronRight, HelpCircle, Shield, Globe,
  Award, Briefcase, PhoneCall, Cpu, Server, ExternalLink,
  Layers, Database, FileText, Building2, BookOpen, Calendar,
  Scale, Lock, ArrowRight, Layout
} from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Sitemap | VardhSoft',
  description: 'Complete navigation directory of VardhSoft website pages, services, case studies, technologies, and corporate policies.',
}

export default async function SitemapPage() {
  const payload = await getPayload({ config })
  
  // Fetch dynamic services
  const { docs: services } = await payload.find({
    collection: 'services',
    sort: 'title',
    limit: 100,
    depth: 1,
  })

  // Fetch sub-services grouped by parent
  const { docs: subServices } = await payload.find({
    collection: 'sub-services',
    sort: 'title',
    limit: 200,
    depth: 1,
  })

  // Fetch dynamic projects
  const { docs: projects } = await payload.find({
    collection: 'projects',
    sort: '-createdAt',
    limit: 100,
    depth: 1,
  })

  // Fetch dynamic case studies
  const { docs: caseStudies } = await payload.find({
    collection: 'case-studies',
    sort: '-createdAt',
    limit: 100,
    depth: 1,
  })

  // Fetch dynamic career openings
  const { docs: jobs } = await payload.find({
    collection: 'careers',
    where: { status: { equals: 'published' } },
    limit: 100,
  })

  // Fetch industries
  const { docs: industries } = await payload.find({
    collection: 'industries',
    sort: 'name',
    limit: 100,
  })

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen py-24">
      {/* Background Gradients & Ambient Lights */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-950/20 via-indigo-950/10 to-transparent -z-10" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ================= HERO HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Map className="h-4 w-4 text-teal-400" />
              Sitemap & Directory
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent tracking-tight">
              Sitemap
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="mt-6 text-slate-400 text-sm sm:text-base leading-relaxed">
              Complete index directory of Vardhsoft public pages, core engineering services, active client projects, and compliance policies.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-20">

          {/* ================= SECTION 1: SITE DIRECTORY ================= */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
                <Globe className="h-4 w-4 text-teal-400" />
                Main Directory
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Services Overview', path: '/services' },
                  { label: 'Industries', path: '/industries' },
                  { label: 'Technologies', path: '/technologies' },
                  { label: 'Portfolio Catalog', path: projects.length > 0 ? '/portfolio' : '/case-studies' },
                  { label: 'Case Studies', path: '/case-studies' },
                  { label: 'Careers', path: '/careers' },
                  { label: 'Book a Meeting', path: '/book' },
                  { label: 'Contact', path: '/contact' },
                  { label: 'Sitemap', path: '/sitemap' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.path}
                    className="px-4 py-2.5 rounded-lg bg-slate-900/30 border border-white/5 text-xs font-semibold text-slate-300 hover:text-teal-400 hover:bg-slate-900/60 hover:border-teal-500/20 transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-3 w-3 text-slate-600 group-hover:text-teal-400" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECTION 2: CORE SERVICES ================= */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-indigo-400" />
                  Core Engineering Services
                </h2>
                <Link
                  href="/services"
                  className="text-xs text-slate-400 hover:text-indigo-400 transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  View Services Hub <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-indigo-500/20 hover:bg-slate-900/30 transition-all group flex flex-col justify-between h-full"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 flex items-center justify-between">
                        <span>{service.title}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-indigo-400 shrink-0" />
                      </h3>
                      {service.shortDescription && (
                        <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                          {service.shortDescription}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}

                {services.length === 0 && (
                  <div className="col-span-full text-xs text-slate-500 italic p-5 border border-dashed border-white/5 rounded-xl">
                    No services indexed in the database.
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECTION 3: SUB-SERVICES ================= */}
          {subServices.length > 0 && (
            <ScrollReveal variant="fade-up" delay={0.18}>
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-cyan-400" />
                    Service Specialisations
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subServices.map((sub) => {
                    const parentSlug = typeof sub.parentService === 'object' && sub.parentService !== null
                      ? (sub.parentService as any).slug
                      : null
                    if (!parentSlug) return null
                    return (
                      <Link
                        key={sub.id}
                        href={`/services/${parentSlug}/${sub.slug}`}
                        className="px-4 py-3 rounded-lg border border-white/5 bg-slate-900/10 hover:border-cyan-500/20 hover:bg-slate-900/30 transition-all group flex items-center justify-between"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">{sub.title}</p>
                          {parentSlug && (
                            <p className="text-[10px] text-slate-600 mt-0.5">/services/{parentSlug}</p>
                          )}
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400 shrink-0" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ================= SECTION 4: INDUSTRIES ================= */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-orange-400" />
                  Industries We Serve
                </h2>
                <Link
                  href="/industries"
                  className="text-xs text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  Industries Hub <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry) => (
                  <Link
                    key={industry.id}
                    href={`/industries/${industry.slug}`}
                    className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-orange-500/20 hover:bg-slate-900/30 transition-all group flex flex-col justify-between h-full"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors flex items-center justify-between">
                        <span>{industry.title}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-orange-400 shrink-0" />
                      </h3>
                      {industry.overview && (
                        <p className="text-[11px] text-slate-400 mt-2 leading-relaxed line-clamp-2">
                          {industry.overview as string}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}

                {industries.length === 0 && (
                  <div className="col-span-full text-xs text-slate-500 italic p-5 border border-dashed border-white/5 rounded-xl">
                    No industries indexed in the database.
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECTION 5: FEATURED PROJECTS ================= */}
          <ScrollReveal variant="fade-up" delay={0.22}>
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                  <Award className="h-4 w-4 text-amber-400" />
                  Featured Projects
                </h2>
                <Link
                  href={projects.length > 0 ? '/portfolio' : '/case-studies'}
                  className="text-xs text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  View Portfolio <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => {
                  const projectUrl = (project.liveUrl as string) || '/portfolio'
                  const isExternal = !!project.liveUrl

                  return (
                    <a
                      key={project.id}
                      href={projectUrl}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-amber-500/20 hover:bg-slate-900/30 transition-all group flex flex-col justify-between h-full"
                    >
                      <div>
                        <span className="text-[9px] font-mono text-amber-400 font-semibold tracking-wide uppercase px-2 py-0.5 rounded border border-amber-500/10 bg-amber-500/5 mb-3 inline-block">
                          {project.industry as string}
                        </span>
                        <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                          <span className="truncate">{project.title}</span>
                          {isExternal ? (
                            <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0 ml-1.5" />
                          ) : (
                            <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-amber-400 shrink-0" />
                          )}
                        </h3>
                      </div>
                    </a>
                  )
                })}

                {projects.length === 0 && (
                  <div className="col-span-full text-xs text-slate-500 italic p-5 border border-dashed border-white/5 rounded-xl">
                    No projects found. Add projects via the admin panel to have them appear here.
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECTION 6: CLIENT CASE STUDIES ================= */}
          <ScrollReveal variant="fade-up" delay={0.25}>
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  Client Case Studies
                </h2>
                <Link
                  href="/case-studies"
                  className="text-xs text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  View Case Studies <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study) => (
                  <Link
                    key={study.id}
                    href={`/case-studies/${study.slug}`}
                    className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-emerald-500/20 hover:bg-slate-900/30 transition-all group flex flex-col justify-between h-full"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-emerald-400 font-semibold tracking-wide uppercase px-2 py-0.5 rounded border border-emerald-500/10 bg-emerald-500/5 mb-3 inline-block">
                        {study.clientName as string}
                      </span>
                      <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                        <span className="truncate">{study.title}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-emerald-400 shrink-0" />
                      </h3>
                    </div>
                  </Link>
                ))}

                {caseStudies.length === 0 && (
                  <div className="col-span-full text-xs text-slate-500 italic p-5 border border-dashed border-white/5 rounded-xl">
                    No case studies found in the database.
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECTION 7: CAREERS ================= */}
          <ScrollReveal variant="fade-up" delay={0.3}>
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-purple-400" />
                  Open Career Profiles
                </h2>
                <Link
                  href="/careers"
                  className="text-xs text-slate-400 hover:text-purple-400 transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  Careers Portal <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <Link
                    key={job.id}
                    href="/careers"
                    className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-purple-500/20 hover:bg-slate-900/30 transition-all group flex flex-col justify-between h-full"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <span className="text-[9px] text-slate-500 font-mono mt-3 flex items-center justify-between">
                        <span>{job.department}</span>
                        <span className="bg-purple-500/5 border border-purple-500/10 px-1.5 py-0.5 rounded text-purple-400">
                          {job.location}
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}

                {jobs.length === 0 && (
                  <div className="col-span-full text-xs text-slate-500 italic p-5 border border-dashed border-white/5 rounded-xl">
                    No open positions at this moment.
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECTION 8: QUICK ACTIONS ================= */}
          <ScrollReveal variant="fade-up" delay={0.33}>
            <div>
              <div className="flex items-center mb-6 border-b border-white/5 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-sky-400" />
                  Quick Actions
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/book"
                  className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-sky-500/20 hover:bg-slate-900/30 transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <Calendar className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">Book a Consultation</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">Schedule a free 30-minute discovery call with our engineering team.</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-sky-400 ml-auto shrink-0 transition-all group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-teal-500/20 hover:bg-slate-900/30 transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                    <PhoneCall className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">Contact Us</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">Send us a message or inquiry about a project or collaboration.</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-teal-400 ml-auto shrink-0 transition-all group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ================= SECTION 9: LEGAL & POLICIES ================= */}
          <ScrollReveal variant="fade-up" delay={0.35}>
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-rose-400 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-rose-400" />
                  Legal & Compliance
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Legal & Compliance Hub', path: '/legal-and-compliance', icon: <Shield className="h-4 w-4" /> },
                  { label: 'Privacy Policy', path: '/privacy-policy', icon: <Lock className="h-4 w-4" /> },
                  { label: 'Cookie Policy', path: '/cookie-policy', icon: <Sparkles className="h-4 w-4" /> },
                  { label: 'Terms & Conditions', path: '/terms-and-conditions', icon: <Scale className="h-4 w-4" /> },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="p-5 rounded-xl border border-white/5 bg-slate-900/10 hover:border-rose-500/20 hover:bg-slate-900/30 transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-rose-400 shrink-0">{item.icon}</span>
                      <span className="text-xs font-bold text-slate-300 group-hover:text-rose-400 transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-rose-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ================= HELP & FOOTER SUPPORT ================= */}
        <div className="mt-24 text-center">
          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="inline-flex items-center gap-2.5 p-4 rounded-xl border border-white/5 bg-slate-900/10 max-w-2xl mx-auto text-xs text-slate-400 leading-relaxed shadow-sm">
              <HelpCircle className="h-5 w-5 text-teal-400 shrink-0" />
              <span>
                Need direct technical assistance? Reach out to our team via the{' '}
                <Link href="/contact" className="text-teal-300 font-bold hover:underline">
                  Contact Page
                </Link>{' '}
                for custom support.
              </span>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  )
}
