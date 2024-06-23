import Image from 'next/image';
import imageBackgroundDaytime from '@/public/assets/desktop/bg-image-daytime.jpg';

export default function Home() {
  return (
    <>
      <Image priority className="object-contain" fill src={imageBackgroundDaytime} alt="background image daytime" />
    </>
  );
}
