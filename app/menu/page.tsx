"use client";
import Menu from '@/components/Menu';
import MenuItem from '@/components/MenuItem';
import MenuNav from '@/components/MenuNav'
import Navbar from '@/components/Navbar'
import Overlay from '@/components/Overlay';
import React, { useState } from 'react'

function Page() {
    const menuItems = [
        'Beef Burgers',
        'Chicken Burgers',
        'Rice and Salad Box',
        'Sides',
        'Kids Meal',
        'Treats',
        'Drinks',
        'Dipping Sauces',
    ];
    const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div>
        <Navbar/>
        <MenuNav activeItem={activeItem} setActiveItem={setActiveItem} menuItems={menuItems}/>
        <Overlay text={menuItems[activeItem]} selected={menuItems[activeItem].split(" ")[0]} />
        <Menu menuItems={menuItems} selected={menuItems[activeItem]} />
    </div>
  )
}

export default Page