import { SearchIcon, MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import IconItem from "./IconItem";
import SearchBar from "./SearchBar";
import MenuMobile from "./MenuMobile";

function NavBar() {
  return (
    <nav className="p-4 bg-Blue-light">
      <div className="flex justify-between ">
        <IconItem Icon={SearchIcon} />
        <h3 className="text-3xl font-semibold">ento.</h3>
        <IconItem Icon={MenuAlt4Icon} className="" />
      </div>
      <MenuMobile />
    </nav>
  );
}

export default NavBar;
