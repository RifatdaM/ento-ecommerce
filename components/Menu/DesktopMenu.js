import React from "react";
import IconItem from "../IconItem";
import SearchBar from "../SearchBar";
import { UserIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

function DesktopMenu() {
  return (
    <div className="hidden lg:flex  justify-between items-center xl:container">
        {/* Search container */}
        <SearchBar className='flex-initial' />

        {/* Menu Container */}
        <ul className="flex gap-4 2xl:gap-8 text-sm items-center font-medium whitespace-nowrap">
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
            to="home"
            activeClass="home"
            className="text-2xl 2xl:text-3xl px-0 2xl:px-4 cursor-pointer"
          >
            ento.
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

        {/* User Icon */}
        <div className="flex gap-8">
          <IconItem Icon={UserIcon} className="cursor-pointer" />
          <IconItem Icon={HeartIcon} className="cursor-pointer" />
          <div className="cursor-pointer relative">
            <IconItem Icon={ShoppingBagIcon} />
            <span className=" bg-Pink-havy px-1 rounded-full text-white font-bold absolute top-0 -right-1 text-xs ">
              0
            </span>
          </div>
        </div>
      </div>
  );
}

export default DesktopMenu;
