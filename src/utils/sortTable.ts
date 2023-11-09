import type { SortType } from 'src/types';

import { SortBy } from '@components/organisms/Table/constants';

import type { PostsType } from 'src/services/types';

export function sortTable(filteredTitle: PostsType, sortColumn: SortType) {
  return filteredTitle.toSorted((a, b) => {
    const { sortBy, sortAsc } = sortColumn;

    const [valA, valB] = sortAsc ? [a, b] : [b, a];

    switch (sortBy) {
      case SortBy.TITLE:
        return valA.title.localeCompare(valB.title);

      case SortBy.BODY:
        return valA.body.localeCompare(valB.body);

      case SortBy.USER_ID:
        return valA.userId > valB.userId ? 1 : -1;

      default:
        return 1;
    }
  });
}
