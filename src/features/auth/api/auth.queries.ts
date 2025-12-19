import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useAuthStore } from '../stores/auth.store'
import type { LoginRequest } from '../types'
import { authApi } from './auth.api'

export function useLogin() {
  const navigate = useNavigate()
  const setAuth = useAuthStore(state => state.setAuth)

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: data => {
      setAuth(data.token, data.user)
      toast.success('Login successful')
      navigate({ to: '/' })
    },
  })

  return { login: mutate, isLoading: isPending }
}
