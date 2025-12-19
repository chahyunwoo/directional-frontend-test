import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  accessToken: string | null
  isAuthenticated: boolean
  setToken: (token: string) => void
  clearToken: () => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        accessToken: null,
        isAuthenticated: false,
        setToken: token =>
          set({
            accessToken: token,
            isAuthenticated: true,
          }),
        clearToken: () =>
          set({
            accessToken: null,
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
