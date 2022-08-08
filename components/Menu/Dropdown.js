import React from "react";
import { Menu, Transition } from "@headlessui/react";
import IconItem from "../IconItem";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Dropdown({ title }) {
  return (
    <div>
      {/* dropdown menu */}
      <Menu>
        <div>
          <Menu.Button className="flex items-center gap-1">
            {title}
            <IconItem Icon={ChevronDownIcon} />
          </Menu.Button>
        </div>
        <Menu.Items className="flex flex-col gap-2 pt-2">
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`}>All</a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && "bg-blue-500"}`}>Table</a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default Dropdown;
