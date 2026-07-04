import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getPayload } from 'payload'
import config from '@payload-config'
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'VardhSoft | Premium Custom Software Development',
  description: 'VardhSoft delivers custom software development, cloud solutions, and digital transformation consulting for startups and enterprises in India and globally.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config })
  const [servicesRes, industriesRes, projectsRes, settings] = await Promise.all([
    payload.find({
      collection: 'services',
      sort: 'title',
      limit: 100,
      depth: 1,
    }),
    payload.find({
      collection: 'industries',
      sort: 'title',
      limit: 100,
      depth: 1,
    }),
    payload.find({
      collection: 'projects',
      limit: 1,
      depth: 0,
    }),
    payload.findGlobal({
      slug: 'website-settings',
    }),
  ])

  const services = servicesRes.docs
  const industries = industriesRes.docs
  const showPortfolio = projectsRes.totalDocs > 0
  const footerBrandText = settings.footerBrandText || 'Empowering businesses globally with state-of-the-art software engineering, design, and consulting.'

  // Format services to plain objects for the client component
  const plainServices = services.map(service => ({
    id: service.id,
    title: service.title,
    slug: service.slug,
    icon: service.icon,
    shortDescription: service.shortDescription,
    subServices: (service.subServices ?? []).map((sub) => ({
      title: (sub as { title: string }).title,
      description: (sub as { description?: string }).description ?? '',
    })),
  }))

  const plainIndustries = industries.map(ind => ({
    id: ind.id,
    title: ind.title,
    slug: ind.slug,
    icon: ind.icon || 'Cpu',
    overview: ind.overview || '',
    heroSubText: ind.hero?.subText || '',
  }))

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('theme-light');
                  } else if (theme === 'warm') {
                    document.documentElement.classList.add('theme-warm');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
        <Header services={plainServices} industries={plainIndustries} showPortfolio={showPortfolio} />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer showPortfolio={showPortfolio} brandText={footerBrandText} />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
