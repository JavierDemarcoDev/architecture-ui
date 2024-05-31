import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { navigationMenuViewportStyles } from "./index.styles";

export const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={navigationMenuViewportStyles.container}>
    <NavigationMenuPrimitive.Viewport
      className={navigationMenuViewportStyles.comp(className)}
      ref={ref}
      {...props}
    />
  </div>
));

NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;
