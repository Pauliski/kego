import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}


export function Input({ value, className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={clsx(
        "flex w-full leading-8 p-2 border-borderColor items-center rounded-md bg-transparent border justify-center px-4 text-sm font-medium text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        value,
        className
      )}
    />
  );
}
