import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/tailwind.utils'
import { buttonVariants } from '@/components/cva'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  label: string
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, label, size, asChild = false, fullWidth, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const buttonClasses = cn(
      buttonVariants({
        variant,
        size,
        className,
      }),
      {
        'w-full': fullWidth,
      },
    )

    return (
      <Comp className={buttonClasses} ref={ref} aria-label={label} {...props}>
        {label}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button }
