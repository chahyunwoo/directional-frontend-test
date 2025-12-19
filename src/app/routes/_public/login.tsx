import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '@/pages'
import { ROUTE_PATHS } from '@/shared'

export const Route = createFileRoute(ROUTE_PATHS.LOGIN)({
  component: LoginPage,
})
