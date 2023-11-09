import type {
  FilterChangeHandlerType,
  SortChangeHandlerType,
  SortType
} from 'src/types';

export interface ActionsSectionProps {
  sortColumn: SortType;
  filterBy: string;
  resetActions: () => void;
  onFilterChange: FilterChangeHandlerType;
  onSortChange: SortChangeHandlerType;
}
