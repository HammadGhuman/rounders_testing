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
      <h1 className="absolute label text-ellipsis select-none text-[13rem] uppercase">
        FOOD
      </h1>
      <div className="flex flex-row justify-end items-center space-x-96 ">
        <div className="pt-44 pb-20 flex flex-col items-center justify-center">
          <h1 className=" text-white text-7xl font-bold leading-10">
            We are the
            <div className="mt-6">
              Best
              <span className=" text-mustard font-Hevojniwal text-8xl font-normal capitalize leading-10">
                Quality Food
              </span>
            </div>
          </h1>
          <p className="w-[32rem] mt-10">
            People love Fast food More. A fast-food restaurant consists of a
            business model that serves food usually prepared specifically.{" "}
          </p>
          {/* about food button */}
          <div className="cursor-pointer bg-mustard rounded-3xl w-5/12 px-6 py-2.5 mt-8">
            <p className="select-none uppercase text-lg font-semibold text-center  text-charcoal">
              Order Online
            </p>
          </div>
        </div>
        <div className="mr-10 ">
          <Image
            className="w-[478px] h-[413px] image-transition"
            src={imageSrc}
            alt="burger-cutout"
          />
        </div>
        {/* outline Deli Text */}
        <h1 className="absolute bottom-0 label text-ellipsis select-none text-[13rem] uppercase">
          DELEC
        </h1>
      </div>
    </div>
  );
}

export default CategoriesDisplay;
