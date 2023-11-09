import type { SortBy } from 'src/components/organisms/Table/constants';

export interface HeaderProps {
  columns: Array<{
    id: SortBy;
    label: string;
  }>;
}
