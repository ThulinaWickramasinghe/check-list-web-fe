'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/common/button';
import { Input } from '@/components/ui/common/input';
import { Label } from '@/components/ui/common/label';

import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slices/auth';
import { useToast } from '@/components/ui/common/use-toast';

export function UserAuthForm({ className, ...props }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const { isLoginSuccess, isLoginError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoginSuccess) {
      router.push('/');
    }

    if (isLoginError) {
      toast({
        variant: 'destructive',
        title: 'Login Failed!',
        description: 'Check your login credentials.',
      });
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
