export enum SortBy {
  NONE,
  USER_ID,
  TITLE,
  BODY
}

export const TABLE_HEADER_LABELS = {
  [SortBy.NONE]: 'None',
  [SortBy.USER_ID]: 'User ID',
  [SortBy.TITLE]: 'Title',
  [SortBy.BODY]: 'Body'
};
