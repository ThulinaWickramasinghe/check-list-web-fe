'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/common/avatar';
import { Button } from '@/components/ui/common/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/common/dropdown-menu';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { logout } from '@/store/slices/auth';
import { useDispatch } from 'react-redux';

export function UserNav() {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth?.user?.user);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-9 w-9'>
            <AvatarImage src='/avatars/03.png' alt='@thulina' />
            <AvatarFallback>
              {user?.name.split(' ').length > 1
                ? user.name
                    .split(' ')
                    .map((name) => name.charAt(0))
                    .join('')
                    .toUpperCase()
                : user?.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>
              {user?.name ?? 'Unknown'}
            </p>
            <p className='text-muted-foreground text-xs leading-none'>
              {user?.email ?? 'Unknown'}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
