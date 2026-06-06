import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nebraska Unicameral Watchdog";
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
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "28px" }}>
          <div
            style={{
              background: "#c8102e",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
              padding: "10px 18px",
              borderRadius: "10px",
              marginRight: "18px",
            }}
          >
            49
          </div>
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "24px", fontWeight: "600" }}>
            NE Watchdog
          </span>
        </div>

        <div
          style={{
            color: "white",
            fontSize: "58px",
            fontWeight: "bold",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          Nebraska Unicameral Watchdog
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "26px",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Plain English legislature tracking for Sarpy County and Omaha
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            color: "#c8102e",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          unicameralwatchdog.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
