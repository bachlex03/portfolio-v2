'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   return (
      <AnimatePresence>
         <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{
               opacity: 0,
               transition: { delay: 0.6, duration: 0.3, ease: 'easeInOut' },
            }}
            className="fixed top-0 w-screen h-screen pointer-events-none bg-primary"
         />
         {children}
      </AnimatePresence>
   );
};

export default PageTransition;
