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

const Page = () => {
  const params = useSearchParams().get("v");
  const url = `https://yt-api.p.rapidapi.com/video/info?id=${params}`;

  const { data, isLoading } = useSWR(url, fetcher);

  // chanel data
  const channelUrl = `https://yt-api.p.rapidapi.com/channel/about?id=${data?.channelId}`;
  const { data: channelData, isLoading: channelIsLoading } = useSWR(
    channelUrl,
    fetcher
  );

  return (
    <Layout>
      <div className="space-y-5 max-w-[1234px] mx-32">
        <ReactPlayer
          width={"1234px"}
          height={"750px"}
          style={{ borderRadius: "10%" }}
          url={`https://www.youtube.com/watch?v=${params}`}
        />

        <h1 className="font-bold text-lg">{data?.title}</h1>
        <div className="flex space-x-3 items-center justify-between">
          <div className="flex space-x-3 items-center">
            <Image
              className="rounded-full"
              alt={channelData?.avatar?.[1]?.url}
              src={channelData?.avatar?.[1]?.url}
              width={38}
              height={38}
            />

            <div className="-space-y-1">
              <h1 className="font-medium text-lg">{channelData?.title}</h1>
              <p className="text-sm text-neutral-500">
                {channelData?.subscriberCountText + " subscribers"}
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
    </Layout>
  );
};

export default Page;
