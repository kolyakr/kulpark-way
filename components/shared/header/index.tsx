import React from "react";
import Logo from "./logo";
import NavList from "./nav-list";
import UserProfile from "./user-profile";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="p-5 bg-[var(--ocean-color)] flex justify-between items-center">
        <Logo />
        <NavList />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
