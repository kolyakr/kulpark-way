import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="max-w-[301px]">
      <Link href="/">
        <Image src="./icons/logo.svg" alt="logo" width={200} height={50} />
      </Link>
    </div>
  );
};

export default Logo;
