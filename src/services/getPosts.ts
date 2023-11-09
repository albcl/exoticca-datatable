import { postsURL } from './api';
import type { PostsType } from './types';

export const getPosts = async (): Promise<PostsType> => {
  return await fetch(postsURL).then(async res => {
    if (!res.ok) throw new Error('Fetching error!');

    return await res.json();
  });
};
