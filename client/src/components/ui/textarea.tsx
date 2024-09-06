import * as React from 'react';

import { cn } from '~/lib/utils';

export interface TextareaProps
   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
   ({ className, ...props }, ref) => {
      return (
         <textarea
            className={cn(
               'flex min-h-[50px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-white/60 disabled:opacity-50',
               className,
            )}
            ref={ref}
            {...props}
         />
      );
   },
);
Textarea.displayName = 'Textarea';

export { Textarea };
