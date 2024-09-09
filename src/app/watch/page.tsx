"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import Layout from "@/components/layout";

import { getVideosDetails } from "@/hooks/video";
import { Skeleton } from "@/components/ui/skeleton";
import VideoDetail from "@/components/video-detail";
import VideoDetailRecommended from "@/components/video-detail-recommend";

const Page = () => {
  const params = useSearchParams().get("v") as string;
  const { data, loading, message, success } = getVideosDetails(params);

  return (
    <Layout>
      <div className="mt-20 lg:mx-32">
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
          <div className="flex space-x-6">
            <VideoDetail
              videoUrl={data?.videoUrl}
              title={data?.title}
              likeCount={data?.likeCount}
              channelAvatar={data?.channel?.avatar}
              channelName={data?.channel?.name}
              channelSubscriber={data?.channel?.subscriber}
            />

            <VideoDetailRecommended recommend={data?.channel?.name} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
