import React from "react";
import Search from './icons/search'


const SearchBar: React.FC = () => {

  return (
    <div className="flex items-start border border-gray-400 rounded-md bg-white px-3 py-2 h-[44px] w-full max-w-[800px] hover:border-black gap-1">
      <Search fill="gray"/>
      <input
        type="text"
        placeholder="Search for a building..."
        className="outline-none w-full text-black bg-white"
      />
    </div>
  );
};

export default SearchBar;
