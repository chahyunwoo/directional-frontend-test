import ky, { type Options } from 'ky'
import { toast } from 'sonner'
import { useAuthStore } from '@/features/auth/stores/auth.store'

const API_BASE_URL = 'https://fe-hiring-rest-api.vercel.app'

const client = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 30000,
  retry: 0,
  hooks: {
    beforeRequest: [
      request => {
        const token = useAuthStore.getState().accessToken
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
    beforeError: [
      async error => {
        const { response } = error

        if (response.status === 400) {
          toast.error('Invalid request.')
        } else if (response.status === 401) {
          useAuthStore.getState().clearAuth()
          toast.error('Session expired. Please login again.')
        } else if (response.status >= 500) {
          toast.error('Server error. Please try again later.')
        }

        return error
      },
    ],
  },
})

export const apiClient = {
  get: <T>(url: string, options?: Options) => client.get(url, options).json<T>(),
  post: <T>(url: string, options?: Options) => client.post(url, options).json<T>(),
  put: <T>(url: string, options?: Options) => client.put(url, options).json<T>(),
  patch: <T>(url: string, options?: Options) => client.patch(url, options).json<T>(),
  delete: <T>(url: string, options?: Options) => client.delete(url, options).json<T>(),
}
