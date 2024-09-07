"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import Layout from "@/components/layout";
import { fetcher } from "@/hooks/useFetcher";

import ReactPlayer from "react-player";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  NotificationIcon,
  ShareIcon,
  SubscribedIcon,
  ThanksIcon,
} from "@/components/icons";
import ToastAlert from "@/components/toast";
import { getVideosDetails } from "@/hooks/video";
import { Skeleton } from "@/components/ui/skeleton";

const Page = () => {
  const params = useSearchParams().get("v") as string;
  const { data, loading, message, success } = getVideosDetails(params);

  return (
    <Layout>
      <div className="max-w-[1234px]  mx-32">
        {loading ? (
          <div className="space-y-5">
            <Skeleton className="w-[1200px] h-[670px] rounded-lg" />

            <div className="flex space-x-4 items-center">
              <Skeleton className="h-11 w-11 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-5 w-52 rounded-full" />
                <Skeleton className="h-5 w-32 rounded-full" />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-5 ">
            <ReactPlayer
              width={"1200px"}
              height={"670px"}
              url={`https://www.youtube.com/watch?v=${params}`}
            />

            <h1 className="font-bold text-lg">{data?.title}</h1>
            <div className="flex space-x-3 items-center justify-between">
              <div className="flex space-x-3 items-center">
                <Image
                  className="rounded-full"
                  alt={data?.title}
                  src={data?.channel?.avatar}
                  width={38}
                  height={38}
                />

                <div className="-space-y-1">
                  <h1 className="font-medium text-lg">{data?.channel?.name}</h1>
                  <p className="text-sm text-neutral-500">
                    {data?.channel?.subscriberCountText + " subscribers"}
                  </p>
                </div>

                <Button className="h-9 rounded-full" variant={"default"}>
                  <span>Subscribe</span>
                </Button>
              </div>

              <div className="flex space-x-3 items-center">
                <ToastAlert title={"Share"} icon={<ShareIcon />} />
                <ToastAlert title={"Download"} icon={<DownloadIcon />} />
                <ToastAlert title={"Thanks"} icon={<ThanksIcon />} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
