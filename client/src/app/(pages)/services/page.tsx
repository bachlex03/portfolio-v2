'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
   {
      num: 1,
      title: 'Web Development',
      description:
         'I build things for the web. I build things for the web. I build things for the web.',
      href: '',
   },
   {
      num: 2,
      title: 'UI/UX Design',
      description:
         'I build things for the web. I build things for the web. I build things for the web.',
      href: '',
   },
   {
      num: 3,
      title: 'SEO Optimization',
      description:
         'I build things for the web. I build things for the web. I build things for the web.',
      href: '',
   },
   {
      num: 4,
      title: 'Logo Design',
      description:
         'I build things for the web. I build things for the web. I build things for the web.',
      href: '',
   },
];

const ServicePage = () => {
   return (
      <section className="min-h-[99vh] flex flex-col justify-end md:justify-center pt-5 xl:py-0">
         <div className="container mx-auto">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' } }}
               className="grid grid-cols-1 md:grid-cols-2 gap-[30px]"
            >
               {services.map((service, index) => {
                  return (
                     <div
                        key={index}
                        className="flex flex-col border-b border-four/50 pb-[25px] gap-[15px] group"
                     >
                        <div className="flex justify-between items-center">
                           <span className="text-3xl group-hover:text-secondary transition-all duration-500">
                              0{service.num}
                           </span>
                           <Link
                              href={service.href}
                              className="size-[50px] rounded-full bg-white flex justify-center items-center text-primary text-2xl
                               group-hover:bg-secondary group-hover:-rotate-45 transition-all duration-500"
                           >
                              <BsArrowDownRight />
                           </Link>
                        </div>
                        <h1 className="text-[26px] leading font-[700] text-white group-hover:text-secondary transition-all duration-500 cursor-pointer">
                           <Link href={service.href}>{service.title}</Link>
                        </h1>
                        <p className="text-[13px]">{service.description}</p>
                     </div>
                  );
               })}
            </motion.div>
         </div>
      </section>
   );
};

export default ServicePage;
