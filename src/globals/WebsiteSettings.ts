import type { GlobalConfig } from 'payload'

export const WebsiteSettings: GlobalConfig = {
  slug: 'website-settings',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Company Info',
          fields: [
            {
              name: 'companyName',
              type: 'text',
              required: true,
              defaultValue: 'VardhSoft',
            },
            {
              name: 'tagline',
              type: 'text',
              required: false,
              defaultValue: 'Empowering Businesses with Cutting-Edge Software Solutions',
            },
            {
              name: 'logo',
              type: 'relationship',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'footerBrandText',
              type: 'textarea',
              defaultValue: 'Empowering businesses globally with state-of-the-art software engineering, design, and consulting.',
            },
            {
              name: 'email',
              type: 'email',
              required: true,
              defaultValue: 'info@vardhsoft.com',
            },
            {
              name: 'phone',
              type: 'text',
              required: false,
              defaultValue: '+91 79 XXXX XXXX',
            },
            {
              name: 'address',
              type: 'textarea',
              required: false,
              defaultValue: 'Ahmedabad, Gujarat, India',
            },
            {
              name: 'linkedinUrl',
              type: 'text',
              required: false,
            },
            {
              name: 'githubUrl',
              type: 'text',
              required: false,
            },
            {
              name: 'instagramUrl',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          label: 'Home Page Settings',
          fields: [
            {
              name: 'heroBadge',
              type: 'text',
              defaultValue: '🚀 Trusted Technology Partner for Startups & Businesses',
            },
            {
              name: 'heroTitle',
              type: 'text',
              defaultValue: 'We Build Custom Software That Drives Business Growth',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              defaultValue: 'We design and develop scalable web applications, SaaS platforms, business automation systems, and modern websites that help startups and businesses launch faster, operate efficiently, and grow confidently.',
            },
            {
              name: 'heroPrimaryCtaText',
              type: 'text',
              defaultValue: 'Start Your Project',
            },
            {
              name: 'heroPrimaryCtaLink',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'heroSecondaryCtaText',
              type: 'text',
              defaultValue: 'View Our Work',
            },
            {
              name: 'heroSecondaryCtaLink',
              type: 'text',
              defaultValue: '/case-studies',
            },
            {
              name: 'features',
              type: 'array',
              label: 'Homepage Features',
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
                {
                  name: 'icon',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Code', value: 'Code' },
                    { label: 'Cpu', value: 'Cpu' },
                    { label: 'Zap', value: 'Zap' },
                    { label: 'ShieldCheck', value: 'ShieldCheck' },
                    { label: 'Rocket', value: 'Rocket' },
                    { label: 'Globe', value: 'Globe' },
                    { label: 'Server', value: 'Server' },
                    { label: 'Database', value: 'Database' },
                    { label: 'Cloud', value: 'Cloud' },
                    { label: 'Layers', value: 'Layers' },
                    { label: 'Settings', value: 'Settings' },
                    { label: 'Smartphone', value: 'Smartphone' },
                    { label: 'Lock', value: 'Lock' },
                    { label: 'TrendingUp', value: 'TrendingUp' },
                    { label: 'Star', value: 'Star' },
                    { label: 'CheckCircle', value: 'CheckCircle' },
                    { label: 'BarChart', value: 'BarChart' },
                    { label: 'Activity', value: 'Activity' },
                    { label: 'Headphones', value: 'Headphones' },
                    { label: 'Users', value: 'Users' },
                  ],
                },
                {
                  name: 'illustrationSvg',
                  type: 'textarea',
                  label: 'Illustration SVG code',
                  required: true,
                },
              ],
            },
            {
              name: 'qualityStats',
              type: 'array',
              label: 'VardhSoft Quality Parameters Statistics',
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
                {
                  name: 'subtext',
                  type: 'text',
                  required: false,
                },
              ],
            },
            {
              name: 'advantages',
              type: 'array',
              label: 'Homepage Advantages / Why Choose Us',
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
                {
                  name: 'icon',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Clock', value: 'Clock' },
                    { label: 'TrendingUp', value: 'TrendingUp' },
                    { label: 'Code2', value: 'Code2' },
                    { label: 'Headphones', value: 'Headphones' },
                    { label: 'Rocket', value: 'Rocket' },
                    { label: 'Globe', value: 'Globe' },
                    { label: 'Zap', value: 'Zap' },
                    { label: 'ShieldCheck', value: 'ShieldCheck' },
                    { label: 'Star', value: 'Star' },
                    { label: 'CheckCircle', value: 'CheckCircle' },
                    { label: 'Users', value: 'Users' },
                    { label: 'Award', value: 'Award' },
                    { label: 'BarChart', value: 'BarChart' },
                    { label: 'Activity', value: 'Activity' },
                    { label: 'Lock', value: 'Lock' },
                    { label: 'Layers', value: 'Layers' },
                    { label: 'Settings', value: 'Settings' },
                    { label: 'Server', value: 'Server' },
                    { label: 'Database', value: 'Database' },
                    { label: 'Briefcase', value: 'Briefcase' },
                  ],
                },
              ],
            },
            {
              name: 'workflow',
              type: 'array',
              label: 'Development Process Steps',
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
                {
                  name: 'colorClass',
                  type: 'text',
                  required: true,
                  defaultValue: 'text-teal-400',
                },
                {
                  name: 'pingClass',
                  type: 'text',
                  required: true,
                  defaultValue: 'bg-teal-500/10 border-teal-500/30',
                },
              ],
            },
          ],
        },
        {
          label: 'About Page Settings',
          fields: [
            {
              name: 'storyParagraphs',
              type: 'array',
              label: 'Company Story Paragraphs',
              fields: [
                {
                  name: 'text',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'milestones',
              type: 'array',
              label: 'Key Milestones',
              fields: [
                {
                  name: 'badge',
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
                {
                  name: 'tags',
                  type: 'text',
                  label: 'Comma Separated Tags (e.g. Next.js, Node.js)',
                  required: true,
                },
              ],
            },
            {
              name: 'missionStatement',
              type: 'textarea',
              required: true,
            },
            {
              name: 'visionStatement',
              type: 'textarea',
              required: true,
            },
            {
              name: 'ideFiles',
              type: 'array',
              label: 'IDE Console Files',
              fields: [
                {
                  name: 'filename',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'content',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Careers Page Settings',
          fields: [
            {
              name: 'coreValues',
              type: 'array',
              label: 'Careers Core Values',
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
                {
                  name: 'bgGrad',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'borderGlow',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Lucide icon name e.g. Code, Rocket, Globe, Star, Zap, ShieldCheck, Users, Award, Briefcase, Heart, Lightbulb, TrendingUp',
                  },
                },
              ],
            },
            {
              name: 'benefits',
              type: 'array',
              label: 'Benefits & Perks',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'tag',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Lucide icon name e.g. Code, Rocket, Globe, Star, Zap, ShieldCheck, Users, Award, Briefcase, Heart, Lightbulb, TrendingUp',
                  },
                },
              ],
            },
            {
              name: 'employeeTestimonials',
              type: 'array',
              label: 'Employee Testimonials',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'role',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'review',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'initials',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'avatarColor',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Technologies Page Settings',
          fields: [
            {
              name: 'whyTechPillars',
              type: 'array',
              label: 'Why Choose These Technologies Pillars',
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
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Lucide icon name e.g. Code, Cpu, Globe, Server, Database, Cloud, Layers, Zap, Activity',
                  },
                },
                {
                  name: 'color',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'detailedWorkflow',
              type: 'array',
              label: 'Detailed 7-Step Development Process',
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
              label: 'Frequently Asked Questions',
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
          label: 'Booking Settings',
          fields: [
            {
              name: 'bookingTimeSlots',
              type: 'array',
              label: 'Available Time Slots',
              fields: [
                {
                  name: 'slot',
                  type: 'text',
                  required: true,
                }
              ]
            }
          ]
        },
        {
          label: 'Industries Hub Settings',
          fields: [
            {
              name: 'indHeroEyebrow',
              type: 'text',
              defaultValue: 'Industries We Serve',
            },
            {
              name: 'indHeroHeadline',
              type: 'text',
              defaultValue: 'Software That Understands Your Industry, Not Just Your Feature List',
            },
            {
              name: 'indHeroSubHeadline',
              type: 'textarea',
              defaultValue: 'Every industry has its own workflows, pressures, and non-negotiables. We build software that reflects that — starting with how your business actually operates, not a generic template stretched across every client we work with.',
            },
            {
              name: 'indHeroPrimaryCtaText',
              type: 'text',
              defaultValue: 'Find Your Industry',
            },
            {
              name: 'indHeroPrimaryCtaLink',
              type: 'text',
              defaultValue: '#industries-grid',
            },
            {
              name: 'indHeroSecondaryCtaText',
              type: 'text',
              defaultValue: 'Start a Conversation',
            },
            {
              name: 'indHeroSecondaryCtaLink',
              type: 'text',
              defaultValue: '/contact',
            },
            {
              name: 'indOverviewContent',
              type: 'textarea',
              defaultValue: "Generic software solves generic problems — which is precisely why it so often falls short for real businesses. A healthcare provider's scheduling needs look nothing like a logistics company's fleet tracking needs; an e-commerce brand's checkout flow has almost nothing in common with a fintech dashboard's reporting requirements. At Vardhsoft, we don't treat \"custom software\" as a one-size-fits-all pitch — we bring an understanding of what actually matters in each industry we work with: where the operational pressure points are, what \"good\" looks like for that specific type of business, and what can't be compromised (data accuracy in healthcare and fintech, conversion and mobile performance in e-commerce, communication clarity in education, real-time visibility in logistics).",
            },
            {
              name: 'indOverviewSecondaryText',
              type: 'textarea',
              defaultValue: 'Below is an overview of the industries where our engineering approach applies directly, along with the kinds of problems we solve in each. Click into any industry for a full breakdown of the specific challenges, solutions, and capabilities we bring to that space.',
            },
            {
              name: 'indApproachItems',
              type: 'array',
              label: 'How We Approach Every Industry',
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
              name: 'indWhyItMattersItems',
              type: 'array',
              label: 'Why Industry-Specific Software Matters',
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
              name: 'indProcessSteps',
              type: 'array',
              label: 'Development Process Steps',
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
              name: 'indFaqs',
              type: 'array',
              label: 'Frequently Asked Questions',
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
              name: 'indCtaHeadline',
              type: 'text',
              defaultValue: "Don't See Your Exact Industry Listed? Let's Talk Anyway.",
            },
            {
              name: 'indCtaSubText',
              type: 'textarea',
              defaultValue: "Our approach is built around understanding your specific business first — industry experience informs how we work, but it's never a substitute for actually listening to how your business runs.",
            },
            {
              name: 'indCtaPrimaryBtnText',
              type: 'text',
              defaultValue: 'Find Your Industry',
            },
            {
              name: 'indCtaSecondaryBtnText',
              type: 'text',
              defaultValue: 'Schedule a Consultation',
            },
            {
              name: 'indCtaMicroLine',
              type: 'text',
              defaultValue: "Tell us about your business — we'll tell you honestly how we can help.",
            },
          ],
        },
        // ─── SEO & Metadata Tab ──────────────────────────────────────────────
        {
          label: 'SEO & Metadata',
          fields: [
            {
              type: 'collapsible',
              label: '🏠 Homepage',
              fields: [
                {
                  name: 'seoHomeTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'VardhSoft | Premium Custom Software Development',
                  admin: { description: 'Shown in browser tab and Google results. Keep under 60 characters.' },
                },
                {
                  name: 'seoHomeDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: 'VardhSoft delivers custom software development, cloud solutions, and digital transformation consulting for startups and enterprises in India and globally.',
                  admin: { description: 'Shown in Google search results. Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🏢 About Page',
              fields: [
                {
                  name: 'seoAboutTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'About VardhSoft | Custom Software Engineering',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoAboutDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: 'Learn about VardhSoft, our story, milestones, mission, and how we deconstruct complex software problems into minimal, scalable custom solutions.',
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '⚙️ Services Page',
              fields: [
                {
                  name: 'seoServicesTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Software Development Services | VardhSoft',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoServicesDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: "Explore VardhSoft's full range of custom software development services — web apps, mobile apps, cloud & DevOps, AI automation, UI/UX design, and more.",
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🏭 Industries Page',
              fields: [
                {
                  name: 'seoIndustriesTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Industries We Serve | VardhSoft',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoIndustriesDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: 'VardhSoft builds industry-specific software for healthcare, fintech, e-commerce, education, SaaS, and logistics. Discover how we solve real business problems across sectors.',
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '💻 Technologies Page',
              fields: [
                {
                  name: 'seoTechnologiesTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Technology Stack | VardhSoft',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoTechnologiesDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: 'Explore the modern technologies VardhSoft uses — Next.js, React, Node.js, PostgreSQL, AWS, Docker, and more. Purpose-driven technology choices for scalable software.',
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '📁 Case Studies Page',
              fields: [
                {
                  name: 'seoCaseStudiesTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Client Case Studies | VardhSoft',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoCaseStudiesDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: 'Read how VardhSoft has helped clients across industries solve complex business challenges with custom software — real outcomes, real impact.',
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '🖼️ Portfolio Page',
              fields: [
                {
                  name: 'seoPortfolioTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Portfolio | VardhSoft',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoPortfolioDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: "Browse VardhSoft's portfolio of completed software projects — web platforms, mobile apps, SaaS products, and business automation systems built for real clients.",
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '💼 Careers Page',
              fields: [
                {
                  name: 'seoCareersTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Careers at VardhSoft | Join Our Engineering Team',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoCareersDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: 'Explore open engineering positions at VardhSoft. We build high-impact software and look for passionate developers, designers, and problem solvers to join us.',
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '📬 Contact Page',
              fields: [
                {
                  name: 'seoContactTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Contact Us | VardhSoft',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoContactDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: 'Get in touch with VardhSoft. Submit a project inquiry and our engineering team will respond within 24 business hours.',
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
            {
              type: 'collapsible',
              label: '📅 Book a Meeting Page',
              fields: [
                {
                  name: 'seoBookTitle',
                  label: 'Page Title',
                  type: 'text',
                  defaultValue: 'Book a Consultation | VardhSoft',
                  admin: { description: 'Keep under 60 characters.' },
                },
                {
                  name: 'seoBookDescription',
                  label: 'Meta Description',
                  type: 'textarea',
                  defaultValue: "Schedule a free 30-minute discovery call with the VardhSoft engineering team. We'll discuss your project goals, scope, and how we can help you build better software.",
                  admin: { description: 'Keep between 130–160 characters.' },
                },
              ],
            },
          ],
        }
      ],
    },
  ],
}
