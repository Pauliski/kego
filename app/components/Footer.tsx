"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full flex justify-center">
      {pathname == "/login" ? (
        <p>
          Don't have an account? <Link href={"signup"}>Join</Link>
        </p>
      ) : (
        <p>
          Already have an account <Link href={"login"}>Log In</Link>{" "}
        </p>
      )}
    </div>
  );
};

export default Footer;
