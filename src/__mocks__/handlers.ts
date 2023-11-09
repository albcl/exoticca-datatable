import { HttpResponse, http } from 'msw';

import type { SinglePostType } from 'src/services/types';

import mockData from './data.json';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json(mockData);
  }),

  http.patch(
    'https://jsonplaceholder.typicode.com/posts/:id',
    async ({ params, request }) => {
      const { id } = params;
      const payload = (await request.json()) as Partial<SinglePostType>;
      const el = mockData.find(row => row.id === Number(id));

      return HttpResponse.json({ ...el, ...payload });
    }
  )
];
