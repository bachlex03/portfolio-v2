'use client';

import images from '../../../public/index';
import Image from 'next/image';
import Nav from '~/components/Nav/Nav';
import MobileNav from '~/components/Nav/MobileNav';
import { cn } from '~/lib/utils';
import {
   useMotionValue,
   useMotionValueEvent,
   useScroll,
   useSpring,
   motion,
} from 'framer-motion';
import { useEffect, useState } from 'react';

var classes = 'top';
var lastScroll = 0;

export default function Header() {
   const { scrollY } = useScroll();
   const [direction, setDirection] = useState<'up' | 'down' | 'top' | ''>('');

   useMotionValueEvent(scrollY, 'change', (latest) => {
      console.log('latest', latest);

      if (latest > 0 && lastScroll < latest) {
         setDirection('down');
         console.log('down');
      }

      if (latest > 0 && lastScroll > latest) {
         setDirection('up');
         console.log('up');
      }

      if (latest === 0) {
         setDirection('top');
         console.log('top');
      }

      lastScroll = latest;
   });

   if (direction === 'top') {
      classes = 'top';
   }

   if (direction === 'down') {
      classes = 'hide';
   }

   if (direction === 'up') {
      classes = 'show';
   }

   return (
      <header
         className={cn(
            'fixed top-0 left-0 right-0 z-40 backdrop-blur transition-all opacity-100',
            classes.includes('top') && 'backdrop-blur-[0]',
            classes.includes('show') && 'w-full',
            classes.includes('hide') &&
               'w-[calc(100%-40px)] -translate-y-20 scale-75  transition-all duration-500 opacity-50',
         )}
      >
         <div
            className={cn(
               'container xl:max-w-full xl:px-20 h-20 flex items-center shadow-[0_10px_30px_-10px_rgba(2,12,27,.7)] backdrop-blur-sm transition-all',
               classes.includes('top') && 'shadow-sm backdrop-blur-[0]',
            )}
         >
            <div
               className={cn(
                  'flex',
                  'justify-between',
                  'items-center',
                  'w-full',
               )}
            >
               <Image
                  priority
                  src={images.logo}
                  width={42}
                  height={48}
                  className="w-[42px] h-[48px]"
                  alt="logo"
               ></Image>
               {/* Desktop */}
               <div className="hidden xl:flex">
                  <Nav />
               </div>
               {/* Mobile */}
               <div className="xl:hidden">
                  <MobileNav />
               </div>
            </div>
         </div>
      </header>
   );
}
