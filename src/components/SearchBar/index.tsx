import React from "react";

export interface ISearch {
  onSearchClick?: () => void;
};

const SearchBar: React.FC<ISearch> = ({onSearchClick}: ISearch) => {

  return (
    <div className="flex items-center bg-white p-2 shadow rounded-lg">
      <input
        type="text"
        placeholder="Search Properties or Brokers"
        className="flex-1 p-2 border-none focus:ring-0 text-gray-700"
        onFocus={onSearchClick}
      />
      <button
        onClick={onSearchClick}
        className="ml-2 p-2 bg-green-500 text-white rounded-md"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;