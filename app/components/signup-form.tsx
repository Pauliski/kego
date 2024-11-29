"use client";

import React, { useActionState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import Link from "next/link";
import clsx from "clsx";
import { OtherAuth } from "./other-auth";
import { createUser } from "../lib/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { UserSchema } from "../lib/zodSchemas";
import CorrectIcon from "./icons/CorrectIcon";
import WarningIcon from "./icons/WarningIcon";

export default function SignupForm() {
  const agreement = ["Terms", "Privacy Policy", "Cookies Use"];

  const [lastResult, formAction] = useActionState(createUser, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: UserSchema });
    },

    shouldValidate: 'onInput',
    // shouldRevalidate: 'onBlur'
  });

  const isFormValid = () => {
    const { username, email, password } = fields;
    const valid = !username.errors && !email.errors && !password.errors

    return username.value && email.value && password.value && valid;
  };

  return (
    <>
      <pre>
        {JSON.stringify(fields.username.value)}
        {typeof fields.email.errors}
      </pre>
      <form action={formAction} id={form.id} onSubmit={form.onSubmit}>
        <label
          htmlFor="username"
          className="mb-2 block text-[1rem] text-colorOne font-medium"
        >
          Full Name
        </label>
        <div className="relative">
          <Input
            className={`outline-none peer ${
              fields.username.errors
                ? "border border-red-500"
                : "valid:border-green-500"
            }`}
            id="username"
            name={fields.username.name}
            placeholder="Enter your full name"
            defaultValue={fields.username.initialValue}
            key={fields.username.key}
            required
          />
          <CorrectIcon
            className={`absolute bottom-3 right-4 peer-placeholder-shown:hidden ${
              typeof fields.username.errors == "undefined" ? "block" : "hidden"
            }`}
          />
          <WarningIcon
            className={`absolute bottom-3 right-4 peer-placeholder-shown:hidden ${
              typeof fields.username.errors !== "undefined" ? "block" : "hidden"
            }`}
          />
        </div>
        <>
          {fields.username.errors?.map((item, index) => (
            <p className="mt-2 text-sm text-red-500 block" key={index}>
              {item}
            </p>
          ))}
        </>

        <label
          htmlFor="email"
          className="mb-2 block text-[1rem] text-colorOne font-medium"
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
          className="mb-2 block text-[1rem] text-colorOne font-medium"
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
            type="password"
            required
          />
          <CorrectIcon
            className={`absolute bottom-3 right-4 peer-placeholder-shown:hidden ${
              typeof fields.password.errors == "undefined" ? "block" : "hidden"
            }`}
          />
          <WarningIcon
            className={`absolute bottom-3 right-4 peer-placeholder-shown:hidden ${
              typeof fields.password.errors !== "undefined" ? "block" : "hidden"
            }`}
          />
        </div>

        <>
          {fields.password.errors?.map((item, index) => (
            <p className="mt-2 text-sm text-red-500 block" key={index}>
              {item}
            </p>
          ))}
        </>
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
        <Button
          type="submit"
          className={`${
            !isFormValid()? "bg-grayed text-white" : "bg-colorOne text-white"
          }`}
        >
          Create an Account
        </Button>
      </form>
      <OtherAuth />
    </>
  );
}
