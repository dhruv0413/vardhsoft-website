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
  let formattedTech: { id: string | number; name: string; category: string; description: string }[] = []
  let whyTechPillars: any[] = []
  let techStats: any = null
  let detailedWorkflow: any[] = []
  let faqs: any[] = []
  let hasProjects = false

  try {
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

    formattedTech = (techRes?.docs || []).map((tech) => ({
      id: tech.id,
      name: tech.name,
      category: tech.category,
      description: tech.description || '',
    }))

    whyTechPillars = settings?.whyTechPillars || []
    techStats = {
      productionDeployments: (settings as any)?.stats?.projectsCompleted ? `${(settings as any).stats.projectsCompleted}+` : '50+',
      uptimeSla: '99.9%',
      avgLatency: '<100ms',
    }
    detailedWorkflow = settings?.detailedWorkflow || []
    faqs = settings?.faqs || []
    hasProjects = (projectsRes?.totalDocs ?? 0) > 0
  } catch (err) {
    console.error('Failed to load technologies from Payload:', err)
  }

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
