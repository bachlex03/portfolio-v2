'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { useState } from 'react';

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

   return (
      <div className="w-full">
         {projects.map((project, index) => {
            return (
               <div key={index} className="flex odd:flex-row even:flex-row-reverse mt-[50px]">
                  {/* Images */}
                  <div className="w-[60%]">
                     <Swiper spaceBetween={30} slidesPerView={1}>
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
                     <span>Featured Project</span>
                     <h3>Project title</h3>
                     <div>content</div>
                     <ul className="flex">
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>ReactJs</li>
                        <li>NextJs</li>
                     </ul>
                     <div className="flex">
                        <span>icon 1</span>
                        <span>icon 2</span>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Project;
