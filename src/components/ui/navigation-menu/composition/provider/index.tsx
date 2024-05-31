import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { NavigationMenuViewport } from "../..";
import { navigationMenuProviderStyles } from "./index.styles";

export type NavigationMenuProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
>;

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={navigationMenuProviderStyles(className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
