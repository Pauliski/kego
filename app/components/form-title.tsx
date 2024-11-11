import React from "react";

type FormTitleProps = {
    title: string;
    subtitle: string

}

export function FormTitle({ title, subtitle }: FormTitleProps) {
  return (
    <div className="pb-4 ">
      <h1 className="text-[2rem] font-semibold text-[#1A1A1A]">{title}</h1>
      <h4 className="text-[1rem] text-colorTwo">{subtitle}</h4>
    </div>
  );
}
