import type { UseQueryOptions } from '@tanstack/react-query'

export const freshQueryOptions = {
  staleTime: 0,
  gcTime: 1000 * 60 * 5,
  refetchOnWindowFocus: false,
  refetchOnMount: true,
  refetchOnReconnect: true,
} as const satisfies Partial<UseQueryOptions>

export const staticQueryOptions = {
  staleTime: 1000 * 60 * 30,
  gcTime: 1000 * 60 * 60,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
} as const satisfies Partial<UseQueryOptions>
