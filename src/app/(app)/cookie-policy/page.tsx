import React from 'react'
import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Cookie Policy | VardhSoft',
  description: 'VardhSoft Cookie Policy describing our use of cookies and tracking technologies on our site.',
}

export default function CookiePolicyPage() {
  return <LegalLayout initialTab="cookie" />
}
