import type { CollectionConfig } from 'payload'
import { revalidatePathHelper } from '../lib/revalidate'

export const SubServices: CollectionConfig = {
  slug: 'sub-services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'parentService'],
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        revalidatePathHelper('/services')
        let parentSlug = ''
        if (doc.parentService) {
          if (typeof doc.parentService === 'object' && 'slug' in doc.parentService) {
            parentSlug = (doc.parentService as any).slug
          } else {
            try {
              const parent = await req.payload.findByID({
                collection: 'services',
                id: typeof doc.parentService === 'object' ? (doc.parentService as any).id : doc.parentService,
                depth: 0,
              })
              parentSlug = parent.slug
            } catch (e) {
              console.error('Failed to fetch parent service for revalidation:', e)
            }
          }
        }
        if (parentSlug) {
          revalidatePathHelper(`/services/${parentSlug}`)
          revalidatePathHelper(`/services/${parentSlug}/${doc.slug}`)
        }
        revalidatePathHelper('/', 'layout')
      },
    ],
    afterDelete: [
      async ({ doc, req }) => {
        revalidatePathHelper('/services')
        let parentSlug = ''
        if (doc.parentService) {
          if (typeof doc.parentService === 'object' && 'slug' in doc.parentService) {
            parentSlug = (doc.parentService as any).slug
          } else {
            try {
              const parent = await req.payload.findByID({
                collection: 'services',
                id: typeof doc.parentService === 'object' ? (doc.parentService as any).id : doc.parentService,
                depth: 0,
              })
              parentSlug = parent.slug
            } catch (e) {
              console.error('Failed to fetch parent service for revalidation:', e)
            }
          }
        }
        if (parentSlug) {
          revalidatePathHelper(`/services/${parentSlug}`)
          revalidatePathHelper(`/services/${parentSlug}/${doc.slug}`)
        }
        revalidatePathHelper('/', 'layout')
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      defaultValue: 'Code',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'themeColor',
      type: 'select',
      required: true,
      defaultValue: 'teal',
      options: [
        { label: 'Teal', value: 'teal' },
        { label: 'Blue', value: 'blue' },
        { label: 'Violet', value: 'violet' },
        { label: 'Purple', value: 'purple' },
        { label: 'Pink', value: 'pink' },
        { label: 'Cyan', value: 'cyan' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Emerald', value: 'emerald' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Rose', value: 'rose' },
        { label: 'Amber', value: 'amber' },
      ],
    },
    {
      name: 'parentService',
      type: 'relationship',
      relationTo: 'services',
      required: true,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'badge',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subText',
          type: 'textarea',
        },
        {
          name: 'primaryCtaText',
          type: 'text',
          defaultValue: 'Start Your Project',
        },
        {
          name: 'primaryCtaLink',
          type: 'text',
          defaultValue: '/contact',
        },
        {
          name: 'secondaryCtaText',
          type: 'text',
          defaultValue: 'Schedule a Consultation',
        },
        {
          name: 'secondaryCtaLink',
          type: 'text',
          defaultValue: '/book',
        },
      ],
    },
    {
      name: 'overview',
      type: 'textarea',
      required: true,
    },
    {
      name: 'problemsSolved',
      type: 'array',
      fields: [
        {
          name: 'problem',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'process',
      type: 'array',
      fields: [
        {
          name: 'step',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'whyChooseUs',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'headline',
          type: 'text',
        },
        {
          name: 'subText',
          type: 'textarea',
        },
        {
          name: 'primaryBtn',
          type: 'text',
          defaultValue: 'Start Your Project',
        },
        {
          name: 'secondaryBtn',
          type: 'text',
          defaultValue: 'Schedule a Consultation',
        },
      ],
    },
  ],
}
