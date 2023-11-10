'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useDispatch } from 'react-redux';
import {deleteTask} from '@/store/slices/task'

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { taskSchema } from '@/__mocks__/tasks/schema';

export function DataTableRowActions({ row }) {
  const dispatch = useDispatch()
  const task = taskSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
        >
          <DotsHorizontalIcon className='h-4 w-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[160px]'>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {
          dispatch(deleteTask(row.getValue('id')))
          }}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
