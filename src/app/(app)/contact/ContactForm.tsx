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

// Budget options — INR primary, USD approximate in parentheses for international clients
const budgetOptions = [
  { value: 'under-5l', label: 'Under ₹5,00,000 (~$6,000)' },
  { value: '5l-25l', label: '₹5,00,000 – ₹25,00,000 (~$6K–$30K)' },
  { value: '25l-plus', label: '₹25,00,000+ (~$30,000+)' },
]

function ContactFormInner({ contactInfo }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const searchParams = useSearchParams()

  const selectedService = searchParams.get('service') || 'custom-software-development'
  const subService = searchParams.get('subService') || ''

  const defaultMessage = subService
    ? `I am interested in exploring: ${subService}.\n\n[Please describe your specific project goals here...]`
    : ''

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
      {/* Contact Info Column */}
      <div className="lg:col-span-2 space-y-8">
        <div className="p-8 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm space-y-6">
          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Connect with our team to explore project scoping, custom pricing, and developer availability.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-teal-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400">Email Us</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-medium text-white hover:text-teal-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-indigo-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400">Call Us</h4>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-emerald-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400">Office Location</h4>
                <p className="text-sm font-medium text-white">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="lg:col-span-3">
        <div className="p-8 sm:p-10 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm">
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
                <h2 className="text-2xl font-bold text-white">Inquiry Submitted Successfully!</h2>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you for choosing {contactInfo.companyName}. Our team has received your details and will reach out within 24 business hours.
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
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      id="service"
                      defaultValue={selectedService}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    >
                      <option value="custom-software-development">Custom Software Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app-development">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="cloud-devops-services">Cloud &amp; DevOps Services</option>
                      <option value="ai-automation-solutions">AI &amp; Automation Solutions</option>
                      <option value="e-commerce-solutions">E-commerce Solutions</option>
                      <option value="quality-assurance-testing">Quality Assurance &amp; Testing</option>
                      <option value="maintenance-support">Maintenance &amp; Support</option>
                      <option value="other">Other / Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      id="budget"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    defaultValue={defaultMessage}
                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {isPending ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                  <Send className="ml-2 h-4 w-4" />
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
