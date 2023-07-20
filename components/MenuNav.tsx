"use client";
import React, { useState } from 'react'

type Props = {
    menuItems :string[];
    activeItem : number;
    setActiveItem : React.Dispatch<React.SetStateAction<number>>
}
function MenuNav({menuItems,activeItem,setActiveItem}:Props) {

    const handleItemClick = (index:number) => {
      setActiveItem(index);
    };
  return (
    <div className=' w-full z-10 bg-charcoal flex flex-row items-center justify-center space-x-16 py-5 mt-8'>
    {menuItems.map((item, index) => (
      <h1
        key={index}
        className={`${
          activeItem === index ? 'text-mustard' : 'text-white'
        } hover:text-mustard transition-colors duration-300 cursor-pointer text-xl font-medium capitalize`}
        onClick={() => handleItemClick(index)}
      >
        {item}
      </h1>
    ))}
  </div>
  )
}

export default MenuNav