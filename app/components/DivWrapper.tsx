'use client';
import { ReactNode } from 'react';
import { useContext } from 'react';
import { DataContext } from '../_lib/DataContext';

export default function DivWrapper({ children }: { children: ReactNode }) {
  const { divRef } = useContext(DataContext);
  return (
    <div ref={divRef} className="relative z-10 flex max-h-screen w-full flex-col items-center overflow-auto">
      {children}
    </div>
  );
}
