import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import AboutContent from './AboutContent'
import { getPageMetadata } from '@/lib/getPageMetadata'



export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('about', {
    title: 'About VardhSoft | Custom Software Engineering',
    description: 'Learn about VardhSoft, our story, milestones, mission, and how we deconstruct complex software problems into minimal, scalable custom solutions.',
  })
}

export default async function AboutPage() {
  let settings: any = null
  let servicesDocs: any[] = []
  let hasProjects = false

  try {
    const payload = await getPayload({ config })
    const [settingsRes, servicesRes, projectsRes] = await Promise.all([
      payload.findGlobal({ slug: 'website-settings', depth: 1 }).catch(() => null),
      payload.find({ collection: 'services', sort: 'title', limit: 100, depth: 1, pagination: false }).catch(() => ({ docs: [] })),
      payload.find({ collection: 'projects', limit: 1, depth: 0, pagination: false }).catch(() => ({ docs: [], totalDocs: 0 }))
    ])
    settings = settingsRes
    servicesDocs = servicesRes?.docs || []
    hasProjects = Boolean((projectsRes?.docs && projectsRes.docs.length > 0) || (projectsRes?.totalDocs && projectsRes.totalDocs > 0))
  } catch (err) {
    console.error('Failed to load about page data from Payload:', err)
  }

  const DEFAULT_STORY_PARAGRAPHS = [
    { text: 'VardhSoft started with a simple belief: software should make a business better, not make its work more complicated.' },
    { text: 'We start by understanding how a business actually operates—its goals, workflows, challenges, and users. From there, we turn real requirements into practical digital products, choosing technology with purpose rather than complexity.' },
    { text: 'Different problems. Different industries. One consistent standard of work.' },
    { text: 'As VardhSoft grows, our focus remains simple: build useful software, learn from every project, and keep raising the standard of our work.' }
  ]

  const DEFAULT_MILESTONES = [
    {
      badge: 'INSTITUTIONAL SYSTEMS',
      title: 'Panjarapol Animal Shelter CMS',
      description: 'A digital management platform bringing animal records, health information, and shelter operations into one centralized system.',
      tags: 'Next.js, Node.js, MongoDB'
    },
    {
      badge: 'E-COMMERCE DEVELOPMENT',
      title: 'Custom Clothing Store',
      description: "A tailored e-commerce experience built around the brand's products, customer journey, and online sales requirements.",
      tags: 'Shopify API, Liquid, CSS3'
    }
  ]

  // Extract variables with defaults
  const storyParagraphs = (settings?.storyParagraphs && settings.storyParagraphs.length > 0) ? settings.storyParagraphs : DEFAULT_STORY_PARAGRAPHS
  const milestones = (settings?.milestones && settings.milestones.length > 0) ? settings.milestones : DEFAULT_MILESTONES
  const missionStatement = settings?.missionStatement || 'To help businesses turn complex challenges into clear, useful solutions that improve the way they work and serve their customers.'
  const visionStatement = settings?.visionStatement || 'To become a technology partner businesses can rely on for the ideas they want to bring to life and the challenges they need to solve.'
  const rawIdeFiles = settings?.ideFiles || []
  const ideFiles = rawIdeFiles.length > 0 && rawIdeFiles.some((f: any) => f.filename === 'about.ts') ? rawIdeFiles : []

  // Map services to plain JSON objects for AboutContent props
  const plainServices = servicesDocs.map(s => ({
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
