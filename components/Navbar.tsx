import Image from "next/image";
import React from "react";

import rounderLogo from "@/public/Logo.png";
import bag from "@/public/bag.svg";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-row justify-between relative px-10 pt-12">
      {/* hamburgerMenu */}
      <Link href="menu" className="w-24 mt-2 h-8 px-2.5 py-1 bg-mustard rounded-md justify-start items-center gap-2 inline-flex hover:cursor-pointer">
        <div className="p-1 bg-charcoal rounded-sm flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="w-4 h-0.5 bg-mustard rounded-3xl" />
          <div className="w-4 h-0.5 bg-mustard rounded-3xl" />
          <div className="w-4 h-0.5 bg-mustard rounded-3xl" />
        </div>
        <div className="text-custom-black text-xs font-extrabold">Menu</div>
      </Link>

      {/* Company Logo */}
      <Image
        className=" w-32 h-11 self-center"
        src={rounderLogo}
        alt="rounder-logos"
      />

      <div className="w-24 mt-2 h-8 px-2.5 py-1 bg-mustard rounded-md justify-start items-center gap-2 inline-flex">
        <div className="text-neutral-950 text-xs font-extrabold">Order</div>
        <div className="h-5 p-1 bg-neutral-900 rounded-sm flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="w-6 h-6 relative">
            <div className="h-2.5  absolute">
              <Image src={bag} alt="bag" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
