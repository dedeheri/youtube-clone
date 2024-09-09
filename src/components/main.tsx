"use client";

import React, { useContext } from "react";
import { Skeleton } from "./ui/skeleton";
import { getVideos } from "@/hooks/video";
import { Context } from "./context-provider";
import VideoMain from "./video-main";
import { IVideoMain } from "@/types/video-main";

const Main = () => {
  const { FILTER_VIDEO } = useContext(Context);

  const { data, loading } = getVideos(FILTER_VIDEO);

  return (
    <div className="pt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-11 w-full">
      {loading
        ? [...Array(10)].map((_, i) => (
            <Skeleton key={i} className="w-[19rem] h-48 rounded-xl" />
          ))
        : data?.map((result: IVideoMain) => (
            <VideoMain
              id={result?.id}
              videoUrl={result?.videoUrl}
              title={result?.title}
              thumbnail={result?.thumbnail}
              viewCount={result?.viewCount}
              createdAt={result?.createdAt}
              channelAvatar={result?.channel?.avatar}
              channelName={result?.channel?.name}
            />
          ))}
    </div>
  );
};

export default Main;
