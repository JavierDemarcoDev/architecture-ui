/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { buttonVariants } from './index.cva'
import { cn } from '@/utils/tailwind.utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, fullWidth, ...props }, ref) => {
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

    return <Comp className={buttonClasses} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
