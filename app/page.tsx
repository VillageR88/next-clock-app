import Image from 'next/image';
import imageBackgroundDaytime from '@/public/assets/desktop/bg-image-daytime.jpg';

export default function Home() {
  return (
    <>
      <Image
        className="absolute left-0 size-full object-cover"
        height={800}
        priority
        width={1440}
        src={imageBackgroundDaytime}
        alt="background image daytime"
      />
      <main></main>
    </>
  );
}
