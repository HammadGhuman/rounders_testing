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
import FooterMob from "@/components/FooterMob";

export default function Home() {
  const [clicked, setClicked] = useState({
    pizza: true,
    fries: false,
    burger: false,
    drink: false,
  });
  return (
    <div className="">
      <main className="">
        {/* Navbar */}
        <Navbar />
        <OutlineText label="Burger" />
        {/* Outline Label Burger */}
        <div className="flex flex-row relative justify-around md:mt-0">
          <div className="relative w-full ">
            {/* hero text */}
            <div className="absolute lg:top-20 lg:left-14 top-16 left-4 font-MetropolisRegular">
              <div className=" text-mustard md:text-[15rem] text-7xl font-normal font-Hevojniwal capitalize">
                Burger
              </div>
              <div className="lg:-mt-9 text-white text-xl md:text-6xl font-normal">
                Life tastes better
              </div>
              {/* button */}
              <div className="cursor-pointer bg-mustard rounded-3xl lg:w-5/12 lg:px-6 lg:py-2.5 py-1 w-2/3 mt-2 lg:mt-8">
                <p className="select-none text-xs lg:text-lg font-semibold text-center  text-charcoal">
                  Order Online
                </p>
              </div>
            </div>
          </div>
          {/* Hero burger Image */}
          <div className="w-full  lg:static z-40 left-52">
            <Image
              className="lg:w-[47.5rem] lg:h-[37.25rem] w-60"
              src={heroBurger}
              alt="herp image"
            />
          </div>
        </div>
        {/* Outline Label Sandwich */}
        <div className="overflow-hidden -mt-60 lg:-mt-32 absolute lg:static top-[30rem]">
          <h1 className="label text-ellipsis  select-none md:text-[13rem] text-7xl  uppercase">
            Sandwiches
          </h1>
        </div>
      </main>
      {/* Most Popular Items */}
      <MostPopularItems/>
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
        <h1 className="absolute label  text-ellipsis select-none text-[4.07906rem] lg:text-[13rem] uppercase">
          Categories
        </h1>
        <div className="text-center lg:py-20 mt-10 lg:mt-10">
          <span className="text-white text-[1.69813rem] lg:text-5xl font-bold uppercase leading-10">
            Our
          </span>
          <span className="text-white text-7xl font-black uppercase leading-10">
            {" "}
          </span>
          <span className="text-mustard  font-Hevojniwal text-[2.425rem]  lg:text-8xl font-normal capitalize leading-3">
            Best Delivered
            <br />
          </span>
          <div className="text-white text-[1.69813rem] lg:text-5xl lg:mt-4 font-bold uppercase leading-10">
            Categories
          </div>
        </div>
        <div className="flex lg:space-x-32 space-x-10 justify-center py-20 pb-10 lg:pb-32">

        <div className="lg:w-60 lg:h-96 w-[5.28rem] h-[5.28rem] flex-col justify-end items-start gap-3 lg:gap-10 inline-flex">
            <div className="lg:w-60 lg:h-64 w-[5.28rem] h-[5.28rem] relative">
              <Image src={BurgerSpinner} alt="burger-spinner "></Image>
            </div>
            <div className="flex-col justify-start items-center gap-1.5 lg:gap-3.5 inline-flex">
              <div className="text-center text-amber-400 text-[0.687rem] lg:text-3xl font-black uppercase">
                Chicken Piece
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-[0.44rem] lg:text-xl font-medium capitalize">
                  Order Now
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-60 lg:h-96 w-[5.28rem] h-[5.28rem] flex-col justify-end items-start gap-3 lg:gap-10 inline-flex">
            <div className="lg:w-60 lg:h-64 w-[5.28rem] h-[5.28rem] relative">
              <Image src={BurgerSpinner} alt="burger-spinner "></Image>
            </div>
            <div className="flex-col justify-start items-center gap-1.5 lg:gap-3.5 inline-flex">
              <div className="text-center text-amber-400 text-[0.687rem] lg:text-3xl font-black uppercase">
                Chicken Piece
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-[0.44rem] lg:text-xl font-medium capitalize">
                  Order Now
                </div>
              </div>
            </div>
          </div>


          <div className="lg:w-60 lg:h-96 w-[5.28rem] h-[5.28rem] flex-col justify-end items-start gap-3 lg:gap-10 inline-flex">
            <div className="lg:w-60 lg:h-64 w-[5.28rem] h-[5.28rem] relative">
              <Image src={BurgerSpinner} alt="burger-spinner "></Image>
            </div>
            <div className="flex-col justify-start items-center gap-1.5 lg:gap-3.5 inline-flex">
              <div className="text-center text-amber-400 text-[0.687rem] lg:text-3xl font-black uppercase">
                Chicken Piece
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-[0.44rem] lg:text-xl font-medium capitalize">
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
      <FooterMob />
    </div>
  );
}
