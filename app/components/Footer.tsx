'use client';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '@/app/_lib/DataContext';

export default function Footer() {
  const { footerOpen, location, date } = useContext(DataContext);
  const continent = location?.data.location.continent.name;
  const city = location?.data.location.city.name;
  const dayOfTheYear = Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const dayOfTheWeek = date.getDay();
  const weekNumber = Math.floor(dayOfTheYear / 7);

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
    return (
      <section className="flex flex-col">
        <h2 className="text-[15px] leading-[28px] tracking-[3px] text-[#303030]">{title}</h2>
        <p className="text-[56px] font-bold">{description}</p>
      </section>
    );
  };
  const [calculatedHeight, setCalculatedHeight] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCalculatedHeight((prev) => {
        if (footerOpen && prev < 400) {
          return prev + 20;
        } else if (!footerOpen && prev > 0) {
          return prev - 20;
        }
        return prev;
      });
    }, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, [footerOpen]);

  return (
    <footer
      style={{ minHeight: calculatedHeight }}
      className={`${footerOpen ? '' : 'translate-y-1/2 scale-y-0'} flex size-full max-h-[50vh] items-center justify-center bg-white/75 transition duration-[600ms]`}
    >
      <div className="flex w-full max-w-[1110px]">
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
