import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import AboutContent from './AboutContent'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('about', {
    title: 'About VardhSoft | Custom Software Engineering',
    description: 'Learn about VardhSoft, our story, milestones, mission, and how we deconstruct complex software problems into minimal, scalable custom solutions.',
  })
}

export default async function AboutPage() {
  const payload = await getPayload({ config })
  
  const [settings, servicesRes, projectsRes] = await Promise.all([
    payload.findGlobal({ slug: 'website-settings', depth: 1 }),
    payload.find({ collection: 'services', sort: 'title', limit: 100, depth: 1 }),
    payload.find({ collection: 'projects', limit: 1, depth: 0 })
  ])

  // Extract variables with defaults
  const storyParagraphs = settings.storyParagraphs || []
  const milestones = settings.milestones || []
  const missionStatement = settings.missionStatement || 'To help startups, small businesses, and growing brands bring their ideas to life through reliable, scalable, and thoughtfully engineered software.'
  const visionStatement = settings.visionStatement || 'To become a trusted long-term technology partner for businesses across industries — known for the quality of our code and communication.'
  const ideFiles = settings.ideFiles || []
  const hasProjects = projectsRes.totalDocs > 0

  // Map services to plain JSON objects for AboutContent props
  const plainServices = servicesRes.docs.map(s => ({
    id: s.id,
    title: s.title,
    shortDescription: s.shortDescription,
    slug: s.slug,
    icon: s.icon
  }))

  return (
    <AboutContent
      storyParagraphs={storyParagraphs}
      milestones={milestones}
      missionStatement={missionStatement}
      visionStatement={visionStatement}
      ideFiles={ideFiles}
      services={plainServices}
      hasProjects={hasProjects}
    />
  )
}
