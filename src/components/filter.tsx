"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";

import useSWR from "swr";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import { fetcher } from "@/hooks/useFetcher";

const Filter = () => {
  const url = "https://yt-api.p.rapidapi.com/home";
  const { data, isLoading } = useSWR(url, fetcher);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    data?.filters?.[0]?.filter || "All"
  );

  return (
    <nav className="h-12 mt-3 fixed w-full top-14 bg-white dark:bg-black">
      <ScrollArea>
        <div className="flex space-x-3 h-11">
          {isLoading
            ? [...Array(21)].map((_, i) => (
                <Skeleton className="w-16 h-8" key={i} />
              ))
            : data?.filters?.map((data: { filter: string }, index: string) => (
                <Badge
                  onClick={() => setSelectedFilter(data?.filter)}
                  variant={
                    selectedFilter === data?.filter ? "default" : "secondary"
                  }
                  key={index}
                  className="h-8 rounded-lg px-4 cursor-pointer"
                >
                  <span className="whitespace-nowrap font-bold">
                    {" "}
                    {data?.filter}
                  </span>
                </Badge>
              ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
};

export default Filter;
