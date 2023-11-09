import type { SortBy } from '@components/organisms/Table/constants';

export interface HeaderProps {
  columns: Array<{
    id: SortBy;
    label: string;
    width?: string;
  }>;
}
