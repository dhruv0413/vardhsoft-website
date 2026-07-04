import React from 'react'
import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy | VardhSoft',
  description: 'VardhSoft Privacy Policy detailing what personal information we collect, how we use it, and how we keep it safe.',
}

export default function PrivacyPolicyPage() {
  return <LegalLayout initialTab="privacy" />
}
