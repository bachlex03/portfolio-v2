'use client';

import { cn } from '~/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { motion } from 'framer-motion';
import { calibreFont, SFmono } from '~/fonts/font.config';

const HomeTabs = () => {
   return (
      <div className="flex justify-center items-center mt-4">
         <motion.div className="">
            <div className={cn(calibreFont.variable, 'container mx-auto')}>
               <Tabs className="xl:flex" defaultValue="early">
                  <TabsList className="xl:flex-col xl:items-start xl:justify-start xl:mr-7">
                     <TabsTrigger
                        className="bg-primary xl:justify-start xl:w-full xl:pr-12 xl:py-3 text-left border-b-2 xl:border-l-2 xl:border-b-0 border-[#233554] data-[state=active]:bg-[#233554] data-[state=active]:text-secondary text-four"
                        value="early"
                     >
                        QKIT
                     </TabsTrigger>
                     <TabsTrigger
                        className="bg-primary xl:justify-start xl:w-full xl:pr-12 xl:py-3 border-b-2 xl:border-l-2 xl:border-b-0 border-[#233554] data-[state=active]:bg-[#233554] data-[state=active]:text-secondary text-four"
                        value="freelancer"
                     >
                        Freelancer
                     </TabsTrigger>
                     <TabsTrigger
                        className="bg-primary xl:justify-start xl:w-full xl:pr-12 xl:py-3 border-b-2 xl:border-l-2 xl:border-b-0 border-[#233554]  data-[state=active]:bg-[#233554] data-[state=active]:text-secondary text-four"
                        value="HCMUTE"
                     >
                        HCMUTE
                     </TabsTrigger>
                  </TabsList>
                  <TabsContent value="early" className="text-center">
                     <div className="py-3 xl:py-0 xl:pb-3 xl:text-left xl:text-[20px]">
                        Lead Enginear{' '}
                        <span className="text-secondary">@Upstatement</span>
                     </div>
                     <span
                        className={cn(
                           SFmono.variable,
                           'block xl:text-left font-SFmono text-[14px] text-[#a8b2d1] italic',
                        )}
                     >
                        May 2021 - Present
                     </span>

                     <div className={cn(calibreFont.variable)}>
                        <p className="relative text-left pl-6 font-calibre text-four font-thin text-[20px] mt-5 leading-[1.4] before:content-['▹'] before:text-secondary before:text-[16px] before:absolute before:left-0">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Voluptatibus excepturi consequatur provident
                           quae labore porro nisi deserunt quasi consequuntur
                           ipsam!
                        </p>

                        <p className="relative text-left pl-6 font-calibre text-four font-thin text-[20px] mt-5 leading-[1.4] before:content-['▹'] before:text-secondary before:text-[16px] before:absolute before:left-0">
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Illum repellat molestiae inventore voluptates
                           corrupti minus officiis explicabo a quam unde, autem
                           iste fugiat! Velit error laborum eligendi blanditiis
                           aut ad ipsa aspernatur dolore explicabo veritatis
                           eaque quibusdam, adipisci fuga maxime?
                        </p>
                     </div>
                  </TabsContent>

                  <TabsContent value="freelancer" className="text-center">
                     <div className="py-3 xl:py-0 xl:pb-3 xl:text-left xl:text-[20px]">
                        Lead Enginear{' '}
                        <span className="text-secondary">@Upstatement</span>
                     </div>
                     <span
                        className={cn(
                           SFmono.variable,
                           'block xl:text-left font-SFmono text-[14px] text-[#a8b2d1] italic',
                        )}
                     >
                        May 2021 - Present
                     </span>

                     <div className={cn(calibreFont.variable)}>
                        <p className="relative text-left pl-6 font-calibre text-four font-thin text-[20px] mt-5 leading-[1.4] before:content-['▹'] before:text-secondary before:text-[16px] before:absolute before:left-0">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Voluptatibus excepturi consequatur provident
                           quae labore porro nisi deserunt quasi consequuntur
                           ipsam!
                        </p>

                        <p className="relative text-left pl-6 font-calibre text-four font-thin text-[20px] mt-5 leading-[1.4] before:content-['▹'] before:text-secondary before:text-[16px] before:absolute before:left-0">
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Illum repellat molestiae inventore voluptates
                           corrupti minus officiis explicabo a quam unde, autem
                           iste fugiat! Velit error laborum eligendi blanditiis
                           aut ad ipsa aspernatur dolore explicabo veritatis
                           eaque quibusdam, adipisci fuga maxime?
                        </p>
                     </div>
                  </TabsContent>

                  <TabsContent value="HCMUTE" className="text-center">
                     <div className="py-3 xl:py-0 xl:pb-3 xl:text-left xl:text-[20px]">
                        Lead Enginear{' '}
                        <span className="text-secondary">@Upstatement</span>
                     </div>
                     <span
                        className={cn(
                           SFmono.variable,
                           'block xl:text-left font-SFmono text-[13px] text-four',
                        )}
                     >
                        May 2021 - Present
                     </span>

                     <div className={cn(calibreFont.variable)}>
                        <p className="relative text-left pl-6 font-calibre text-four font-thin text-[20px] mt-5 leading-[1.4] before:content-['▹'] before:text-secondary before:text-[16px] before:absolute before:left-0">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Voluptatibus excepturi consequatur provident
                           quae labore porro nisi deserunt quasi consequuntur
                           ipsam!
                        </p>
                     </div>
                  </TabsContent>
               </Tabs>
            </div>
         </motion.div>
      </div>
   );
};

export default HomeTabs;
