import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchPost } from '@services/patchPost';
import type { PostsType } from 'src/services/types';

export function useEditData() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: patchPost,
    onSuccess: async newData => {
      await queryClient.setQueryData(['posts'], (prevData: PostsType) => {
        if (!prevData) return [newData];

        const ix = prevData.findIndex(i => i.id === newData.id);
        const updatedData =
          ix >= 0
            ? [...prevData.slice(0, ix), newData, ...prevData.slice(ix + 1)]
            : [...prevData, newData];

        return updatedData;
      });

      // This would be the ideal way
      // await queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  return { mutate, isPending };
}
