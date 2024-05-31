import * as React from "react";
import Image, { ImageProps } from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuListProps,
  NavigationMenuProps,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import ActiveTrigger, { NavbarTriggerProps } from "./ActiveTrigger";
import ActiveLink, { ItemLinkProps } from "./ActiveLink";
import { cn } from "@/utils/tailwind.utils";

interface NavbarLayoutProps {
  as?: React.ElementType;
  container?: NavigationMenuProps;
  menu: {
    container?: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;
    logo?: {
      container?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >;
      img: Omit<ImageProps, "alt"> & { alt?: string };
    };
  };

  children: React.ReactNode;
}
const NavbarLayout: React.FC<NavbarLayoutProps> = React.forwardRef<
  HTMLElement,
  NavbarLayoutProps
>(({ as: Component = "div", container, menu, children }, ref) => {
  return (
    <NavigationMenu
      {...container}
      ref={ref}
      className={cn(
        "w-full flex justify-between items-center gap-4",
        container?.className
      )}
    >
      <Component
        {...menu.container}
        className={cn(
          "flex flex-row justify-between items-center gap-4",
          menu.container?.className
        )}
      >
        {menu?.logo && (
          <div {...menu.logo.container}>
            <Image {...menu.logo.img} alt={menu.logo?.img?.alt || "logo"} />
          </div>
        )}
        {children}
      </Component>
      <div className="flex flex-row justify-center items-center gap-2">
        <p>d</p>
        <p>d</p>
        <p>d</p>
      </div>
    </NavigationMenu>
  );
});
NavbarLayout.displayName = "NavbarLayout";

interface NavbarLinksProps {
  container?: NavigationMenuListProps;
  links: NavbarLinkProps[];
}

const NavbarLinks: React.FC<NavbarLinksProps> = React.forwardRef<
  React.ElementRef<typeof NavbarLayout>,
  NavbarLinksProps
>(({ container, links }, ref) => {
  return (
    <NavigationMenuList ref={ref} {...container}>
      {links.map((item, index) => (
        <NavbarLink key={index} {...item} />
      ))}
    </NavigationMenuList>
  );
});
NavbarLinks.displayName = "NavbarLinks";

interface NavbarLinkFullProps {
  trigger?: NavbarTriggerProps;
  navLink?: ItemLinkProps;
}

type NavbarLinkProps =
  | (NavbarLinkFullProps & {
      trigger?: NavbarTriggerProps;
      navLink?: never;
    })
  | (NavbarLinkFullProps & {
      trigger?: never;
      navLink?: ItemLinkProps;
    });

const NavbarLink: React.FC<NavbarLinkProps> = React.forwardRef<
  React.ElementRef<typeof NavbarLinks>,
  NavbarLinkProps
>(({ trigger, navLink }, ref) => {
  return (
    <NavigationMenuItem ref={ref}>
      {navLink && (
        <React.Fragment>
          <ActiveLink {...navLink} />
        </React.Fragment>
      )}
      {trigger && (
        <React.Fragment>
          <ActiveTrigger {...trigger} />
        </React.Fragment>
      )}
    </NavigationMenuItem>
  );
});

NavbarLink.displayName = "NavbarLink";

export { NavbarLayout, NavbarLinks };
