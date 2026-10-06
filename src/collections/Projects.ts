// Projects collection schema configuration for VardhSoft
import type { CollectionConfig } from 'payload'
import { revalidatePathHelper } from '../lib/revalidate'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Portfolio Project',
    plural: 'Portfolio',
  },
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePathHelper('/portfolio')
        revalidatePathHelper('/')
        revalidatePathHelper('/sitemap')
        revalidatePathHelper('/', 'layout')
      },
    ],
    afterDelete: [
      () => {
        revalidatePathHelper('/portfolio')
        revalidatePathHelper('/')
        revalidatePathHelper('/sitemap')
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
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'industry',
      type: 'text',
      required: true,
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
      name: 'githubUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'liveUrl',
      type: 'text',
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
