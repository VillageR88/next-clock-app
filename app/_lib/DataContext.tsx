'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import { Location } from '@/app/_lib/interfaces';
import { getLocationData } from '@/app/_lib/functionsServer';
export const DataContext = createContext(
  {} as {
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
    location: Location | null;
    setLocation: Dispatch<SetStateAction<Location | null>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [date, setDate] = useState<Date>(new Date());
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    getLocationData()
      .then((data) => {
        setLocation(data);
      })
      .catch((error: unknown) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        date,
        setDate,
        location,
        setLocation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
