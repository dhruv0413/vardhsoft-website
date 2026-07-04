import React from 'react'
import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Legal & Compliance | VardhSoft',
  description: 'VardhSoft Legal & Compliance Overview hub mapping all policies, standards, and regulatory frameworks.',
}

export default function LegalAndCompliancePage() {
  return <LegalLayout initialTab="overview" />
}
