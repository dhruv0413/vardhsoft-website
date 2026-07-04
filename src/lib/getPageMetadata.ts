import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

/**
 * Mapping from page keys to their CMS field names in WebsiteSettings.
 * Add new entries here as new pages are added.
 */
const PAGE_SEO_FIELDS = {
  home:         { title: 'seoHomeTitle',         description: 'seoHomeDescription' },
  about:        { title: 'seoAboutTitle',         description: 'seoAboutDescription' },
  services:     { title: 'seoServicesTitle',      description: 'seoServicesDescription' },
  industries:   { title: 'seoIndustriesTitle',    description: 'seoIndustriesDescription' },
  technologies: { title: 'seoTechnologiesTitle',  description: 'seoTechnologiesDescription' },
  caseStudies:  { title: 'seoCaseStudiesTitle',   description: 'seoCaseStudiesDescription' },
  portfolio:    { title: 'seoPortfolioTitle',     description: 'seoPortfolioDescription' },
  careers:      { title: 'seoCareersTitle',       description: 'seoCareersDescription' },
  contact:      { title: 'seoContactTitle',       description: 'seoContactDescription' },
  book:         { title: 'seoBookTitle',          description: 'seoBookDescription' },
} as const

export type PageKey = keyof typeof PAGE_SEO_FIELDS

/**
 * Fetches SEO title and description for a given page from the CMS WebsiteSettings global.
 * Falls back to the provided defaults if the CMS fields are empty.
 *
 * @param page   - One of the keys in PAGE_SEO_FIELDS
 * @param defaults - Fallback title/description if CMS values are not set
 */
export async function getPageMetadata(
  page: PageKey,
  defaults: { title: string; description: string }
): Promise<Metadata> {
  try {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'website-settings' })

    // Cast via unknown to safely access new SEO fields not yet in payload-types.ts
    // Run `npm run generate:types` after deployment to fully type these fields.
    const fields = PAGE_SEO_FIELDS[page]
    const s = settings as unknown as Record<string, string | null | undefined>
    const title = s[fields.title] || defaults.title
    const description = s[fields.description] || defaults.description

    return {
      title,
      description,
    }
  } catch {
    // If CMS is unavailable (e.g. during static build), fall back to defaults
    return {
      title: defaults.title,
      description: defaults.description,
    }
  }
}
