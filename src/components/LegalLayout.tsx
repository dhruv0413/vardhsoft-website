'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Shield, Lock, FileText, Scale, ChevronRight, HelpCircle,
  ArrowRight, ArrowLeft, Layers, Sparkles, CheckCircle2,
  AlertCircle
} from 'lucide-react'
import ScrollReveal from './animations/ScrollReveal'

type TabType = 'overview' | 'privacy' | 'cookie' | 'terms'

interface LegalLayoutProps {
  initialTab: TabType
}

export default function LegalLayout({ initialTab }: LegalLayoutProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab)
  const [activeSection, setActiveSection] = useState<string>('introduction')
  const contentContainerRef = useRef<HTMLDivElement>(null)

  // Map of tab IDs to indices to handle pagination
  const tabsList: TabType[] = ['overview', 'privacy', 'cookie', 'terms']
  const currentTabIdx = tabsList.indexOf(activeTab)

  // Define headings structure for sidebar ScrollSpy/Navigation per tab
  const tabSections = {
    overview: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'commitment', label: 'Our Commitment' },
      { id: 'policies', label: 'Applicable Policies' },
      { id: 'standards', label: 'Compliance Standards' },
      { id: 'responsibilities', label: 'User Responsibilities' },
      { id: 'contact', label: 'Contact Information' },
      { id: 'updates', label: 'Policy Updates' }
    ],
    privacy: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'collect', label: 'Information We Collect' },
      { id: 'how-collect', label: 'How We Collect' },
      { id: 'how-use', label: 'How We Use Information' },
      { id: 'cookies', label: 'Cookies & Tracking' },
      { id: 'sharing', label: 'Sharing of Information' },
      { id: 'third-party', label: 'Third-Party Services' },
      { id: 'security', label: 'Data Security' },
      { id: 'retention', label: 'Data Retention' },
      { id: 'rights', label: 'Your Rights' },
      { id: 'children', label: "Children's Privacy" },
      { id: 'international', label: 'International Transfers' },
      { id: 'changes', label: 'Changes to This Policy' },
      { id: 'contact-details', label: 'Contact Us' }
    ],
    cookie: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'what-cookies', label: 'What Are Cookies' },
      { id: 'types', label: 'Types of Cookies We Use' },
      { id: 'managing', label: 'Managing Preferences' },
      { id: 'disabling', label: 'Disabling Cookies' },
      { id: 'changes', label: 'Changes to This Policy' },
      { id: 'contact-details', label: 'Contact Us' }
    ],
    terms: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'acceptance', label: 'Acceptance of Terms' },
      { id: 'definitions', label: 'Definitions' },
      { id: 'eligibility', label: 'Eligibility' },
      { id: 'use', label: 'Use of the Website' },
      { id: 'accounts', label: 'User Accounts' },
      { id: 'intellectual', label: 'Intellectual Property' },
      { id: 'responsibilities', label: 'User Responsibilities' },
      { id: 'prohibited', label: 'Prohibited Activities' },
      { id: 'third-party', label: 'Third-Party Links' },
      { id: 'disclaimer', label: 'Disclaimer of Warranties' },
      { id: 'limitation', label: 'Limitation of Liability' },
      { id: 'indemnification', label: 'Indemnification' },
      { id: 'termination', label: 'Termination' },
      { id: 'governing', label: 'Governing Law' },
      { id: 'changes', label: 'Changes to These Terms' },
      { id: 'contact-details', label: 'Contact Information' }
    ]
  }

  // ScrollSpy listener to dynamically highlight the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tabSections[activeTab]
      // Trigger Y set to align with sticky Header + sticky Tab Bar offset
      const triggerY = 180
      let currentActive = 'introduction'

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerY) {
            currentActive = section.id
          }
        }
      }

      // Check if user scrolled to the bottom of the page, force highlight the last item
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      if (isAtBottom && sections.length > 0) {
        currentActive = sections[sections.length - 1].id
      }

      setActiveSection(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on load/tab change
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeTab])

  // Handle Tab Switch
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setActiveSection('introduction')
    
    // Scroll page back to top when switching tabs/policies
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      // Update browser url without reload for user convenience
      window.history.pushState(null, '', `/${tab === 'overview' ? 'legal-and-compliance' : tab === 'privacy' ? 'privacy-policy' : tab === 'cookie' ? 'cookie-policy' : 'terms-and-conditions'}`)
    }
  }

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      // Offset to account for fixed navbar header (64px) + sticky tab bar (~80px) = 144px, adding 16px safety gap
      const yOffset = -160
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-x-clip bg-slate-950 text-slate-100 min-h-screen pt-4 pb-20">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-950/20 via-indigo-950/10 to-transparent -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ================= HEADER SECTION ================= */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 pt-4 border-b border-white/5 pb-6">
          <div className="space-y-2 max-w-2xl text-left">
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent tracking-tight">
                Legal & Compliance
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Important legal information and policies that govern your use of our website and services. Please read these carefully.
              </p>
            </ScrollReveal>
          </div>

          {/* Premium layered shield visualizer - Compacted */}
          <ScrollReveal variant="scale-in" delay={0.2} className="shrink-0 hidden sm:block">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-16 h-16 rounded-xl border border-white/10 bg-slate-950/40 backdrop-blur-md flex items-center justify-center group shadow-2xl">
                <Shield className="h-9 w-9 text-teal-400 group-hover:scale-110 transition-transform duration-500" />
                <Layers className="h-4 w-4 text-indigo-400 absolute -top-1.5 -right-1.5 animate-bounce" style={{ animationDuration: '3.5s' }} />
                <FileText className="h-4 w-4 text-emerald-400 absolute bottom-1 -left-1.5 rotate-12" />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ================= STICKY TABS BAR ================= */}
        <div className="sticky top-16 z-30 bg-slate-950/95 backdrop-blur-md py-4 border-b border-white/5 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 bg-slate-950/80 border border-white/5 rounded-xl shadow-inner">
            {[
              { id: 'overview', label: 'Legal & Compliance', icon: <Shield className="h-4 w-4" /> },
              { id: 'privacy', label: 'Privacy Policy', icon: <Lock className="h-4 w-4" /> },
              { id: 'cookie', label: 'Cookie Policy', icon: <Sparkles className="h-4 w-4" /> },
              { id: 'terms', label: 'Terms & Conditions', icon: <Scale className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as TabType)}
                className={`px-3 py-3 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-zinc-950 font-black shadow-lg shadow-teal-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ================= MAIN COLUMN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* LEFT SIDEBAR: Table of Contents (Sticky under Tab Bar) */}
          <div className="lg:col-span-3 sticky top-36 hidden lg:block space-y-4">
            <div className="p-5 rounded-xl border border-white/5 bg-slate-950/30 backdrop-blur-md space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-teal-400 flex items-center gap-2 pb-2.5 border-b border-white/5">
                <Layers className="h-3.5 w-3.5" />
                On this page
              </h3>
              
              <ul className="space-y-1">
                {tabSections[activeTab].map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left pl-3.5 py-2 text-xs border-l transition-all truncate ${
                        activeSection === section.id
                          ? 'border-teal-400 text-teal-300 font-extrabold bg-teal-500/5'
                          : 'border-white/5 text-slate-500 hover:text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-teal-500/10 bg-teal-500/5 text-[11px] text-teal-300 flex items-start gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                Self-consultation template. Verify against regional policies (DPDP Act, GDPR) before commercial scaling.
              </span>
            </div>
          </div>

          {/* RIGHT CONTAINER: Document Display */}
          <div className="lg:col-span-9" ref={contentContainerRef}>
            <div className="p-6 sm:p-10 rounded-2xl border border-white/10 bg-slate-900/30 backdrop-blur-md shadow-2xl space-y-8">
              
              {/* TAB 1: OVERVIEW CONTENT */}
              {activeTab === 'overview' && (
                <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
                  
                  {/* Section 1 */}
                  <div id="introduction" className="space-y-4 pt-2">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                      1. Introduction
                    </h2>
                    <p>
                      Welcome to the Legal & Compliance section of the Vardhsoft website. This page serves as a central hub that brings together all the policies, terms, and standards that govern how you interact with Vardhsoft — whether you're a visitor browsing our website, a client engaging us for a software development project, or an end user of a product we've built. We believe that trust is earned through transparency, and this section exists so that you always know exactly where you stand with us, legally and ethically, at every stage of our relationship.
                    </p>
                    <p>
                      This overview is not a replacement for our individual policies (Privacy Policy, Cookie Policy, and Terms & Conditions) — it is a map that helps you understand how they connect, what each one covers, and where to go if you have a specific question. We've written these documents in as plain a language as legal accuracy allows, because we don't believe you should need a law degree to understand how your data is handled or what you're agreeing to.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div id="commitment" className="space-y-4">
                    <h2 className="text-xl font-bold text-white border-b border-white/5 pb-2">
                      2. Our Commitment
                    </h2>
                    <p>
                      At Vardhsoft, legal compliance isn't treated as a box-ticking exercise bolted on after development is complete — it's something we consider from the earliest stages of any project, whether that's our own website, our internal systems, or the client platforms we build (such as management systems and e-commerce stores). We are committed to:
                    </p>
                    <ul className="space-y-2.5 pl-5 list-disc text-slate-400">
                      <li>
                        <strong className="text-white">Transparency</strong> — clearly explaining what data we collect, why we collect it, and what we do with it, in every product and service we operate or build.
                      </li>
                      <li>
                        <strong className="text-white">Data minimization</strong> — collecting only the information genuinely necessary to deliver our services, not hoarding data "just in case."
                      </li>
                      <li>
                        <strong className="text-white">Security by design</strong> — building applications, from Next.js platforms to Shopify storefronts, with reasonable technical and organizational safeguards baked in rather than added as an afterthought.
                      </li>
                      <li>
                        <strong className="text-white">Accountability</strong> — taking ownership when something goes wrong, communicating honestly, and correcting course quickly.
                      </li>
                      <li>
                        <strong className="text-white">Respecting user choice</strong> — giving visitors, clients, and end users meaningful control over their information wherever legally required and practically possible.
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div id="policies" className="space-y-4">
                    <h2 className="text-xl font-bold text-white border-b border-white/5 pb-2">
                      3. Applicable Policies
                    </h2>
                    <p>
                      The following documents together make up our legal framework. Each is independently accessible, and each governs a specific aspect of your interaction with us:
                    </p>
                    <ul className="space-y-3.5 pl-5 list-disc text-slate-400">
                      <li>
                        <strong className="text-white">Privacy Policy</strong> — Explains what personal information we collect through our website and services, how we use it, who we share it with, and the rights you have over your data.
                      </li>
                      <li>
                        <strong className="text-white">Cookie Policy</strong> — Explains the cookies and similar tracking technologies used on our website, their purpose, and how you can manage your preferences.
                      </li>
                      <li>
                        <strong className="text-white">Terms & Conditions</strong> — Sets out the rules for using our website, the terms under which we provide services, intellectual property rights, limitations of liability, and other legal terms governing our relationship with you.
                      </li>
                      <li>
                        <strong className="text-white">Service/Client Agreements</strong> (where applicable) — For clients engaging Vardhsoft for custom development work, a separate, individually negotiated Statement of Work (SOW) or Service Agreement governs the specifics of that engagement, including deliverables, timelines, payment terms, and ownership of custom-built code. Where such an agreement exists, it takes precedence over the general Terms & Conditions for matters it specifically addresses.
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div id="standards" className="space-y-4">
                    <h2 className="text-xl font-bold text-white border-b border-white/5 pb-2">
                      4. Compliance Standards
                    </h2>
                    <p>
                      Vardhsoft designs its internal processes and client deliverables with reference to recognized data protection and security principles, including:
                    </p>
                    <ul className="space-y-2.5 pl-5 list-disc text-slate-400">
                      <li>
                        <strong className="text-white">India's Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> — as our primary operating jurisdiction, we align our data handling practices with the DPDP Act's principles of lawful processing, purpose limitation, and data fiduciary responsibility.
                      </li>
                      <li>
                        <strong className="text-white">General Data Protection Regulation (GDPR)</strong> — where we or our clients process data belonging to individuals in the European Union/EEA, we apply GDPR-aligned practices around consent, data subject rights, and lawful basis for processing.
                      </li>
                      <li>
                        <strong className="text-white">General industry security practices</strong> — including secure authentication, encrypted data transmission (HTTPS/SSL), access controls, and secure coding practices (such as those referenced in OWASP guidelines) across the applications we build and operate.
                      </li>
                      <li>
                        <strong className="text-white">Platform-specific compliance</strong> — for e-commerce projects built on Shopify, we build in alignment with Shopify's own platform policies, PCI-DSS requirements (handled at the payment-gateway level), and applicable consumer protection norms.
                      </li>
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div id="responsibilities" className="space-y-4">
                    <h2 className="text-xl font-bold text-white border-b border-white/5 pb-2">
                      5. User Responsibilities
                    </h2>
                    <p>
                      While Vardhsoft takes its obligations seriously, compliance is a two-way relationship. As a visitor, client, or user of our website or services, you are responsible for:
                    </p>
                    <ul className="space-y-2.5 pl-5 list-disc text-slate-400">
                      <li>Providing accurate and truthful information when interacting with us (e.g., through contact forms, project inquiries, or account creation).</li>
                      <li>Using our website and any software/platforms we provide in a lawful manner, consistent with our Terms & Conditions.</li>
                      <li>Keeping any account credentials, client portal access, or project-related confidential information secure.</li>
                      <li>Reviewing our policies periodically, as they may be updated to reflect changes in our practices or the law.</li>
                      <li>Notifying us promptly if you believe your data has been misused, if you suspect a security issue, or if you wish to exercise any of your data protection rights.</li>
                    </ul>
                  </div>

                  {/* Section 6 */}
                  <div id="contact" className="space-y-4">
                    <h2 className="text-xl font-bold text-white border-b border-white/5 pb-2">
                      6. Contact Information
                    </h2>
                    <p>
                      If you have any questions about our legal or compliance practices, or you're unsure which policy applies to your situation, please reach out to us directly:
                    </p>
                    <div className="p-5 rounded-lg bg-slate-950/60 border border-white/5 space-y-2 text-slate-300 font-mono text-xs">
                      <p><strong className="text-white font-sans font-semibold">Vardhsoft</strong></p>
                      <p>Email: legal@vardhsoft.com</p>
                      <p>Address: Ahmedabad, Gujarat, India</p>
                    </div>
                    <p>
                      We aim to respond to all legal and compliance inquiries within 5–7 business days.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div id="updates" className="space-y-4">
                    <h2 className="text-xl font-bold text-white border-b border-white/5 pb-2">
                      7. Policy Updates
                    </h2>
                    <p>
                      We may revise the policies referenced in this section from time to time — to reflect changes in our services, new legal requirements, evolving best practices, or feedback from our users. When we make material changes, we will:
                    </p>
                    <ul className="space-y-2.5 pl-5 list-disc text-slate-400">
                      <li>Update the "Last Updated" date at the top of the relevant policy.</li>
                      <li>Where changes are significant, provide a more prominent notice on our website or notify registered clients via email.</li>
                      <li>Encourage you to review these pages periodically, since continued use of our website or services after changes take effect constitutes acceptance of the revised terms.</li>
                    </ul>
                    <p>
                      We recommend bookmarking this page as your standing point whenever you want to check our current legal and compliance standing.
                    </p>
                  </div>

                </div>
              )}

              {/* TAB 2: PRIVACY POLICY CONTENT */}
              {activeTab === 'privacy' && (
                <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
                  <div className="border-b border-white/5 pb-4">
                    <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
                    <p className="text-xs text-slate-500 mt-1">Last Updated: July 2, 2026</p>
                  </div>

                  <div id="introduction" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">1. Introduction</h3>
                    <p>
                      This Privacy Policy explains how Vardhsoft ("Vardhsoft," "we," "us," or "our") collects, uses, discloses, and safeguards your information when you visit our website www.vardhsoft.com, contact us regarding our services, or otherwise interact with us. It applies to visitors, prospective clients, and users of any digital products we operate directly. Please note that if Vardhsoft builds a website, app, or platform for a client (such as an e-commerce store or management system), that client's own privacy policy — not this one — governs how end users' data is handled on their platform, unless stated otherwise.
                    </p>
                    <p>
                      By using our website or engaging our services, you agree to the collection and use of information as described in this policy. If you do not agree with our practices, please do not use our website or provide us with personal information.
                    </p>
                  </div>

                  <div id="collect" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">2. Information We Collect</h3>
                    <p>We may collect the following categories of information:</p>
                    <p><strong className="text-white">Information you provide directly:</strong></p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li>Contact details such as your name, email address, phone number, and company name when you fill out a contact form, request a quote, or email us.</li>
                      <li>Project-related information you share with us during discovery calls, briefs, or ongoing engagements (this may include business details, requirements documents, and, where applicable, credentials or access needed for development work).</li>
                      <li>Billing and payment information if you engage us as a paying client (processed via secure third-party payment processors — we do not store full card details ourselves).</li>
                      <li>Any information you voluntarily submit through forms, surveys, or job applications.</li>
                    </ul>
                    <p><strong className="text-white">Information collected automatically:</strong></p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li>Technical data such as your IP address, browser type and version, device type, operating system, and referring URLs.</li>
                      <li>Usage data such as pages visited, time spent on pages, click patterns, and navigation paths through our website.</li>
                      <li>Approximate location data derived from your IP address (city/region level, not precise GPS location).</li>
                    </ul>
                  </div>

                  <div id="how-collect" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">3. How We Collect Information</h3>
                    <p>We collect information through the following methods:</p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li><strong className="text-white">Direct interactions</strong> — when you fill out our contact/inquiry forms, email us, call us, or communicate with us during a project engagement.</li>
                      <li><strong className="text-white">Automated technologies</strong> — through cookies, web beacons, and similar tracking technologies as your browser interacts with our website (see our Cookie Policy for full detail).</li>
                      <li><strong className="text-white">Third-party tools</strong> — analytics platforms, scheduling software, and communication tools we use in the ordinary course of business, which may collect data on our behalf under their own privacy terms.</li>
                      <li><strong className="text-white">Publicly available sources</strong> — occasionally, information about a prospective client's business (e.g., company website, public LinkedIn profile) that helps us understand a project inquiry.</li>
                    </ul>
                  </div>

                  <div id="how-use" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">4. How We Use Information</h3>
                    <p>We use the information we collect for purposes including:</p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li>Responding to inquiries, project requests, and general communication.</li>
                      <li>Preparing proposals, quotes, and scopes of work for prospective clients.</li>
                      <li>Delivering, managing, and supporting active client projects.</li>
                      <li>Processing payments and maintaining business/accounting records.</li>
                      <li>Improving our website's performance, usability, and content based on usage patterns.</li>
                      <li>Sending updates about our services, unless you've opted out of marketing communication (we do not send unsolicited marketing to non-clients without consent, where required by law).</li>
                      <li>Complying with legal, tax, and regulatory obligations.</li>
                      <li>Detecting, preventing, and addressing technical issues, fraud, or security concerns.</li>
                    </ul>
                  </div>

                  <div id="cookies" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">5. Cookies & Tracking Technologies</h3>
                    <p>
                      Our website uses cookies and similar tracking technologies to operate effectively, understand how visitors use our site, and improve our services. This includes essential cookies required for basic site functionality, and optional analytics/functional cookies that help us understand visitor behavior. Full detail on the categories of cookies we use, their purposes, and how to manage your preferences is provided in our separate **Cookie Policy**, which forms part of this Privacy Policy by reference.
                    </p>
                  </div>

                  <div id="sharing" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">6. Sharing of Information</h3>
                    <p>We do not sell your personal information. We may share information in the following limited circumstances:</p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li><strong className="text-white">Service providers</strong> — with third-party vendors who perform services on our behalf, such as hosting providers (e.g., Vercel, AWS), email/communication tools, analytics providers (e.g., Google Analytics), payment processors, and project management tools. These providers are only given the information necessary to perform their function and are contractually limited in how they can use it.</li>
                      <li><strong className="text-white">Legal requirements</strong> — where disclosure is required to comply with a legal obligation, court order, or governmental request, or to protect the rights, property, or safety of Vardhsoft, our clients, or others.</li>
                      <li><strong className="text-white">Business transfers</strong> — in the event of a merger, acquisition, restructuring, or sale of business assets, your information may be transferred as part of that transaction, subject to standard confidentiality protections.</li>
                      <li><strong className="text-white">With your consent</strong> — in any other circumstance, we will only share your information with your explicit consent.</li>
                    </ul>
                  </div>

                  <div id="third-party" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">7. Third-Party Services</h3>
                    <p>
                      Our website and business operations rely on select third-party services, which may independently collect or process data as you interact with our site. These may include:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li><strong className="text-white">Hosting & Infrastructure:</strong> Vercel, AWS, Netlify</li>
                      <li><strong className="text-white">Analytics:</strong> Google Analytics</li>
                      <li><strong className="text-white">Communication:</strong> Email service providers, WhatsApp Business, scheduling tools</li>
                      <li><strong className="text-white">Payment Processing:</strong> Razorpay, Stripe</li>
                    </ul>
                    <p>
                      Each of these providers operates under its own privacy policy, and we encourage you to review those policies. We select third-party providers that maintain reasonable security and privacy standards, but we are not responsible for their independent data practices.
                    </p>
                  </div>

                  <div id="security" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">8. Data Security</h3>
                    <p>
                      We take reasonable technical and organizational measures designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include, where applicable:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li>Encrypted data transmission (HTTPS/SSL) across our website and client platforms.</li>
                      <li>Access controls limiting who within Vardhsoft can view sensitive client or user data.</li>
                      <li>Secure development practices, including environment variable management for credentials/API keys and avoidance of hardcoded secrets.</li>
                      <li>Regular review of third-party service providers' security practices.</li>
                    </ul>
                  </div>

                  <div id="retention" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">9. Data Retention</h3>
                    <p>We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy, including:</p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li>Contact/inquiry information: retained for up to 12 months if no engagement follows, unless you request earlier deletion.</li>
                      <li>Client project data: retained for the duration of the engagement and for a reasonable period afterward (typically up to 3 years) to support ongoing maintenance, legal, warranty, or tax obligations, unless a longer period is required by law or agreed with the client.</li>
                      <li>Billing/financial records: retained as required under applicable Indian tax and accounting laws (typically 7–8 years).</li>
                    </ul>
                  </div>

                  <div id="rights" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">10. Your Rights</h3>
                    <p>Depending on your location and applicable law (including India's DPDP Act, and GDPR where relevant), you may have the right to:</p>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li><strong className="text-white">Access</strong> — request a copy of the personal information we hold about you.</li>
                      <li><strong className="text-white">Correction</strong> — request correction of inaccurate or incomplete information.</li>
                      <li><strong className="text-white">Erasure</strong> — request deletion of your personal information, subject to legal or contractual retention requirements.</li>
                      <li><strong className="text-white">Withdraw consent</strong> — withdraw consent for data processing at any time.</li>
                      <li><strong className="text-white">Object/Restrict</strong> — object to or request restriction of certain processing activities.</li>
                      <li><strong className="text-white">Grievance redressal</strong> — raise a complaint with us directly, and, where applicable, escalate to the relevant data protection authority.</li>
                    </ul>
                  </div>

                  <div id="children" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">11. Children's Privacy</h3>
                    <p>
                      Our website and services are not directed at children under the age of 18, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child without appropriate consent, we will take steps to delete that information promptly. If you believe we may have collected information from a child, please contact us immediately.
                    </p>
                  </div>

                  <div id="international" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">12. International Data Transfers</h3>
                    <p>
                      Vardhsoft is based in India, and the information we collect is primarily processed and stored within India or through service providers whose servers may be located in other countries (e.g., cloud hosting providers with global infrastructure such as AWS or Vercel). Where your information is transferred outside your country of residence, we take reasonable steps to ensure it receives an adequate level of protection consistent with this Privacy Policy and applicable law, including relying on providers with recognized security certifications and, where relevant, standard contractual safeguards.
                    </p>
                  </div>

                  <div id="changes" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">13. Changes to This Policy</h3>
                    <p>
                      We may update this Privacy Policy periodically to reflect changes in our practices, technologies, legal requirements, or other factors. When we do, we will revise the "Last Updated" date at the top of this page. For material changes, we will make reasonable efforts to notify you, such as through a website notice or direct email to registered clients. We encourage you to review this policy periodically.
                    </p>
                  </div>

                  <div id="contact-details" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">14. Contact Us</h3>
                    <p>If you have questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact us at:</p>
                    <div className="p-5 rounded-lg bg-slate-950/60 border border-white/5 space-y-2 text-slate-300 font-mono text-xs">
                      <p><strong className="text-white font-sans font-semibold">Vardhsoft</strong></p>
                      <p>Email: privacy@vardhsoft.com</p>
                      <p>Address: Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 3: COOKIE POLICY CONTENT */}
              {activeTab === 'cookie' && (
                <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
                  <div className="border-b border-white/5 pb-4">
                    <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
                    <p className="text-xs text-slate-500 mt-1">Last Updated: July 2, 2026</p>
                  </div>

                  <div id="introduction" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">1. Introduction</h3>
                    <p>
                      This Cookie Policy explains how Vardhsoft ("we," "us," "our") uses cookies and similar tracking technologies on our website www.vardhsoft.com. It should be read alongside our Privacy Policy, which explains more broadly how we collect and use personal information. By continuing to browse or use our website, you agree that we can place the types of cookies described below on your device, unless you have adjusted your preferences via our cookie consent tool or browser settings.
                    </p>
                  </div>

                  <div id="what-cookies" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">2. What Are Cookies</h3>
                    <p>
                      Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites function properly, work more efficiently, and provide information to website owners. Cookies allow a site to recognize your device and remember certain information about your visit, such as your preferences or actions taken on the site. In addition to cookies, we may use similar technologies such as web beacons, pixels, and local storage, which serve comparable purposes. For simplicity, we refer to all of these collectively as "cookies" in this policy.
                    </p>
                  </div>

                  <div id="types" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">3. Types of Cookies We Use</h3>
                    <p>We use the following broad categories of cookies on our website:</p>
                    <ul className="space-y-4 text-slate-400">
                      <li>
                        <strong className="text-white block mb-1">Essential Cookies</strong>
                        Required for the website to function correctly (session tokens, security mechanisms). They do not store any personally identifiable information.
                      </li>
                      <li>
                        <strong className="text-white block mb-1">Analytics Cookies</strong>
                        Help us understand visitor counts and traffic sources (primarily Google Analytics cookies such as _ga and _gid) in aggregated, anonymous formats.
                      </li>
                      <li>
                        <strong className="text-white block mb-1">Functional Cookies</strong>
                        Enable personalization, like remembering cookie preference answers or interface selections.
                      </li>
                      <li>
                        <strong className="text-white block mb-1">Third-Party Cookies</strong>
                        Content embeds or analytics tools that operate under their own separate policies (Google Analytics, Calendly schedules, WhatsApp widgets, etc.).
                      </li>
                    </ul>
                  </div>

                  <div id="managing" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">4. Managing Cookie Preferences</h3>
                    <p>
                      When you first visit our website, you will typically be shown a cookie consent banner allowing you to accept or customize which categories of cookies (beyond essential ones) you permit. You can change your preferences at any time by revisiting the settings link or directly through browser-level settings.
                    </p>
                  </div>

                  <div id="disabling" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">5. Disabling Cookies</h3>
                    <p>Most web browsers allow you to manage cookies through their settings. You can delete existing cookies, block new ones, or configure alerts. Check your browser privacy settings (Chrome, Firefox, Safari, Edge) to customize cookie blocking.</p>
                  </div>

                  <div id="changes" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">6. Changes to This Policy</h3>
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in the cookies and technologies we use, or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                    </p>
                  </div>

                  <div id="contact-details" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">7. Contact Us</h3>
                    <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
                    <div className="p-5 rounded-lg bg-slate-950/60 border border-white/5 space-y-2 text-slate-300 font-mono text-xs">
                      <p><strong className="text-white font-sans font-semibold">Vardhsoft</strong></p>
                      <p>Email: privacy@vardhsoft.com</p>
                      <p>Address: Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 4: TERMS & CONDITIONS CONTENT */}
              {activeTab === 'terms' && (
                <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
                  <div className="border-b border-white/5 pb-4">
                    <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
                    <p className="text-xs text-slate-500 mt-1">Last Updated: July 2, 2026</p>
                  </div>

                  <div id="introduction" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">1. Introduction</h3>
                    <p>
                      These Terms & Conditions ("Terms") govern your access to and use of the Vardhsoft website www.vardhsoft.com and any related services offered by Vardhsoft ("Vardhsoft," "we," "us," "our"). Please read these Terms carefully before using our website or engaging our services. These Terms are intended to be read alongside our Privacy Policy and Cookie Policy, and, for clients, any separately executed Service Agreement or Statement of Work (SOW), which will govern in the event of conflict on project-specific matters.
                    </p>
                  </div>

                  <div id="acceptance" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">2. Acceptance of Terms</h3>
                    <p>
                      By accessing or using our website, submitting a project inquiry, or engaging Vardhsoft for services, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you should discontinue use of our website and refrain from engaging our services.
                    </p>
                  </div>

                  <div id="definitions" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">3. Definitions</h3>
                    <ul className="space-y-2 pl-5 list-disc text-slate-400">
                      <li><strong className="text-white">"Website"</strong> refers to www.vardhsoft.com.</li>
                      <li><strong className="text-white">"Services"</strong> refers to software development, web development, custom themes, databases, hosting, and consultancy.</li>
                      <li><strong className="text-white">"Client"</strong> refers to individuals or organizations engaging our paid Services.</li>
                      <li><strong className="text-white">"Deliverables"</strong> refers to code, assets, or software built specifically under Statement of Work agreements.</li>
                    </ul>
                  </div>

                  <div id="eligibility" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">4. Eligibility</h3>
                    <p>By using our Website or engaging our Services, you represent that you are at least 18 years of age, have the legal capacity to enter into binding agreements, and that all information submitted is accurate and complete.</p>
                  </div>

                  <div id="use" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">5. Use of the Website</h3>
                    <p>You may use the Website for lawful purposes only. You agree not to upload viruses, scraping bots, or scan for vulnerabilities without authorization, nor to misrepresent your identity during inquiries.</p>
                  </div>

                  <div id="accounts" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">6. User Accounts</h3>
                    <p>Where client portal logins or dashboard credentials are issued, you are solely responsible for maintaining login credential secrecy and notify us immediately of security breaches.</p>
                  </div>

                  <div id="intellectual" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">7. Intellectual Property Rights</h3>
                    <p>
                      <strong className="text-white">Website Content:</strong> All texts, graphics, logos, layouts, and branding are the property of Vardhsoft.
                    </p>
                    <p>
                      <strong className="text-white">Deliverables:</strong> Upon full and final contract payment settlement, custom-built code ownership transfers to the client, while Vardhsoft retains reusable components and libraries.
                    </p>
                  </div>

                  <div id="responsibilities" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">8. User Responsibilities</h3>
                    <p>Clients agree to provide required briefs and credentials in a timely manner, ensure authorization for any materials supplied for development, and make payments in accordance with SOW milestone agreements.</p>
                  </div>

                  <div id="prohibited" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">9. Prohibited Activities</h3>
                    <p>You agree not to request malicious programs, engage in fraud, or reverse engineer proprietary software tools used in active developer workspaces.</p>
                  </div>

                  <div id="third-party" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">10. Third-Party Links</h3>
                    <p>Links to third-party services (Shopify, Stripe, Google maps, etc.) are provided for convenience. Vardhsoft is not responsible for their content, rules, or operational safety.</p>
                  </div>

                  <div id="disclaimer" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">11. Disclaimer of Warranties</h3>
                    <p>Informational website content is offered on an "as is" basis without warranties. Project warranties (bug-fixing, support periods) are defined strictly in SOW client contracts.</p>
                  </div>

                  <div id="limitation" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">12. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law, Vardhsoft is not liable for indirect, punitive, or consequential damages. Total liabilities are limited to the specific contract fee amount paid by the client.</p>
                  </div>

                  <div id="indemnification" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">13. Indemnification</h3>
                    <p>You agree to indemnify Vardhsoft from any claims or legal costs arising from a breach of these Terms, third-party rights violations, or materials supplied by you during development projects.</p>
                  </div>

                  <div id="termination" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">14. Termination</h3>
                    <p>Vardhsoft reserves the right to suspend logins for Terms violations. Client contract termination timelines are handled via Statement of Work specifications (typically requiring 30 days notice).</p>
                  </div>

                  <div id="governing" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">15. Governing Law</h3>
                    <p>These Terms shall be interpreted in accordance with the laws of India. Disputes are subject to the exclusive jurisdiction of the court of Ahmedabad, Gujarat, India.</p>
                  </div>

                  <div id="changes" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">16. Changes to These Terms</h3>
                    <p>We may revise these Terms from time to time. When we make updates, the revised "Last Updated" date will reflect the new terms. Continued use of our site constitutes acceptance.</p>
                  </div>

                  <div id="contact-details" className="space-y-4">
                    <h3 className="text-lg font-bold text-white">17. Contact Information</h3>
                    <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
                    <div className="p-5 rounded-lg bg-slate-950/60 border border-white/5 space-y-2 text-slate-300 font-mono text-xs">
                      <p><strong className="text-white font-sans font-semibold">Vardhsoft</strong></p>
                      <p>Email: legal@vardhsoft.com</p>
                      <p>Address: Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>

                </div>
              )}

              {/* Document Pagination Buttons */}
              <div className="border-t border-white/5 pt-8 flex items-center justify-between gap-4 mt-8">
                {currentTabIdx > 0 ? (
                  <button
                    onClick={() => handleTabChange(tabsList[currentTabIdx - 1])}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/40 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-500 transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Previous
                  </button>
                ) : (
                  <div />
                )}

                {currentTabIdx < tabsList.length - 1 ? (
                  <button
                    onClick={() => handleTabChange(tabsList[currentTabIdx + 1])}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-500 text-zinc-950 font-bold text-xs hover:brightness-110 shadow-lg shadow-teal-500/10 transition-all"
                  >
                    Next
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <div />
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
