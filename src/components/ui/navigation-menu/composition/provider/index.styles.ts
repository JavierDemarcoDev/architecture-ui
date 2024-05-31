import { cn } from "@/utils/tailwind.utils";

export const navigationMenuProviderStyles = (className?: string) =>
  cn(
    "relative z-10 flex max-w-max flex-1 items-center justify-center w-full",
    className
  );
