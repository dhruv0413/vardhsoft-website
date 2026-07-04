import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
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
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'industry',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'projectType',
      type: 'text',
      required: false,
    },
    {
      name: 'servicesProvided',
      type: 'text',
      required: false,
    },
    {
      name: 'overview',
      type: 'richText',
      required: true,
    },
    {
      name: 'problem',
      type: 'richText',
      required: true,
    },
    {
      name: 'approach',
      type: 'richText',
      required: false,
    },
    {
      name: 'solution',
      type: 'richText',
      required: true,
    },
    {
      name: 'implementation',
      type: 'richText',
      required: true,
    },
    {
      name: 'results',
      type: 'richText',
      required: true,
    },
    {
      name: 'keyTakeaway',
      type: 'richText',
      required: false,
    },
    {
      name: 'clientQuote',
      type: 'textarea',
      required: false,
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
      required: true,
    },
    {
      name: 'gallery',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: false,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'seoTitle',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

