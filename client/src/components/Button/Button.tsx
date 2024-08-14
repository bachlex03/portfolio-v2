import clsx from 'clsx';
import styles from './Button.module.css';
import { calibreFont, jetBrainsMono, SFmono } from '~/fonts/font.config';

export default function Button({ children, className = 'wrapper' }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <button className={clsx(SFmono.variable, calibreFont.variable, jetBrainsMono.variable, 'py-[12px] px-[18px] rounded border-solid border-secondary border', className, styles.wrapper)}>
      {children}
    </button>
  );
}
