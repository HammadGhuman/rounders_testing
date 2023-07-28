import Image from 'next/image'
import React from 'react'
import Logo from "@/public/Logo.png";

function FooterMob() {
  return (
<div className="lg:hidden px-8 pt-8 pb-7 bg-neutral-900 flex-col justify-center items-center gap-3 inline-flex">
  <div className="flex-col justify-center items-center gap-1 flex">
    <div className="flex-col justify-start items-start gap-5 flex">
      <Image className="w-20 h-8" src={Logo} alt="logo" />
    </div>
    <div className="justify-start items-start gap-2 inline-flex">
      <div className=" text-center text-white text-xs font-normal">+91 5556 5521 4432  |  Green Land 9-21 Coconoa Street 02145 California  |  xyz@email.com.io</div>
    </div>
  </div>
  <div className="text-white text-xs font-medium">2022 @Rounders</div>
</div>  )
}

export default FooterMob