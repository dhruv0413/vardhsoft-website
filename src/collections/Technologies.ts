import type { CollectionConfig } from 'payload'
import { revalidatePathHelper } from '../lib/revalidate'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePathHelper('/technologies')
        revalidatePathHelper('/sitemap')
      },
    ],
    afterDelete: [
      () => {
        revalidatePathHelper('/technologies')
        revalidatePathHelper('/sitemap')
      },
    ],
  },
  fields: [
    {
      name: 'name',
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
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Database', value: 'database' },
        { label: 'Cloud', value: 'cloud' },
        { label: 'DevOps', value: 'devops' },
        { label: 'Tools', value: 'tools' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
  ],
}
