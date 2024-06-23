import { redirect } from 'next/navigation';
import { tPlanet } from './_lib/interfaces';
import dataJson from '@/public/assets/data.json';

export default function Home() {
  const overview = '/overview';
  const startPath = (dataJson as tPlanet[])
    .find((planet) => planet.name === 'Mercury')
    ?.name.toLowerCase()
    .concat(overview);
  if (!startPath) return;
  redirect(startPath);
}
