// Payload configuration database mapping
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Services } from './src/collections/Services'
import { SubServices } from './src/collections/SubServices'
import { Technologies } from './src/collections/Technologies'
import { Projects } from './src/collections/Projects'
import { CaseStudies } from './src/collections/CaseStudies'
import { Careers } from './src/collections/Careers'
import { Testimonials } from './src/collections/Testimonials'
import { Leads } from './src/collections/Leads'
import { Pages } from './src/collections/Pages'
import { Industries } from './src/collections/Industries'
import { WebsiteSettings } from './src/globals/WebsiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    Users,
    Media,
    Services,
    SubServices,
    Technologies,
    Projects,
    CaseStudies,
    Careers,
    Testimonials,
    Leads,
    Pages,
    Industries,
  ],
  globals: [
    WebsiteSettings,
  ],
  editor: lexicalEditor({}),
  secret: (() => {
    const secret = process.env.PAYLOAD_SECRET
    if (!secret) throw new Error('PAYLOAD_SECRET environment variable is required.')
    return secret
  })(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL || '',
      max: 10,
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  async onInit(payload) {
    payload.logger.info('Payload CMS initialized successfully.')
  }
})
