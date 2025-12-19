import { createFileRoute } from '@tanstack/react-router'
import { postsInfiniteQueryOptions } from '@/features/board'
import { BoardPage } from '@/pages'

export const Route = createFileRoute('/_authenticated/board')({
  loader: ({ context: { queryClient } }) => queryClient.prefetchInfiniteQuery(postsInfiniteQueryOptions()),
  component: BoardPage,
})
