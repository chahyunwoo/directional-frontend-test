import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { postsInfiniteQueryOptions } from '@/features/board'

export default function BoardPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery(postsInfiniteQueryOptions())

  const posts = data.pages.flatMap(page => page.items)

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Board</h1>
      <ul className="mt-4 space-y-2">
        {posts.map(post => (
          <li key={post.id} className="rounded border p-3">
            <h2 className="font-medium">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.category}</p>
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-4 rounded bg-gray-900 px-4 py-2 text-white disabled:opacity-50"
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  )
}
