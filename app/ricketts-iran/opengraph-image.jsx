import { ImageResponse } from "next/og";
import { OG } from "@/data/ricketts-iran";

export const runtime = "edge";
export const alt = OG.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0e1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "48px 56px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                background: "#c8102e",
                color: "white",
                fontSize: 22,
                fontWeight: 700,
                padding: "8px 14px",
                borderRadius: 10,
                marginRight: 14,
              }}
            >
              49
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 22, fontWeight: 600 }}>NE Watchdog</span>
          </div>
          <span style={{ color: "#c8102e", fontSize: 18, fontWeight: 700 }}>unicameralwatchdog.com</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 980,
            marginBottom: 36,
          }}
        >
          {OG.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            borderRadius: 20,
            padding: "28px 32px",
            width: 1088,
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <div
              style={{
                background: "#0a0e1a",
                color: "white",
                fontSize: 20,
                fontWeight: 700,
                padding: "7px 14px",
                borderRadius: 10,
                marginRight: 14,
              }}
            >
              {OG.cardChip}
            </div>
            <span style={{ color: "#6b7280", fontSize: 20 }}>{OG.cardMeta}</span>
          </div>
          <div style={{ display: "flex", color: "#0a0e1a", fontSize: 28, fontWeight: 700, marginBottom: 10 }}>
            {OG.cardTitle}
          </div>
          <div style={{ display: "flex", color: "#78350f", fontSize: 22, fontWeight: 600 }}>
            {OG.cardNote}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
