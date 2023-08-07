import React from "react";

function Overlay({ selected, text }: { selected: string; text: string }) {
  return (
    <div className="relative px-5">
      <h1 className="label select-none lg:text-[13rem] text-[4rem] uppercase">
        {selected}
      </h1>
      <h1 className="absolute lg:top-36  left-1/2 transform -translate-x-1/2  font-Hevojniwal lg:text-9xl text-4xl text-center text-mustard">
        {text}
      </h1>
    </div>
  );
}

export default Overlay;
