import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "../ui/navigation-menu"



const Navbar = () => {
  return (
   <header className="fixed w-full border-b bg-white shadow-sm z-50">
  <NavigationMenu className="relative mx-auto w-full max-w-7xl px-4 py-3">
    <NavigationMenuList className="flex gap-6 items-center">
      {/* Home */}
      <NavigationMenuItem>
        <NavigationMenuLink href="/" className="font-medium">
          Home
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Services Dropdown */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="font-medium">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white shadow-md rounded-md z-50 relative">
          <ul className="grid gap-2 p-4 w-[250px]">
            <li>
              <NavigationMenuLink href="/consulting">Consulting</NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink href="/development">Development</NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink href="/ai">AI Solutions</NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="/" className="font-medium">
          Test-1
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="/" className="font-medium">
          Test - 2
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuIndicator />
    <NavigationMenuViewport className="absolute top-full left-0  z-50" />
  </NavigationMenu>
</header>

  )
}

export default Navbar
