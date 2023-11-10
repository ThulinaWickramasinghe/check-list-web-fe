'use client';

import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { UserNav } from '@/components/ui/user-nav';
import { useSelector } from 'react-redux';

export default function TaskPage() {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
      <div className='flex items-center justify-between space-y-2'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your tasks for this month!
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
