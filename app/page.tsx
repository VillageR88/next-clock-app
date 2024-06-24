import Clock from '@/app/components/Clock';
import Background from './components/Background';
import Quote from './components/Quote';
import { getQuote } from '@/app/_lib/functionsServer';
import Footer from '@/app/components/Footer';
import ButtonMore from '@/app/components/ButtonMore';
import DivWrapper from './components/DivWrapper';

export default async function Home() {
  return (
    <>
      <div className="fixed left-0 z-0 size-full min-h-screen bg-black/40 object-cover"></div>
      <Background />
      <DivWrapper>
        <main className="mx-auto my-[60px] flex h-screen w-full max-w-[1110px] flex-col items-center justify-center px-[64px] xl:px-0">
          <div className="flex size-full max-h-[646px] flex-col justify-between gap-[40px]">
            <Quote quote={await getQuote()} />
            <div className="flex items-end justify-between">
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
