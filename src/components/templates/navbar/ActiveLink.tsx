import * as React from "react";

import {
  NavigationMenuLink,
  NavigationMenuLinkProps,
} from "@/components/ui/navigation-menu";
import Link, { LinkProps } from "next/link";
import { NavbarLinks } from ".";

export type ItemLinkProps = {
  link: LinkProps;
  menuLink?: NavigationMenuLinkProps;
  children: React.ReactNode;
};

const ActiveLink: React.FC<ItemLinkProps> = React.forwardRef<
  React.ElementRef<typeof NavbarLinks>,
  ItemLinkProps
>(({ link, menuLink, children }, ref) => {
  return (
    <Link {...link} ref={ref}>
      <NavigationMenuLink {...menuLink}>{children}</NavigationMenuLink>
    </Link>
  );
});

ActiveLink.displayName = "ActiveLink";

export default ActiveLink;
