/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },

          // Control referrer data
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          // Disable unused browser features
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },

          // SAFE Content Security Policy (GA4 + Fonts + Images OK)
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com; " +
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; " +
              "font-src 'self' data:; " +
              "frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;