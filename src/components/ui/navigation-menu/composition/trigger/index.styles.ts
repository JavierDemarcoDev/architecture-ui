import { cn } from "@/utils/tailwind.utils";

export const navigationMenuTriggerStyles = {
  comp: (className?: string) =>
    cn("group inline-flex h-10 w-max items-center justify-center", className),
  chevron:
    "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
};
