import LayoutMenu from '@/app/components/layout';
import Image from 'next/image';
import dataJson from '@/public/assets/data.json';
import iconChevron from '@/public/assets/icon-chevron.svg';
import Link from 'next/link';

const planetBackgroundColors = {
  mercury: 'bg-[#DEF4FC]',
  venus: 'bg-[#F7CC7F]',
  earth: 'bg-[#545BFE]',
  mars: 'bg-[#FF6A45]',
  jupiter: 'bg-[#ECAD7A]',
  saturn: 'bg-[#FCCB6B]',
  uranus: 'bg-[#65F0D5]',
  neptune: 'bg-[#497EFA]',
};

export default function Menu({ params }: { params: { planet: string; mode: string } }) {
  console.log('params', params);
  const overview = 'overview';
  return (
    <LayoutMenu params={params}>
      <ul className="flex h-[487px] w-full flex-col divide-y divide-white/10 bg-[#070724] pl-[24px] pr-[32px]">
        {dataJson.map((planet, index) => (
          <li key={index} className="w-full">
            <Link
              href={{
                pathname: `/${planet.name.toLowerCase()}/${overview}`,
                query: { planet: planet.name.toLowerCase(), mode: overview },
              }}
            >
              <button type="button" className="flex h-[65px] w-full items-center justify-between">
                <div className="flex items-center gap-[25px]">
                  <div
                    className={`size-[20px] rounded-full ${planetBackgroundColors[planet.name.toLowerCase() as keyof typeof planetBackgroundColors]}`}
                  ></div>
                  <span className="text-white">{planet.name.toUpperCase()}</span>
                </div>
                <Image className="size-fit" src={iconChevron as string} alt="icon chevron" />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </LayoutMenu>
  );
}
