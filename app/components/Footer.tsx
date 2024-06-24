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
      description: continent && city && `${continent}/${city}`,
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
      <section className="flex flex-col">
        <h2 className="text-[15px] leading-[28px] tracking-[3px]">{title}</h2>
        <p className="text-[56px] font-bold">{description}</p>
      </section>
    );
  };
  const [calculatedHeight, setCalculatedHeight] = useState<number>(0);
  useEffect(() => {
    let animationFrameId: number;

    const animateHeight = () => {
      setCalculatedHeight((prev) => {
        let nextHeight = prev;
        if (footerOpen && prev < 400) {
          nextHeight = prev + 20;
        } else if (!footerOpen && prev > 0) {
          nextHeight = prev - 20;
        }

        if ((footerOpen && nextHeight >= 400) || (!footerOpen && nextHeight <= 0)) {
          cancelAnimationFrame(animationFrameId);
          divRef.current?.classList.remove('no-scrollbar');
        }
        return nextHeight;
      });

      if ((footerOpen && calculatedHeight < 400) || (!footerOpen && calculatedHeight > 0)) {
        animationFrameId = requestAnimationFrame(animateHeight);
        divRef.current?.classList.add('no-scrollbar');
      }
    };
    animationFrameId = requestAnimationFrame(animateHeight);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [calculatedHeight, divRef, footerOpen]);

  return (
    <footer
      style={{ minHeight: calculatedHeight }}
      className={`${footerOpen ? '' : 'translate-y-1/2 scale-y-0 opacity-0'} ${colors} flex size-full max-h-[50vh] items-center justify-center backdrop-blur-md transition duration-[350ms]`}
    >
      <div className="flex w-full max-w-[1110px] px-[64px] xl:px-0">
        <div className="flex w-full max-w-[844px] justify-between">
          <div className="flex flex-col gap-y-[42px]">
            {Object.keys(items1).map((key) => (
              <Block
                key={key}
                title={items1[key as keyof typeof items1].title}
                description={items1[key as keyof typeof items1].description as string}
              />
            ))}
          </div>
          <div className="w-px border-r border-[#303030]"></div>
          <div className="flex flex-col gap-y-[42px]">
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
