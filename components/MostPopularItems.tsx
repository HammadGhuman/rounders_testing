import React from "react";
import MostPopularItemCard from "./MostPopularItemCard";
import Burger1 from "@/public/red10-2@2x.png";
import Burger2 from "@/public/red10-21@2x.png";
import Burger3 from "@/public/red10-22@2x.png";

function MostPopularItems() {
  const mostPopularItems = [
    {
      title: "Double Patti Beef",
      description:
        "People love Fast food More. A fast-food restaurant consists of a business model that serves food usually prepared specifically. fat Food Items are ready to serve and the Demanded Products in Every Corner of the Country.",
      img: Burger1,
    },
    {
      title: "Chicken Piece Burger",
      description:
        "People love Fast food More. A fast-food restaurant consists of a business model that serves food usually prepared specifically. fat Food Items are ready to serve and the Demanded Products in Every Corner of the Country.",
      img: Burger2,
    },
    {
      title: "Double Patti Jalapeno",
      description:
        "People love Fast food More. A fast-food restaurant consists of a business model that serves food usually prepared specifically. fat Food Items are ready to serve and the Demanded Products in Every Corner of the Country.",
      img: Burger3,
    },
  ];
  return (
    <div className="mt-20 lg:mt-0">
      <div className="text-center flex space-x-3 items-center justify-center font-MetropolisRegular">
        <span className="text-white  lg:text-6xl text-2xl font-bold uppercase tracking-wide">
          Most
        </span>
        <span className="text-white text-8xl font-normal tracking-widest"></span>
        <span className="text-mustard font-Hevojniwal  lg:text-8xl text-5xl font-normal tracking-widest">
          Popular
        </span>
        <span className="text-white text-8xl font-normal tracking-widest"></span>
        <span className="text-white lg:text-6xl text-2xl font-bold uppercase tracking-wide">
          Items
        </span>
      </div>
      <div className="flex  flex-row space-x-6 lg:space-x-28 mt-8 lg:mt-0 items-center justify-center lg:p-24 pt-24 pb-10">
        {mostPopularItems.map((item) => (
          <MostPopularItemCard
            title={item.title}
            description={item.description}
            img={item.img}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MostPopularItems;
