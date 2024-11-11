import React from "react";
import { Button } from "./button";
import GoogleIcon from "./icons/GoogleIcon";
import FacebookIcon from "./icons/FacebookIcon";

interface GoogleButtonProp  {
text: string;
className?: string;
type: string;
}

const GoogleButton = ({text, className, type}: GoogleButtonProp) => {
  return (
    <button
      className={`flex justify-center items-center p-3 rounded-md border cursor-pointer w-full ${className}`}
    >
      {type === "google" ? <GoogleIcon /> : <FacebookIcon />}

      <span className="border-none flex ml-2">{text}</span>
    </button>
  );
};

export default GoogleButton;
