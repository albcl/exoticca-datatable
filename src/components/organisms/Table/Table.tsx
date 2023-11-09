import { Typography } from '@mui/material';

import { type PostsType } from 'src/services/types';

import { isPrimeNumber } from 'src/utils/isPrimeNumber';

import { DataTable } from '../../molecules/DataTable';
import { SortBy, TABLE_HEADER_LABELS } from './constants';

export const dataTestID = 'data-table';

const headerLabels = [
  { id: SortBy.USER_ID, label: TABLE_HEADER_LABELS[SortBy.USER_ID] },
  { id: SortBy.TITLE, label: TABLE_HEADER_LABELS[SortBy.TITLE] },
  { id: SortBy.BODY, label: TABLE_HEADER_LABELS[SortBy.BODY] }
];

export function Table({ data }: { data: PostsType }) {
  return (
    <DataTable data-testid={dataTestID}>
      <DataTable.Header columns={headerLabels} />
      <DataTable.Body>
        {data.map(el => {
          const isPrime = isPrimeNumber(el.id);
          return (
            <DataTable.Row key={el.id}>
              <DataTable.Cell>{el.userId}</DataTable.Cell>
              <DataTable.Cell>
                <Typography fontStyle={isPrime ? 'italic' : 'inherit'}>
                  {el.title}
                </Typography>
              </DataTable.Cell>
              <DataTable.Cell>
                <Typography>{el.body}</Typography>
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable.Body>
    </DataTable>
  );
}
