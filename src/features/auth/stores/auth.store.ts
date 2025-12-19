import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User } from '../types'

interface AuthState {
  accessToken: string | null
  user: User | null
  isAuthenticated: boolean
  setAuth: (token: string, user: User) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        accessToken: null,
        user: null,
        isAuthenticated: false,
        setAuth: (token, user) =>
          set({
            accessToken: token,
            user,
            isAuthenticated: true,
          }),
        clearAuth: () =>
          set({
            accessToken: null,
            user: null,
            isAuthenticated: false,
          }),
      }),
      {
        name: 'auth-storage',
        partialize: state => ({ accessToken: state.accessToken }),
        onRehydrateStorage: () => state => {
          if (state?.accessToken) {
            state.isAuthenticated = true
          }
        },
      }
    ),
    { name: 'auth-store' }
  )
)
