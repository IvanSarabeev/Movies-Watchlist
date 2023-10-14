import React, { useRef } from "react";
import { ReactComponent as IconMagnify } from "../../assets/svgs/magnify.svg";

type SearchProps = {
  handleSearch: () => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ handleSearch, setSearchQuery }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <span className="w-1/3 md:w-1/3 h-9 md:h-12 font-inter py-2 px-2 inline-flex gap-x-2 items-center rounded-tl-md rounded-bl-md border-2 border-[#D1D5D8] drop-shadow-md bg-white">
        <IconMagnify className="w-5 h-5" onClick={handleFocus} />
        <input
          ref={inputRef}
          id="search"
          type="search"
          name="search"
          placeholder="Search for a movie"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-xs sm:text-sm text-[#6B7280] leading-5 py-1.5 px-2 focus:ring-0"
        />
      </span>
      <button
        type="button"
        onClick={handleSearch}
        className="w-28 h-9 md:h-12 flex items-center justify-center py-2 pl-4 pr-2 text-xs sm:text-sm leading-5 rounded-tr-md rounded-br-md drop-shadow-md bg-white border-2 border-b-[#D1D5D8]"
      >
        Search
      </button>
    </>
  );
};

export default SearchInput;
