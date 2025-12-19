import { useRouter } from '@tanstack/react-router'
import { AlertTriangleIcon } from 'lucide-react'
import { Button } from '@/shared'

export default function ErrorPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <AlertTriangleIcon className="size-12 text-red-500" />
      <h1 className="font-semibold text-gray-900 text-xl">
        Something went wrong
      </h1>
      <p className="text-gray-500">An unexpected error occurred.</p>
      <Button
        variant="outline"
        onClick={() => router.invalidate()}
      >
        Try again
      </Button>
    </div>
  )
}
