'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';
import { DataTableRowActions } from '@/components/ui/data-table-row-actions';

import store from '@/store';
import { toggleStatus } from '@/store/slices/task';

export const columns = [
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={'done' === row.getValue('status')}
          onCheckedChange={() => {
            store.dispatch(toggleStatus({ id: row.original.id }));
          }}
          aria-label='Select row'
          className='translate-y-[2px]'
        />
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Description' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='font-medium'>{row.getValue('title')}</span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
