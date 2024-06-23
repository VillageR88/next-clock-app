import Image from 'next/image';

export default function ImagePlanet({ src, alt }: { src: string; alt: string }) {
  return <Image priority width={1000} height={1} src={src} className="size-fit" alt={alt} />;
}
