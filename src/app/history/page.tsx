"use client";

import Layout from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";
import VideoHistory from "@/components/video-history";
import { getVideosHistory } from "@/hooks/video";
import React from "react";

const Page = () => {
  const { data, loading, success, message } = getVideosHistory();

  return (
    <Layout sidebar={true}>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Watch history</h1>

        {loading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="flex space-x-4 w-full">
              <Skeleton className="rounded-xl h-[7rem] w-[16rem]" />

              <div className="w-full space-y-3">
                <Skeleton className="rounded-xl h-5 w-full" />
                <Skeleton className="rounded-xl h-5 w-1/2" />
                <Skeleton className="rounded-xl h-5 w-1/2" />
              </div>
            </div>
          ))
        ) : !success ? (
          <h1 className="text-lg"> {message}</h1>
        ) : (
          data?.map((data: any) => (
            <VideoHistory
              key={data?.id}
              videoUrl={data?.video?.videoUrl}
              title={data?.video?.title}
              description={data?.video?.description}
              thumbnail={data?.video?.thumbnail}
              viewCount={data?.video?.viewCount}
              channelName={data?.video?.channel?.name}
              channelHandle={data?.video?.channel?.handleName}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Page;
