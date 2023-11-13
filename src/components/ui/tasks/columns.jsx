'use client';

import { Checkbox } from '@/components/ui/common/checkbox';
import { DataTableColumnHeader } from '@/components/ui/tasks/data-table-column-header';
import { DataTableRowActions } from '@/components/ui/tasks/data-table-row-actions';

import store from '@/store';
import { toggleTaskStatus } from '@/store/slices/task';

export const columns = [
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={'done' === row.original.status}
          onCheckedChange={() => {
            store.dispatch(toggleTaskStatus({ _id: row.original._id }));
          }}
          aria-label='Select row'
          className='translate-y-[2px]'
        />
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Description' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='font-medium'>{row.getValue('description')}</span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
