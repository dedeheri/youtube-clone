import { getVideos } from "@/hooks/video";
import millify from "millify";
import moment from "moment";
import Image from "next/image";
import React from "react";
import DropdownVideo from "./dropdown-video";

interface IVideoDetailRecommended {
  recommend: string;
}

const VideoDetailRecommended = ({ recommend }: IVideoDetailRecommended) => {
  const { data } = getVideos(recommend);

  return (
    <div className="w-full lg:w-[25rem] space-y-3 ">
      {data?.map((video: any) => (
        <div className="flex space-x-3">
          <Image
            src={video?.thumbnail}
            width={170}
            height={170}
            alt={video?.title}
            className="rounded-xl"
          />
          <div>
            <div className="flex ">
              <h1 className="line-clamp-2 h-12 w-full lg:w-[12rem]">
                {video?.title}
              </h1>
              <DropdownVideo />
            </div>
            <p className="text-neutral-500 text-sm ">{video?.channel?.name}</p>
            <div className="flex space-x-2 text-neutral-500 text-sm">
              <p> {millify(video?.viewCount) + " views"}</p>
              <p>•</p>
              <p>{moment(video?.createdAt, "YYYYMMDD").fromNow()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoDetailRecommended;
