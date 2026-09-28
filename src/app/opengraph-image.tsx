import { ImageResponse } from "next/og";

export const alt = "Yatish Joshi, software developer in Indore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090909",
          color: "#f4f1ea",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d6ff3f",
            fontSize: 22,
          }}
        >
          Indore · Software developer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.92, letterSpacing: -3 }}>
            Yatish Joshi
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#f4f1ea" }}>
            React and Next.js, built with care.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
