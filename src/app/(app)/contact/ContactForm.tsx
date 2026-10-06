'use client'

import React, { useActionState, Suspense } from 'react'
import { submitContactForm } from './actions'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'

interface ContactInfo {
  email: string
  phone: string
  address: string
  companyName: string
}

interface ContactFormProps {
  contactInfo: ContactInfo
}

const initialState = {
  success: false,
  error: null as string | null,
}

// Budget options — INR primary with Not Sure Yet
const budgetOptions = [
  { value: 'under-50k', label: 'Under ₹50,000' },
  { value: '50k-100k', label: '₹50,000 – ₹1,00,000' },
  { value: '100k-300k', label: '₹1,00,000 – ₹3,00,000' },
  { value: '300k-500k', label: '₹3,00,000 – ₹5,00,000' },
  { value: '500k-plus', label: '₹5,00,000+' },
  { value: 'not-sure-yet', label: 'Not Sure Yet' },
]

// Real VardhSoft service options
const serviceOptions = [
  { value: 'custom-web-application', label: 'Custom Web Application' },
  { value: 'saas-development', label: 'SaaS Development' },
  { value: 'e-commerce-development', label: 'E-Commerce Development' },
  { value: 'mobile-app-development', label: 'Mobile App Development' },
  { value: 'ai-solutions', label: 'AI Solutions' },
  { value: 'business-automation', label: 'Business Automation' },
  { value: 'website-development', label: 'Website Development' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'other-not-sure', label: 'Other / Not Sure' },
]

function ContactFormInner({ contactInfo }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const searchParams = useSearchParams()

  const selectedService = searchParams.get('service') || ''
  const subService = searchParams.get('subService') || ''

  const defaultMessage = subService
    ? `I am interested in exploring: ${subService}.\n\n[Please describe your specific project goals here...]`
    : ''

  const displayEmail = contactInfo.email && contactInfo.email !== 'info@vardhsoft.com' ? contactInfo.email : 'vardhsoft.connect@gmail.com'
  const displayPhone = contactInfo.phone && contactInfo.phone !== '+1234567890' ? contactInfo.phone : '+91 98765 43210'
  const displayAddress = contactInfo.address && contactInfo.address !== 'Mumbai, India' && contactInfo.address !== 'Ahmedabad, Gujarat, India' ? contactInfo.address : 'Ahmedabad, India'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
      {/* Contact Info Column */}
      <div className="lg:col-span-2">
        <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-slate-900/20 backdrop-blur-md shadow-xl space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Let&apos;s Talk About Your Project</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Tell us what you&apos;re working on, and we&apos;ll help you explore the right approach, scope, and next steps.
          </p>

          <div className="space-y-5 pt-2">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</h4>
                <a
                  href={`mailto:${displayEmail}`}
                  className="text-sm font-medium text-white hover:text-teal-400 transition-colors"
                >
                  {displayEmail}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</h4>
                <a
                  href={`tel:${displayPhone.replace(/\s/g, '')}`}
                  className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                >
                  {displayPhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</h4>
                <p className="text-sm font-medium text-white">{displayAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="lg:col-span-3">
        <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-slate-900/20 backdrop-blur-md shadow-xl">
          <AnimatePresence mode="wait">
            {state.success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-white">Thanks — we&apos;ve received your inquiry.</h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  We&apos;ll review your project details and get back to you with the next steps.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                action={formAction}
                className="space-y-6"
              >
                {state.error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                    <span>{state.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+91 98765 43210"
                      onInput={(e) => {
                        let val = e.currentTarget.value
                        val = val.replace(/[^0-9+\s\-]/g, '')
                        if (val.includes('+')) {
                          val = (val.startsWith('+') ? '+' : '') + val.replace(/\+/g, '')
                        }
                        const maxDigits = val.startsWith('+91') ? 12 : val.startsWith('+') ? 13 : 10
                        let count = 0
                        let trimmed = ''
                        for (const char of val) {
                          if (/\d/.test(char)) {
                            count++
                            if (count > maxDigits) break
                          }
                          trimmed += char
                        }
                        e.currentTarget.value = trimmed
                      }}
                      pattern="^(\+\d{1,3}[\s\-]?)?(\d{5}[\s\-]?\d{5}|\d{10})$"
                      title="Please enter a valid 10-digit phone number (e.g., 9876543210 or +91 9876543210)"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      SERVICE REQUIRED
                    </label>
                    <select
                      name="service"
                      id="service"
                      defaultValue={selectedService}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                    >
                      <option value="" disabled hidden>Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      APPROXIMATE BUDGET
                    </label>
                    <select
                      name="budget"
                      id="budget"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                    >
                      <option value="" disabled hidden>Select your budget</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    defaultValue={defaultMessage}
                    placeholder="Tell us what you're looking to build, what problem you're solving, and any requirements you already have."
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {isPending ? 'Submitting Inquiry...' : 'Submit Inquiry →'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default function ContactForm({ contactInfo }: ContactFormProps) {
  return (
    <Suspense fallback={<div className="text-center text-slate-400 py-12">Loading form options...</div>}>
      <ContactFormInner contactInfo={contactInfo} />
    </Suspense>
  )
}
