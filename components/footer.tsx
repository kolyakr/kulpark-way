import { APP_TITLE, FOOTER_INFO } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className=" bg-[url('/images/forest.png')] h-[220px] flex items-end p-5 ">
        <div className="text-white font-[700] flex justify-between w-full">
          <p>©{APP_TITLE}</p>
          <p>{FOOTER_INFO}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
