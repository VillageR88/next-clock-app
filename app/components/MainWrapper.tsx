'use client';
import { ReactNode } from 'react';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';

export default function MainWrapper({ children }: { children: ReactNode }) {
  const { footerOpen } = useContext(DataContext);
  return <div className={footerOpen ? '' : 'h-dvh overflow-y-clip md:h-screen'}>{children}</div>;
}
