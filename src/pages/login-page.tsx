import { LoginForm, type LoginFormValues } from '@/features/auth'

export default function LoginPage() {
  const handleLogin = (values: LoginFormValues) => {
    // TODO: API 연동
    console.log('Login:', values)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm onSubmit={handleLogin} />
    </div>
  )
}
