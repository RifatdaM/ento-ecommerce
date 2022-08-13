import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import IconItem from "../IconItem";
import { UserIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
function MenuMobile() {
  return (
    <div className="flex items-center flex-col">
      <ul className=" flex flex-col items-center gap-4 py-6 font-medium lg:hidden">

      <Link href="/" className=" cursor-pointer">
          <a>Home</a>
        </Link>
        <Link href="/category">
          <a className="flex items-center gap-1 cursor-pointer focus:ring-0 active:ring-0 ring-0">
            Category <IconItem Icon={ChevronDownIcon} />
          </a>
        </Link>
        <Link href="/deals">
          <a className="flex items-center gap-1 cursor-pointer focus:ring-0 active:ring-0 ring-0">
            Deals <IconItem Icon={ChevronDownIcon} />
          </a>
        </Link>
        <Link href="/" className=" cursor-pointer focus:ring-0 active:ring-0 ring-0">
          <a>Track Order</a>
        </Link>
        <Link href="/about">
          <a className="flex items-center gap-1 cursor-pointer focus:ring-0 active:ring-0 ring-0">
            About
            <IconItem Icon={ChevronDownIcon} />
          </a>
        </Link>
        <Link href="/support" className=" cursor-pointer focus:ring-0 active:ring-0 ring-0">
          <a>Support</a>
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
