"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, ShoppingCart, Bell } from "lucide-react"; // Using lucide-react icons
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "Plans & Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-neutral-950 shadow-sm sticky top-0 z-50 border-b border-neutral-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          GroceryQ
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navigation.map((item) => (
            <Button
            key={item.name}
            asChild
            variant="ghost"
            className={`${
              pathname === item.href ? "text-green-500 font-semibold" : "text-gray-200"
            } hover:text-green-600 hover:bg-neutral-800`}
          >
            <Link href={item.href}>{item.name}</Link>
          </Button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <Input
            type="text"
            placeholder="Search products..."
            className="hidden md:block w-48 text-neutral-200 border-b border-neutral-600"
          />

          {/* Notification Bell */}
          <Button
            size="icon"
            variant="ghost"
            className="text-gray-200 hover:text-green-600 hover:bg-neutral-800"
          >
            <Bell className="h-5 w-5 text-inherit" />
          </Button>

          {/* Cart Icon */}
          <Button
            size="icon"
            variant="ghost"
            className="text-gray-200 hover:text-green-600 hover:bg-neutral-800"
          >
            <ShoppingCart className="h-5 w-5 text-inherit" />
          </Button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>GQ</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-sm">
          <div className="flex flex-col items-start p-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-green-600 w-full"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Input
              type="text"
              placeholder="Search..."
              className="w-full mt-2"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
