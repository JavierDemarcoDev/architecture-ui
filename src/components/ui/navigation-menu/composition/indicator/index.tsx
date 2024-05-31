import * as React from "react";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { navigationMenuIndicatorStyles } from "./index.styles";

export const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={navigationMenuIndicatorStyles(className)}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));

NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;
