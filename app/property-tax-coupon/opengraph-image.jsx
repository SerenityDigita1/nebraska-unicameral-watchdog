import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "He says he cut property taxes. The Legislature passed a coupon. The levy went back up.";
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
          <span>He says he cut property taxes.</span>
          <span>The Legislature passed a coupon.</span>
          <span>The levy went back up.</span>
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
                background: "#059669",
                color: "white",
                fontSize: 20,
                fontWeight: 700,
                padding: "7px 14px",
                borderRadius: 10,
                marginRight: 14,
              }}
            >
              LB 34
            </div>
            <span style={{ color: "#6b7280", fontSize: 20 }}>Signed Aug. 20, 2024 · Passed 40–3</span>
          </div>
          <div style={{ display: "flex", color: "#0a0e1a", fontSize: 28, fontWeight: 700, marginBottom: 10 }}>
            School District Property Tax Relief Act
          </div>
          <div style={{ display: "flex", color: "#78350f", fontSize: 22, fontWeight: 600 }}>
            Ad vs record · The ad said he cut taxes. Lincoln printed a coupon.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
