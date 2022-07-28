import React from "react";
import ProductCard from "./ProductCard";
import p1 from "../public/1.png";
import p2 from "../public/2.png";
import p3 from "../public/3.png";
import p4 from "../public/4.png";

function NewArrivals() {
  return (
    <div className=" bg-Blue-1 py-12">
      <div className="container">
        <div className="pb-8">
          <h2 className=" text-2xl text-center pb-6">New Arrivals</h2>
          <p className=" text-sm text-center text-Gray-3">
            Lorem Ipsum is simply dummy text of the
          </p>
        </div>
        {/* PRODUCT CARD */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-8 lg:gap-x-6">
          <ProductCard
            productImage={p1}
            productName={"Wodden Chare"}
            reviewNumber={"28"}
            currentPrice={"$100"}
            previousPrice={"$200"}
          />
          <ProductCard
            productImage={p2}
            productName={"Blue Single Sofa"}
            reviewNumber={"28"}
            currentPrice={"$59"}
          />
          <ProductCard
            productImage={p3}
            productName={"Long Stand lamplight"}
            reviewNumber={"28"}
            currentPrice={"$100"}
          />
          <ProductCard
            productImage={p4}
            productName={"Kign Size Bed 6feet by 7 feet"}
            reviewNumber={"28"}
            currentPrice={"360 BDT"}
            previousPrice={"400 BDT"}
          />
          <ProductCard
            productImage={p4}
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

export default NewArrivals;
