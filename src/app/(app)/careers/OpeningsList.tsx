'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MapPin, Briefcase, Users, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import HoverTilt from '@/components/animations/HoverTilt'

interface Position {
  id: number
  title: string
  slug: string
  department: string
  location: string
  employmentType: string
  experience: string
  numberOfOpenings: number
}

interface OpeningsListProps {
  initialPositions: Position[]
}

export default function OpeningsList({ initialPositions }: OpeningsListProps) {
  const [selectedDept, setSelectedDept] = useState('All Positions')

  // Extract unique departments dynamically
  const uniqueDepts = Array.from(
    new Set(initialPositions.map((pos) => pos.department))
  ).sort()

  const departments = ['All Positions', ...uniqueDepts]

  // Filter positions based on selected tab
  const filteredPositions = initialPositions.filter((pos) => {
    if (selectedDept === 'All Positions') return true
    return pos.department === selectedDept
  })

  return (
    <div className="space-y-12">
      {/* Dynamic Centered Department Tab Filter */}
      {departments.length > 1 && (
        <div className="max-w-4xl mx-auto p-2 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm flex flex-wrap gap-2.5 justify-center items-center">
          {departments.map((dept) => {
            const isActive = selectedDept === dept
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className="relative min-w-[120px] md:min-w-[165px] px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer z-10 focus:outline-none text-center overflow-hidden"
                style={{ color: isActive ? '#fff' : '#94a3b8' }}
              >
                <span className="relative z-10">{dept}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeDeptTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 -z-10 shadow-md shadow-teal-500/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* Grid of Job Openings Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredPositions.map((pos) => (
            <motion.div
              layout
              key={pos.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <HoverTilt className="h-full rounded-2xl overflow-hidden" glowColor="rgba(0,0,0,0)">
                <div
                  className="p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {pos.title}
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                        <MapPin className="h-4.5 w-4.5 text-teal-400 shrink-0" />
                        <span>{pos.location}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                        <Briefcase className="h-4.5 w-4.5 text-indigo-400 shrink-0" />
                        <span>{pos.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                        <Users className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                        <span>{pos.numberOfOpenings} positions</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={`/contact?inquiry=${pos.slug}`}
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-bold transition-all duration-300 group/btn cursor-pointer"
                    >
                      Apply for this role
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </HoverTilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredPositions.length === 0 && (
        <div className="text-center py-20 rounded-2xl border border-white/5 bg-slate-900/10 max-w-md mx-auto">
          <p className="text-slate-500 text-sm">No openings available for this category right now.</p>
        </div>
      )}
    </div>
  )
}

