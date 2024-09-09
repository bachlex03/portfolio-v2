import {
   IoMdArrowDropleftCircle,
   IoMdArrowDroprightCircle,
} from 'react-icons/io';
import { useSwiper } from 'swiper/react';

const SwiperBtns = ({
   setActiveIndex,
}: {
   setActiveIndex: (index: number) => void;
}) => {
   const swiper = useSwiper();

   return (
      <div className="relative group">
         <IoMdArrowDropleftCircle
            onClick={() => {
               swiper.slidePrev();

               setActiveIndex(swiper.activeIndex);
            }}
            className="absolute left-2 -top-52 opacity-0 group-hover:opacity-100 text-slate-800/20 z-30 hover:text-slate-800 transition-all text-[42px] cursor-pointer"
         />
         <IoMdArrowDroprightCircle
            onClick={() => {
               swiper.slideNext();

               setActiveIndex(swiper.activeIndex);
            }}
            className="absolute right-2 -top-52 opacity-0 group-hover:opacity-100 text-slate-800/20 z-30 hover:text-slate-800 transition-all text-[42px] cursor-pointer"
         />
      </div>
   );
};

export default SwiperBtns;
