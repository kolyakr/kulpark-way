import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants";

const NavList = () => {
  return (
    <nav className="flex gap-6 text-xl text-white font-[700]">
      {navLinks.map((link) => (
        <Link key={link.name} href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavList;
