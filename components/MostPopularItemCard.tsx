import Image from "next/image";
import React from "react";
import rating from "@/public/group-29.svg";
type props = {
  title: string;
  description: string;
  img: any;
};

function MostPopularItemCard({ title, description, img }: props) {
  return (
    <div className="lg:w-64 lg:h-72 w-[6.7rem] h-[5.2rem]  flex-col justify-end items-center gap-1.5 inline-flex">
      <Image className="w-[107px] h-[84px] lg:w-64 lg:h-52 shadow" src={img} alt="popular_item_image" />
      <div className="text-center text-amber-500 text-[0.625rem] lg:text-base font-semibold tracking-tight">
        {title}
      </div>
      <h1 className="lg:w-64 text-center text-white leading-[0.5rem] text-[0.4375rem] lg:text-xs font-medium">
        {description.split(" ").slice(10).join(" ")}
      </h1>
      <div className="lg:w-16 h-2.5 relative">
        <Image src={rating} alt="rating" />
      </div>
      <div className="px-2.5 py-1 bg-amber-500 rounded-3xl justify-start items-start gap-2.5 inline-flex">
        <div className="text-neutral-950 text-[0.318rem] lg:text-xs font-semibold tracking-tight">
          ADD TO CART
        </div>
      </div>
    </div>
  );
}

export default MostPopularItemCard;
