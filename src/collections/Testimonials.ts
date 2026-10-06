import type { CollectionConfig } from 'payload'
import { revalidatePathHelper } from '../lib/revalidate'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePathHelper('/')
        revalidatePathHelper('/services')
      },
    ],
    afterDelete: [
      () => {
        revalidatePathHelper('/')
        revalidatePathHelper('/services')
      },
    ],
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'companyName',
      type: 'text',
      required: false,
    },
    {
      name: 'designation',
      type: 'text',
      required: false,
    },
    {
      name: 'review',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
  ],
}
