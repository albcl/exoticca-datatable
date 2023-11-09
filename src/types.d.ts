import { type SortBy } from '@components/organisms/Table/constants';

export interface SortType {
  sortBy: SortBy;
  sortAsc: boolean;
}

export type FilterChangeHandlerType = (v: string) => void;
export type SortChangeHandlerType = (v: SortType) => void;
