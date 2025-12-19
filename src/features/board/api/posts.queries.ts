import { infiniteQueryOptions } from '@tanstack/react-query'
import { freshQueryOptions, queryKeys } from '@/shared'
import type { PostsParams, PostsResponse } from '../types'
import { postsApi } from './posts.api'

export const postsInfiniteQueryOptions = (params?: Omit<PostsParams, 'nextCursor' | 'prevCursor'>) =>
  infiniteQueryOptions({
    queryKey: queryKeys.posts.list(params),
    queryFn: ({ pageParam }) => postsApi.getPosts({ ...params, nextCursor: pageParam }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage: PostsResponse) => lastPage.nextCursor ?? undefined,
    getPreviousPageParam: (firstPage: PostsResponse) => firstPage.prevCursor ?? undefined,
    ...freshQueryOptions,
  })
