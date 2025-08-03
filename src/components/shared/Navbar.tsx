import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const navMenu = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Service", href: "#service" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center  p-2">
      <div>
        <Link href="/">
          <h3 className=" text-2xl font-black">SUHAG</h3>
        </Link>
      </div>
      <div className="hidden md:flex gap-8">
        {navMenu.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.name}
          </Link>
        ))}
      </div>

      {/* for small screen */}
      <Sheet>
        <SheetTrigger className="md:hidden cursor-pointer">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>SUHAG</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate the sections
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-full justify-center items-center gap-3  font-semibold">
            {navMenu.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
