'use client';

import { useScroll, useSpring, motion } from 'framer-motion';
import { cn } from '~/lib/utils';
import Styles from './ProgressBar.module.css';

const ProgressBar = () => {
   const { scrollYProgress } = useScroll();

   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   return (
      <motion.div
         className={cn(
            'fixed top-0 left-0 right-0 h-[2px] z-[999]',
            Styles.progressBar,
         )}
         style={{ scaleX }}
      />
   );
};

export default ProgressBar;
