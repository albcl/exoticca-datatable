import { EditableText } from '@components/atoms/EditableText/EditableText';

import { isPrimeNumber } from 'src/utils/isPrimeNumber';

import { DataTable } from '../../molecules/DataTable';
import { SortBy, TABLE_HEADER_LABELS } from './constants';
import type { TableProps } from './types';

export const dataTestID = 'data-table';

const headerLabels = [
  {
    id: SortBy.USER_ID,
    label: TABLE_HEADER_LABELS[SortBy.USER_ID],
    width: '10%'
  },
  { id: SortBy.TITLE, label: TABLE_HEADER_LABELS[SortBy.TITLE] },
  { id: SortBy.BODY, label: TABLE_HEADER_LABELS[SortBy.BODY] }
];

export function Table({ data, onEdit }: TableProps) {
  return (
    <DataTable data-testid={dataTestID}>
      <DataTable.Header columns={headerLabels} />
      <DataTable.Body>
        {data.map(cell => {
          const isPrime = isPrimeNumber(cell.id);
          return (
            <DataTable.Row key={cell.id}>
              <DataTable.Cell>{cell.userId}</DataTable.Cell>
              <DataTable.Cell
                style={{ fontStyle: `${isPrime ? 'italic' : 'inherit'}` }}
              >
                <EditableText
                  value={cell.title}
                  valueID={cell.id}
                  valueKey="title"
                  onEdit={onEdit}
                />
              </DataTable.Cell>
              <DataTable.Cell>
                <EditableText
                  value={cell.body}
                  valueID={cell.id}
                  valueKey="body"
                  onEdit={onEdit}
                />
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable.Body>
    </DataTable>
  );
}
