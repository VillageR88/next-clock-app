import ImagePlanet from '@/app/components/ImagePlanet';
import Image from 'next/image';
import iconSource from '@/public/assets/icon-source.svg';
import dataJson from '@/public/assets/data.json';
import Link from 'next/link';
import LayoutHome from '@/app/components/layout';

const bgColor = {
  mercury: 'bg-[#419EBB]',
  venus: 'bg-[#EDA249]',
  earth: 'bg-[#6D2ED5]',
  mars: 'bg-[#D14C32]',
  jupiter: 'bg-[#D83A34]',
  saturn: 'bg-[#CD5120]',
  uranus: 'bg-[#1EC1A2]',
  neptune: 'bg-[#2D68F0]',
};

const borderColor = {
  mercury: 'border-[#419EBB]',
  venus: 'border-[#EDA249]',
  earth: 'border-[#6D2ED5]',
  mars: 'border-[#D14C32]',
  jupiter: 'border-[#D83A34]',
  saturn: 'border-[#CD5120]',
  uranus: 'border-[#1EC1A2]',
  neptune: 'border-[#2D68F0]',
};

const titleSource = 'Source :';
const titleWikipedia = 'Wikipedia';
const titleRotation = 'ROTATION TIME';
const titleRevolution = 'REVOLUTION TIME';
const titleRadius = 'RADIUS';
const titleTemperature = 'AVERAGE TEMP.';

enum Mode {
  overview = 'overview',
  structure = 'structure',
  geology = 'geology',
}
const titleButtons = {
  overview: 'OVERVIEW',
  structure: 'INTERNAL STRUCTURE',
  geology: 'SURFACE GEOLOGY',
};
const titleButtonsMobile = {
  overview: 'OVERVIEW',
  structure: 'STRUCTURE',
  geology: 'SURFACE',
};
const links = {
  overview: 'overview',
  structure: 'internal-structure',
  geology: 'surface-geology',
};

export default function Planet({ params }: { params: { planet: string; mode: string } }) {
  const data = dataJson.find((item) => item.name.toLowerCase() === params.planet);
  if (!data) return;
  const srcPlanet = {
    overview: data.images.planet.slice(1),
    'internal-structure': data.images.internal.slice(1),
    'surface-geology': data.images.planet.slice(1),
  };
  const additionalImage = params.mode === links.geology ? data.images.geology.slice(1) : undefined;
  console.log(data[Object.entries(links).find(([, value]) => value === params.mode)?.[0] as keyof typeof links].source);
  return (
    <LayoutHome params={params}>
      <div className="mx-auto flex max-w-[1110px] flex-col justify-between xl:flex-row">
        <ul className="mx-auto mt-[39px] flex w-full max-w-[327px] justify-between gap-[16px] md:hidden md:h-[176px]">
          {Object.values(Mode).map((item, index) => (
            <li key={index}>
              <Link scroll={false} href={`/${params.planet}/${links[item]}`} passHref>
                <button
                  className={`${params.mode === links[item] ? borderColor[params.planet as keyof typeof bgColor] : 'border-transparent transition-colors duration-100 hover:bg-[#D8D8D8]/20'} flex h-[48px] w-[80px] items-center justify-center border-b-4 font-leagueSpartan`}
                  type="button"
                >
                  <span className="text-[9px] font-bold leading-[25px] tracking-[2.57px] text-white">
                    {titleButtonsMobile[item]}
                  </span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative mx-auto flex size-[369px] min-h-[369px] translate-y-[10%] scale-75 flex-col items-center justify-center xl:mx-0 xl:mt-[100px] xl:size-[613px] xl:min-h-fit xl:translate-y-0 xl:scale-100">
          <ImagePlanet src={srcPlanet[params.mode as keyof typeof srcPlanet]} alt={`Image of ${data.name}`} />
          {additionalImage && (
            <Image
              width={163}
              height={199}
              src={additionalImage}
              className="absolute left-1/2 mt-[390px] h-[199px] w-[163px] -translate-x-1/2 xl:top-0"
              alt={`Image of ${data.name} geology`}
            />
          )}
        </div>
        <div className="mx-auto mt-[79px] flex flex-row items-center justify-center text-center md:w-[689px] md:justify-between md:text-start xl:mx-0 xl:mt-[126px] xl:h-[541px] xl:w-[350px] xl:flex-col xl:justify-normal">
          <div className="flex w-[321px] flex-col items-center md:items-stretch xl:w-fit">
            <h1>{data.name.toUpperCase()}</h1>
            <p className="mt-[23px]">
              {
                data[Object.entries(links).find(({ '1': value }) => value === params.mode)?.[0] as keyof typeof links]
                  .content
              }
            </p>
            <div className="mt-[24px] flex items-center gap-[5px] text-[14px] text-white/50">
              <span className="font-leagueSpartan font-normal">{titleSource}</span>
              <Link
                className="flex items-center gap-[9px] font-leagueSpartan font-bold underline"
                href={
                  data[Object.entries(links).find(({ '1': value }) => value === params.mode)?.[0] as keyof typeof links]
                    .source
                }
              >
                {titleWikipedia}
                <Image priority className="size-fit" src={iconSource as string} alt="Icon source" />
              </Link>
            </div>
          </div>
          <ul className="mt-[39px] hidden h-[176px] w-[281px] flex-col gap-[16px] md:flex xl:w-full">
            {Object.values(Mode).map((item, index) => (
              <li key={index}>
                <Link scroll={false} href={`/${params.planet}/${links[item]}`} passHref>
                  <button
                    className={`${params.mode === links[item] ? bgColor[params.planet as keyof typeof bgColor] : 'outline transition-colors duration-100 hover:bg-[#D8D8D8]/20'} flex h-[48px] w-full items-center gap-[28px] pl-[28px] font-leagueSpartan outline-1 outline-white/20`}
                    type="button"
                  >
                    <span className="text-[12px] font-bold leading-[25px] tracking-[2.57px] text-white/50">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[12px] font-bold leading-[25px] tracking-[2.57px] text-white">
                      {titleButtons[item]}
                    </span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="mx-auto mt-[27px] flex w-full max-w-[327px] flex-col justify-between gap-[30px] pb-[40px] md:max-w-[689px] md:flex-row xl:mt-[87px] xl:max-w-[1110px]">
        {[
          { title: titleRotation, description: data.rotation },
          {
            title: titleRevolution,
            description: data.revolution,
          },
          { title: titleRadius, description: data.radius },
          {
            title: titleTemperature,
            description: data.temperature,
          },
        ].map((item, index) => (
          <li
            className="flex h-[88px] items-center justify-between gap-[6px] px-[24px] pl-[23px] outline outline-1 outline-white/20 md:w-[164px] md:flex-col md:items-start md:justify-center md:pr-0 xl:h-[128px] xl:w-[255px] xl:gap-[4px]"
            key={index}
          >
            <h3 className="text-white/50">{item.title}</h3>
            <h2 className="text-white">{item.description.toUpperCase()}</h2>
          </li>
        ))}
      </ul>
    </LayoutHome>
  );
}
