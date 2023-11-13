'use client';

import { removeTask, updateTaskDescription } from '@/store/slices/task';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/common/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/common/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/common/dropdown-menu';

import { Input } from '@/components/ui/common/input';
import { Label } from '@/components/ui/common/label';

export function DataTableRowActions({ row }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTaskDescription({
        _id: row.original._id,
        description: e.target.description.value,
      })
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <div className='flex justify-end'>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
            >
              <DotsHorizontalIcon className='h-4 w-4' />
              <span className='sr-only'>Open menu</span>
            </Button>
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent align='end' className='w-[160px]'>
          <DialogTrigger>
            <DropdownMenuItem
              onSelect={() => {
                setOpen(true);
              }}
            >
              Edit
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            onSelect={() => {
              dispatch(removeTask(row.original._id));
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className='sm:max-w-[425px]'>
        <form onSubmit={handleEditSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Edit your task. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Title
              </Label>
              <Input
                id='description'
                name='description'
                required
                defaultValue={row.getValue('description')}
                className='col-span-3'
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
