import React, { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Sparkles } from 'lucide-react'
import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import { getPageMetadata } from '@/lib/getPageMetadata'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('contact', {
    title: 'Contact Us | VardhSoft',
    description: 'Get in touch with VardhSoft. Submit a project inquiry and our engineering team will respond within 24 business hours.',
  })
}

export default async function ContactPage() {
  let settings: any = null

  try {
    const payload = await getPayload({ config })
    settings = await payload.findGlobal({ slug: 'website-settings' })
  } catch (err) {
    console.error('Failed to load website-settings in ContactPage:', err)
  }

  const contactInfo = {
    email: settings?.email || 'vardhsoft.connect@gmail.com',
    phone: settings?.phone || '+91 98765 43210',
    address: settings?.address || 'Ahmedabad, India',
    companyName: settings?.companyName || 'VardhSoft',
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen pt-10 pb-24">
      {/* Background Gradients */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
            <Sparkles className="h-3.5 w-3.5" />
            CONNECT WITH US
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent leading-tight">
            Let&apos;s Build Something That Matters
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Tell us what you&apos;re looking to build. We&apos;ll review your requirements and get back to you with the next steps.
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-slate-400 py-12">Loading form...</div>}>
          <ContactForm contactInfo={contactInfo} />
        </Suspense>
      </div>
    </div>
  )
}
