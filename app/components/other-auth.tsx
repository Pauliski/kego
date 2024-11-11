import React from "react";
import GoogleButton from "./GoogleButton";

export function OtherAuth() {
  return (
    <div>
      <h2 className="w-full text-center border border-borderColor leading-[0.01rem] my-5">
        <span className="bg-white px-2 text-[14px] text-colorOne">Or</span>
      </h2>
      <GoogleButton type="google" text="Login with Google" className="mb-2 text-colorOne" />
      <GoogleButton
        type="facebook"
        text="Login with Facebook"
        className="bg-[#1877F2] text-white mb-2"
      />
    </div>
  );
}
