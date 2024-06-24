'use client';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '@/app/_lib/DataContext';

export default function Footer() {
  const { footerOpen, location, date, divRef } = useContext(DataContext);
  const continent = location?.data.location.continent.name;
  const city = location?.data.location.city.name;
  const dayOfTheYear = Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const dayOfTheWeek = date.getDay();
  const weekNumber = Math.floor(dayOfTheYear / 7);
  const colors =
    date.getHours() < 6 || date.getHours() >= 18 ? 'bg-[#000000]/50 text-white' : 'bg-[#FFFFFF]/50 text-[#303030]';

  const items1 = {
    timezone: {
      title: 'CURRENT TIMEZONE',
      description: continent && city && `${continent}\n/${city}`,
    },
    dayOfTheYear: {
      title: 'DAY OF THE YEAR',
      description: dayOfTheYear,
    },
  };
  const items2 = {
    dayOfTheWeek: {
      title: 'DAY OF THE WEEK',
      description: dayOfTheWeek.toString(),
    },
    weekNumber: {
      title: 'WEEK NUMBER',
      description: weekNumber,
    },
  };
  const Block = ({ title, description }: { title: string; description: string }) => {
    if (!description) return null;
    return (
      <section className="flex items-center justify-between gap-[20px] md:flex-col md:items-start md:gap-0">
        <h2 className="text-[10px] leading-[28px] tracking-[2.6px] md:text-[13px] xl:text-[15px] xl:tracking-[3px]">
          {title}
        </h2>
        <p className="break-words text-right text-[20px] font-bold md:text-[40px] xl:text-[56px]">{description}</p>
      </section>
    );
  };
  const [calculatedHeight, setCalculatedHeight] = useState<number>(0);
  const [destinationHeight, setDestinationHeight] = useState<number>(400);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth > 1024) {
        setDestinationHeight(400);
        setCalculatedHeight(400);
      } else if (window.innerWidth >= 768) {
        setDestinationHeight(440);
        setCalculatedHeight(440);
      } else {
        setDestinationHeight(256);
        setCalculatedHeight(256);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const animateHeight = () => {
      setCalculatedHeight((prev) => {
        let nextHeight = prev;
        if (footerOpen && prev < destinationHeight) {
          nextHeight = prev + 20;
        } else if (!footerOpen && prev > 0) {
          nextHeight = prev - 20;
        }
        if ((footerOpen && nextHeight >= destinationHeight) || (!footerOpen && nextHeight <= 0)) {
          cancelAnimationFrame(animationFrameId);
          divRef.current?.classList.remove('no-scrollbar');
        }
        return nextHeight;
      });

      if ((footerOpen && calculatedHeight < destinationHeight) || (!footerOpen && calculatedHeight > 0)) {
        animationFrameId = requestAnimationFrame(animateHeight);
        divRef.current?.classList.add('no-scrollbar');
      }
    };
    animationFrameId = requestAnimationFrame(animateHeight);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [calculatedHeight, destinationHeight, divRef, footerOpen]);

  return (
    <footer
      style={{ minHeight: calculatedHeight }}
      className={`${footerOpen ? '' : 'translate-y-1/2 scale-y-0 opacity-0'} ${colors} flex size-full max-h-[50vh] items-center justify-center backdrop-blur-md transition duration-[350ms]`}
    >
      <div className="flex w-full max-w-[1110px] px-[24px] md:px-[64px] xl:px-0">
        <div className="flex w-full flex-col gap-[16px] md:flex-row md:gap-[80px]">
          <div className="flex flex-col gap-y-[16px] md:gap-y-[60px] xl:gap-y-[42px]">
            {Object.keys(items1).map((key) => (
              <Block
                key={key}
                title={items1[key as keyof typeof items1].title}
                description={items1[key as keyof typeof items1].description as string}
              />
            ))}
          </div>
          <div className="hidden w-px border-r border-[#303030] xl:block xl:pl-[60px]"></div>
          <div className="flex flex-col gap-y-[16px] md:gap-y-[60px] xl:gap-y-[42px]">
            {Object.keys(items2).map((key) => (
              <Block
                key={key}
                title={items2[key as keyof typeof items2].title}
                description={items2[key as keyof typeof items2].description as string}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
