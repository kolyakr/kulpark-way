import React from "react";
import Logo from "./logo";
import MobileNav from "./mobile-nav";
import UserProfile from "./user-profile";
import NavList from "./nav-list";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="p-5 bg-[var(--ocean-color)] flex justify-between items-center">
        <Logo />
        <div className="hidden min-[841px]:block">
          <NavList />
        </div>
        <div className="hidden min-[841px]:block">
          <UserProfile />
        </div>

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
