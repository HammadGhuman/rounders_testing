import React from "react";

function SimplyEatingDelicious() {
  return (
    <div className="bg-charcoal relative flex items-center justify-center">
      {/* Outline Text Delicious */}
      <h1 className="absolute lg:-top-16 top-0 left-0 label text-ellipsis select-none lg:text-[13rem] text-6xl uppercase">
        DeLicious
      </h1>
      <div className="w-[34rem] py-10 lg:py-44">
        <h1 className="text-[2.3rem] lg:text-8xl font-Hevojniwal text-mustard text-center">
          Simple Way
        </h1>
        <h2 className="text-[1rem] lg:text-4xl -mt-2 lg:mt-0 lg:py-4 text-center font-semibold text-white font-MetropolisRegular">
          Of Eating Delicious
        </h2>
        <p className="text-[0.34rem] mx-auto w-[14rem] lg:w-full lg:text-sm text-center text-white font-medium">
          People love Fast food More. A fast-food restaurant consists of a
          business model that serves food usually prepared specifically
        </p>
      </div>
    </div>
  );
}

export default SimplyEatingDelicious;
