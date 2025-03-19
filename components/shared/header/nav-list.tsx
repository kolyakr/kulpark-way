import Link from "next/link";
import React from "react";

/*from constant render nav list*/

const NavList = () => {
  return (
    <nav className="flex gap-6 text-xl text-white font-[700]">
      <Link href="/">Link 1</Link>
      <Link href="/">Link 2</Link>
      <Link href="/">Link 3</Link>
    </nav>
  );
};

export default NavList;
