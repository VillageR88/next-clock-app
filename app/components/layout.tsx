import { ReactNode } from 'react';
import Navbar from './Navbar';

export default function HomeLayout({
  params,
  children,
}: {
  params: { planet: string; mode: string };
  children: ReactNode;
}) {
  return (
    <>
      <Navbar planet={params.planet} mode={params.mode} />
      {children}
    </>
  );
}
