'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative">
      <div className="w-[350px] h-[350px]">
        <Image src="/assets/images/avt3.png" priority fill quality={100} alt="avatar" className="object-cover rounded-full" />
      </div>

      <motion.svg
        fill="transparent"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute xl:top-[-11px] xl:left-[-10px] w-[370px] h-[370px]"
      >
        <motion.circle
          cx="50%"
          cy="50%"
          r="195"
          stroke="#64ffda"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{ strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'], rotate: [120, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
