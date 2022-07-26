import React from "react";

function SearchBar() {
  return (
    <form>
      <div className=" relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 absolute top-0 bottom-0 my-auto left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full py-3 pl-12 xl:pl-12 pr-4 text-black placeholder:text-Gray-2 bg-transparent outline-none"
        />
      </div>
    </form>
  );
}

export default SearchBar;
