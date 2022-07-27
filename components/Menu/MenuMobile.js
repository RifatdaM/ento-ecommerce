import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import IconItem from "../IconItem";
import { UserIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
function MenuMobile() {
  return (
    <div className="flex items-center flex-col">
      <ul className=" flex flex-col items-center gap-4 py-6 font-medium lg:hidden">
        <Link to="home" activeClass="home" className=" cursor-pointer">
          Home
        </Link>
        <Link
          to="catagory"
          activeClass="catagory"
          className="flex items-center gap-1 cursor-pointer"
        >
          Catagory
          <IconItem Icon={ChevronDownIcon} />
        </Link>
        <Link
          to="deals"
          activeClass="deals"
          className="flex items-center gap-1 cursor-pointer"
        >
          Deals
          <IconItem Icon={ChevronDownIcon} />
        </Link>
        <Link
          to="trackOrder"
          activeClass="trackOrder"
          className="cursor-pointer"
        >
          Track Order
        </Link>
        <Link
          to="about"
          activeClass="about"
          className="flex items-center gap-1 cursor-pointer"
        >
          About
          <IconItem Icon={ChevronDownIcon} />
        </Link>
        <Link to="support" activeClass="support" className="cursor-pointer">
          Support
        </Link>
      </ul>

      <div className="flex gap-8 ">
        <IconItem Icon={UserIcon} />
        <IconItem Icon={HeartIcon} />
        <IconItem Icon={ShoppingBagIcon} />
      </div>
    </div>
  );
}

export default MenuMobile;
