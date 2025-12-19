export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',

  BOARD: '/board',
  CHART: '/chart',

  NOT_FOUND: '/404',
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = (typeof ROUTES)[RouteKey]

export const ROUTE_IDS = {
  ROOT: '__root',
  AUTHENTICATED: '/_authenticated',
  PUBLIC: '/_public',
  BOARD: '/_authenticated/board',
  CHART: '/_authenticated/chart',
} as const

export type RouteIdKey = keyof typeof ROUTE_IDS
export type RouteId = (typeof ROUTE_IDS)[RouteIdKey]

export const ROUTE_PATHS = {
  ROOT: '/',

  PUBLIC_LAYOUT: '/_public',
  LOGIN: '/_public/login',
  NOT_FOUND: '/_public/404',

  AUTHENTICATED_LAYOUT: '/_authenticated',
  BOARD: '/_authenticated/board',
  CHART: '/_authenticated/chart',
} as const

export type RoutePathKey = keyof typeof ROUTE_PATHS
export type RoutePathValue = (typeof ROUTE_PATHS)[RoutePathKey]
