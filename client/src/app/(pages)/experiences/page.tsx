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
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';
import { calibreFont } from '~/fonts/font.config';

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
      fieldName: 'Nationality',
      fieldValue: 'Vietnamese',
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
      icon: '/assets/resume/badge.svg',
      title: 'My experience',
      discription:
         "I'm a full-stack developer with 2+ years of experience. I have a passion for web development and love to create web applications that are user-friendly and fully responsive.",
      items: [
         {
            company: 'QKIT',
            position: 'Backend Developer',
            duration: "Jan'21 - Present",
         },
         {
            company: 'Freelancer',
            position: 'Full-stack Developer',
            duration: "Jan'20 - Dec'20",
         },
         {
            company: 'HCMUTE University',
            position: 'Tutor Web Assistant',
            duration: "Jan'19 - Dec'19",
         },
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

const Page = () => {
   return (
      <div
         className={cn(
            calibreFont.variable,
            'pt-[calc(var(--header-height)+50px)]',
         )}
      >
         <div className="container flex mx-auto">
            <div className="flex flex-col flex-1">
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
               <section id="#about">
                  <div className="flex flex-col items-center">
                     <p className="text-3xl font-bold leading-loose">
                        About me
                     </p>
                     <p className="text-base text-center text-four font-[700] leading-6 py-5">
                        When I’m not at the computer, I’m usually rock climbing,
                        reading, hanging out with my wife and two cats, or
                        running around Hyrule searching for Korok seeds
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

               {/* <section id="#experience">Experience</section>

               <section id="#projects">Projects</section> */}
            </div>
         </div>
      </div>
   );
};

export default Page;

{
   /* <motion.div
initial={{ opacity: 0 }}
animate={{
   opacity: 1,
   transition: { duration: 1.4, delay: 0.4, ease: 'easeIn' },
}}
>
<section className="flex justify-center items-center h-[100vh] f">
   <div className="container mx-auto">
      <Tabs className="md:flex">
         <TabsList className="flex flex-col gap-5">
            <TabsTrigger
               value="experience"
               className="w-full h-[44px] rounded"
            >
               Experience
            </TabsTrigger>
            <TabsTrigger
               value="skills"
               className="w-full h-[44px] rounded"
            >
               Skills
            </TabsTrigger>
            <TabsTrigger
               value="about"
               className="w-full h-[44px] rounded"
            >
               About
            </TabsTrigger>
            <TabsTrigger
               value="education"
               className="w-full rounded h-[44px]"
            >
               Education
            </TabsTrigger>
         </TabsList>
         <div className="mt-[30px]">
            <TabsContent value="experience" className="w-full">
               Experience
            </TabsContent>
            <TabsContent value="skills" className="w-full">
               Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
               About
            </TabsContent>
            <TabsContent value="education" className="w-full">
               Education
            </TabsContent>
         </div>
      </Tabs>
   </div>
</section>
</motion.div> */
}
