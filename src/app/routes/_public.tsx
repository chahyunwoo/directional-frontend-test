import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/features'
import { ROUTES } from '@/shared'

export const Route = createFileRoute('/_public')({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()
    if (isAuthenticated) {
      throw redirect({ to: ROUTES.HOME })
    }
  },
  component: () => <Outlet />,
})
