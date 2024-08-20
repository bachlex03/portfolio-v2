'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative left-[16px] xl:left-[35px]">
      <div className="w-[300px] h-[300px] xl:w-[350px] xl:h-[350px] relative left-[35px]">
        <Image src="/assets/images/avt3.png" priority fill quality={100} alt="avatar" className="object-cover rounded-full" />
      </div>

      <motion.svg
        fill="transparent"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-35px] w-[370px] h-[370px] xl:w-[420px] xl:h-[420px]"
      >
        <motion.circle
          cx="50%"
          cy="50%"
          r="175"
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
