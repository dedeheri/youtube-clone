"use client";

import Layout from "@/components/layout";
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
          <h1>Loading...</h1>
        ) : (
          data?.map((data: any) => (
            <VideoHistory
              key={data?.id}
              videoUrl={data?.video?.videoUrl}
              title={data?.video?.title}
              description={data?.video?.description}
              thumbnail={data?.video?.thumbnail}
              viewCount={data?.video?.viewCount}
              channelName={data?.channel?.name}
              channelHandle={data?.channel?.handleName}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Page;
