/** @type {import('next').NextConfig} */
const apiBaseUrl = process.env.API_BASE_URL || "http://localhost:8000";
const apiOrigin = new URL(apiBaseUrl).origin;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
              "font-src 'self' https://cdn.jsdelivr.net data:",
              "img-src 'self' data: https://images.unsplash.com",
              `connect-src 'self' ${apiOrigin}`,
            ].join("; "),
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/waitlist",
        destination: `${apiBaseUrl}/waitlist`,
      },
    ];
  },
};

export default nextConfig;
