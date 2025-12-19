import { createRouter, RouterProvider } from '@tanstack/react-router'
import { queryClient } from '@/shared'
import { Providers } from './providers'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPendingComponent: () => null,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}

export default App
