"use client";

import React from "react";

import Layout from "@/components/layout";
import { getVideosSearch } from "@/hooks/video";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import millify from "millify";
import moment from "moment";
import { Skeleton } from "@/components/ui/skeleton";

const Page = ({ searchParams }: { searchParams: { search_query: string } }) => {
  const { data, message, loading } = getVideosSearch(searchParams.search_query);

  console.log(message);

  return (
    <Layout sidebar={true}>
      <div className="max-w-5xl mx-auto space-y-7">
        {loading &&
          [...Array(3)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              <Skeleton className="w-[200px] h-[100px] lg:w-[400px] lg:h-[220px] rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="w-72 h-6 rounded-xl" />
                <div className="flex space-x-3 items-center">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="w-40 h-6 rounded-xl" />
                </div>
                <Skeleton className="w-96 h-6 rounded-xl" />
                <Skeleton className="w-72 h-6 rounded-xl" />
              </div>
            </div>
          ))}

        {!loading && (
          <div className=" space-y-7">
            {data?.channel?.map((channel: any) => (
              <Link
                href={`/${channel?.handleName}`}
                key={channel?.id}
                className="flex space-x-7"
              >
                <Image
                  src={channel?.avatar}
                  alt={channel?.title}
                  width={130}
                  height={130}
                  className="rounded-full size-36"
                />

                <div className="text-neutral-500 dark:text-neutral-400 space-y-1">
                  <h1 className="text-2xl text-black dark:text-white">
                    {channel?.name}
                  </h1>
                  <div className="flex space-x-2">
                    <p>{channel?.handleName}</p>
                    <p>•</p>
                    <p>{channel?.subscriber + " subscribers"}</p>
                  </div>
                  <p className="line-clamp-2">{channel?.description}</p>
                </div>
              </Link>
            ))}

            {data?.channel?.length > 0 && <Separator />}

            {data?.video?.map((video: any) => (
              <Link
                href={`/watch?=${video?.videoUrl}`}
                className="flex space-x-4"
              >
                <Image
                  src={video?.thumbnail}
                  alt={video?.title}
                  width={500}
                  height={500}
                  className="w-[200px] h-[120px] lg:w-[400px] lg:h-[220px] rounded-xl"
                />
                <div className="space-y-2">
                  <h1 className="text-xl line-clamp-2">{video?.title}</h1>

                  <div className="flex space-x-1">
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {millify(video?.viewCount) + " views"}
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      •
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {moment(video?.createdAt, "YYYYMMDD").fromNow()}
                    </p>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <Image
                      alt={video?.channel?.name}
                      src={video?.channel?.avatar}
                      width={68}
                      height={68}
                      className="rounded-full w-7 h-7"
                    />

                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {video?.channel?.name}
                    </p>
                  </div>

                  <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                    {video?.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
