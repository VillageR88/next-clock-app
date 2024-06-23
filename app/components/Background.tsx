'use client';
import Image, { StaticImageData } from 'next/image';
import imageBackgroundDaytime from '@/public/assets/onlineAssets/jeremy-bishop-dvacrxuexls-unsplash.jpg';
import imageBackgroundNighttime from '@/public/assets/onlineAssets/Milky-Way-4K-3000x2000.jpg';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../_lib/DataContext';

export default function Background() {
  const { date } = useContext(DataContext);
  const [alt, setAlt] = useState<string>('background image daytime' as string);
  const [src, setSrc] = useState<StaticImageData | undefined>(undefined);

  useEffect(() => {
    if (src === undefined) {
      document.documentElement.classList.remove('hidden');
    }
  }, [src]);

  useEffect(() => {
    const hour = date.getHours();
    if (hour >= 6 && hour < 18) {
      setSrc(imageBackgroundDaytime);
      setAlt('background image daytime');
    } else {
      setSrc(imageBackgroundNighttime);
      setAlt('background image nighttime');
    }
  }, [date]);
  if (src === undefined) return;

  return (
    <Image
      className="fixed left-0 -z-10 size-full min-h-screen object-cover"
      priority
      width={1920}
      height={1080}
      src={src}
      alt={alt}
    />
  );
}
