import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/features'
import { MainLayout, ROUTE_PATHS, ROUTES } from '@/shared'

export const Route = createFileRoute(ROUTE_PATHS.AUTHENTICATED_LAYOUT)({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()

    if (!isAuthenticated) {
      throw redirect({ to: ROUTES.LOGIN })
    }
  },
  component: MainLayout,
})
