import mockData from '@mocks/data.json';
import { describe, expect, it } from 'vitest';

import { patchPost } from '../patchPost';

describe('patchPost - Services', () => {
  it('should patch a post', async () => {
    const id = 3;
    const sampleText = 'sample';
    const data = mockData.find(row => row.id === Number(id));

    const res = await patchPost({ postId: id, payload: { body: sampleText } });

    expect(res).not.toEqual(data);
  });
});
