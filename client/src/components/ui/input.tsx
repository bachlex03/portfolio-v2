import * as React from 'react';

import { cn } from '~/lib/utils';

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      return (
         <input
            type={type}
            className={cn(
               'h-48px rounded-md border border-white/10 font-light bg-primary px-4 py-3 text-base placeholder:text-white/60 outline-none focus:border-secondary',
               className,
            )}
            ref={ref}
            {...props}
         />
      );
   },
);
Input.displayName = 'Input';

export { Input };
