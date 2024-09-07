'use client';

import Button from '~/components/Button/Button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { motion } from 'framer-motion';

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '~/components/ui/select';

import {
   FaPhoneAlt,
   FaEnvelope,
   FaMapMarkedAlt,
   FaMapMarkerAlt,
} from 'react-icons/fa';

const info = [
   {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      description: '+84 816 429 848',
   },
   {
      icon: <FaEnvelope />,
      title: 'Email',
      description: 'lxbachit03.working@gmail.com',
   },
   {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      description: 'Thu Duc City, Ho Chi Minh City, Vietnam',
   },
];

const Contact = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' },
         }}
      >
         <section className="container flex items-center justify-center mt-[calc(var(--header-height)+30px)] mb-10">
            <div
               id="content"
               className="flex flex-col xl:flex-row items-center justify-center gap-10 md:gap-16"
            >
               <div className="form-wrapper flex-1 bg-[#050a13] px-10 py-5 rounded-lg flex gap-6 flex-col">
                  <h3 className="text-secondary text-4xl py-5 text-left">
                     Let's Work together
                  </h3>
                  <p className="text-four">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quis, praesentium minima molestias totam, in deserunt saepe
                     sed possimus soluta consectetur, iusto distinctio aliquid
                     qui. Commodi nemo unde atque debitis. Possimus!
                  </p>
                  <form action="">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input type="text" placeholder="first-name" />
                        <Input type="text" placeholder="last-name" />
                        <Input type="email" placeholder="email@gmail.com" />
                        <Input type="phone" placeholder="Phone-number" />
                     </div>
                     {/* Select */}
                     <div className="mt-5">
                        <Select>
                           <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Select a service</SelectLabel>
                                 <SelectItem value="Web Development">
                                    Web Development
                                 </SelectItem>
                                 <SelectItem value="SEO Optimization">
                                    SEO Optimization
                                 </SelectItem>
                                 <SelectItem value="UX/UI Design">
                                    UX/UI Design
                                 </SelectItem>
                                 <SelectItem value="Logo Design">
                                    Logo Design
                                 </SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select>
                     </div>

                     <div className="mt-5">
                        <Textarea placeholder="Message" />
                     </div>

                     <div className="mt-7">
                        <Button className="text-secondary">Send message</Button>
                     </div>
                  </form>
               </div>

               {/* Info */}
               <div className="flex-1 flex items-center mb-8">
                  <ul className="flex flex-col gap-10">
                     {info.map((item, index) => (
                        <li key={index} className="flex items-center gap-6">
                           <div className="flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#050a13] text-secondary rounded-md">
                              <div className="text-[24px]">{item.icon}</div>
                           </div>
                           <div className="flex-1">
                              <p className="text-white/60">{item.title}</p>
                              <h3 className="text-base mt-2">
                                 {item.description}
                              </h3>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>
      </motion.div>
   );
};

export default Contact;
