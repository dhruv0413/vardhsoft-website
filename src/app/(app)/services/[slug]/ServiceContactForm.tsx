'use client'

import React, { useActionState } from 'react'
import { submitContactForm } from '../../contact/actions'
import { Send, CheckCircle, AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const initialState = {
  success: false,
  error: null as string | null,
}

interface ServiceContactFormProps {
  currentServiceName: string
}

export default function ServiceContactForm({ currentServiceName }: ServiceContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
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
          <h2 className="text-2xl font-bold text-white">Inquiry Received!</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Thank you for reaching out to VardhSoft. Our systems have logged your interest in <strong>{currentServiceName}</strong>. Our engineers will reply within 12 business hours.
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
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
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
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Acme Corp"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
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
                placeholder="+1 234 567 890"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Service Interested In
              </label>
              <input
                type="text"
                name="service"
                id="service"
                readOnly
                value={currentServiceName}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-slate-300 focus:outline-none cursor-not-allowed text-sm"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Project Budget
              </label>
              <select
                name="budget"
                id="budget"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
              >
                <option value="under-10k">Under $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Project Description *
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              placeholder="Describe your timeline, current features, and business requirements..."
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {isPending ? 'Submitting Inquiry...' : 'Submit Service Inquiry'}
            <Send className="ml-2 h-4 w-4" />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
    </div>
  )
}
