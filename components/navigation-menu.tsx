"use client";

import * as React from "react";
import { ButtonLink } from "@/common/button";
import { DarkLightImageAutoscale } from "@/common/dark-light-image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { StaticHeader, StaticHeaderLink } from "@/lib/static-data";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
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

export function DesktopMenu({ navbar, rightCtas }: StaticHeader) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbar.items.map((item) => (
          <NavigationMenuItem key={item._id}>
            {item.sublinks?.items.length ? (
              <>
                <NavigationMenuTrigger>{item._title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr] lg:w-[600px]">
                    {item.sublinks.items.map((subItem) => (
                      <ListItem
                        key={subItem._id}
                        title={subItem._title}
                        href={subItem.link.page?.pathname ?? "#"}
                      >
                        {subItem.link.text}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <ButtonLink
                  unstyled
                  className={navigationMenuTriggerStyle()}
                  href={item.href ?? "#"}
                >
                  {item._title}
                </ButtonLink>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileMenu({ navbar, rightCtas }: StaticHeader) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      {rightCtas.items.map((cta) => (
        <ButtonLink
          key={cta._id}
          href={cta.href}
          type={cta.type as any}
          className="hidden sm:flex"
        >
          {cta.label}
        </ButtonLink>
      ))}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-[--border] bg-[--surface-primary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary] sm:hidden"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-[--border] bg-[--surface-primary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary] sm:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-6">
            {navbar.items.map((item) => (
              <ButtonLink
                key={item._id}
                unstyled
                className="text-left"
                href={item.href ?? "#"}
              >
                {item._title}
              </ButtonLink>
            ))}
            {rightCtas.items.map((cta) => (
              <ButtonLink
                key={cta._id}
                href={cta.href}
                type={cta.type as any}
                className="mt-4"
              >
                {cta.label}
              </ButtonLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
