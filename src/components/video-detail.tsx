import { IVideoDetail } from "@/types/video-main";
import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "./ui/button";
import ToastAlert from "./toast";
import {
  DislikedVideoIcon,
  LikedVideoIcon,
  ShareIcon,
  ThanksIcon,
} from "./icons";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";
import millify from "millify";
import moment from "moment";
import LikeDislike from "./like-dislike";
import { getVideosLike } from "@/hooks/video";
import axios from "axios";

const VideoDetail = ({
  videoId,
  videoUrl,
  title,
  description,
  viewCount,
  channelAvatar,
  channelName,
  createdAt,
  channelSubscriber,
}: IVideoDetail) => {
  const [sucessLiked, setSuccessLike] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const { data } = getVideosLike(sucessLiked, videoId);

  const handleLikeOrDikslike = async (videoId: string, like: boolean) => {
    try {
      const response = await axios.post(`/api/v1/video/like`, {
        videoId,
        like,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      setSuccessLike(false);
    } finally {
      setSuccessLike(true);
    }
  };

  return (
    <div className="space-y-3 md:w-[800px] lg:w-[1140px] lg:h-[670px]">
      <div className="w-full rounded-xl  h-[300px] md:w-[820px] md:h-[500px] lg:w-[1140px] lg:h-[670px]">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={`https://www.youtube.com/watch?v=${videoUrl}`}
        />
      </div>

      <h1 className="font-bold text-lg">{title}</h1>
      <div className="space-y-3 lg:space-y-0 lg:flex space-x-2 items-center justify-between">
        <div className="flex space-x-3 items-center">
          <Image
            className="rounded-full"
            alt={title}
            src={channelAvatar}
            width={38}
            height={38}
          />

          <div className="-space-y-1">
            <h1 className="font-medium text-lg">{channelName}</h1>
            <p className="text-sm text-neutral-500">
              {channelSubscriber + " subscribers"}
            </p>
          </div>

          <Button className="h-9 rounded-full" variant={"default"}>
            <span>Subscribe</span>
          </Button>
        </div>

        <LikeDislike
          onClick={handleLikeOrDikslike}
          videoId={videoId}
          likeCount={data?.totalLike}
          userLiked={data?.userLike}
        />
      </div>

      <div className="bg-neutral-100 w-full p-3 rounded-xl space-y-2">
        <div className="flex space-x-3 font-medium">
          <p>{millify(viewCount)} views</p>
          <p> {moment(createdAt, "YYYYMMDD").fromNow()} views</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
