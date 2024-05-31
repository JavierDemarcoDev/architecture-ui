import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

export type NavigationMenuItemProps = React.ForwardRefExoticComponent<
  NavigationMenuPrimitive.NavigationMenuItemProps &
    React.RefAttributes<HTMLLIElement>
>;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;
