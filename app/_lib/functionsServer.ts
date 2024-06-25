'use server';
import type { Quote } from '@/app/_lib/interfaces';

export async function getQuote(state?: Quote): Promise<Quote> {
  const response = await fetch('https://api.quotable.io/random', { cache: 'no-store' })
    .then((response) => response.json())
    .then((data) => {
      return { data: data as Quote };
    });
  return { ...response.data, counter: state && state.counter + 1 } as Quote;
}
