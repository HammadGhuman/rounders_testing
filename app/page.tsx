"use client";
import Navbar from "@/components/Navbar";
import OutlineText from "@/components/OutlineText";
import CategoriesDisplay from "@/components/CategoriesDisplay";
import OfferPage from "@/components/OfferPage";

import Image from "next/image";

import heroBurger from "@/public/heroburger.png";
import MostPopularItems from "@/components/MostPopularItems";
import CategoriesSelector from "@/components/CategoriesSelector";
import SimplyEatingDelicious from "@/components/SimplyEatingDelicious";
import ChuckingGood from "@/public/mask-group@2x.png";
import { useState } from "react";
import Footer from "@/components/Footer";
import RegisterPage from "@/components/RegisterPage";

import BurgerSpinner from "@/public/group-11.svg";

export default function Home() {
  const [clicked, setClicked] = useState({
    pizza: true,
    fries: false,
    burger: false,
    drink: false,
  });
  return (
    <div>
      <main>
        {/* Navbar */}
        <Navbar />
        <OutlineText label="Burger" />
        {/* Outline Label Burger */}
        <div className="flex flex-row justify-around">
          <div className="relative w-full ">
            {/* hero text */}
            <div className="absolute  top-20 left-14 font-MetropolisRegular">
              <div className=" text-mustard text-[15rem] font-normal font-Hevojniwal capitalize">
                Burger
              </div>
              <div className="-mt-9 text-white text-6xl font-normal">
                Life tastes better
              </div>
              {/* button */}
              <div className="cursor-pointer bg-mustard rounded-3xl w-5/12 px-6 py-2.5 mt-8">
                <p className="select-none uppercase text-lg font-semibold text-center  text-charcoal">
                  Order Online
                </p>
              </div>
            </div>
          </div>
          {/* Hero burger Image */}
          <div className="w-full z-40">
            <Image
              className="w-[47.5rem] h-[37.25rem]"
              src={heroBurger}
              alt="herp image"
            />
          </div>
        </div>
        {/* Outline Label Sandwich */}
        <div className="overflow-hidden -mt-32  -z-10">
          <h1 className="label text-ellipsis  select-none text-[13rem] uppercase">
            Sandwiches
          </h1>
        </div>
      </main>
      {/* Most Popular Items */}
      <MostPopularItems />
      <div className="relative">
        {/* Simply Eating Delicious Section */}
        <SimplyEatingDelicious />
        {/* Categories Selector */}
        <CategoriesSelector clicked={clicked} setClicked={setClicked} />
        {/* Categories Display Section */}
      </div>
      <CategoriesDisplay clicked={clicked} />
      {/* chucking good banner  */}
      <Image src={ChuckingGood} alt="chucking good banner" />
      {/* Offer Page */}
      <OfferPage />

      {/* Our Best Delivered Categories */}
      <div className="relative">
        <h1 className="absolute label -top-52 text-ellipsis select-none text-[13rem] uppercase">
          Categories
        </h1>
        <div className="text-center py-20 mt-44">
          <span className="text-white text-5xl font-bold uppercase leading-10">
            Our
          </span>
          <span className="text-white text-7xl font-black uppercase leading-10">
            {" "}
          </span>
          <span className="text-mustard  font-Hevojniwal text-8xl font-normal capitalize leading-10">
            Best Delivered
            <br />
          </span>
          <div className="text-white text-5xl mt-4 font-bold uppercase leading-10">
            Categories
          </div>
        </div>
        <div className="flex space-x-32 justify-center pb-32">
          <div className="w-60 h-96 flex-col justify-end items-start gap-10 inline-flex">
            <div className="w-60 h-64 relative">
              <Image src={BurgerSpinner} alt="burger-spinner "></Image>
            </div>
            <div className="flex-col justify-start items-center gap-3.5 inline-flex">
              <div className="text-center text-amber-400 text-3xl font-black uppercase">
                Chicken Piece
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-xl font-medium capitalize">
                  Order Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 h-96 flex-col justify-end items-start gap-10 inline-flex">
            <div className="w-60 h-64 relative">
              <Image src={BurgerSpinner} alt="burger-spinner "></Image>
            </div>
            <div className="flex-col justify-start items-center gap-3.5 inline-flex">
              <div className="text-center text-amber-400 text-3xl font-black uppercase">
                Chicken Piece
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-xl font-medium capitalize">
                  Order Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 h-96 flex-col justify-end items-start gap-10 inline-flex">
            <div className="w-60 h-64 relative">
              <Image src={BurgerSpinner} alt="burger-spinner "></Image>
            </div>
            <div className="flex-col justify-start items-center gap-3.5 inline-flex">
              <div className="text-center text-amber-400 text-3xl font-black uppercase">
                Chicken Piece
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-xl font-medium capitalize">
                  Order Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Register page  */}
      <RegisterPage />

      <Footer />
    </div>
  );
}
