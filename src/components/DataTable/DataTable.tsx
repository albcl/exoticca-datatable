import { type PropsWithChildren } from 'react';

import { TableBody, TableRow } from '@mui/material';

import * as S from './style';

export function DataTable(props: PropsWithChildren) {
  return <S.DataTable>{props.children}</S.DataTable>;
}

DataTable.Header = function Header({ cells }: { cells: string[] }) {
  return (
    <S.Header>
      <TableRow>
        {cells.map(cell => (
          <DataTable.Cell key={cell}>{cell}</DataTable.Cell>
        ))}
      </TableRow>
    </S.Header>
  );
};

DataTable.Body = function Body({ children }: any) {
  return <TableBody>{children}</TableBody>;
};

DataTable.Row = TableRow;

DataTable.Cell = function Cell(props: PropsWithChildren) {
  return <S.Cell {...props} />;
};
