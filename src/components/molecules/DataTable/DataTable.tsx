import { type PropsWithChildren } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

import type { HeaderProps } from './types';

export function DataTable(props: PropsWithChildren) {
  return <Table {...props} />;
}

DataTable.Header = function Header({ columns }: HeaderProps) {
  return (
    <TableHead>
      <DataTable.Row>
        {columns.map(cell => (
          <DataTable.Cell key={cell.id}>
            <Typography color={'text.secondary'}>{cell.label}</Typography>
          </DataTable.Cell>
        ))}
      </DataTable.Row>
    </TableHead>
  );
};

DataTable.Body = TableBody;

DataTable.Row = TableRow;

DataTable.Cell = TableCell;
