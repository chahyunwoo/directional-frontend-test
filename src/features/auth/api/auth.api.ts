import { apiClient } from '@/shared/lib/api/api-client'
import type { LoginRequest, LoginResponse } from '../types'
import { AUTH_ENDPOINTS } from './endpoint'

export const authApi = {
  login: (data: LoginRequest) => apiClient.post<LoginResponse>(AUTH_ENDPOINTS.LOGIN, { json: data }),
}
