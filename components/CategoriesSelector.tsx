"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Pizza from "@/public/pizza.svg";
import Burger from "@/public/burger-svg.svg";
import Fries from "@/public/fries-svg.svg";
import Drink from "@/public/drink-svg.svg";
import PizzaClicked from "@/public/pizza-svg-clicked.svg";
import BurgerClicked from "@/public/burger-clicked.svg";
import FriesClicked from "@/public/fries-clicked.svg";
import DrinkClicked from "@/public/drink-clicked.svg";

type Props = {
  setClicked: Dispatch<
    SetStateAction<{
      pizza: boolean;
      fries: boolean;
      burger: boolean;
      drink: boolean;
    }>
  >;
  clicked: {
    pizza: boolean;
    fries: boolean;
    burger: boolean;
    drink: boolean;
  };
};

function CategoriesSelector({ setClicked, clicked }: Props) {
  return (
    <div className="absolute z-50 -bottom-16 left-[30%] flex space-x-20">
      <div
      className="cursor-pointer"
        onClick={() => {
          setClicked({
            pizza: true,
            fries: false,
            burger: false,
            drink: false,
          });
        }}
      >
        {clicked.pizza ? (
          <Image src={PizzaClicked} alt="pizza"></Image>
        ) : (
          <Image src={Pizza} alt="pizza"></Image>
        )}
        <p className="text-white text-base font-medium text-center">
          Tasty Pizza
        </p>
      </div>
      <div
            className="cursor-pointer"

        onClick={() => {
          setClicked({
            pizza: false,
            fries: false,
            burger: true,
            drink: false,
          });
        }}
      >
        {clicked.burger ? (
          <Image src={BurgerClicked} alt="burger"></Image>
        ) : (
          <Image src={Burger} alt="burger"></Image>
        )}
        <p className="text-white text-base font-medium text-center">Burger</p>
      </div>
      <div
            className="cursor-pointer"

        onClick={() => {
          setClicked({
            pizza: false,
            fries: true,
            burger: false,
            drink: false,
          });
        }}
      >
        {clicked.fries ? (
          <Image src={FriesClicked} alt="fries"></Image>
        ) : (
          <Image src={Fries} alt="fries"></Image>
        )}
        <p className="text-white text-base font-medium text-center">Fries</p>
      </div>
      <div
            className="cursor-pointer"

        onClick={() => {
          setClicked({
            pizza: false,
            fries: false,
            burger: false,
            drink: true,
          });
        }}
      >
        {clicked.drink ? (
          <Image src={DrinkClicked} alt="drink"></Image>
        ) : (
          <Image src={Drink} alt="drink"></Image>
        )}
        <p className="text-white text-base font-medium text-center">Drink</p>
      </div>
    </div>
  );
}

export default CategoriesSelector;
