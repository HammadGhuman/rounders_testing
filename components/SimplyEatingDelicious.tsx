import React from "react";

function SimplyEatingDelicious() {
  return (
    <div className="bg-charcoal relative flex items-center justify-center">
      {/* Outline Text Delicious */}
      <h1 className="absolute -top-16 left-0 label text-ellipsis select-none text-[13rem] uppercase">
        Delicious
      </h1>
      <div className="w-[34rem] py-44">
        <h1 className="text-8xl font-Hevojniwal text-mustard text-center">
          Simple Way
        </h1>
        <h2 className="text-4xl  py-4 text-center font-semibold text-white font-MetropolisRegular">
          Of Eating Delicious
        </h2>
        <p className="text-sm text-center text-white font-medium">
          People love Fast food More. A fast-food restaurant consists of a
          business model that serves food usually prepared specifically
        </p>
      </div>
    </div>
  );
}

export default SimplyEatingDelicious;
