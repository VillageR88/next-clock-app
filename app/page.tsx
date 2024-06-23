import Image from 'next/image';
import imageBackgroundDaytime from '@/public/assets/desktop/bg-image-daytime.jpg';
import imageSun from '@/public/assets/desktop/icon-sun.svg';
import imageArrow from '@/public/assets/desktop/icon-arrow-down.svg';

export default function Home() {
  const author = 'Ada Lovelace';
  const description =
    '“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”';
  const lvl1span = 'GOOD MORNING, IT’S CURRENTLY';
  const time = '11:37';
  const place = 'IN LONDON, UK';
  const bst = 'BST';
  const more = 'MORE';
  return (
    <>
      <div className="fixed left-0 z-0 size-full min-h-screen bg-black/40 object-cover"></div>
      <Image
        className="fixed left-0 -z-10 size-full min-h-screen object-cover"
        height={800}
        priority
        width={1440}
        src={imageBackgroundDaytime}
        alt="background image daytime"
      />

      <div className="relative z-10 flex min-h-screen w-full items-center">
        <main className="mx-auto flex h-[646px] w-full max-w-[1110px] flex-col justify-between">
          <div className="flex gap-[15.5px]">
            <section className="flex w-[540px] flex-col gap-[13px] text-pretty">
              <p className="text-[18px] leading-[28px] text-white">{description}</p>
              <h2 className="text-[18px] font-bold leading-[28px] text-white">{author}</h2>
            </section>
            <button
              title="Refresh"
              aria-label="refresh"
              className="size-fit fill-white/50 pt-[10px] transition-colors duration-100 hover:fill-white"
              type="button"
            >
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-[16px]">
                <Image className="size-[24px]" width={24} height={24} src={imageSun as string} alt="sun icon" />
                <span className="text-[20px] leading-[28px] tracking-[4px] text-white">{lvl1span}</span>
              </div>
              <div className="flex items-end">
                <h1 className="py-[16px] text-[200px] font-bold leading-[200px] tracking-[-5px] text-white">{time}</h1>
                <span className="pb-[27px] text-[40px] font-light leading-[28px] text-white">{bst}</span>
              </div>
              <span className="text-[24px] font-bold leading-[28px] tracking-[4.8px] text-white">{place}</span>
            </div>
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
