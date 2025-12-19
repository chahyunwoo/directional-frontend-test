import { Link } from '@tanstack/react-router'
import { FileQuestionIcon } from 'lucide-react'
import { Button } from '@/shared'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <FileQuestionIcon className="size-12 text-gray-400" />
      <h1 className="font-semibold text-gray-900 text-xl">Page not found</h1>
      <p className="text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <Button variant="outline" asChild>
        <Link to="/">Go home</Link>
      </Button>
    </div>
  )
}
