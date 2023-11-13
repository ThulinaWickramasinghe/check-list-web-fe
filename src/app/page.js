'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { columns } from '@/components/ui/tasks/columns';
import { DataTable } from '@/components/ui/tasks/data-table';
import { UserNav } from '@/components/ui/tasks/user-nav';

import { getAllTasks } from '@/store/slices/task';
import { useRouter } from 'next/navigation';

export default function TaskPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { tasks } = useSelector((state) => state.task);

  useEffect(() => {
    if (localStorage.getItem('user') == null) {
      router.push('/auth/login');
    }

    dispatch(getAllTasks());
  }, []);

  return (
    <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
      <div className='flex items-center justify-between space-y-2'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>
            Welcome to CheckList!
          </h2>
          <p className='text-muted-foreground'>
            Here&apos;s your list of tasks...
          </p>
        </div>
        <div className='flex items-center space-x-2'>
          <UserNav />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
