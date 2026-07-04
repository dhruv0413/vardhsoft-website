'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from './animations/ScrollReveal'

interface FooterProps {
  showPortfolio?: boolean
  brandText?: string
}

export const Footer: React.FC<FooterProps> = ({ showPortfolio = false, brandText }) => {
  const currentYear = new Date().getFullYear()
  const displayBrandText = brandText || 'Empowering businesses globally with state-of-the-art software engineering, design, and consulting.'

  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 text-slate-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" duration={0.8} threshold={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-md bg-slate-900 border border-white/10 flex items-center justify-center">
                <Image src="/logo.png" alt="VardhSoft Logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                VardhSoft
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              {displayBrandText}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-teal-400 transition-colors">
                  Technologies
                </Link>
              </li>
              {showPortfolio && (
                <li>
                  <Link href="/portfolio" className="hover:text-teal-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-studies" className="hover:text-teal-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-teal-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal-and-compliance" className="hover:text-teal-400 transition-colors">
                  Legal & Compliance
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-teal-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-teal-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} VardhSoft. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-6 text-slate-500">
            <Link href="/sitemap" className="hover:text-teal-400 transition-colors">
              Sitemap
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-teal-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              Back to Top ↑
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
