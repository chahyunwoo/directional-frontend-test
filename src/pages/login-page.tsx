import { LoginForm, useLogin } from '@/features/auth'

export default function LoginPage() {
  const { login, isLoading } = useLogin()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm onSubmit={login} isLoading={isLoading} />
    </div>
  )
}
