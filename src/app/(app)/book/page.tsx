import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import BookingClient from './BookingClient'
import type { WebsiteSetting } from '../../../../payload-types'
import { getPageMetadata } from '@/lib/getPageMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('book', {
    title: 'Book a Consultation | VardhSoft',
    description: "Schedule a free 30-minute discovery call with the VardhSoft engineering team. We'll discuss your project goals, scope, and how we can help you build better software.",
  })
}

export default async function BookPage() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'website-settings',
  }) as WebsiteSetting

  const timeSlots = (settings.bookingTimeSlots ?? []).map((t) => t.slot as string)

  return <BookingClient timeSlots={timeSlots} />
}
