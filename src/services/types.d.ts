export type PostsType = SinglePostType[];

export interface SinglePostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
