import { type ComponentProps, forwardRef, type ReactNode, useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'

interface FormInputProps extends Omit<ComponentProps<'input'>, 'children'> {
  error?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, error, placeholder, icon, iconPosition = 'left', onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const hasError = !!error

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const inputElement = (
      <InputGroupInput
        ref={ref}
        className={cn(hasError && 'placeholder:text-red-500', className)}
        placeholder={hasError && !isFocused ? error : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    )

    return (
      <InputGroup
        className={cn(
          hasError && [
            'animate-shake border-red-500',
            'has-[[data-slot=input-group-control]:focus-visible]:border-red-500',
            'has-[[data-slot=input-group-control]:focus-visible]:ring-red-500/20',
          ]
        )}
      >
        {icon && iconPosition === 'left' && (
          <InputGroupAddon align="inline-start" className={cn(hasError && 'text-red-500')}>
            {icon}
          </InputGroupAddon>
        )}
        {inputElement}
        {icon && iconPosition === 'right' && (
          <InputGroupAddon align="inline-end" className={cn(hasError && 'text-red-500')}>
            {icon}
          </InputGroupAddon>
        )}
      </InputGroup>
    )
  }
)

FormInput.displayName = 'FormInput'
