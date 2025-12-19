import { Loader2 } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { Button } from '../ui/button'

interface LoadingButtonProps extends ComponentProps<typeof Button> {
  isLoading?: boolean
  loadingText?: ReactNode
}

export function LoadingButton({
  isLoading = false,
  loadingText,
  disabled,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
