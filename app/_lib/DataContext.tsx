'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import { Location } from '@/app/_lib/interfaces';
import { getLocationData } from '@/app/_lib/functionsClient';
export const DataContext = createContext(
  {} as {
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
    location: Location | null;
    setLocation: Dispatch<SetStateAction<Location | null>>;
    footerOpen: boolean;
    setFooterOpen: Dispatch<SetStateAction<boolean>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<Location | null>(null);
  const dateLocation = location?.data.timezone.current_time;
  const [footerOpen, setFooterOpen] = useState<boolean>(false);

  const [date, setDate] = useState<Date>(new Date(dateLocation ?? Date.now()));

  useEffect(() => {
    //not certain about fetch lag
    dateLocation && setDate(new Date(dateLocation));
  }, [dateLocation]);

  useEffect(() => {
    if (location) return;
    getLocationData()
      .then((data) => {
        setLocation(data);
      })
      .catch((error: unknown) => {
        console.error('Error:', error);
      });
  }, [location]);

  return (
    <DataContext.Provider
      value={{
        date,
        setDate,
        location,
        setLocation,
        footerOpen,
        setFooterOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
