import React from "react";

function RegisterPage() {
  return (
    <div className="bg-footer-bg flex items-start justify-center bg-cover min-w-screen min-h-[500px] bg-no-repeat">
      <div className="flex flex-col items-center pt-20 justify-center">
        <h1 className="text-6xl font-bold uppercase text-black">
          Get Your{" "}
          <span className="text-8xl font-normal font-Hevojniwal">Discount</span>{" "}
          Now{" "}
        </h1>
        <p className="text-2xl capitalize text-normal my-4">
          Get a discount upto 60% for membership on every first purchase
        </p>
        <div className="w-72 h-16 px-10 py-1.5 bg-neutral-950 rounded-3xl justify-center items-center inline-flex">
          <div className="text-amber-500 text-3xl font-medium">
            Register Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
