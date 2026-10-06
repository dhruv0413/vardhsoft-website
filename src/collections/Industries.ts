import type { CollectionConfig } from 'payload'
import { revalidatePathHelper } from '../lib/revalidate'

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePathHelper('/industries')
        if (doc.slug) {
          revalidatePathHelper(`/industries/${doc.slug}`)
        }
        revalidatePathHelper('/', 'layout')
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidatePathHelper('/industries')
        if (doc.slug) {
          revalidatePathHelper(`/industries/${doc.slug}`)
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
      defaultValue: 'Activity',
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
      name: 'hero',
      type: 'group',
      fields: [
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
      name: 'challenges',
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
      name: 'solutions',
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
      name: 'services',
      type: 'array',
      fields: [
        {
          name: 'bullet',
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
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
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
      name: 'process',
      type: 'array',
      fields: [
        {
          name: 'stepNumber',
          type: 'text',
          required: true,
        },
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
