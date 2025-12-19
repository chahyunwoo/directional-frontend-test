import { apiClient } from '@/shared/lib/api/api-client'
import type { PostsParams, PostsResponse } from '../types'
import { BOARD_ENDPOINTS } from './endpoint'

function buildSearchParams(params?: PostsParams) {
  if (!params) return undefined
  const entries = Object.entries(params).filter(([, v]) => v !== undefined)
  return Object.fromEntries(entries) as Record<string, string | number>
}

export const postsApi = {
  getPosts: (params?: PostsParams) =>
    apiClient.get<PostsResponse>(BOARD_ENDPOINTS.POSTS, {
      searchParams: buildSearchParams(params),
    }),
}
