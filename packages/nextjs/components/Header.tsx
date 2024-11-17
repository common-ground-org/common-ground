"use client";

import * as React from "react";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";
import { SidebarTrigger } from "./ui/sidebar";
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Supported Projects",
    href: "/dashboard/supported-projects",
    description: "A list of projects that you have supported.",
  },
  {
    title: "Create Projects",
    href: "/dashboard/create-projects",
    description: "A list of projects that you have created.",
  },
  {
    title: "Joined Communities",
    href: "/dashboard/joined-communities",
    description: "A list of communities that you have joined.",
  },
  {
    title: "Rewards & Benefits",
    href: "/dashboard/rewards-benefits",
    description: "A list of rewards and benefits that you have earned.",
  },
  {
    title: "Asset Settings",
    href: "/dashboard/asset-settings",
    description: "A list of assets that you have added to your wallet.",
  },
];

export function Header() {
  return (
    <div className="w-full flex justify-between items-center p-4 backdrop-blur-sm bg-white/30">
      <div className="grow">
        <SidebarTrigger />
      </div>
      <div className="flex items-center">
        <RainbowKitCustomConnectButton />
      </div>
    </div>
  );
}

function HeaderNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Chat</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Our projects</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our best public goods projects
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {/* <ListItem href="/explore/trending" title="Trending">
                Explore our trending projects
              </ListItem> */}
              <ListItem href="/explore/community" title="Community">
                Explore our community projects
              </ListItem>
              <ListItem href="/explore/projects" title="Projects">
                Explore our projects
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map(component => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
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
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
