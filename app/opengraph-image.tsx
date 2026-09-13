import { ImageResponse } from "next/og";

// Deelafbeelding voor WhatsApp, LinkedIn en andere platforms. Wordt bij de
// build als PNG gegenereerd, dus er hoeft geen losse afbeelding in de repo.
export const alt = "Denzel Keenan - Marketing & Web Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #060d22 0%, #0a1734 48%, #071026 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#38bdf8",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#7dd3fc",
              display: "flex",
            }}
          >
            Beschikbaar voor opdrachten
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -4,
              color: "#ffffff",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Denzel Keenan
          </div>
          <div
            style={{
              fontSize: 44,
              color: "#38bdf8",
              marginTop: 18,
              letterSpacing: -1,
              display: "flex",
            }}
          >
            Marketing &amp; Web Specialist
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            paddingTop: 28,
            fontSize: 26,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          <div style={{ display: "flex" }}>Websites - SEO - AI &amp; automatisering</div>
          <div style={{ display: "flex" }}>denzelkeenan.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
