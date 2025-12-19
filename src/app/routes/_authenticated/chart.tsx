import { createFileRoute } from '@tanstack/react-router'
import { ChartPage } from '@/pages'
import { ROUTE_PATHS } from '@/shared'

export const Route = createFileRoute(ROUTE_PATHS.CHART)({
  component: ChartPage,
})
