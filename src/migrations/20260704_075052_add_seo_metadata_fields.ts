import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "website_settings" 
      ADD COLUMN "seo_home_title" varchar DEFAULT 'VardhSoft | Premium Custom Software Development',
      ADD COLUMN "seo_home_description" varchar DEFAULT 'VardhSoft delivers custom software development, cloud solutions, and digital transformation consulting for startups and enterprises in India and globally.',
      ADD COLUMN "seo_about_title" varchar DEFAULT 'About VardhSoft | Custom Software Engineering',
      ADD COLUMN "seo_about_description" varchar DEFAULT 'Learn about VardhSoft, our story, milestones, mission, and how we deconstruct complex software problems into minimal, scalable custom solutions.',
      ADD COLUMN "seo_services_title" varchar DEFAULT 'Software Development Services | VardhSoft',
      ADD COLUMN "seo_services_description" varchar DEFAULT 'Explore VardhSoft''s full range of custom software development services — web apps, mobile apps, cloud & DevOps, AI automation, UI/UX design, and more.',
      ADD COLUMN "seo_industries_title" varchar DEFAULT 'Industries We Serve | VardhSoft',
      ADD COLUMN "seo_industries_description" varchar DEFAULT 'VardhSoft builds industry-specific software for healthcare, fintech, e-commerce, education, SaaS, and logistics. Discover how we solve real business problems across sectors.',
      ADD COLUMN "seo_technologies_title" varchar DEFAULT 'Technology Stack | VardhSoft',
      ADD COLUMN "seo_technologies_description" varchar DEFAULT 'Explore the modern technologies VardhSoft uses — Next.js, React, Node.js, PostgreSQL, AWS, Docker, and more. Purpose-driven technology choices for scalable software.',
      ADD COLUMN "seo_case_studies_title" varchar DEFAULT 'Client Case Studies | VardhSoft',
      ADD COLUMN "seo_case_studies_description" varchar DEFAULT 'Read how VardhSoft has helped clients across industries solve complex business challenges with custom software — real outcomes, real impact.',
      ADD COLUMN "seo_portfolio_title" varchar DEFAULT 'Portfolio | VardhSoft',
      ADD COLUMN "seo_portfolio_description" varchar DEFAULT 'Browse VardhSoft''s portfolio of completed software projects — web platforms, mobile apps, SaaS products, and business automation systems built for real clients.',
      ADD COLUMN "seo_careers_title" varchar DEFAULT 'Careers at VardhSoft | Join Our Engineering Team',
      ADD COLUMN "seo_careers_description" varchar DEFAULT 'Explore open engineering positions at VardhSoft. We build high-impact software and look for passionate developers, designers, and problem solvers to join us.',
      ADD COLUMN "seo_contact_title" varchar DEFAULT 'Contact Us | VardhSoft',
      ADD COLUMN "seo_contact_description" varchar DEFAULT 'Get in touch with VardhSoft. Submit a project inquiry and our engineering team will respond within 24 business hours.',
      ADD COLUMN "seo_book_title" varchar DEFAULT 'Book a Consultation | VardhSoft',
      ADD COLUMN "seo_book_description" varchar DEFAULT 'Schedule a free 30-minute discovery call with the VardhSoft engineering team. We''ll discuss your project goals, scope, and how we can help you build better software.';
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "website_settings" 
      DROP COLUMN "seo_home_title",
      DROP COLUMN "seo_home_description",
      DROP COLUMN "seo_about_title",
      DROP COLUMN "seo_about_description",
      DROP COLUMN "seo_services_title",
      DROP COLUMN "seo_services_description",
      DROP COLUMN "seo_industries_title",
      DROP COLUMN "seo_industries_description",
      DROP COLUMN "seo_technologies_title",
      DROP COLUMN "seo_technologies_description",
      DROP COLUMN "seo_case_studies_title",
      DROP COLUMN "seo_case_studies_description",
      DROP COLUMN "seo_portfolio_title",
      DROP COLUMN "seo_portfolio_description",
      DROP COLUMN "seo_careers_title",
      DROP COLUMN "seo_careers_description",
      DROP COLUMN "seo_contact_title",
      DROP COLUMN "seo_contact_description",
      DROP COLUMN "seo_book_title",
      DROP COLUMN "seo_book_description";
  `)
}
