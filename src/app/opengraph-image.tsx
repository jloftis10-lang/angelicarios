import { ImageResponse } from "next/og";
import { brand, serviceAreas } from "@/config/site";
import { BRAND_MARK_PNG } from "@/config/brandMark";

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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#193247",
          color: "#faf8f4",
          fontFamily: "sans-serif",
        }}
      >
        <img src={BRAND_MARK_PNG} width={148} height={122} alt="" style={{ marginBottom: 24 }} />
        <div style={{ display: "flex", width: 96, height: 2, backgroundColor: "#bfa870", marginBottom: 28 }} />
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#d79a72", display: "flex" }}>
          {`${serviceAreas.primary} • ${serviceAreas.secondary}`}
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, marginTop: 24, maxWidth: 900, display: "flex" }}>
          Peachtree City real estate, handled personally.
        </div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#d8c9b8", display: "flex" }}>{brand.name}</div>
      </div>
    ),
    { ...size },
  );
}
