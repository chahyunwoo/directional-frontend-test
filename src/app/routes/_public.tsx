import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/features'
import { ROUTE_PATHS, ROUTES } from '@/shared'

export const Route = createFileRoute(ROUTE_PATHS.PUBLIC_LAYOUT)({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()
    if (isAuthenticated) {
      throw redirect({ to: ROUTES.HOME })
    }
  },
  component: () => <Outlet />,
})
