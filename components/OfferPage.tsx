import React from "react";
import Combo from "@/public/group-19.svg";
import Image from "next/image";
function OfferPage() {
  return (
    <div className="relative z-30 bg-black">
      <h1 className="absolute right-0 label text-ellipsis select-none text-[13rem] uppercase">
        OFFER
      </h1>
      <Image className="relative mt-20 z-30" src={Combo} alt="combo" />
      <div className="absolute bottom-0 z-20 w-screen flex justify-end pt-10 pb-24 px-20 bg-charcoal">
        <div>
          <h1 className="text-white text-5xl font-bold uppercase leading-10">
            GET IN{" "}
            <span className="font-Hevojniwal font-normal text-8xl text-white">
              Just
            </span>
          </h1>
          <h1 className="text-mustard mt-8 text-9xl font-bold uppercase leading-10">
            $125
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OfferPage;
