import { cn } from "@/utils/tailwind.utils";

export const navigationMenuIndicatorStyles = (className: string | undefined) =>
  cn(
    "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
    className
  );
