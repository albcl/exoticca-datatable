import type { SortType } from 'src/types';

export interface SortsSectionProps extends SortType {
  minWidth: number;
  onSortChange: SortChangeHandlerType;
}
