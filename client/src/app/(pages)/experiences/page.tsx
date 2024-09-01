'use client';

import {
   FaHtml5,
   FaCss3,
   FaJs,
   FaReact,
   FaFigma,
   FaNodeJs,
} from 'react-icons/fa';
import {
   SiTailwindcss,
   SiNextdotjs,
   SiNestjs,
   SiExpress,
} from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '~/lib/utils';
import { calibreFont } from '~/fonts/font.config';
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { RefObject, useEffect, useRef } from 'react';

// about data
const about = [
   {
      fieldName: 'Name',
      fieldValue: 'Le Xuan Bach',
   },
   {
      fieldName: 'Phone',
      fieldValue: '(+84) 816 429 848',
   },
   {
      fieldName: 'Experience',
      fieldValue: '2+ years',
   },
   {
      fieldName: 'Location',
      fieldValue: 'Ho Chi Minh City, Vietnam',
   },
   {
      fieldName: 'Email',
      fieldValue: 'lxbachit03.working@gmail.com',
   },
   {
      fieldName: 'Freelance',
      fieldValue: 'Available',
   },

   {
      fieldName: 'Languages',
      fieldValue: 'English, Vietnamese',
   },
];

// experiences data
const experiences = [
   {
      position: 'Frontend Engineer',
      company: 'Klaviyo',
      duration: '2024 - Present',
      description:
         'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      techs: [
         'JavaScript (ES6+)',
         'TypeScript',
         'Node.js',
         'React',
         'Next.js',
         'Nest.js',
         'Express.js',
         'Tailwind CSS',
         'HTML & SCSS',
      ],
   },
   {
      position: 'Frontend Engineer',
      company: 'Klaviyo',
      duration: '2024 - Present',
      description:
         'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      techs: [
         'JavaScript (ES6+)',
         'TypeScript',
         'Node.js',
         'React',
         'Next.js',
         'Nest.js',
         'Express.js',
         'Tailwind CSS',
         'HTML & SCSS',
      ],
   },
   {
      position: 'Frontend Engineer',
      company: 'Klaviyo',
      duration: '2024 - Present',
      description:
         'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      techs: [
         'JavaScript (ES6+)',
         'TypeScript',
         'Node.js',
         'React',
         'Next.js',
         'Nest.js',
         'Express.js',
         'Tailwind CSS',
         'HTML & SCSS',
      ],
   },
];

// education data
const education = [
   {
      icon: '/assets/resume/graduation.svg',
      title: 'My education',
      discription:
         'I graduated from Ho Chi Minh City University of Technology and Education with a Bachelor of Information Technology.',
      items: [
         {
            institution:
               'Ho Chi Minh City University of Technology and Education',
            degree: 'Bachelor of Information Technology',
            duration: '2016 - 2020',
         },
         {
            institution:
               'AWS course - AWS Certified Solutions Architect - Associate',
            degree: 'Bachelor of Information Technology',
            duration: '2024',
         },
      ],
   },
];

// skills data
const skills = [
   {
      title: 'My skills',
      discription:
         'I have experience working with modern technologies and frameworks. Here are some of the technologies I have worked with recently:',

      skillList: [
         {
            icon: <FaHtml5 />,
            name: 'HTML5',
         },
         {
            icon: <FaCss3 />,
            name: 'CSS3',
         },
         {
            icon: <FaJs />,
            name: 'JavaScript',
         },
         {
            icon: <FaReact />,
            name: 'React',
         },
         {
            icon: <SiNextdotjs />,
            name: 'Next.js',
         },
         {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
         },
         {
            icon: <FaNodeJs />,
            name: 'Node.js',
         },
         {
            icon: <SiNestjs />,
            name: 'Nest.js',
         },
         {
            icon: <SiExpress />,
            name: 'Express.js',
         },
         {
            icon: <FaFigma />,
            name: 'Figma',
         },
      ],
   },
];

// projects data

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const updateMousePosition = (event: MouseEvent) => {
      if (!to.current) return;

      const { top, left } = to.current.getBoundingClientRect();

      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
   };

   useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition);

      return () => {
         window.removeEventListener('mousemove', updateMousePosition);
      };
   }, []);

   return [mouseX, mouseY];
};

