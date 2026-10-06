import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import TechnologiesClientPage from './TechnologiesClientPage'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('technologies', {
    title: 'Technology Stack | VardhSoft',
    description: 'Explore the modern technologies VardhSoft uses — Next.js, React, Node.js, PostgreSQL, AWS, Docker, and more. Purpose-driven technology choices for scalable software.',
  })
}

export default async function TechnologiesPage() {
  const payload = await getPayload({ config })
  
  const [techRes, settings, projectsRes] = await Promise.all([
    payload.find({
      collection: 'technologies',
      limit: 100,
      sort: 'name',
    }).catch(() => ({ docs: [] })),
    payload.findGlobal({
      slug: 'website-settings',
      depth: 1,
    }).catch(() => null),
    payload.find({
      collection: 'projects',
      limit: 1,
      depth: 0,
    }).catch(() => ({ docs: [], totalDocs: 0 }))
  ])

  // Format technologies for the client component
  const formattedTech = (techRes?.docs || []).map((tech) => ({
    id: tech.id,
    name: tech.name,
    category: tech.category,
    description: tech.description || '',
  }))

  const whyTechPillars = settings?.whyTechPillars || []
  const detailedWorkflow = settings?.detailedWorkflow || []
  const faqs = settings?.faqs || []
  const hasProjects = (projectsRes?.totalDocs ?? 0) > 0

  return (
    <TechnologiesClientPage 
      technologies={formattedTech} 
      whyTechPillars={whyTechPillars}
      detailedWorkflow={detailedWorkflow}
      faqs={faqs}
      hasProjects={hasProjects}
    />
  )
}
