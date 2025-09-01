import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import { EyeIcon } from "lucide-react";

export interface InavMenu {
  name: string;
  href: string;
}
const navMenu: InavMenu[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
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
      <div className="hidden md:flex gap-7">
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
      <div className="hidden md:block">
        <a
          href="https://drive.google.com/file/d/12ObLn9YWqmoNm_XAe2fXqqzEj2TWqq_y/view?usp=sharing"
          target="_blank"
          className="btn flex gap-2"
          title="Resume Preview"
        >
          <EyeIcon size={15} className="inline" /> <span>Resume</span>
        </a>
      </div>
      {/* for small screen */}
      <Sidebar navMenu={navMenu} />
    </nav>
  );
};

export default Navbar;
