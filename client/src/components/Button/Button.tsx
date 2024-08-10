import clsx from 'clsx';
import styles from './Button.module.css';

export default function Button({
  children,
  className = 'wrapper',
}: Readonly<{ children: React.ReactNode; className: string }>) {
  return (
    <button
      className={clsx(
        'py-[12px] px-[18px] rounded border-solid border-secondary border text-sm ',
        className,
        styles.wrapper,
      )}
    >
      {children}
    </button>
  );
}
