import dataJson from '@/public/assets/data.json';
import Link from 'next/link';
import { tPlanet } from '../_lib/interfaces';
import ButtonMobileMenu from './ButtonMobileMenu';

const titleLogo = 'THE PLANETS';

const borderColor = {
  mercury: 'hover:border-[#419EBB]',
  venus: 'hover:border-[#EDA249]',
  earth: 'hover:border-[#6D2ED5]',
  mars: 'hover:border-[#D14C32]',
  jupiter: 'hover:border-[#D83A34]',
  saturn: 'hover:border-[#CD5120]',
  uranus: 'hover:border-[#1EC1A2]',
  neptune: 'hover:border-[#2D68F0]',
};
export default function Navbar({ planet, mode }: { planet: string; mode: string }) {
  return (
    <nav className="flex h-fit w-full flex-col">
      <div className="flex h-[68px] w-full flex-row items-center justify-between gap-[39px] px-[32px] md:h-[159px] md:flex-col md:justify-center xl:h-[85px] xl:flex-row xl:justify-between">
        <span className="font-antonio text-[28px] font-medium tracking-[-1.05px] text-[white]">{titleLogo}</span>
        <ul className="hidden items-center gap-[33px] md:flex xl:h-full">
          {(dataJson as tPlanet[]).map(({ name }) => (
            <li
              className={`${name.toLowerCase() === planet ? '' : 'transition-colors'} flex h-full items-center border-t-4 border-transparent ${borderColor[name.toLowerCase() as keyof typeof borderColor]}`}
              key={name}
            >
              <Link passHref={true} href={`/${name.toLowerCase()}/${mode}`}>
                <h4
                  className={`transition-colors ${name.toLowerCase() === planet ? 'text-white' : 'text-white/75 hover:text-white'}`}
                >
                  {name.toLocaleUpperCase()}
                </h4>
              </Link>
            </li>
          ))}
        </ul>
        <ButtonMobileMenu planet={planet} mode={mode} />
      </div>
      <div className="h-px w-full border-b border-white/20" />
    </nav>
  );
}
