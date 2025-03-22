import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants";

const NavList = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-6 items-center text-xl text-white font-[700]">
      {navLinks.map((link) => (
        <Link
          className="py-2 px-4 border-[2px] min-w-[130px]  text-center text-sm rounded-full border-white"
          key={link.name}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavList;
