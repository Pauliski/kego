"use client";

import React, { useActionState, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import Link from "next/link";
import clsx from "clsx";
import { loginUser } from "../lib/actions";
import { parseWithZod } from "@conform-to/zod";
import { LoginSchema } from "../lib/zodSchemas";
import { useForm } from "@conform-to/react";
import WarningIcon from "./icons/WarningIcon";
import CorrectIcon from "./icons/CorrectIcon";
import Footer from "./Footer";
import RevealIcon from "./icons/RevealIcon";

export function LoginForm() {
  const agreement = ["Teams", "Privacy Policy", "Cookies Use"];
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [lastResult, formAction] = useActionState(loginUser, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: LoginSchema });
    },

    shouldValidate: "onInput",
    // shouldRevalidate: 'onBlur'
  });
const handleReveal = ()=>{
setShowPassword(!showPassword)
}
  const isFormValid = () => {
    const { email, password } = fields;

    const valid =  !email.errors && !password.errors;

    return email.value && password.value && valid;
  };

  return (
    <>
      <form action={formAction} id={form.id} onSubmit={form.onSubmit}>
        <label
          htmlFor="email"
          className="my-2 block text-[1rem] text-colorOne font-medium"
        >
          Email
        </label>
        <div className="relative">
          <Input
            className={`outline-none peer  ${
              fields.email.errors
                ? "border border-red-500"
                : "valid:border-green-500"
            }`}
            id="email"
            key={fields.email.key}
            defaultValue={fields.email.initialValue}
            name={fields.email.name}
            placeholder="Enter your email address"
            required
          />
          <CorrectIcon
            className={`absolute bottom-3 right-4 peer-placeholder-shown:hidden ${
              typeof fields.email.errors == "undefined" ? "block" : "hidden"
            }`}
          />
          <WarningIcon
            className={`absolute bottom-3 right-4 peer-placeholder-shown:hidden ${
              typeof fields.email.errors !== "undefined" ? "block" : "hidden"
            }`}
          />
        </div>

        <>
          {fields.email.errors?.map((item, index) => (
            <p className="mt-2 text-sm text-red-500 block" key={index}>
              {item}
            </p>
          ))}
        </>
        <label
          htmlFor="password"
          className="my-2 block text-[1rem] text-colorOne font-medium"
        >
          Password
        </label>
        <div className="relative">
          <Input
            className={`outline-none peer ${
              fields.password.errors
                ? "border border-red-500"
                : "valid:border-green-500"
            }`}
            id="password"
            key={fields.password.key}
            defaultValue={fields.password.initialValue}
            name={fields.password.name}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            required
          />
          <button
            onClick={handleReveal}
            className="absolute bottom-3 right-4 z-10"
          >
            <RevealIcon />
          </button>

        </div>

        <>
          {fields.password.errors?.map((item, index) => (
            <p className="mt-2 text-sm text-red-500 block" key={index}>
              {item}
            </p>
          ))}
        </>
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
        <Button
          className={`w-full ${
            !isFormValid() ? "bg-grayed text-white" : "bg-colorOne text-white"
          }`}
        >
          Login
        </Button>
      </form>
      
    </>
  );
}
