import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle, FormInput, LoadingButton } from '@/shared'
import { type LoginFormValues, loginSchema } from '../schemas'

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void
  isLoading?: boolean
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const { email, password } = watch()
  const isDisabled = isLoading || !email || !password

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="font-bold text-2xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={isLoading} className="space-y-4">
            <FormInput
              id="email"
              type="email"
              placeholder="email@example.com"
              icon={<Mail className="size-4" />}
              error={errors.email?.message}
              {...register('email')}
            />
            <FormInput
              id="password"
              type="password"
              placeholder="password"
              icon={<Lock className="size-4" />}
              error={errors.password?.message}
              {...register('password')}
            />
            <LoadingButton type="submit" className="w-full" disabled={isDisabled} isLoading={isLoading}>
              Login
            </LoadingButton>
          </fieldset>
        </form>
      </CardContent>
    </Card>
  )
}
