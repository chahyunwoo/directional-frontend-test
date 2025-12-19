export interface Post {
  id: string
  title: string
  content: string
  category: string
  createdAt: string
  updatedAt: string
}

export interface PostsParams {
  limit?: number
  prevCursor?: string
  nextCursor?: string
  sort?: string
  order?: 'asc' | 'desc'
  category?: string
  from?: string
  to?: string
  search?: string
}

export interface PostsResponse {
  items: Post[]
  prevCursor: string | null
  nextCursor: string | null
}
