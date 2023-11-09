import { postsURL } from './api';
import type { SinglePostType } from './types';

interface Data {
  postId: number;
  payload: Partial<SinglePostType>;
}

export const patchPost = async (data: Data): Promise<SinglePostType> => {
  const { postId, payload } = data;

  const options = {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  };

  return await fetch(`${postsURL}/${postId}`, options).then(async res => {
    if (!res.ok) throw new Error('Fetching error!');

    return await res.json();
  });
};
