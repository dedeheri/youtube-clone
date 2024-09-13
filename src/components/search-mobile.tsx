import React, { useState } from "react";
import { ArrowLeftIcon, MicIcon, SearchIcon } from "./icons";
import ToastAlert from "./toast";
import { Button } from "./ui/button";
import { useSearchParams, useRouter } from "next/navigation";

const SearchMobile = () => {
  const [showInputSearch, setShowInputSearch] = useState<boolean>(false);

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
    <div className="relative">
      <div className="space-x-1 flex items-center md:hidden">
        <Button
          variant="ghost"
          className="rounded-full size-10"
          onClick={() => setShowInputSearch(true)}
        >
          <SearchIcon />
        </Button>
        <ToastAlert
          variant={"ghost"}
          icon={<MicIcon />}
          className="!rounded-full size-10 flex items-center justify-center"
        />
      </div>

      {showInputSearch && (
        <div className="w-auto h-9 bg-white dark:bg-black  fixed left-3 right-3 top-2 z-40">
          <div className="w-auto  justify-center mx-auto flex items-center md:flex space-x-3">
            <Button
              onClick={() => setShowInputSearch(false)}
              variant="ghost"
              className="rounded-full size-10 r"
            >
              <ArrowLeftIcon />
            </Button>
            <form
              onSubmit={handleSearch}
              className="border h-10 lg:w-full rounded-full flex justify-between "
            >
              <input
                onChange={(e) => setSearch(e.target.value)}
                defaultValue={search}
                placeholder="Search"
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
        </div>
      )}
    </div>
  );
};

export default SearchMobile;
