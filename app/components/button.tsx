import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "border rounded-md p-3 text-sm font-medium transition-colors  text-[1rem] aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ",
        className
      )}
    >
      {children}
    </button>
  );
}
