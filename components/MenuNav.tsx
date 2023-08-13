"use client";
import React, { useState } from "react";

type Props = {
  menuItems: string[];
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
};
function MenuNav({ menuItems, activeItem, setActiveItem }: Props) {
  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <div className="w-full z-10 lg:h-auto h-20 overflow-y-hidden max-h-14 lg:overflow-x-hidden overflow-x-scroll bg-charcoal flex flex-row items-center lg:justify-center space-x-10 lg:space-x-16 py-5 mt-8">
      {menuItems.map((item, index) => (
        <h1
          key={index}
          className={`${
            activeItem === index ? "text-mustard" : "text-white"
          } hover:text-mustard flex-none transition-colors duration-300 cursor-pointer text-sm lg:text-xl font-medium capitalize`}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </h1>
      ))}
    </div>
  );
}

export default MenuNav;
