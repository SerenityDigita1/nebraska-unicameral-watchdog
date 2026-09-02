import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LB 34 — coupon, not a cut. Unicameral Watchdog.";
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                background: "#c8102e",
                color: "white",
                fontSize: "22px",
                fontWeight: 700,
                padding: "8px 14px",
                borderRadius: "10px",
                marginRight: "14px",
              }}
            >
              49
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "22px", fontWeight: 600 }}>NE Watchdog</span>
          </div>
          <span style={{ color: "#c8102e", fontSize: "18px", fontWeight: 700 }}>unicameralwatchdog.com</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            borderRadius: "24px",
            padding: "36px 40px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "18px" }}>
            <div
              style={{
                background: "#059669",
                color: "white",
                fontSize: "22px",
                fontWeight: 700,
                padding: "8px 16px",
                borderRadius: "10px",
                marginRight: "14px",
              }}
            >
              LB 34
            </div>
            <span style={{ color: "#6b7280", fontSize: "20px" }}>Signed Aug. 20, 2024 · 40–3</span>
          </div>

          <div style={{ color: "#0a0e1a", fontSize: "40px", fontWeight: 700, lineHeight: 1.15, marginBottom: "16px" }}>
            School District Property Tax Relief Act
          </div>
          <div style={{ color: "#4b5563", fontSize: "24px", lineHeight: 1.35, marginBottom: "28px" }}>
            ~30% credit on the school line. Coupon, not a cut.
          </div>

          <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
            {["Introduced", "Committee", "Floor", "Passed"].map((label, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", flex: i < 3 ? 1 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 999,
                      background: i === 3 ? "#059669" : "#0a0e1a",
                    }}
                  />
                  <span
                    style={{
                      marginTop: 8,
                      fontSize: 16,
                      fontWeight: 700,
                      color: i === 3 ? "#047857" : "#374151",
                    }}
                  >
                    {label}
                  </span>
                </div>
                {i < 3 && (
                  <div style={{ height: 4, flex: 1, background: "#0a0e1a", margin: "0 10px 22px 10px" }} />
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "auto",
              background: "#fffbeb",
              borderLeft: "4px solid #f59e0b",
              borderRadius: "0 12px 12px 0",
              padding: "14px 18px",
              color: "#78350f",
              fontSize: "22px",
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
