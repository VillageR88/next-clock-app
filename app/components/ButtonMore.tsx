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
      className={`group/button flex h-[56px] w-[146px] items-center justify-between rounded-[28px] bg-white pl-[21px] pr-[9px] transition duration-500`}
    >
      <span className={`text-[16px] font-bold tracking-[5px] text-black/50`}>{title}</span>
      <div className="flex size-[40px] items-center justify-center rounded-full bg-[#303030] transition-colors duration-150 group-hover/button:bg-[#999999]">
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
