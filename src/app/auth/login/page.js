'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/ui/user-auth-form';
import { cn } from '@/lib/utils';

export default function RegisterPage() {
  return (
    <div className='container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          CheckList
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              Effortlessly organize your day with CheckList. Stay productive,
              prioritize tasks, and achieve more in less time. Start today for a
              clutter-free life!
            </p>
            <footer className='text-sm'>ThulinaWickramasinghe</footer>
          </blockquote>
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Login to your account
            </h1>
            <p className='text-muted-foreground text-sm'>
              Enter your email below to login
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
