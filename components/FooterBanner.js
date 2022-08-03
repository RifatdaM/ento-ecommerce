import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import bp1 from "../public/22.png"
import bp2 from "../public/30.png"
import bp3 from "../public/27.png"
import bp4 from "../public/19.png"
import bp5 from "../public/21.png"
import bp6 from "../public/28.png"
function FooterBanner() {
  return (
    <div className="container py-16 flex flex-col lg:flex-row gap-4 justify-between lg:items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokewidth="4"
          strokelinecap="round"
          strokelinejoin="round"
          className="feather feather-instagram feather-lg"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        <div className="py-4">
          <h2 className=" text-2xl pb-2">#entofurniture</h2>
          <p className=" text-sm text-Gray-3">
            Lorem Ipsum is simply dummy text of the
          </p>
          <button className="flex items-center pt-4">
            Shop Now <ChevronRightIcon className="h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:flex gap-2 xl:gap-4">
        <Image src={bp1} alt="Photo 1" width={150} height={150} className="object-cover"/>
        <Image src={bp2} alt="Photo 1" width={150} height={150} className="object-cover"/>
        <Image src={bp3} alt="Photo 1" width={150} height={150} className="object-cover"/>
        <Image src={bp4} alt="Photo 1" width={150} height={150} className="object-cover"/>
        <Image src={bp5} alt="Photo 1" width={150} height={150} className="object-cover"/>
        <Image src={bp6} alt="Photo 1" width={150} height={150} className="object-cover"/>
      </div>
    </div>
  );
}

export default FooterBanner;
