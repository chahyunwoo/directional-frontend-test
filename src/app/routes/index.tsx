import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/features/auth'
import { ROUTES } from '@/shared'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()
    if (!isAuthenticated) {
      throw redirect({ to: ROUTES.LOGIN })
    }

    throw redirect({ to: ROUTES.BOARD })
  },
})
