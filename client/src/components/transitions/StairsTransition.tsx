'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from '~/components/transitions/Stairs';

const StairsTransition = () => {
   const pathname = usePathname();
   return (
      <>
         <AnimatePresence mode="wait">
            <div key={pathname}>
               <div className="fixed top-0 left-0 right-0 z-[9999] flex w-screen h-screen pointer-events-none">
                  <Stairs />
               </div>
               <motion.div
                  initial={{ opacity: 1 }}
                  animate={{
                     opacity: 0,
                     transition: {
                        delay: 0.5,
                        duration: 0.3,
                        ease: 'easeInOut',
                     },
                  }}
                  className="fixed top-0 w-screen h-screen pointer-events-none bg-primary"
               />
            </div>
         </AnimatePresence>
      </>
   );
};

export default StairsTransition;
