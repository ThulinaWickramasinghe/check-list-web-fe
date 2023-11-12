'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { UserNav } from '@/components/ui/user-nav';

import { getAllTasks, reset } from '@/store/slices/task';

export default function TaskPage() {
  const dispatch = useDispatch();
  const { tasks, getAllTasksIsSuccess } = useSelector((state) => state.task);

  //get all tasks
  useEffect(() => {
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
