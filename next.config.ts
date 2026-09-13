import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Beveiligingsheaders, te controleren via securityheaders.com of de
// Network-tab van de browser. unsafe-eval is alleen in ontwikkeling nodig,
// omdat React daar eval gebruikt voor betere foutmeldingen.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Voorkomt dat de site in een iframe van iemand anders geladen wordt.
  { key: "X-Frame-Options", value: "DENY" },
  // De browser mag bestandstypes niet zelf raden en anders uitvoeren.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Bij het verlaten van de site gaat alleen het domein mee, niet het pad.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Camera, microfoon en locatie zijn nergens nodig, dus helemaal uit.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Dwing HTTPS af, ook bij een volgend bezoek.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
