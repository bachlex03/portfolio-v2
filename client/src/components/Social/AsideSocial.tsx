import clsx from 'clsx';
import styles from './AsideSocial.module.css';
import { FaGithub, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import Link from 'next/link';
import { SFmono } from '~/fonts/font.config';

const icons = [
   {
      name: 'Github',
      icon: <FaGithub />,
      path: 'https://github.com/bachlex03?tab=repositories',
   },
   {
      name: 'Linkedin',
      icon: <FaLinkedinIn />,
      path: 'https://www.linkedin.com/in/lxbach1608/',
   },
   {
      name: 'Facebook',
      icon: <FaFacebook />,
      path: 'https://www.facebook.com/bale1608',
   },
   {
      name: 'Instagram',
      icon: <FiInstagram />,
      path: '',
   },
   {
      name: 'Twitter',
      icon: <FaTwitter />,
      path: '',
   },
];

const AsideSocial = ({ email = 'lxbachit03.working@gmail.com' }) => {
   return (
      <>
         <div className="xl:fixed bottom-0 left-12">
            <div
               className={clsx(
                  styles.line,
                  'hidden xl:flex xl:flex-col justify-center items-center text-four',
               )}
            >
               {icons.map((item, index) => {
                  return (
                     <Link
                        key={index}
                        href={item.path}
                        target="_blank"
                        className="p-[10px] text-2xl hover:text-secondary hover:translate-x-2 transition duration-700"
                     >
                        {item.icon}
                     </Link>
                  );
               })}
            </div>
         </div>
         <div className="xl:fixed bottom-0 right-12">
            <div className={clsx(styles.line, SFmono.variable)}>
               <p className="[writing-mode:vertical-rl] relative -left-2 text-four text-[13px] font-SFmono tracking-wider">
                  {email}
               </p>
            </div>
         </div>
      </>
   );
};

export default AsideSocial;
