import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Info & Hero',
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
              name: 'shortDescription',
              type: 'textarea',
              required: true,
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
            },
            {
              name: 'icon',
              type: 'text',
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
              name: 'featured',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'image',
              type: 'relationship',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'heroSection',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'badge',
                  type: 'text',
                },
                {
                  name: 'heading',
                  type: 'text',
                },
                {
                  name: 'description',
                  type: 'textarea',
                },
                {
                  name: 'primaryCtaText',
                  type: 'text',
                  defaultValue: 'Get a Quote',
                },
                {
                  name: 'primaryCtaLink',
                  type: 'text',
                  defaultValue: '/contact',
                },
                {
                  name: 'secondaryCtaText',
                  type: 'text',
                  defaultValue: 'Book Consultation',
                },
                {
                  name: 'secondaryCtaLink',
                  type: 'text',
                  defaultValue: '/contact',
                },
                {
                  name: 'stats',
                  type: 'array',
                  fields: [
                    {
                      name: 'value',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Service Overview',
          fields: [
            {
              name: 'overview',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Service Overview',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'What We Do & How We Help',
                },
                {
                  name: 'whatIsIt',
                  type: 'textarea',
                  required: false,
                },
                {
                  name: 'whoIsItFor',
                  type: 'textarea',
                  required: false,
                },
                {
                  name: 'problemsItSolves',
                  type: 'textarea',
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Key Benefits',
          fields: [
            {
              name: 'benefits',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Key Benefits',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Why this service is essential for your growth',
                },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    {
                      name: 'icon',
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
              ],
            },
          ],
        },
        {
          label: 'What We Offer',
          fields: [
            {
              name: 'offerings',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'What We Offer',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Comprehensive capabilities engineered for your success',
                },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    {
                      name: 'icon',
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
              ],
            },
            {
              name: 'subServices',
              type: 'array',
              admin: {
                description: 'Detailed sub-services offered under this service category.',
              },
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
          ],
        },
        {
          label: 'Our Process',
          fields: [
            {
              name: 'process',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Our Process',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'How we take your project from concept to production',
                },
                {
                  name: 'steps',
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
              ],
            },
          ],
        },
        {
          label: 'Technologies',
          fields: [
            {
              name: 'technologiesSection',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Technologies We Use',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Powering your applications with the modern stack',
                },
                {
                  name: 'technologies',
                  type: 'relationship',
                  relationTo: 'technologies',
                  hasMany: true,
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Industries We Serve',
          fields: [
            {
              name: 'industries',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Industries We Serve',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Tailored solutions across diverse industry domains',
                },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    {
                      name: 'icon',
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
              ],
            },
          ],
        },
        {
          label: 'Why Choose Us',
          fields: [
            {
              name: 'whyChooseUs',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Why Choose Us',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Partnering with VardhSoft ensures security, speed, and support',
                },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    {
                      name: 'icon',
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
              ],
            },
          ],
        },
        {
          label: 'Case Studies',
          fields: [
            {
              name: 'caseStudiesSection',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Featured Case Studies',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Real results from real projects',
                },
                {
                  name: 'caseStudies',
                  type: 'relationship',
                  relationTo: 'case-studies',
                  hasMany: true,
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Testimonials',
          fields: [
            {
              name: 'testimonialsSection',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'What Our Clients Say',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: "Don't just take our word for it",
                },
                {
                  name: 'testimonials',
                  type: 'relationship',
                  relationTo: 'testimonials',
                  hasMany: true,
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Pricing Plans',
          fields: [
            {
              name: 'pricing',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Flexible Pricing Packages',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Choose the plan that fits your growth stage',
                },
                {
                  name: 'plans',
                  type: 'array',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'price',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      required: true,
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
                      name: 'ctaText',
                      type: 'text',
                      defaultValue: 'Get Started',
                    },
                    {
                      name: 'ctaLink',
                      type: 'text',
                      defaultValue: '/contact',
                    },
                    {
                      name: 'isPopular',
                      type: 'checkbox',
                      defaultValue: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'FAQs',
          fields: [
            {
              name: 'faqsSection',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Frequently Asked Questions',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: "Got questions? We've got answers.",
                },
              ],
            },
            {
              name: 'faqs',
              type: 'array',
              admin: {
                description: 'Frequently Asked Questions for this service.',
              },
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
          ],
        },
        {
          label: 'Final CTA',
          fields: [
            {
              name: 'finalCta',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Ready to Transform Your Operations?',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: "Let's build a software asset that drives long-term efficiency.",
                },
                {
                  name: 'primaryCtaText',
                  type: 'text',
                  defaultValue: 'Get Started',
                },
                {
                  name: 'primaryCtaLink',
                  type: 'text',
                  defaultValue: '/contact',
                },
                {
                  name: 'secondaryCtaText',
                  type: 'text',
                  defaultValue: 'Contact Us',
                },
                {
                  name: 'secondaryCtaLink',
                  type: 'text',
                  defaultValue: '/contact',
                },
              ],
            },
          ],
        },
        {
          label: 'Contact Form',
          fields: [
            {
              name: 'contactFormSection',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Start Your Project',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Fill out the form below and an engineer will contact you shortly.',
                },
              ],
            },
          ],
        },
        {
          label: 'Related Services',
          fields: [
            {
              name: 'relatedServicesSection',
              type: 'group',
              fields: [
                {
                  name: 'showSection',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Related Services',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  defaultValue: 'Other solutions we offer to scale your digital infrastructure',
                },
                {
                  name: 'services',
                  type: 'relationship',
                  relationTo: 'services',
                  hasMany: true,
                  required: false,
                },
              ],
            },
          ],
        },
        {
          label: 'SEO & Meta',
          fields: [
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
            {
              name: 'seoKeywords',
              type: 'text',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'ogImage',
              type: 'relationship',
              relationTo: 'media',
              required: false,
              admin: {
                position: 'sidebar',
              },
            },
          ],
        },
      ],
    },
  ],
}
