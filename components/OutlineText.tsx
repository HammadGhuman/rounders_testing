import React from "react";

type Props = {
  label: string;
};

function OutlineText({ label }: Props) {
  return (
    <h1 className="label absolute select-none text-6xl md:text-[13rem] uppercase">
      {label}
    </h1>
  );
}

export default OutlineText;
