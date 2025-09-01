import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";

export interface InavMenu {
  name: string;
  href: string;
}
const navMenu: InavMenu[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  // { name: "Service", href: "#service" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center  p-2 py-5 container px-4 mx-auto ">
      <div>
        <Link href="/">
          <h2 className=" text-2xl font-black text-primary ">SUHAG</h2>
        </Link>
      </div>
      <div className="hidden md:flex gap-8">
        {navMenu.map((item) => (
          <Link
            className="hover:text-primary transition-all duration-300"
            href={item.href}
            key={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <a href="/Md Abdus Salam Suhag Resume.pdf" download="" className="btn">
          Resume
        </a>
      </div>
      {/* for small screen */}
      <Sidebar navMenu={navMenu} />
    </nav>
  );
};

export default Navbar;
