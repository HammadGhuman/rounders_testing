import React from "react";
import Logo from "@/public/Logo.png";
import Image from "next/image";
function Footer() {
  return (
    <div className="hidden lg:flex flex-row items-center justify-evenly py-8 ">
      <div className="w-60 h-44 flex-col justify-start items-start gap-14 inline-flex">
        <Image alt="logo" className="w-60 h-24" src={Logo} />
        <div className="text-white text-xl font-medium">2022 @Rounders</div>
      </div>
      <div className=" justify-start items-start gap-28 inline-flex">
        <div className="text-white text-base font-normal">
          Green Land
          <br />
          9-21 Coconoa Street
          <br />
          02145 California
        </div>
        <div className="text-white text-base font-normal">
          +91 5556 5521 4432
          <br />
          xyz@email.com.io
        </div>
        <div className="text-white text-base font-normal">
          Home
          <br />
          Products
          <br />
          Store
          <br />
          About Us
        </div>
      </div>
    </div>
  );
}

export default Footer;
