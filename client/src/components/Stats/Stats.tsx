'use client';

import CountUp from 'react-countup';
import { SFmono } from '~/fonts/font.config';
import { cn } from '~/lib/utils';

const stats = [
   {
      text: 'Years of experience',
      num: 2,
   },
   {
      text: 'Technologies mastered',
      num: 4,
   },
   {
      text: 'Projects completed',
      num: 20,
   },
   {
      text: 'Code commits',
      num: 500,
   },
];

const Stats = () => {
   return (
      <section className={cn(SFmono.variable, 'mt-14 xl:mt-28')}>
         <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] items-center justify-center">
               {stats.map((stat, index) => {
                  return (
                     <div
                        key={index}
                        className="font-SFmono flex flex-1 gap-3 justify-start items-center"
                     >
                        <CountUp
                           end={stat.num}
                           duration={5}
                           delay={1}
                           className="text-4xl xl:text-6xl font-extrabold leading-4 min-w-[65px] text-secondary/90"
                        />
                        <p
                           className={`${
                              stat.text.length > 15
                                 ? 'max-w-[100px]'
                                 : 'max-w-[150px]'
                           } leading-snug xl:leading-6 text-white/80 text-sm`}
                        >
                           {stat.text}
                        </p>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Stats;
