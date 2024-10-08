/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/tailwind.utils'
import { toggleVariants } from './index.cva'

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
