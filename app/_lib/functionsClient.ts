import type { Location } from '@/app/_lib/interfaces';

export async function getLocationData(): Promise<Location | null> {
  const response = await fetch('https://api.ipbase.com/v2/info?apikey=sgiPfh4j3aXFR3l2CnjWqdKQzxpqGn9pX5b3CUsz&ip=')
    .then((response) => response.json())
    .then((data) => {
      return data as Location;
    })
    .catch(() => null);
  return response;
}
