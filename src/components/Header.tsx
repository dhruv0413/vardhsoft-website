'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Code, Server, FileText, Cloud, Palette, Database, ArrowRight, Sparkles, Cpu, Smartphone, ShoppingCart, ShieldCheck, Activity, GraduationCap, CreditCard, Truck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { servicesList } from '@/data/servicesData'

interface SubService {
  slug?: string
  title: string
  description: string
}

interface ServiceItem {
  id: string | number
  title: string
  slug: string
  icon: string
  shortDescription: string
  subServices: SubService[]
}

interface IndustryItem {
  id: string | number
  title: string
  slug: string
  icon: string
  overview: string
  heroSubText: string
}

interface HeaderProps {
  services?: ServiceItem[]
  industries?: IndustryItem[]
  showPortfolio?: boolean
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Code,
  Server,
  FileText,
  Cloud,
  Palette,
  Database,
  Cpu,
  Smartphone,
  ShoppingCart,
  ShieldCheck,
  Activity,
  Sparkles,
  GraduationCap,
  CreditCard,
  Truck,
}

export const Header: React.FC<HeaderProps> = ({ services = [], industries = [], showPortfolio = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [activeServiceIdx, setActiveServiceIdx] = useState(0)
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0)
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false)
  const [isMobileIndustriesExpanded, setIsMobileIndustriesExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const indDropdownRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setIsIndustriesOpen(false)
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  const handleIndustriesMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setIsServicesOpen(false)
    setIsIndustriesOpen(true)
  }

  const handleIndustriesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false)
    }, 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    }
  }, [])

  const navLinks = [
    { label: 'Technologies', href: '/technologies' },
    ...(showPortfolio ? [{ label: 'Portfolio', href: '/portfolio' }] : []),
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
  ]

  const activeService = services[activeServiceIdx]
  const activeIndustry = industries[activeIndustryIdx]

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
      ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/20'
      : 'border-b border-transparent bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="VardhSoft Logo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                VardhSoft
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            
            {/* Services Dropdown Link */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link
                href="/services"
                onClick={() => setIsServicesOpen(false)}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-5 ${isServicesOpen ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                  }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-teal-400' : 'text-slate-400'}`} />
              </Link>

              {/* Dynamic Mega-Menu Dropdown */}
              <AnimatePresence>
                {isServicesOpen && services.length > 0 && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="absolute top-full left-1/2 -translate-x-[250px] w-[680px] bg-slate-950 border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-12 overflow-hidden"
                  >
                    {/* Left panel: List of Services */}
                    <div className="col-span-5 border-r border-white/10 pr-4 space-y-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">Categories</p>
                      {services.map((service, idx) => {
                        const IconComponent = ICON_MAP[service.icon] ?? Code
                        const isActive = idx === activeServiceIdx
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            onMouseEnter={() => setActiveServiceIdx(idx)}
                            onClick={() => setIsServicesOpen(false)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-left ${isActive
                              ? 'bg-slate-900 border border-white/5 text-teal-400 shadow-md'
                              : 'text-slate-300 hover:bg-slate-900/40 hover:text-white border border-transparent'
                              }`}
                          >
                            <div className={`p-1.5 rounded-lg border ${isActive ? 'bg-slate-950 border-teal-500/20 text-teal-400' : 'bg-slate-900/50 border-white/5 text-slate-400'
                              }`}>
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="flex-grow">
                              <p className="text-xs font-bold leading-tight">{service.title}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* Right panel: Sub-services dynamic view */}
                    <div className="col-span-7 pl-6 flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Sub-services & Details</p>

                        <AnimatePresence mode="wait">
                          {activeService && (
                            <motion.div
                              key={activeService.id}
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              transition={{ duration: 0.15 }}
                            >
                              <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                {activeService.title}
                              </h4>
                              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                {activeService.shortDescription}
                              </p>

                              {activeService.subServices && activeService.subServices.length > 0 ? (
                                <div className="space-y-1.5 max-w-md">
                                  {activeService.subServices.map((sub, sIdx) => {
                                    const parentStaticService = servicesList[activeService.slug]
                                    const staticSub = parentStaticService?.subServices?.find(s => s.title === sub.title)
                                    const subSlug = staticSub?.slug
                                    const href = subSlug 
                                      ? `/services/${activeService.slug}/${subSlug}` 
                                      : `/services/${activeService.slug}`
                                    return (
                                      <Link
                                        key={sIdx}
                                        href={href}
                                        onClick={() => setIsServicesOpen(false)}
                                        className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl border border-transparent hover:border-white/5 hover:bg-slate-900/40 text-slate-300 hover:text-teal-400 transition-all duration-150 group/sub"
                                      >
                                        <span className="text-xs font-bold leading-none">{sub.title}</span>
                                        <div className="flex-shrink-0 p-1.5 rounded-lg bg-teal-950/40 border border-teal-500/15 text-teal-400 flex items-center justify-center group-hover/sub:bg-teal-500 group-hover/sub:text-slate-950 group-hover/sub:border-teal-500 transition-colors duration-200">
                                          <ArrowRight className="h-3.5 w-3.5 group-hover/sub:translate-x-0.5 transition-transform duration-200" />
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              ) : (
                                <div className="py-10 text-center text-xs text-slate-500 italic">
                                  Comprehensive consulting and engineering guidelines available. Click to read more.
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Bottom Premium Bar */}
                    <div className="col-span-12 mt-6 pt-4 border-t border-white/10 flex items-center justify-between -mx-6 -mb-6 px-6 py-3 bg-slate-900">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Sparkles className="h-3.5 w-3.5 text-teal-400 animate-pulse" />
                        <span>102+ products shipped · 99.9% delivery rate · 12M+ downloads</span>
                      </div>
                      <Link
                        href="/contact"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-bold text-white px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-600 transition-colors"
                      >
                        Start a Project
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown Link */}
            <div
              className="relative"
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
            >
              <Link
                href="/industries"
                onClick={() => setIsIndustriesOpen(false)}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-5 ${isIndustriesOpen ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                  }`}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180 text-teal-400' : 'text-slate-400'}`} />
              </Link>

              {/* Dynamic Industries Mega-Menu Dropdown */}
              <AnimatePresence>
                {isIndustriesOpen && industries.length > 0 && (
                  <motion.div
                    ref={indDropdownRef}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="absolute top-full left-0 w-[240px] bg-slate-950 border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-1 overflow-hidden"
                  >
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">Industries We Serve</p>
                    {industries.map((ind) => {
                      const IconComponent = ICON_MAP[ind.icon] ?? Cpu
                      return (
                        <Link
                          key={ind.id}
                          href={`/industries/${ind.slug}`}
                          onClick={() => setIsIndustriesOpen(false)}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-150 text-left text-slate-300 hover:bg-slate-900/60 hover:text-teal-400 border border-transparent group"
                        >
                          <div className="p-1.5 rounded-lg border bg-slate-900/50 border-white/5 text-slate-400 group-hover:text-teal-400 group-hover:border-teal-500/20 transition-colors">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-grow">
                            <p className="text-xs font-bold leading-tight">{ind.title}</p>
                          </div>
                        </Link>
                      )
                    })}
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between -mx-4 -mb-4 px-4 py-2.5 bg-slate-900">
                      <Link
                        href="/industries"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="text-[11px] font-bold text-teal-400 hover:underline mx-auto flex items-center gap-1"
                      >
                        All Industries
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-white/10 bg-slate-950/95 overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-900 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesExpanded ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesExpanded && services.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="pl-6 pr-3 py-1 space-y-1 bg-slate-900/25 border-l border-white/10 ml-3 overflow-hidden"
                    >
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900"
                      >
                        All Services Listing
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileIndustriesExpanded(!isMobileIndustriesExpanded)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-900 transition-colors"
                >
                  <span>Industries</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileIndustriesExpanded ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileIndustriesExpanded && industries.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="pl-6 pr-3 py-1 space-y-1 bg-slate-900/25 border-l border-white/10 ml-3 overflow-hidden"
                    >
                      <Link
                        href="/industries"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900"
                      >
                        All Industries Overview
                      </Link>
                      {industries.map((ind) => (
                        <Link
                          key={ind.id}
                          href={`/industries/${ind.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900"
                        >
                          {ind.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-base font-semibold rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg shadow-teal-500/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
