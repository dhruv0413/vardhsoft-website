'use client'

import React, { useState } from 'react'
import { Sparkles, Calendar, Clock, ArrowLeft, Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const DEFAULT_TIME_SLOTS = [
  '09:30 AM',
  '10:30 AM',
  '11:30 AM',
  '02:00 PM',
  '03:00 PM',
  '04:30 PM',
]

const getAvailableDates = () => {
  const dates = []
  const today = new Date()
  let added = 0
  
  // Get next 10 business days
  for (let i = 1; added < 10; i++) {
    const candidate = new Date()
    candidate.setDate(today.getDate() + i)
    const day = candidate.getDay()
    if (day !== 0 && day !== 6) { // Skip Sunday & Saturday
      dates.push(candidate)
      added++
    }
  }
  return dates
}

interface BookingClientProps {
  timeSlots?: string[]
}

export default function BookingClient({ timeSlots }: BookingClientProps) {
  const availableDates = getAvailableDates()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const slotsToUse = timeSlots && timeSlots.length > 0 ? timeSlots : DEFAULT_TIME_SLOTS

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null) // Reset time selection on date change
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !formData.name || !formData.email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsBooked(true)
    }, 1200)
  }

  const formatDateString = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen pt-12 pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {!isBooked ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                  <Sparkles className="h-3.5 w-3.5" />
                  Direct Scheduling
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent mb-4 leading-tight">
                  Book a Consultation
                </h1>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Select a convenient business day and time slot to schedule a 30-minute Zoom meeting with our engineering team.
                </p>
              </div>

              {/* Booking Dashboard */}
              <div className="p-6 sm:p-10 rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-md relative overflow-hidden space-y-10">
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Step 1: Select Date */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="h-4.5 w-4.5" />
                      1. Select Business Date
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {availableDates.map((date, idx) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString()
                        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
                        const monthName = date.toLocaleDateString('en-US', { month: 'short' })
                        const dateNum = date.getDate()
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleDateClick(date)}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                              isSelected 
                                ? 'bg-gradient-to-br from-teal-500 to-indigo-500 border-transparent text-white shadow-lg shadow-teal-500/10'
                                : 'bg-slate-950 border-white/5 hover:border-white/15 text-slate-300'
                            }`}
                          >
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-75">{dayName}</span>
                            <span className="text-2xl font-black">{dateNum}</span>
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-75">{monthName}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                        <Clock className="h-4.5 w-4.5" />
                        2. Select Time Slot ({selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {slotsToUse.map((time, idx) => {
                          const isSelected = selectedTime === time
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleTimeClick(time)}
                              className={`py-3 rounded-lg border text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-center ${
                                isSelected
                                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent text-white shadow-lg shadow-indigo-500/10'
                                  : 'bg-slate-950 border-white/5 hover:border-white/15 text-slate-300'
                              }`}
                            >
                              {time}
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Enter Details */}
                  {selectedDate && selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6 pt-4 border-t border-white/5"
                    >
                      <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                        3. Add Meeting Details
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-slate-500" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Mail className="h-3.5 w-3.5 text-slate-500" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <MessageSquare className="h-3.5 w-3.5 text-slate-500" />
                          Consultation Scope Details
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          placeholder="Briefly describe what you'd like to discuss or build..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center px-6 py-4.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm"
                      >
                        {isSubmitting ? 'Confirming Appointment...' : 'Schedule Call'}
                        <Send className="ml-2 h-4 w-4" />
                      </button>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-center py-16 px-4 space-y-6 max-w-xl mx-auto border border-white/5 bg-slate-900/20 backdrop-blur-md rounded-3xl"
            >
              <div className="w-20 h-20 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(20,184,166,0.15)]">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Booking Request Received!</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Company get when it's done then company send meeting link to your mail id.
                </p>
                <p className="text-xs text-slate-500">
                  Need assistance? Contact us at{' '}
                  <a href="mailto:vardhsoft.connect@gmail.com" className="text-indigo-400 hover:text-indigo-300 underline font-medium">
                    vardhsoft.connect@gmail.com
                  </a>
                </p>
              </div>

              {/* Booking Summary Box */}
              {selectedDate && selectedTime && (
                <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 text-left space-y-4">
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Calendar className="h-5 w-5 text-teal-400 shrink-0" />
                    <span>{formatDateString(selectedDate)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Clock className="h-5 w-5 text-indigo-400 shrink-0" />
                    <span>{selectedTime} (IST - India Time)</span>
                  </div>
                  <div className="pt-3 border-t border-white/5 text-[11px] text-slate-500 leading-relaxed">
                    Meeting Link: <span className="text-slate-400">Will be sent to your email once confirmed</span>.
                  </div>
                </div>
              )}

              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 bg-slate-900/50 hover:bg-slate-900/80 text-white transition-all text-xs font-semibold"
                >
                  Return to Services
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
