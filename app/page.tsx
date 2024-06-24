import Clock from '@/app/components/Clock';
import Background from './components/Background';
import Quote from './components/Quote';
import { getQuote } from '@/app/_lib/functionsServer';
import Footer from '@/app/components/Footer';
import ButtonMore from '@/app/components/ButtonMore';

export default async function Home() {
  return (
    <>
      <div className="fixed left-0 z-0 size-full min-h-screen bg-black/40 object-cover"></div>
      <Background />
      <div className="relative z-10 flex max-h-screen w-full flex-col items-center overflow-auto">
        <main className="mx-auto my-[60px] flex h-screen w-full max-w-[1110px] flex-col items-center justify-center">
          <div className="flex size-full max-h-[646px] flex-col justify-between">
            <Quote quote={await getQuote()} />
            <div className="flex items-end justify-between">
              <Clock />
              <ButtonMore />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
