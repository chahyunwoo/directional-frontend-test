import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/features'
import { MainLayout, ROUTES } from '@/shared'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()

    if (!isAuthenticated) {
      throw redirect({ to: ROUTES.LOGIN })
    }
  },
  component: MainLayout,
})
