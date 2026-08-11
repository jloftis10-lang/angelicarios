import Image, { type StaticImageData } from "next/image";

export function PortraitImage({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  priority,
}: {
  src: StaticImageData;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`${aspect} ${className} relative overflow-hidden rounded-2xl`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 40vw, 90vw"
        className="object-cover"
      />
    </div>
  );
}
