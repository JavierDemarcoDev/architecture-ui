import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { navigationMenuContentStyles } from "./index.styles";

export type NavigationMenuContentProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Content
>;

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={navigationMenuContentStyles(className)}
    {...props}
  />
));

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
