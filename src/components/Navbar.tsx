"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Menu, X, ShoppingCart, Bell } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Plans & Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const categories = [
  {
    title: "Fruits & Vegetables",
    href: "/categories/fruits-vegetables",
    description: "Fresh fruits and vegetables delivered daily.",
  },
  {
    title: "Dairy Products",
    href: "/categories/dairy-products",
    description: "Milk, cheese, butter, and other dairy essentials.",
  },
  {
    title: "Beverages",
    href: "/categories/beverages",
    description: "Soft drinks, juices, and healthy drinks.",
  },
  {
    title: "Snacks",
    href: "/categories/snacks",
    description: "Tasty snacks to munch anytime.",
  },
  {
    title: "Bakery",
    href: "/categories/bakery",
    description: "Fresh breads, cakes, and pastries.",
  },
  {
    title: "Frozen Foods",
    href: "/categories/frozen-foods",
    description: "Convenient frozen meals and treats.",
  },
  {
    title: "Meat & Seafood",
    href: "/categories/meat-seafood",
    description: "Quality meats and fresh seafood selections.",
  },
  {
    title: "Pantry Staples",
    href: "/categories/pantry-staples",
    description: "Grains, canned goods, and everyday essentials.",
  },
  {
    title: "Household Supplies",
    href: "/categories/household-supplies",
    description: "Cleaning products, paper goods, and more.",
  },
  {
    title: "Personal Care",
    href: "/categories/personal-care",
    description: "Beauty, skincare, and wellness essentials.",
  },
  {
    title: "Baby Products",
    href: "/categories/baby-products",
    description: "Everything you need for your little one.",
  },
  {
    title: "Pet Supplies",
    href: "/categories/pet-supplies",
    description: "Food, toys, and care products for pets.",
  },
  {
    title: "Organic Foods",
    href: "/categories/organic-foods",
    description: "Certified organic fruits, veggies, and pantry goods.",
  },
  {
    title: "Gluten-Free",
    href: "/categories/gluten-free",
    description: "Delicious gluten-free snacks, meals, and ingredients.",
  },
  {
    title: "International Cuisine",
    href: "/categories/international-cuisine",
    description: "World flavors: Asian, Italian, Mexican, and more.",
  },
  {
    title: "Holiday Specials",
    href: "/categories/holiday-specials",
    description: "Seasonal treats and festive essentials for every holiday.",
  },
  {
    title: "Health & Wellness",
    href: "/categories/health-wellness",
    description: "Vitamins, supplements, and health foods.",
  },
  {
    title: "Eco-Friendly Products",
    href: "/categories/eco-friendly",
    description: "Sustainable and environmentally-friendly goods.",
  },
  {
    title: "Gift Hampers",
    href: "/categories/gift-hampers",
    description: "Beautifully curated gift boxes for every occasion.",
  },
  {
    title: "New Arrivals",
    href: "/categories/new-arrivals",
    description: "Discover the latest additions to our store.",
  },
  {
    title: "Best Sellers",
    href: "/categories/best-sellers",
    description: "Customer favorites and top-rated products.",
  },
  {
    title: "Clearance Sale",
    href: "/categories/clearance-sale",
    description: "Limited-time deals and discounts.",
  },
];

const navTriggerClass =
  "bg-neutral-950 text-gray-200 hover:text-green-600 hover:bg-neutral-800 focus:bg-neutral-800 active:bg-neutral-800 data-[state=open]:bg-neutral-800 data-[state=open]:text-green-600";

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
          {navigation.slice(0, 2).map(
            (
              item // Home and Shop
            ) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className={`${
                  pathname === item.href
                    ? "text-green-500 font-semibold"
                    : "text-gray-200"
                } hover:text-green-600 hover:bg-neutral-800`}
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          )}

          {/* Categories Dropdown RIGHT AFTER Shop */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navTriggerClass}>
                  Categories
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-neutral-950 p-4 rounded-md grid grid-cols-6 gap-2 w-236">
                  {categories.map((category) => (
                    <Link
                      key={category.title}
                      href={category.href}
                      className="block p-3 rounded-md hover:bg-neutral-800 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-100">
                        {category.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {category.description}
                      </div>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navigation.slice(2).map(
            (
              item // Plans & Pricing and Contact
            ) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className={`${
                  pathname === item.href
                    ? "text-green-500 font-semibold"
                    : "text-gray-200"
                } hover:text-green-600 hover:bg-neutral-800`}
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          )}
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

          {/* Profile Section */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2">
              <SignInButton mode="modal">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="default">Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>

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
