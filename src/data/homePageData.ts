// Homepage Data — Single source of truth for all homepage section content.
// Testimonials and featured services are fetched from Payload CMS at runtime.

export const homePageData = {
  hero: {
    badge: "🚀 Trusted Technology Partner for Startups & Businesses",
    title: "We Build Custom Software That Drives Business Growth",
    description:
      "We design and develop scalable web applications, SaaS platforms, business automation systems, and modern websites that help startups and businesses launch faster, operate efficiently, and grow confidently.",
    primaryCTA: {
      label: "Start Your Project",
      link: "/contact",
    },
    secondaryCTA: {
      label: "View Our Work",
      link: "/portfolio",
    },
  },

  stats: [
    {
      value: "45",
      suffix: "+",
      label: "Happy Clients",
    },
    {
      value: "80",
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      value: "15",
      suffix: "+",
      label: "Technologies Mastered",
    },
    {
      value: "100",
      suffix: "%",
      label: "Client Satisfaction Focus",
    },
  ],

  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Payload CMS",
    "Supabase",
    "Tailwind CSS",
    "Prisma",
  ],

  features: [
    {
      title: "Custom Software Development",
      description:
        "Tailored web applications and business systems designed specifically for your workflows and growth requirements.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Modern, maintainable architectures that support future expansion and increasing user demands.",
    },
    {
      title: "Performance Focused",
      description:
        "Fast loading applications with excellent user experience, SEO, and optimized Core Web Vitals.",
    },
    {
      title: "Security First",
      description:
        "Secure authentication, protected APIs, and industry best practices implemented from day one.",
    },
  ],

  whyChooseUs: [
    {
      title: "Fast Delivery",
      description:
        "Agile development processes that help businesses launch products quickly without compromising quality.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Software architectures designed to support future business growth and increasing user demands.",
    },
    {
      title: "Clean Engineering",
      description:
        "Well-structured and maintainable codebases that are easy to extend and scale.",
    },
    {
      title: "Long-Term Support",
      description:
        "Continuous maintenance, improvements, and technical assistance after launch.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "Understanding business goals, challenges, and project requirements.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Creating architecture, timelines, and a development roadmap.",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "Building user-friendly interfaces and scalable backend systems.",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Ensuring quality, security, and performance before launch.",
    },
    {
      step: "05",
      title: "Launch & Growth",
      description:
        "Deploying, monitoring, and continuously improving your product.",
    },
  ],

  cta: {
    title: "Ready to Build Your Next Digital Product?",
    description:
      "Let's discuss your idea and explore how we can help you build scalable software that drives business growth.",
    button: {
      label: "Schedule a Free Consultation",
      link: "/contact",
    },
  },

  // Testimonials are fetched from Payload CMS at runtime
  // testimonials: (dynamic from CMS)
}
