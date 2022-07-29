import React from "react";


function OfferSection() {
  return (
    <div className="bg-[url('/hero2.png')] h-[600px] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-b from-Gray-3 text-white">
        <div className="container py-12 flex flex-col items-center">
          <p className="text-base md:text-xl text-center">
            <span className="text-2xl md:text-3xl font-semibold text-Yellow-havy">
              50%
            </span>{" "}
            <span className=" text-Yellow-havy font-medium">off</span> on
          </p>
          <h2 className="text-4xl py-4 md:text-5xl text-center">
            All Section Sofa
          </h2>
          <p className="text-base md:text-xl leading-8 text-center px-12 pb-8">
            Brows and urchase section sofa collection with big sale
          </p>

          <button className="text-white border-2 font-medium border-white px-12 py-3">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
