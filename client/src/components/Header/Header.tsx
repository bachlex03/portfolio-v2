import clsx from 'clsx';
import styles from './Header.module.css';
import { SFmono } from '~/fonts/font.config';
import images from '../../../public/index';
import Image from 'next/image';
import Button from '~/components/Button/Button';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div
        className={clsx(
          'container',
          'xl:max-w-full',
          'xl:px-20',
          'h-24',
          'flex',
          'items-center',
          'shadow-[0_10px_30px_-10px_rgba(2,12,27,.7)]',
          'backdrop-blur-sm',
        )}
      >
        <div className={clsx('flex', 'justify-between', 'items-center', 'w-full')}>
          <Image src={images.logo} width={48} height={54} alt="logo"></Image>
          <nav>
            <ul className={clsx('flex', SFmono.variable, styles.navList)}>
              <li className="text-sm font-SFmono p-3 text-header-text transition-all duration-500 hover:text-secondary">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm font-SFmono p-3 text-header-text transition-all duration-500 hover:text-secondary">
                <Link href="/experiences">Experiences</Link>
              </li>
              <li className="text-sm font-SFmono p-3 text-header-text transition-all duration-500 hover:text-secondary">
                <Link href="/services">Services</Link>
              </li>
              <li className="text-sm font-SFmono p-3 text-header-text transition-all duration-500 hover:text-secondary">
                <Link href="/contact">Contact</Link>
              </li>
              <li className={clsx(styles.btnComponent)}>
                <Button className="ml-3">Resume</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
