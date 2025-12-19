import type { PostsParams } from '@/features/board/types'

export const queryKeys = {
  posts: {
    all: ['posts'] as const,
    list: (params?: PostsParams) => [...queryKeys.posts.all, 'list', params] as const,
    detail: (id: string) => [...queryKeys.posts.all, 'detail', id] as const,
  },
}
