import Image from 'next/image';
import imageArrow from '@/public/assets/desktop/icon-arrow-down.svg';
import Clock from '@/app/components/Clock';
import Background from './components/Background';
import Quote from './components/Quote';
import { getQuote, getLocationData } from '@/app/_lib/functionsServer';

export default async function Home() {
  const more = 'MORE';
  return (
    <>
      <div className="fixed left-0 z-0 size-full min-h-screen bg-black/40 object-cover"></div>
      <Background />
      <div className="relative z-10 flex min-h-screen w-full items-center">
        <main className="mx-auto my-[60px] flex h-[646px] w-full max-w-[1110px] flex-col justify-between">
          <Quote quote={await getQuote()} />
          <div className="flex items-end justify-between">
            <Clock location={await getLocationData()} />
            <button
              type="button"
              className="group/button flex h-[56px] w-[146px] items-center justify-between rounded-[28px] bg-white pl-[21px] pr-[9px]"
            >
              <span className="text-[16px] font-bold tracking-[5px] text-black/50">{more}</span>
              <div className="flex size-[40px] items-center justify-center rounded-full bg-[#303030] transition-colors duration-100 group-hover/button:bg-[#999999]">
                <Image width={14} height={9} src={imageArrow as string} alt="arrow" />
              </div>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
