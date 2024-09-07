"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";

import { IconRefresh } from "@tabler/icons-react";

import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { getFilter } from "@/hooks/filter";

interface IFilter {
  selectedFilter: string;
  setSelectedFilter: (select: string) => void;
}

const Filter = ({ selectedFilter, setSelectedFilter }: IFilter) => {
  const [refresh, setRefresh] = useState<number>(1);
  // const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const { data, loading, success } = getFilter(refresh);

  const handleRefresh = () => setRefresh(refresh + 1);

  return (
    <nav className="h-12 mt-3 fixed w-full top-14 bg-white dark:bg-black">
      <ScrollArea>
        <div className="flex space-x-3 h-11">
          {loading ? (
            [...Array(21)].map((_, i) => (
              <Skeleton className="w-16 h-8" key={i} />
            ))
          ) : !success ? (
            <div className="flex space-x-6">
              <Button
                onClick={handleRefresh}
                className="h-8 space-x-2"
                variant="ghost"
              >
                <IconRefresh />
                <span>Refresh</span>
              </Button>
              <h1 className="font-medium text-lg ">Something went wrong</h1>
            </div>
          ) : (
            data?.map((res: any, index: string) => (
              <Badge
                onClick={() => setSelectedFilter(res?.filter)}
                variant={
                  selectedFilter === res?.filter ? "default" : "secondary"
                }
                key={index}
                className="h-8 rounded-lg px-4 cursor-pointer"
              >
                <span className="whitespace-nowrap font-bold">
                  {res?.filter}
                </span>
              </Badge>
            ))
          )}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
};

export default Filter;
