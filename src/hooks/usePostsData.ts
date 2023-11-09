import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@services/getPosts';

export function usePostsData() {
  const { isLoading, data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return { posts, isLoading };
}
