import type { PostsType, SinglePostType } from 'src/services/types';

export interface TableProps {
  data: PostsType;
  onEdit: (id: number, payload: Partial<SinglePostType>) => void;
}
