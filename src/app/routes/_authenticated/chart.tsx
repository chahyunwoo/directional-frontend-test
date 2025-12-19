import { createFileRoute } from '@tanstack/react-router'
import { ChartPage } from '@/pages'

export const Route = createFileRoute('/_authenticated/chart')({
  component: ChartPage,
})
