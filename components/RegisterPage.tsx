import React from "react";

function RegisterPage() {
  return (
    <div className="bg-footer-bg flex items-start justify-center bg-cover  lg:bg-cover min-w-screen lg:min-h-[500px] bg-no-repeat">
      <div className="flex flex-col items-center justify-center py-3  lg:pt-20">
        <h1 className="text-[1.34006rem] lg:text-6xl font-bold uppercase text-black">
          Get Your{" "}
          <span className="text-[2.45681rem] lg:text-8xl font-normal font-Hevojniwal">Discount</span>{" "}
          Now{" "}
        </h1>
        <p className="text-[0.57063rem] text-black lg:text-2xl capitalize text-normal lg:my-4 my-1">
          Get a discount upto 60% for membership on every first purchase
        </p>
        <div className="lg:w-72 lg:h-16 lg:px-10 px-3 py-1 lg:py-1.5 bg-neutral-950 rounded-3xl justify-center items-center inline-flex">
          <div className="text-amber-500 text-[0.72694rem] lg:text-3xl font-medium">
            Register Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
