import { Loader2Icon } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader2Icon className="size-8 animate-spin text-gray-400" />
    </div>
  )
}
