'use client';

import Image from 'next/image';
import imageArrow from '@/public/assets/desktop/icon-arrow-down.svg';
import { useContext } from 'react';
import { DataContext } from '@/app/_lib/DataContext';

export default function ButtonMore() {
  const { setFooterOpen, footerOpen } = useContext(DataContext);
  const title = footerOpen ? 'LESS' : 'MORE';

  return (
    <button
      type="button"
      onClick={() => {
        setFooterOpen((prev) => !prev);
      }}
      className={`group/button flex h-[39px] w-[115px] items-center justify-between rounded-[28px] bg-white pl-[17px] pr-[4px] transition duration-500 md:h-[56px] md:w-[146px] md:pl-[21px] md:pr-[9px]`}
    >
      <span className={`text-[12px] font-bold tracking-[3.75px] text-black/50 md:text-[16px] md:tracking-[5px]`}>
        {title}
      </span>
      <div className="flex size-[32px] items-center justify-center rounded-full bg-[#303030] transition-colors duration-150 group-hover/button:bg-[#999999] md:size-[40px]">
        <Image
          className={`${footerOpen ? '-scale-y-100' : ''} transition duration-200`}
          width={14}
          height={9}
          src={imageArrow as string}
          alt="arrow"
        />
      </div>
    </button>
  );
}
