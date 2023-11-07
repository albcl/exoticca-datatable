import type { PostsType } from './type';

export const getPosts = async (): Promise<PostsType> => {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(
    async res => {
      if (!res.ok) throw new Error('Fetching error!');

      return await res.json();
    }
  );
};
