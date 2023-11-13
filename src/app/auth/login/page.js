'use client';

import { UserAuthForm } from '@/components/ui/auth/user-auth-form';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className='container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Image
            src='/checklist.svg'
            width='20'
            height='20'
            alt='CheckList logo'
          />
          <span className='ml-4'>CheckList</span>
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              Effortlessly organize your day with CheckList. Stay productive,
              prioritize tasks, and achieve more in less time.
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
              Enter your credentials below to login
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
