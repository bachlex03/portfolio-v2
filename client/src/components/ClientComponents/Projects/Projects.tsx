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

   return (
      <div className="w-full flex flex-col gap-14">
         {projects.map((project, index) => {
            const [activeIndex, setActiveIndex] = useState(0);

            return (
               <div
                  key={index}
                  className="flex odd:flex-row even:flex-row-reverse mt-[50px]"
               >
                  {/* Images */}
                  <div className="w-[60%] group">
                     <Swiper
                        className="relative opacity-50 hover:opacity-100 hover:z-20 transition-all"
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => {
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
                                 <div className="relative h-[360px]">
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
                        <SwiperBtns setActiveIndex={setActiveIndex} />
                     </Swiper>

                     <ul className="flex items-center justify-center gap-2 mt-3">
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

                  {/* Content */}
                  <div
                     className={`flex flex-col ${
                        isOdd(index)
                           ? 'justify-start items-start'
                           : 'justify-start items-end'
                     } w-[40%]`}
                  >
                     <span className="text-secondary text-sm">
                        Featured Project
                     </span>
                     <h3 className="font-bold text-[28px] mt-1">
                        <Link href="#" target="_blank">
                           Halcyon Theme
                        </Link>
                     </h3>
                     <p
                        className={`relative z-10 mt-5 min-w-[496px] bg-[#112240] p-[25px] rounded font-calibre text-third text-lg ${
                           isOdd(index) ? 'text-left' : 'text-right'
                        }`}
                     >
                        A minimal, dark blue theme for VS Code, Sublime Text,
                        Atom, iTerm, and more. Available on Visual Studio
                        Marketplace, Package Control, Atom Package Manager, and
                        npm.
                     </p>
                     <ul
                        className={cn(
                           SFmono.variable,
                           'flex gap-4 font-SFmono text-sm text-third mt-5 flex-wrap',
                        )}
                     >
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                     </ul>
                     <div className="flex mt-5 text-third gap-5 text-xl">
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
