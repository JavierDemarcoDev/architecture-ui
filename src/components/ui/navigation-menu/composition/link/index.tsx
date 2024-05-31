import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

export type NavigationMenuLinkProps = React.ForwardRefExoticComponent<
  NavigationMenuPrimitive.NavigationMenuLinkProps &
    React.RefAttributes<HTMLAnchorElement>
>;

export const NavigationMenuLink = NavigationMenuPrimitive.Link;
