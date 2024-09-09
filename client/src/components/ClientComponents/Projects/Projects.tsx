'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
   IoMdArrowDropleftCircle,
   IoMdArrowDroprightCircle,
} from 'react-icons/io';
import { SFmono } from '~/fonts/font.config';
import { cn } from '~/lib/utils';
import SwiperBtns from '~/components/SwiperBtns/SwiperBtns';
import { useState } from 'react';

const projects = [
   {
      num: 1,
      title: 'Project 1',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga est, quis, et officiis animi ipsa veniam nulla vel minima, porro rerum sed dolores voluptas. Magni nam optio velit sapiente!',
      techs: ['React', 'Next.js', 'TailwindCSS', 'HTML5/CSS3'],
      images: [
         '/assets/images/image-1.png',
         '/assets/images/image-2.png',
         '/assets/images/image-3.png',
      ],
      live: '',
      github: '',
   },
   {
      num: 2,
      title: 'Project 2',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga est, quis, et officiis animi ipsa veniam nulla vel minima, porro rerum sed dolores voluptas. Magni nam optio velit sapiente!',
      techs: ['React', 'Next.js', 'TailwindCSS', 'HTML5/CSS3'],
      images: [
         '/assets/images/image-1.png',
         '/assets/images/image-2.png',
         '/assets/images/image-3.png',
      ],
      live: '',
      github: '',
   },
   {
      num: 3,
      title: 'Project 3',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga est, quis, et officiis animi ipsa veniam nulla vel minima, porro rerum sed dolores voluptas. Magni nam optio velit sapiente!',
      techs: ['React', 'Next.js', 'TailwindCSS', 'HTML5/CSS3'],
      images: [
         '/assets/images/image-1.png',
         '/assets/images/image-2.png',
         '/assets/images/image-3.png',
      ],
      live: '',
      github: '',
   },
   {
      num: 4,
      title: 'Project 4',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga est, quis, et officiis animi ipsa veniam nulla vel minima, porro rerum sed dolores voluptas. Magni nam optio velit sapiente!',
      techs: ['React', 'Next.js', 'TailwindCSS', 'HTML5/CSS3'],
      images: [
         '/assets/images/image-1.png',
         '/assets/images/image-2.png',
         '/assets/images/image-3.png',
      ],
      live: '',
      github: '',
   },
];

const Projects = () => {
   const isOdd = (num: number) => num % 2 !== 0;

   const handleSlideChange = () => {};

   return (
      <div className="w-full flex flex-col gap-14">
         {projects.map((project, index) => {
            const [activeIndex, setActiveIndex] = useState(0);

            return (
               <div
                  key={index}
                  className="xl:flex odd:flex-row even:flex-row-reverse mt-[50px]"
               >
                  {/* Images */}
                  <div className="w-[100%] xl:w-[60%] group">
                     <Swiper
                        className="relative xl:opacity-50 xl:hover:opacity-100 xl:hover:z-20 transition-all"
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={(event) => {
                           setActiveIndex(event.activeIndex);
                           // videoRef.current?.pause();
                        }}
                     >
                        {/* <SwiperSlide key={index}>
                           <div className="relative h-[360px]">
                              <div className="relative w-full h-full">
                                 <NextVideo
                                    src={Vid}
                                    className="object-cover rounded-[4px] z-10"
                                    ref={videoRef}
                                 />
                              </div>
                           </div>
                        </SwiperSlide> */}
                        {project.images.map((image, index) => {
                           return (
                              <SwiperSlide key={index}>
                                 <div className="relative h-[360px] md:h-[580px] lg:h-[630px] xl:h-[360px]">
                                    <div className="relative w-full h-full hover:z-20">
                                       <Image
                                          src={image}
                                          alt="project image"
                                          fill
                                          className="object-cover rounded-[4px]"
                                       />
                                    </div>
                                 </div>
                              </SwiperSlide>
                           );
                        })}
                        <div className="hidden xl:block">
                           <SwiperBtns setActiveIndex={setActiveIndex} />
                        </div>
                     </Swiper>

                     <ul className="flex items-center justify-center gap-2 mt-5">
                        {project.images.map((num, index) => {
                           return (
                              <li
                                 className={cn(
                                    'w-2 h-2 bg-slate-400/50 transition-all rounded-full',
                                    activeIndex === index && 'bg-slate-400',
                                 )}
                              ></li>
                           );
                        })}
                     </ul>
                  </div>
                  {/* isOdd(index)
                           ? 'justify-start items-start'
                           : 'justify-start items-end' */}
                  {/* Content */}
                  <div
                     className={cn(
                        'flex flex-col items-center xl:w-[40%]',
                        isOdd(index)
                           ? 'xl:justify-start xl:items-start'
                           : 'xl:justify-start xl:items-end',
                     )}
                  >
                     <span className="hidden xl:block text-secondary text-sm">
                        Featured Project
                     </span>
                     <h3 className="text-center xl:text-left xl:block font-bold text-[28px] mt-5">
                        <Link href="#" target="_blank">
                           Halcyon Theme
                        </Link>
                     </h3>
                     <p
                        className={cn(
                           'xl:block text-center relative z-10 mt-3 max-w-[650px] xl:min-w-[496px] bg-[#112240] p-[25px] rounded font-calibre text-third text-lg',
                           isOdd(index) ? 'xl:text-left' : 'xl:text-right',
                        )}
                     >
                        A minimal, dark blue theme for VS Code, Sublime Text,
                        Atom, iTerm, and more. Available on Visual Studio
                        Marketplace, Package Control, Atom Package Manager, and
                        npm.
                     </p>
                     <ul
                        className={cn(
                           SFmono.variable,
                           'flex xl:justify-start justify-center gap-4 font-SFmono text-sm text-third mt-5 flex-wrap',
                        )}
                     >
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                     </ul>
                     <div className="flex xl:justify-start justify-center mt-5 text-third gap-5 text-xl">
                        <FiGithub className="hover:text-secondary transition-all cursor-pointer" />
                        <FiExternalLink className="hover:text-secondary transition-all cursor-pointer" />
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Projects;
