import { JetBrains_Mono, Space_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const jetBrainsMono = JetBrains_Mono({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
   variable: '--font-jetBrainsMono',
});

export const spaceMono = Space_Mono({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-spaceMono',
});

// local font
export const calibreFont = localFont({
   src: [
      {
         path: './local-fonts/Calibre-Regular.woff2',
         weight: '400',
         style: 'normal',
      },
      {
         path: './local-fonts/Calibre-Medium.woff2',
         weight: '500',
         style: 'normal',
      },
      {
         path: './local-fonts/Calibre-Semibold.woff2',
         weight: '600',
         style: 'normal',
      },
   ],
   variable: '--font-calibre',
});

export const SFmono = localFont({
   src: [
      {
         path: './local-fonts/SFMono-Regular.woff2',
         weight: '400',
         style: 'normal',
      },
   ],
   variable: '--font-SFmono',
});
