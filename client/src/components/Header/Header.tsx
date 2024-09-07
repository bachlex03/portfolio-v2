'use client';

import clsx from 'clsx';
import images from '../../../public/index';
import Image from 'next/image';
import Nav from '~/components/Nav/Nav';
import MobileNav from '~/components/Nav/MobileNav';
import styles from './Header.module.css';
import { cn } from '~/lib/utils';
import { useScroll, useSpring, motion } from 'framer-motion';

const Header = () => {
   const { scrollYProgress } = useScroll();

   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

   return (
      <header className="fixed top-0 left-0 right-0 backdrop-blur">
         <motion.div
            className={cn('fixed top-0 left-0 right-0 h-[2px] z-50', styles.progressBar)}
            style={{ scaleX }}
         />
         <div
            className={clsx(
               'container',
               'xl:max-w-full',
               'xl:px-20',
               'h-24',
               'flex items-center',
               'shadow-[0_10px_30px_-10px_rgba(2,12,27,.7)]',
               'backdrop-blur-sm',
            )}
         >
            <div className={clsx('flex', 'justify-between', 'items-center', 'w-full')}>
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
};

export default Header;
