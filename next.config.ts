import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    // Restrict CPU workers during build to prevent DB connection limits exhaustion
    cpus: 2,
  }
};

export default withPayload(nextConfig);
