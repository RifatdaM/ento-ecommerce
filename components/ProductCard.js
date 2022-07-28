import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";

function ProductCard({
  productImage,
  productName,
  reviewNumber,
  previousPrice,
  currentPrice,
}) {
  return (
    <div>
      {/* Product Image */}
      <div className=" bg-white flex justify-center items-center p-8 h-[200px] md:h-[300px]">
        <Image src={productImage} alt="name" className="object-contain" />
      </div>
      {/* Product Name */}
      <h3 className="mt-4 font-medium text-Primary-dark text-sm">
        {productName}
      </h3>
      {/* Reviews */}
      <div className="flex gap-1 items-center mt-2">
        <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
        <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
        <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
        <StarIcon className="h-3 text-Secondary-dark fill-Secondary-dark" />
        <StarIcon className="h-3 text-Star-light fill-Star-light" />
        <h5 className=" text-xs text-Gray-2 whitespace-nowrap">
          {reviewNumber} reviews
        </h5>
      </div>
      {/* {Price} */}
      <div className="flex items-center gap-2 text-sm mt-2">
        <h3 className=" text-Gray-1 line-through">{previousPrice}</h3>
        <h3 className=" text-Primary-dark font-medium">{currentPrice}</h3>
      </div>
      {/* lable for new and discount using react reusable component */}
      {/* TODO: */}

    </div>
  );
}

export default ProductCard;
