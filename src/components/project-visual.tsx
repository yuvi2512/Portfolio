import Image from "next/image";

export function ProjectVisual({
  title,
  image,
}: {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}) {
  return (
    <Image
      src={image.src}
      alt={title}
      width={image.width}
      height={image.height}
      sizes="(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw"
      className="block h-auto w-full"
    />
  );
}
