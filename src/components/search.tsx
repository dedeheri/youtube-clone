import React, { useState } from "react";
import { MicIcon, SearchIcon } from "./icons";
import ToastAlert from "./toast";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState<string>(
    searchParams.get("search_query") || ""
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/results?search_query=${search}`);
  };

  return (
    <div className="absolute hidden top-2 md:w-[500px] justify-center lg:w-[600px] mx-auto left-0 right-0 items-center md:flex space-x-3">
      <form
        onSubmit={handleSearch}
        className="border h-10 lg:w-full rounded-full flex justify-between "
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          defaultValue={search}
          className="px-5 outline-none bg-transparent w-full text-black dark:text-white"
        />
        <div className="bg-neutral-100 dark:bg-neutral-800 h-full w-16 rounded-r-full flex justify-center items-center border-l">
          <SearchIcon />
        </div>
      </form>

      <ToastAlert
        icon={<MicIcon />}
        className="!rounded-full size-10 flex items-center justify-center"
      />
    </div>
  );
};

export default Search;
