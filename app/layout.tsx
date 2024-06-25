import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import DataProvider from './_lib/DataContext';

const inter = Inter({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Clock app',
  description: 'Clock app',
  applicationName: 'Clock app',
} as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="hidden" lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body className={`${inter.variable} mx-auto w-full overflow-x-clip font-inter`}>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
