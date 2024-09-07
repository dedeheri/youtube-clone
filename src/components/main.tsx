"use client";

import React from "react";
import Image from "next/image";
import moment from "moment";
import millify from "millify";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { getVideos } from "@/hooks/video";

interface IMain {
  filter: string;
}

const Main = ({ filter }: IMain) => {
  const { data, loading } = getVideos(filter);

  return (
    <div className="pt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-11 w-full">
      {loading
        ? [...Array(10)].map((_, i) => (
            <Skeleton key={i} className="w-[19rem] h-48 rounded-xl" />
          ))
        : data?.map((result: any, index: string) => (
            <Link
              href={`watch?v=${result?.videoId}`}
              key={index}
              className="space-y-3"
            >
              <Image
                alt={result?.title}
                src={result?.thumbnail}
                width={720}
                height={404}
                className="rounded-xl w-full w"
              />
              <div className="flex space-x-3">
                <Image
                  alt={result?.title}
                  src={result?.channel?.avatar}
                  width={68}
                  height={68}
                  className="rounded-full w-9 h-9"
                />

                <div className="space-y-1">
                  <h1 className="font-medium leading-5 text-base  line-clamp-2">
                    {result?.title}
                  </h1>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    {result?.channel?.name}
                  </p>
                  <div className="flex space-x-1">
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {millify(result?.viewCount) + " views"}
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      •
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {moment(result?.createdAt, "YYYYMMDD").fromNow()}
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
