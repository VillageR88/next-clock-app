'use client';
import { getQuote } from '@/app/_lib/functionsServer';
import { useFormState } from 'react-dom';
import { Quote as tQuote } from '../_lib/interfaces';
import { useEffect, useState } from 'react';

export default function Quote({ quote }: { quote: tQuote }) {
  const quoteWithCounter = quote;
  quoteWithCounter.counter = 0;
  const [loadCounter, setLoadCounter] = useState<number>(0);
  const [state, action] = useFormState<tQuote>(getQuote, quoteWithCounter);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (state.counter > loadCounter) {
      setLoadCounter(loadCounter + 1);
      setLoading(false);
    }
  }, [loadCounter, state]);

  const ButtonRequest = () => {
    return (
      <button
        typeof="button"
        onClick={() => {
          setLoading(true);
          action();
        }}
        title="Refresh"
        aria-label="refresh"
        className={`${loading ? 'animate-spin' : ''} mt-[10px] size-fit fill-white/50 transition-colors duration-100 hover:fill-white`}
        type="button"
      >
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="flex max-w-[600px] gap-[20px] drop-shadow-[0_5px_15px_rgba(0,0,0,0.75)]">
      <section
        className={`flex flex-col gap-[13px] text-justify ${loading ? 'opacity-0' : ''} transition duration-[350ms]`}
      >
        <p className="text-[18px] leading-[28px] text-white">{state.content}</p>
        <h2 className="text-[18px] font-bold leading-[38px] text-white">{state.author}</h2>
      </section>
      <ButtonRequest />
    </div>
  );
}
