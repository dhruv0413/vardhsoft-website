import type { Metadata } from 'next'
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@payload-config'
import { importMap } from '../importMap.js'

type Args = {
  params: Promise<{ segments?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params: params as any, searchParams: searchParams as any })

const Page = async ({ params, searchParams }: Args) =>
  NotFoundPage({ config, importMap, params: params as any, searchParams: searchParams as any })

export default Page
