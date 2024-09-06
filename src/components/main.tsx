"use client";

import useSWR from "swr";
import { fetcher } from "@/hooks/useFetcher";
import React from "react";
import Image from "next/image";
import moment from "moment";
import millify from "millify";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const Main = () => {
  const url = "https://yt-api.p.rapidapi.com/trending?geo=US";
  const { data, isLoading, error } = useSWR(url, fetcher);

  const sortType = data?.data?.filter((res: any) => res.type === "video");

  return (
    <div className="pt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-11 w-full">
      {isLoading
        ? [...Array(10)].map((_, i) => (
            <Skeleton key={i} className="w-80 h-48 rounded-md" />
          ))
        : sortType?.map((result: any, index: string) => (
            <Link
              href={`watch?v=${result?.videoId}`}
              key={index}
              className="space-y-2"
            >
              <Image
                alt={result?.title}
                src={result?.thumbnail?.[1]?.url}
                width={result?.thumbnail?.[2]?.width}
                height={result?.thumbnail?.[2]?.height}
                className="rounded-xl w-full w"
              />
              <div className="flex space-x-3">
                <Image
                  alt={result?.title}
                  src={result?.channelThumbnail?.[0]?.url}
                  width={result?.channelThumbnail?.[0]?.width}
                  height={result?.channelThumbnail?.[0]?.height}
                  className="rounded-full w-9 h-9"
                />

                <div className="space-y-0.5">
                  <h1 className="font-medium leading-5 text-base">
                    {result?.title}
                  </h1>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    {result?.channelTitle}
                  </p>
                  <div className="flex space-x-1">
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {millify(result?.viewCount) + " views"}
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      •
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {moment(result?.publishDate, "YYYYMMDD").fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Main;
