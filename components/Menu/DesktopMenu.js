import { useState } from "react";
import IconItem from "../IconItem";
import SearchBar from "../SearchBar";
import { UserIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

function DesktopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:flex justify-between items-center xl:container">
      {/* Search container */}
      <SearchBar className="flex-initial" />

      {/* Menu Container */}
      <ul className="flex gap-4 2xl:gap-8 text-sm items-center font-medium whitespace-nowrap">
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
        <Link href="/">
          <a className="text-2xl 2xl:text-3xl px-0 2xl:px-4 cursor-pointer focus:ring-0 active:ring-0 ring-0">
            ento.
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
