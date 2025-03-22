import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavList from "./nav-list";
import UserProfile from "./user-profile";

const MobileNav = () => {
  return (
    <div className="max-[841px]:block hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src="./icons/burger-menu.svg"
            alt="burger menu"
            width={35}
            height={35}
          />
        </SheetTrigger>
        <SheetContent className="bg-[var(--grey-color)] text-black flex flex-col items-center">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <UserProfile />
          <NavList />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
