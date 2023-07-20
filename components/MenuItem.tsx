import Image from 'next/image'
import React from 'react'
import Burger from "@/public/doublepattijalapeno.png";
function MenuItem({category}:{category:string}) {
    return (
        <div className="w-64 h-72 flex-col justify-end items-center gap-1.5 inline-flex">
            <Image className="w-64 h-52 shadow" src={Burger} alt="popular_item_image" />
            <div className="text-center text-amber-500 text-base font-semibold tracking-tight">
                DOUBLE PATTI JALAPENO

            </div>
            <h1 className="w-64 text-center text-white text-xs font-medium">
                People love Fast food More. A fast-food restaurant consists of a business model that serves food usually prepared specifically. fat Food Items are ready to serve and the Demanded Products in Every Corner of the Country.

            </h1>
            <div className="px-2.5 py-1 bg-amber-500 rounded-3xl justify-start items-start gap-2.5 inline-flex">
                <div className="text-neutral-950 text-xs font-semibold tracking-tight">
                    ADD TO CART
                </div>
            </div>
        </div>)
}

export default MenuItem