import Image from "next/image";
import React from "react";
import KegoLogo from "@/app/pictures/kego.png"
import NotificationIcon from "./icons/NotificationIcon";

const Navbar = () => {
  return <div className="flex justify-between items-center p-4">
    <Image src={KegoLogo} alt="company-log" width={98} height={70}/>
    <NotificationIcon />
  </div>;
};

export default Navbar;
