import { ImageResponse } from "next/og";
import { brand } from "@/config/site";
import { getPostBySlug } from "@/content/blog";
import { BRAND_MARK_PNG } from "@/config/brandMark";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
        <img src={BRAND_MARK_PNG} width={122} height={100} alt="" style={{ marginBottom: 24 }} />
        <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#8fa194", display: "flex" }}>
          {`${brand.name} · Blog`}
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, marginTop: 24, maxWidth: 950, display: "flex" }}>
          {post?.title ?? "Blog"}
        </div>
      </div>
    ),
    { ...size },
  );
}
