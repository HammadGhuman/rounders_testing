import Image from "next/image";
import React from "react";
import Burger from "@/public/doublepattijalapeno.png";
function MenuItem({ category }: { category: string }) {
  return (
    <div className="overflow-y-hidden lg:w-64 lg:h-auto w-32 h-36 flex-col justify-end items-center gap-1.5 inline-flex">
      <Image
        className="lg:w-64 lg:h-auto w-32 h-36 shadow"
        src={Burger}
        alt="popular_item_image"
      />
      <div className="text-center text-amber-500 lg:text-xl text-[0.5rem] font-semibold tracking-tight">
        DOUBLE PATTI JALAPENO
      </div>
      <h1 className="lg:w-64 w-32 text-center text-white lg:text-sm text-[0.35rem] font-medium">
        People love Fast food More. A fast-food restaurant consists of a
        business model that serves food usually prepared specifically. fat Food
        Items are ready to serve and the Demanded Products in Every Corner of
        the Country.
      </h1>
      <div className="lg:scale-110 scale-50 px-2.5 py-1 bg-amber-500 rounded-3xl justify-start items-start gap-2.5 inline-flex">
        <div className="text-neutral-950 text-xs font-semibold tracking-tight">
          ADD TO CART
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
