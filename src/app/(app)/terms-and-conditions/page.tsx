import React from 'react'
import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Terms & Conditions | VardhSoft',
  description: 'VardhSoft Terms & Conditions outlining rules, guidelines, intellectual property ownership, and liabilities.',
}

export default function TermsAndConditionsPage() {
  return <LegalLayout initialTab="terms" />
}
