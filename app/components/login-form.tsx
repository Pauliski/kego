import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import Link from "next/link";
import clsx from "clsx";

export function LoginForm() {
  const agreement = ["Teams", "Privacy Policy", "Cookies Use"];
  return (
    <form>
      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        Email
      </label>
      <Input
        className="my-3"
        name="email"
        placeholder="Enter your email address"
        required
      />
      <label htmlFor="password" className="mb-2 block text-sm font-medium">
        Password
      </label>
      <Input
        className="mb-3"
        name="password"
        placeholder="Enter your password"
        type="password"
        required
      />
      <p className="my-4">
        By signing up you agree to our{" "}
        {agreement.map((item, index) => {
          return (
            <span key={index}>
              <span
                className={clsx(
                  agreement.length - 1 === index ? "inline" : "hidden"
                )}
              >
                {" "}
                and{" "}
              </span>
              <Link
                className="underline cursor-pointer"
                href={`/${item.toLowerCase().replace(/ /g, "")}`}
              >
                {" "}
                {item},
              </Link>
            </span>
          );
        })}
      </p>
      <Button>Login</Button>
    </form>
  );
}
