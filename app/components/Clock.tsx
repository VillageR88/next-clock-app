'use client';
import Image from 'next/image';
import imageSun from '@/public/assets/desktop/icon-sun.svg';
import imageMoon from '@/public/assets/desktop/icon-moon.svg';
import { useEffect, useContext } from 'react';
import { DataContext } from '../_lib/DataContext';

const DayNightIcon = ({ hours }: { hours: number }) => {
  return hours < 6 || hours >= 18 ? (
    <Image className="size-[24px]" width={24} height={24} src={imageMoon as string} alt="moon icon" />
  ) : (
    <Image className="size-[24px]" width={24} height={24} src={imageSun as string} alt="sun icon" />
  );
};

export default function Clock() {
  const { date, setDate, location } = useContext(DataContext);
  const city = location?.data.location.city.name;
  const country = location?.data.location.country.alpha2;
  //"current_time": "2024-06-24T09:22:46+02:00",

  const bottomText = city && country ? `In ${city}, ${country}`.toUpperCase() : null;

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [setDate]);

  const welcomingText = (date: Date) => {
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = 'MORNING';
    } else if (hours < 18) {
      timeOfDay = 'AFTERNOON';
    } else {
      timeOfDay = 'EVENING';
    }
    return `GOOD ${timeOfDay}, IT’S CURRENTLY`;
  };

  return (
    <div className="flex w-fit flex-col items-start">
      <div className="flex items-center gap-[16px]">
        <DayNightIcon hours={date.getHours()} />
        <span className="text-[15px] leading-[25px] tracking-[3px] text-white md:text-[18px] md:leading-[28px] md:tracking-[3.6px] xl:text-[20px] xl:tracking-[4px]">
          {welcomingText(date)}
        </span>
      </div>
      <div className="flex items-end justify-between gap-[20px] py-[16px]">
        <h1 className="text-[100px] font-bold leading-[100px] tracking-[-2.5px] text-white md:text-[175px] md:leading-[175px] md:tracking-[-4.38px] xl:text-[200px] xl:leading-[200px] xl:tracking-[-5px]">
          {date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </h1>
        {location && (
          <span className="pb-[6px] text-[15px] font-light leading-[28px] text-white md:pb-[28px] md:text-[32px] xl:text-[40px]">
            {location.data.timezone.code}
          </span>
        )}
      </div>
      {bottomText && (
        <span className="text-[18px] font-bold leading-[28px] tracking-[3.6px] text-white xl:text-[24px] xl:tracking-[4.8px]">
          {bottomText}
        </span>
      )}
    </div>
  );
}
