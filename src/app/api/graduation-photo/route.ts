import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "assets",
    "images",
    "angelica-graduation-repaired.base64",
  );

  const base64 = (await readFile(filePath, "utf8")).trim();
  const bytes = Buffer.from(base64, "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
