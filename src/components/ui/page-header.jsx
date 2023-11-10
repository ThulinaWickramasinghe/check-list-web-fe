"use client"

import Balance from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

function PageHeader({ className, children, ...props }) {
  return (
    <section
      className={cn(
        'flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({ className, ...props }) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({ className, ...props }) {
  return (
    <Balance
      className={cn(
        'text-muted-foreground max-w-[750px] text-lg sm:text-xl',
        className
      )}
      {...props}
    />
  );
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription };
