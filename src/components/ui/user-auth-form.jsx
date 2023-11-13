'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slices/auth';

export function UserAuthForm({ className, ...props }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { isLoginSuccess, isLoginError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoginSuccess) {
      router.push('/tasks');
    }

    if (isLoginError) {
      alert('Invalid credentilas');
    }
  }, [isLoginSuccess, isLoginError]);

  async function onSubmit(event) {
    event.preventDefault();
    dispatch(
      login({
        Email: event.target.email.value,
        Password: event.target.password.value,
      })
    );
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='Email'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
            />
            <Label className='sr-only' htmlFor='email'>
              Password
            </Label>
            <Input
              id='password'
              placeholder='Password'
              type='password'
              autoCapitalize='none'
              autoComplete='password'
              autoCorrect='off'
            />
          </div>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
}
