'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Button from '~/components/Button/Button';
import { SFmono } from '~/fonts/font.config';
import styles from './Nav.module.css';
import { usePathname } from 'next/navigation';

const links = [
   {
      name: 'Home',
      path: '/',
   },
   {
      name: 'Experiences',
      path: '/experiences',
   },
   {
      name: 'Services',
      path: '/services',
   },
   {
      name: 'Contact',
      path: '/contact',
   },
];

const Nav = () => {
   const pathname = usePathname();

   return (
      <nav>
         <ul className={clsx('flex gap-2', SFmono.variable, styles.navList)}>
            {links.map((link, index) => {
               return (
                  <li
                     key={index}
                     className={`${pathname === link.path && 'text-secondary border-b-2 border-secondary'} text-sm font-SFmono px-2 py-3 text-header-text hover:text-secondary select-none`}
                  >
                     <Link href={link.path}>{link.name}</Link>
                  </li>
               );
            })}
            <li className={clsx(styles.btnComponent)}>
               <Button className="ml-3 text-sm text-secondary">Resume</Button>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
