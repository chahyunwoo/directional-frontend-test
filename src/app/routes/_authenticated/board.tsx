import { createFileRoute } from '@tanstack/react-router'
import { BoardPage } from '@/pages'
import { ROUTE_PATHS } from '@/shared'

export const Route = createFileRoute(ROUTE_PATHS.BOARD)({
  component: BoardPage,
})
