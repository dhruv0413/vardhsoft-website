/**
 * Centralized utility to trigger Next.js cache revalidation on-demand.
 * Uses dynamic import of 'next/cache' to ensure compatibility when imported
 * inside Payload CMS collections which are bundled for both Node.js (server)
 * and browser (client) contexts.
 */
export async function revalidatePathHelper(path: string, type?: 'page' | 'layout') {
  try {
    const { revalidatePath } = await import('next/cache')
    revalidatePath(path, type)
    console.log(`[Revalidation] Successfully revalidated: ${path} (${type || 'page'})`)
  } catch (error: any) {
    // In standalone CLI scripts (like seed.ts), Next.js static store is not active — safely ignore
    if (error?.message?.includes('static generation store missing')) {
      return
    }
    console.warn(`[Revalidation] Skipped revalidating path ${path}:`, error?.message || error)
  }
}
