import React from "react";
import SearchIcon from "./icons/SearchIcon";
import SortIcon from "./icons/SortIcon";

const Search = () => {
  return (
    <div className="relative flex">
      <input
        type="text"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search for Asò oke"
      />
      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <div className="flex justify-center items-center bg-colorOne w-12 h-12 rounded-md ml-2">
        <SortIcon />
      </div>
    </div>
  );
};

export default Search;
