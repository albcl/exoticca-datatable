import { describe, expect, it } from 'vitest';

import { SortBy } from 'src/components/organisms/Table/constants';

import { sortTable } from '../sortTable';

const postsData = [
  { id: 1, title: 'Post C', body: 'Body B', userId: 3 },
  { id: 2, title: 'Post A', body: 'Body A', userId: 1 },
  { id: 3, title: 'Post B', body: 'Body C', userId: 2 }
];

describe('sortTable function', () => {
  it('should sort by title in ascending order', () => {
    const sortedPosts = sortTable(postsData, {
      sortBy: SortBy.TITLE,
      sortAsc: true
    });

    const expectedOrder = [
      { id: 2, title: 'Post A', body: 'Body A', userId: 1 },
      { id: 3, title: 'Post B', body: 'Body C', userId: 2 },
      { id: 1, title: 'Post C', body: 'Body B', userId: 3 }
    ];

    expect(sortedPosts).toEqual(expectedOrder);
  });

  it('should sort by body in descending order', () => {
    const sortedPosts = sortTable(postsData, {
      sortBy: SortBy.BODY,
      sortAsc: false
    });

    const expectedOrder = [
      { id: 3, title: 'Post B', body: 'Body C', userId: 2 },
      { id: 1, title: 'Post C', body: 'Body B', userId: 3 },
      { id: 2, title: 'Post A', body: 'Body A', userId: 1 }
    ];

    expect(sortedPosts).toEqual(expectedOrder);
  });

  it('should sort by userId in ascending order', () => {
    const sortedPosts = sortTable(postsData, {
      sortBy: SortBy.USER_ID,
      sortAsc: true
    });

    const expectedOrder = [
      { id: 2, title: 'Post A', body: 'Body A', userId: 1 },
      { id: 3, title: 'Post B', body: 'Body C', userId: 2 },
      { id: 1, title: 'Post C', body: 'Body B', userId: 3 }
    ];

    expect(sortedPosts).toEqual(expectedOrder);
  });

  it('should keep it unsorted', () => {
    const sortedPosts = sortTable(postsData, {
      sortBy: SortBy.NONE,
      sortAsc: true
    });

    const expectedOrder = postsData;

    expect(sortedPosts).toEqual(expectedOrder);
  });
});
