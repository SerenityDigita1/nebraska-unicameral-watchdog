import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LB 34 — coupon, not a cut. Unicameral Watchdog.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STAGE = [
  { label: "Introduced", color: "#0a0e1a" },
  { label: "Committee", color: "#0a0e1a" },
  { label: "Floor", color: "#0a0e1a" },
  { label: "Passed", color: "#059669" },
];

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
          padding: "44px 52px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
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
            background: "white",
            borderRadius: 24,
            padding: "32px 40px 28px",
            width: 1096,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
            <div
              style={{
                background: "#059669",
                color: "white",
                fontSize: 22,
                fontWeight: 700,
                padding: "8px 16px",
                borderRadius: 10,
                marginRight: 14,
              }}
            >
              LB 34
            </div>
            <span style={{ color: "#6b7280", fontSize: 20 }}>Signed Aug. 20, 2024 · 40–3</span>
          </div>

          <div
            style={{
              display: "flex",
              color: "#0a0e1a",
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            School District Property Tax Relief Act
          </div>
          <div
            style={{
              display: "flex",
              color: "#4b5563",
              fontSize: 24,
              lineHeight: 1.35,
              marginBottom: 28,
            }}
          >
            ~30% credit on the school line. Coupon, not a cut.
          </div>

          <div style={{ display: "flex", width: 1016, height: 4, background: "#0a0e1a", marginBottom: -12 }} />
          <div style={{ display: "flex", width: 1016, justifyContent: "space-between", marginBottom: 28 }}>
            {STAGE.map((step) => (
              <div key={step.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 180 }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    background: step.color,
                    marginBottom: 8,
                  }}
                />
                <span style={{ fontSize: 18, fontWeight: 700, color: step.color }}>{step.label}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              background: "#fffbeb",
              borderLeft: "6px solid #f59e0b",
              borderRadius: "0 12px 12px 0",
              padding: "16px 20px",
              color: "#78350f",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Ad vs record · The ad said he cut taxes. Lincoln passed a credit.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
