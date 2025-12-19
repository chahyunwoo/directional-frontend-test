import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon } from 'lucide-react'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'flex items-center gap-3 w-full rounded-lg border p-4 shadow-lg',
          success: 'bg-green-50 border-green-200 text-green-800 [&>svg]:text-green-500',
          error: 'bg-red-50 border-red-200 text-red-800 [&>svg]:text-red-500',
          warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 [&>svg]:text-yellow-500',
          info: 'bg-blue-50 border-blue-200 text-blue-800 [&>svg]:text-blue-500',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
