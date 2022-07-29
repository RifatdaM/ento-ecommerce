import Image from "next/image";
import React from "react";
import CatagoryCard from "./CatagoryCard";
import ProductCard from "./ProductCard";
import bp1 from "../public/5.png";
import bp2 from "../public/6.png";
import bp3 from "../public/7.png";
import bp4 from "../public/8.png";
import bp5 from "../public/9.png";

function BestSeller() {
  return (
    <div className=" bg-Blue-1 py-12">
      <div className="container">
        <div className="pb-8">
          <h2 className=" text-2xl text-center pb-6">Best seller</h2>
          <p className=" text-sm text-center text-Gray-3">
            Lorem Ipsum is simply dummy text of the
          </p>
        </div>
        {/* PRODUCT CARD */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-8 lg:gap-x-6">
          <ProductCard
            productImage={bp1}
            productName={"Wodden Chare"}
            reviewNumber={"28"}
            currentPrice={"$100"}
            previousPrice={"$200"}
          />
          <ProductCard
            productImage={bp2}
            productName={"Blue Single Sofa"}
            reviewNumber={"28"}
            currentPrice={"$59"}
          />
          <ProductCard
            productImage={bp3}
            productName={"Long Stand lamplight"}
            reviewNumber={"28"}
            currentPrice={"$100"}
          />
          <ProductCard
            productImage={bp4}
            productName={"Kign Size Bed 6feet by 7 feet"}
            reviewNumber={"28"}
            currentPrice={"360 BDT"}
            previousPrice={"400 BDT"}
          />
          <ProductCard
            productImage={bp5}
            productName={"Kign Size Bed 6feet by 7 feet"}
            reviewNumber={"28"}
            currentPrice={"360 BDT"}
            previousPrice={"400 BDT"}
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-8">
          <button className="px-10 py-3 text-Primary-dark border-2 border-Primary-dark">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
