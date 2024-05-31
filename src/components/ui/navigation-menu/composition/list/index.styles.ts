import { cn } from "@/utils/tailwind.utils";

export const navigationMenuListStyles = (className?: string) =>
  cn(
    "group flex flex-1 list-none items-center justify-center space-x-1",
    className
  );