const Page = () => {
   const screenRef = useRef<HTMLDivElement>(null);

   const [mouseX, mouseY] = useRelativeMousePosition(screenRef);

   const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
   return (
      <div>
         <motion.div
            className="fixed inset-0 top-0 left-0 w-screen h-screen pointer-events-none bg-slate-500"
            ref={screenRef}
            style={{ maskImage }}
         ></motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{
               opacity: 1,
               transition: { duration: 1, delay: 0.4, ease: 'easeIn' },
            }}
            className={cn(
               calibreFont.variable,
               'pt-[calc(var(--header-height)+30px)]',
            )}
         >
            <div className="container flex mx-auto">
               <div className="sticky z-0  flex flex-col flex-1 max-h-[calc(100vh-126px)] top-[7.85rem]">
                  <h1 className="text-6xl font-[700] font-calibre">
                     <a href="/">Le Xuan Bach</a>
                  </h1>
                  <span className="text-[20px] mt-3">Full-stack Engineer</span>
                  <p className="text-[20px] mt-5 font-calibre text-third/70 w-[300px] leading-snug">
                     I build pixel-perfect, engaging, and accessible digital
                     experiences.
                  </p>
                  <nav className="mt-7">
                     <ul className="text-sm">
                        <li className="py-3">
                           <a
                              href="#about"
                              className="flex items-center uppercase group active"
                           >
                              <span className="inline-block w-10 h-px mr-4 transition-all duration-200 nav-indicator bg-slate-200/60 group-hover:bg-slate-200 group-hover:w-16"></span>
                              <span className="tracking-widest transition-all nav-text group-hover:font-bold text-slate-200/80 group-hover:text-slate-200">
                                 About
                              </span>
                           </a>
                        </li>
                        <li className="py-3">
                           <a
                              href="#about"
                              className="flex items-center uppercase group "
                           >
                              <span className="inline-block w-10 h-px mr-4 transition-all duration-200 nav-indicator bg-slate-200/60 group-hover:bg-slate-200 group-hover:w-16"></span>
                              <span className="tracking-widest transition-all nav-text group-hover:font-bold text-slate-200/80 group-hover:text-slate-200">
                                 Experience
                              </span>
                           </a>
                        </li>
                        <li className="py-3">
                           <a
                              href="#about"
                              className="flex items-center uppercase group "
                           >
                              <span className="inline-block w-10 h-px mr-4 transition-all duration-200 nav-indicator bg-slate-200/60 group-hover:bg-slate-200 group-hover:w-16"></span>
                              <span className="tracking-widest transition-all nav-text group-hover:font-bold text-slate-200/80 group-hover:text-slate-200">
                                 Projects
                              </span>
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="flex-1">
                  <section id="#about" className="mb-24">
                     <div className="flex flex-col items-center">
                        <p className="text-3xl font-bold">About me</p>
                        <p className="text-base text-center text-four font-[700] leading-6 py-5 ma">
                           When I’m not at the computer, I’m usually rock
                           climbing, reading, hanging out with my wife and two
                           cats, or running around Hyrule searching for Korok
                           seeds
                        </p>
                     </div>
                     <ul className="flex flex-col items-center">
                        {about.map((item, index) => (
                           <li
                              key={index}
                              className="flex items-center justify-center gap-4 leading-10"
                           >
                              <span className="text-four font-bold    text-[13px]">
                                 {item.fieldName}
                              </span>
                              <span className="text-[18px] text-slate-200">
                                 {item.fieldValue}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </section>
                  <section id="#experience">
                     {experiences.map((experience, index) => {
                        return (
                           <div key={index} className="grid grid-cols-8 py-5">
                              <div className="flex-1 col-span-2 uppercase text-[13px] text-four font-bold">
                                 {experience.duration}
                              </div>
                              <div className="flex-1 col-span-6 group">
                                 <Link
                                    href="/"
                                    className="text-[14px] font-bold block mb-3 group-hover:text-teal-300 transition-all duration-200"
                                 >
                                    <span>{experience.position} ·</span>
                                    <span>
                                       {' '}
                                       {experience.company}
                                       <i className="inline-block -rotate-[90deg] text-[14px] font-[500] relative top-1 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                                          <BsArrowDownRight />
                                       </i>
                                    </span>
                                 </Link>
                                 <p className="text-[18px] text-third/80 font-calibre leading-normal">
                                    {experience.description}
                                 </p>
                                 <ul className="flex flex-wrap gap-2 py-3">
                                    {experience.techs.map((tech, index) => (
                                       <li key={index}>
                                          <span className="flex px-3 py-1 text-xs font-medium text-teal-300 rounded-full bg-teal-400/10">
                                             {tech}
                                          </span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        );
                     })}
                  </section>
                  {/* <section id="#projects">Projects</section>  */}
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default Page;
