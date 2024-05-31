import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { navigationMenuTriggerStyles } from "./index.styles";

export type NavigationMenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Trigger
>;

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={navigationMenuTriggerStyles.comp(className)}
    {...props}
  >
    {children}
    <ChevronDown
      className={navigationMenuTriggerStyles.chevron}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
