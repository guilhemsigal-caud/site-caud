import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://tw.collectiveaudience.co https://demo.collectiveaudience.co",
              "connect-src 'self' https://*.collectiveaudience.co https://*.beop.io https://beop.io",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://*.collectiveaudience.co https://*.beop.io",
              "font-src 'self' data:",
              "frame-src 'self' https://*.collectiveaudience.co https://*.beop.io",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
