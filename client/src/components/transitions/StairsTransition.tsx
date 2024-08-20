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
          <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none flex z-40">
            <Stairs />
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 0.5, duration: 0.3, ease: 'easeInOut' } }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairsTransition;
