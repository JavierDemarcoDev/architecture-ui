import * as React from "react";

import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuTriggerProps,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/tailwind.utils";

export type NavbarTriggerProps = {
  props: NavigationMenuTriggerProps;
  contentList: { title: string; href: string; description: string }[];
};

const ActiveTrigger: React.FC<NavbarTriggerProps> = ({
  props,
  contentList = [],
}) => {
  const { children, ...triggerProps } = props;

  return (
    <React.Fragment>
      <NavigationMenuTrigger {...triggerProps}>
        {children}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex flex-col w-[350px] gap-3 p-4">
          {contentList.map((content) => (
            <ListItem
              key={content.title}
              title={content.title}
              href={content.href}
            >
              {content.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </React.Fragment>
  );
};

export default ActiveTrigger;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
