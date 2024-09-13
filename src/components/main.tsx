"use client";

import React, { useContext } from "react";
import { Skeleton } from "./ui/skeleton";
import { getVideos } from "@/hooks/video";
import { Context } from "./context-provider";
import VideoMain from "./video-main";
import { IVideoMain } from "@/types/video-main";

export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-11 w-full">
      {children}
    </div>
  );
};

const Main = () => {
  const { FILTER_VIDEO } = useContext(Context);

  const { data, loading, success, message } = getVideos(FILTER_VIDEO);

  if (loading) {
    return (
      <Grid>
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} className="w-full h-48 rounded-xl" />
        ))}
      </Grid>
    );
  }

  if (!loading) {
    if (!success) {
      return (
        <div className="flex justify-center w-full pt-20">
          <h1 className="text-2xl font-medium">{message}</h1>
        </div>
      );
    }
  }

  return (
    <Grid>
      {data?.map((result: IVideoMain) => (
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
    </Grid>
  );
};

export default Main;
