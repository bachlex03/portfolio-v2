import type { Config } from 'tailwindcss';
import { jetBrainsMono, SFmono } from '~/fonts/font.config';

const config = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   prefix: '',
   theme: {
      container: {
         center: true,
         padding: '15px',
         screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
         },
      },
      fontFamily: {
         jetBrainsMono: 'var(--font-jetBrainsMono)',
         calibre: 'var(--font-calibre)',
         spaceMono: 'var(--font-spaceMono)',
         SFmono: 'var(--font-SFmono)',
      },
      extend: {
         colors: {
            primary: '#0a192f',
            secondary: '#64ffda',
            third: '#ccd6f6',
            four: '#8892b0',
            'header-text': '#ccd6f6',
         },
         fontFamily: {
            spaceMono: ['var(--font-spaceMono)', 'spaceMono'],
            calibre: ['var(--font-calibre)', 'calibre'],
            jetBrainsMono: ['var(--font-jetBrainsMono)', 'jetBrainsMono'],
            SFmono: ['var(--font-SFmono)', 'SFmono'],
         },
         keyframes: {
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
