import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />

        <div className='header'>
          <main className='container'>{children}</main>

          <div>
            <svg
              className='waves'
              xmlns='http://www.w3.org/2000/svg'
              xlinkHref='http://www.w3.org/1999/xlink'
              viewBox='0 24 150 28'
              preserveAspectRatio='none'
              shape-rendering='auto'>
              <defs>
                <path
                  id='gentle-wave'
                  d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
                />
              </defs>
              <g className='parallax'>
                <use
                  xlinkHref='#gentle-wave'
                  x='48'
                  y='0'
                  fill='rgba(255,255,255,0.7'
                />
                <use
                  xlinkHref='#gentle-wave'
                  x='48'
                  y='3'
                  fill='rgba(255,255,255,0.5)'
                />
                <use
                  xlinkHref='#gentle-wave'
                  x='48'
                  y='5'
                  fill='rgba(255,255,255,0.3)'
                />
                <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
              </g>
            </svg>
          </div>
        </div>

        <div className='content flex'>
          <Footer />
        </div>
      </body>
    </html>
  );
}

