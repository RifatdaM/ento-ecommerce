import { useState } from "react";
import { Transition } from "@headlessui/react";
import { SearchIcon, MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import IconItem from "./IconItem";
import MenuMobile from "./Menu/MenuMobile";
import DesktopMenu from "./Menu/DesktopMenu";
import Dropdown from "./Dropdown";

function NavBar() {
  // for navbar
  const [isOpen, setIsOpen] = useState(false);
  return (
    // Main Nav Container
    <nav className="p-4 bg-Blue-light w-full fixed z-10">
      {/*actual menu desktop menu */}
      <DesktopMenu />
      <Dropdown/>

      {/* mobile Nav bar */}
      <div className="flex justify-between items-center lg:hidden">
        <IconItem Icon={SearchIcon} />
        <h3 className="text-3xl font-semibold">ento.</h3>

        <button onClick={() => setIsOpen(!isOpen)} type="button">
          {isOpen ? (
            <XIcon className="iconNav" />
          ) : (
            <MenuAlt4Icon className="iconNav" />
          )}
        </button>
      </div>

      {/* actual menu for Mobile */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom=" opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => <MenuMobile isOpen={isOpen} />}
      </Transition>
    </nav>
  );
}

export default NavBar;
