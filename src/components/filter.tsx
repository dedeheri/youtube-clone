"use client";

import React, { useContext, useState } from "react";
import { Badge } from "./ui/badge";

import { IconRefresh } from "@tabler/icons-react";

import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { getFilter } from "@/hooks/filter";
import { Context } from "./context-provider";

const Filter = () => {
  const { FILTER_VIDEO, SET_FILTER_VIDEO } = useContext(Context);
  const [refresh, setRefresh] = useState<number>(1);
  const handleRefresh = () => setRefresh(refresh + 1);

  const { data, loading, success } = getFilter(refresh);

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
                onClick={() => SET_FILTER_VIDEO(res?.filter)}
                variant={FILTER_VIDEO === res?.filter ? "default" : "secondary"}
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
