'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '~/lib/utils';
import { SFmono } from '~/fonts/font.config';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import NextVideo from 'next-video';
import Vid from '../../../videos/Screen Recording 2024-09-03 at 13.15.15.mov';

const projects = [
   {
      num: 1,
      title: 'Project 1',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut sit amet semper arcu. Proin eget odio eu felis.',
      stacks: [
         {
            name: 'ReactJS',
         },
         {
            name: 'HTML 5',
         },
         {
            name: 'CSS 3',
         },
      ],
      images: [
         '/assets/images/projects/project-1.png',
         '/assets/images/projects/project-2.png',
         '/assets/images/projects/project-3.png',
      ],
      live: '',
      github: '',
   },
   {
      num: 2,
      title: 'Project 2',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut sit amet semper arcu. Proin eget odio eu felis.',
      stacks: [
         {
            name: 'ReactJS',
         },
         {
            name: 'HTML 5',
         },
         {
            name: 'CSS 3',
         },
      ],
      images: ['/assets/images/projects/project-2.png'],
      live: '',
      github: '',
   },
   //    {
   //       num: 3,
   //       title: 'Project 3',
   //       description:
   //          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut sit amet semper arcu. Proin eget odio eu felis.',
   //       stacks: [
   //          {
   //             name: 'ReactJS',
   //          },
   //          {
   //             name: 'HTML 5',
   //          },
   //          {
   //             name: 'CSS 3',
   //          },
   //       ],
   //       images: ['/assets/images/projects/project-3.png'],
   //       live: '',
   //       github: '',
   //    },
];

const Project = () => {
   const isOdd = (num: number) => num % 2 === 0;

   const videoRef = useRef<HTMLVideoElement>(null);

   return (
      <div className="w-full flex flex-col gap-7">
         {/* <NextVideo src={Vid} /> */}

         {projects.map((project, index) => {
            return (
               <div key={index} className="flex odd:flex-row even:flex-row-reverse mt-[50px]">
                  {/* Images */}
                  <div className="w-[60%]">
                     <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => {
                           videoRef.current?.pause();
                        }}
                     >
                        <SwiperSlide key={index}>
                           <div className="relative h-[360px]">
                              <div className="relative w-full h-full">
                                 <NextVideo
                                    src={Vid}
                                    className="object-cover rounded-[4px] z-10"
                                    ref={videoRef}
                                 />
                              </div>
                           </div>
                        </SwiperSlide>
                        {project.images.map((image, index) => {
                           return (
                              <SwiperSlide key={index}>
                                 <div className="relative h-[360px]">
                                    <div className="relative w-full h-full">
                                       <Image
                                          src={image}
                                          alt="project"
                                          fill
                                          className="object-cover rounded-[4px]"
                                       />
                                    </div>
                                 </div>
                              </SwiperSlide>
                           );
                        })}
                     </Swiper>
                  </div>

                  {/* Content */}
                  <div
                     className={`flex flex-col ${
                        isOdd(index) ? 'justify-start items-end' : 'justify-start items-start'
                     } w-[40%]`}
                  >
                     <span className="text-secondary text-sm">Featured Project</span>
                     <h3 className="font-bold text-[28px] mt-1">
                        <Link href="#" target="_blank">
                           Halcyon Theme
                        </Link>
                     </h3>
                     <p
                        className={`relative z-50 mt-5 min-w-[496px] bg-[#112240] p-[25px] rounded font-calibre text-third text-lg ${
                           isOdd(index) ? 'text-right' : 'text-left'
                        }`}
                     >
                        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                        Available on Visual Studio Marketplace, Package Control, Atom Package
                        Manager, and npm.
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
                        <FiGithub />
                        <FiExternalLink />
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Project;
