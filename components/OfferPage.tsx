import React from "react";
import Combo from "@/public/group-19.svg";
import Image from "next/image";
function OfferPage() {
  return (
    <div className="relative z-30 bg-black">
      <h1 className="absolute right-0 label text-ellipsis select-none text-[3.97rem] lg:text-[13rem] uppercase">
        OFFER
      </h1>
      <Image className="relative lg:w-auto lg:h-auto w-[11rem] h-[10rem] mt-10 lg:mt-20 z-30" src={Combo} alt="combo" />
      <div className="absolute -bottom-2 lg:bottom-0  z-20 w-screen flex justify-end  lg:pb- pt-4 pb-2 px-20 bg-charcoal">
        <div className="">
          <h1 className="text-white text-[1.1rem] lg:text-5xl font-bold uppercase leading-10">
            GET IN{" "}
            <span className="font-Hevojniwal text-[2.00rem] z-40 font-normal lg:text-8xl text-white">
              Just
            </span>
          </h1>
          <h1 className="text-mustard lg:-mt-8 -z-20 -mt-2 text-[2.732rem] lg:text-9xl font-bold uppercase leading-10">
            $125
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OfferPage;
