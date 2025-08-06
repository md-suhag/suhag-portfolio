"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { InavMenu } from "./Navbar";
import Link from "next/link";
interface IPros {
  navMenu: InavMenu[];
}
const Sidebar = ({ navMenu }: IPros) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpen(false);

    if (href.startsWith("#")) {
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 800);
    } else {
      setTimeout(() => {
        router.push(href);
      }, 100);
    }
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden cursor-pointer">
          <MenuIcon />
        </button>
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
            <Link
              className="hover:text-primary transition-all duration-300"
              href={item.href}
              key={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
