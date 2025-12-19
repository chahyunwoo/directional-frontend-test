import { Link, Outlet } from '@tanstack/react-router'
import { BarChart3Icon, LayoutListIcon } from 'lucide-react'
import { ROUTES } from '@/shared/constants'

export function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 border-r bg-gray-50 p-4">
        <h1 className="mb-6 font-bold text-lg">Dashboard</h1>
        <nav className="space-y-1">
          <Link
            to={ROUTES.BOARD}
            className="flex items-center gap-2 rounded px-3 py-2 text-gray-700 hover:bg-gray-100 [&.active]:bg-gray-200 [&.active]:font-medium"
          >
            <LayoutListIcon className="size-4" />
            Board
          </Link>
          <Link
            to={ROUTES.CHART}
            className="flex items-center gap-2 rounded px-3 py-2 text-gray-700 hover:bg-gray-100 [&.active]:bg-gray-200 [&.active]:font-medium"
          >
            <BarChart3Icon className="size-4" />
            Chart
          </Link>
        </nav>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
