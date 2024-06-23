'use server';
import type { Location, Quote } from '@/app/_lib/interfaces';

export async function getLocationData(): Promise<Location | null> {
  const response = await fetch('https://api.ipbase.com/v2/info?apikey=sgiPfh4j3aXFR3l2CnjWqdKQzxpqGn9pX5b3CUsz&ip=')
    .then((response) => response.json())
    .then((data) => {
      return data as Location;
    })
    .catch(() => null);
  return response;
}

export async function getQuote(): Promise<Quote> {
  const response = await fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      return data as Quote;
    });
  return response;
}
