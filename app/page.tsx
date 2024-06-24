import Clock from '@/app/components/Clock';
import Background from './components/Background';
import BackgroundMask from './components/BackgroundMask';
import Quote from './components/Quote';
import { getQuote } from '@/app/_lib/functionsServer';
import Footer from '@/app/components/Footer';
import ButtonMore from '@/app/components/ButtonMore';
import DivWrapper from './components/DivWrapper';

export default async function Home() {
  return (
    <>
      <BackgroundMask />
      <Background />
      <DivWrapper>
        <main className="mx-auto my-[60px] flex h-screen w-full max-w-[1110px] flex-col items-center justify-center px-[24px] md:px-[64px] xl:px-0">
          <div className="flex size-full max-h-[646px] flex-col justify-between gap-[40px]">
            <Quote quote={await getQuote()} />
            <div className="flex flex-col justify-between gap-[80px] xl:flex-row xl:items-end">
              <Clock />
              <ButtonMore />
            </div>
          </div>
        </main>
        <Footer />
      </DivWrapper>
    </>
  );
}
