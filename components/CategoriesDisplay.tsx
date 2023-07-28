import React from "react";
import BurgerCutout from "@/public/yellow3-1@2x.png";
import DrinkCutout from "@/public/drinkcutout.svg";
import FriesCutout from "@/public/friescutout.svg";
import Image from "next/image";

type Props = {
  clicked: {
    pizza: boolean;
    fries: boolean;
    burger: boolean;
    drink: boolean;
  };
};

function CategoriesDisplay({ clicked }: Props) {
  console.log(clicked);
  let imageSrc = BurgerCutout;
  if (clicked?.pizza) {
    imageSrc = BurgerCutout;
  } else if (clicked?.fries) {
    imageSrc = FriesCutout;
  } else if (clicked?.drink) {
    imageSrc = DrinkCutout;
  }
  return (
    <div className="relative ">
      {/* Outline Food Text */}
      <h1 className="absolute label text-ellipsis select-none lg:text-[13rem] text-[4rem] uppercase">
        FOOD
      </h1>
      <div className="flex flex-row justify-end items-center lg:space-x-96 space-x-10">
        <div className="lg:pt-44 pt-20 pb-20 flex flex-col items-start justify-center">
          <h1 className=" text-white ml-8 lg:text-7xl text-[1.78rem] font-bold leading-10">
            We are the
            <div className=" -mt-3">
              <span className="lg:text-7xl text-[1.78rem]">Best</span>
              <span className=" text-mustard font-Hevojniwal lg:text-8xl text-[2.06rem] font-normal capitalize leading-10">
                Quality Food
              </span>
            </div>
          </h1>
          <p className="lg:w-[32rem] w-2/3 lg:text-lg text-[0.47563rem] ml-8 lg:mt-2">
            People love Fast food More. A fast-food restaurant consists of a
            business model that serves food usually prepared specifically.{" "}
          </p>
          {/* about food button */}
          <div className="cursor-pointer self-start ml-8 lg:ml-8 bg-mustard rounded-3xl px-3 py-1 lg:w-5/12 lg:px-6 lg:py-2.5 mt-2 lg:mt-8">
            <p className="select-none uppercase lg:text-lg font-semibold text-center text-[0.37563rem] text-charcoal">
              Order Online
            </p>
          </div>
        </div>
        <div className="flex">
          <Image
            className="w-[11.94rem]  h-[8.59rem] lg:w-full lg:h-full"
            src={imageSrc}
            alt="burger-cutout"
          />
        </div>
        {/* outline Deli Text */}
        <h1 className="absolute bottom-0 right-0 label text-ellipsis select-none lg:text-[13rem] text-7xl uppercase">
         DELICI
        </h1>
      </div>
    </div>
  );
}

export default CategoriesDisplay;
