"use client";

import React, { useActionState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import Link from "next/link";
import clsx from "clsx";
import { OtherAuth } from "./other-auth";
import { createUser, State } from "../lib/actions";

export default function SignupForm() {
  const agreement = ["Teams", "Privacy Policy", "Cookies Use"];
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createUser, initialState);
  return (
    <>
      {/* <form action={formAction}> */}
      <form action="">
        <label
          htmlFor="username"
          className="mb-2 block text-[1rem] text-colorOne font-medium"
        >
          Full Name
        </label>
        <Input
          className="my-3"
          id="username"
          name="username"
          placeholder="Enter your full name"
          required
        />
        <label
          htmlFor="email"
          className="mb-2 block text-[1rem] text-colorOne font-medium"
        >
          Email
        </label>
        <Input
          className="my-3"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
        />

        {/* <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
        <label
          htmlFor="password"
          className="mb-2 block text-[1rem] text-colorOne font-medium"
        >
          Password
        </label>
        <Input
          className="mb-3"
          id="password"
          name="password"
          placeholder="Enter your password"
          type="password"
          required
        />
        <p className="my-4 text-sm text-colorOne">
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
        <Button type="submit" className="bg-grayed text-white">
          Create an Account
        </Button>
      </form>
      <OtherAuth />
      
    </>
  );
}
