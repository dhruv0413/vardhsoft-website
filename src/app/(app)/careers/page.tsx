import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import CareersContent from './CareersContent'
import { getPageMetadata } from '@/lib/getPageMetadata'



export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('careers', {
    title: 'Careers at VardhSoft | Join Our Engineering Team',
    description: 'Explore open engineering positions at VardhSoft. We build high-impact software and look for passionate developers, designers, and problem solvers to join us.',
  })
}

export default async function CareersPage() {
  let formattedPositions: {
    id: string | number
    title: string
    slug: string
    department: string
    location: string
    employmentType: string
    experience: string
    numberOfOpenings: number
  }[] = []
  let coreValues: any[] = []
  let benefits: any[] = []
  let employeeTestimonials: any[] = []

  try {
    const payload = await getPayload({ config })
    
    const [positionsRes, settings] = await Promise.all([
      payload.find({
        collection: 'careers',
        where: { status: { equals: 'published' } },
        limit: 100,
        sort: '-createdAt',
      }).catch(() => ({ docs: [] })),
      payload.findGlobal({
        slug: 'website-settings',
        depth: 1,
      }).catch(() => null)
    ])

    // Format positions for the client component
    formattedPositions = (positionsRes?.docs || []).map((pos) => ({
      id: pos.id,
      title: pos.title,
      slug: pos.slug,
      department: pos.department,
      location: pos.location,
      employmentType: pos.employmentType,
      experience: pos.experience || '2+ years',
      numberOfOpenings: pos.numberOfOpenings || 1,
    }))

    coreValues = settings?.coreValues || []
    benefits = settings?.benefits || []
    employeeTestimonials = settings?.employeeTestimonials || []
  } catch (err) {
    console.error('Failed to load careers data from Payload:', err)
  }

  return (
    <CareersContent 
      positions={formattedPositions} 
      coreValues={coreValues}
      benefits={benefits}
      employeeTestimonials={employeeTestimonials}
    />
  )
}
