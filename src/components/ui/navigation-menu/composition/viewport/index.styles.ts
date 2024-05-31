import { cn } from "@/utils/tailwind.utils";

export const navigationMenuViewportStyles = {
  container: cn("absolute left-0 top-full flex justify-center"),
  comp: (className: string | undefined) =>
    cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
};
