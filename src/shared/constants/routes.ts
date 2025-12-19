export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  BOARD: '/board',
  CHART: '/chart',
  NOT_FOUND: '/404',
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = (typeof ROUTES)[RouteKey]
