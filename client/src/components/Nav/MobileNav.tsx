'use client';

import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import Image from 'next/image';
import images from '../../../public';
import Button from '~/components/Button/Button';

const links = [
   {
      name: 'home',
      path: '/',
   },
   {
      name: 'experiences',
      path: '/experiences',
   },
   {
      name: 'services',
      path: '/services',
   },
   {
      name: 'contact',
      path: '/contact',
   },
];

const MobileNav = () => {
   const pathname = usePathname();

   return (
      <Sheet>
         <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[54px] text-secondary p-4"></CiMenuFries>
         </SheetTrigger>
         <SheetContent className="flex flex-col items-center justify-center bg-primary gap-10">
            <Link href="/">
               <div className="flex justify-center items-center">
                  <Image
                     priority
                     src={images.logo}
                     width={48}
                     height={54}
                     className="w-[48px] h-[54px]"
                     alt="logo"
                  />
                  <h2 className="ml-4 text-2xl font-semibold">Bale.</h2>
               </div>
            </Link>
            <nav className="flex flex-col justify-center items-center gap-8">
               {links.map((link, index) => (
                  <Link
                     href={link.path}
                     key={index}
                     className={`${pathname === link.path && 'border-b-2 pb-1 border-secondary'} capitalize text-xl hover:text-secondary transition-all`}
                  >
                     {link.name}
                  </Link>
               ))}
               <div>
                  <Button className="text-xl text-secondary">Resume</Button>
               </div>
            </nav>
         </SheetContent>
      </Sheet>
   );
};

export default MobileNav;
