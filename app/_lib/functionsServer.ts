'use server';
import type { Quote } from '@/app/_lib/interfaces';

export async function getQuote(): Promise<Quote> {
  const response = await fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      return data as Quote;
    });
  return response;
}
