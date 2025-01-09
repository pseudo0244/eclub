'use client'
import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path based on your project structure
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"; // Adjust the import paths

const Header: React.FC = () => {
  return (
    <header>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">E-CLUB</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
              <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="hover:text-primary mr-4">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="hover:text-primary mr-4">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/events" className="hover:text-primary mr-4">
                    Events
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/gallery" className="hover:text-primary mr-4">
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/blogs" className="hover:text-primary mr-4">
                    Blogs
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
