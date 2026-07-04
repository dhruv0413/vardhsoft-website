'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ServiceFaqAccordionProps {
  faqs: FAQ[]
}

export default function ServiceFaqAccordion({ faqs }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border-b border-white/5 last:border-0 pb-4 last:pb-0"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between text-left py-3 text-slate-100 hover:text-teal-300 transition-colors duration-200 font-semibold text-sm sm:text-base gap-4"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-teal-400' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
