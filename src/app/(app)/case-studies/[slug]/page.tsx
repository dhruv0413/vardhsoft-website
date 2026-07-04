import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CaseStudyDetail from './CaseStudyDetail'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const study = docs[0]
  if (!study) return { title: 'Case Study | VardhSoft' }
  return {
    title: (study.seoTitle as string) || `${study.title} | VardhSoft`,
    description: (study.seoDescription as string) || '',
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  })

  const study = docs[0]
  if (!study) notFound()

  return <CaseStudyDetail study={study as any} />
}
