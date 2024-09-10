import { IVideoDetail } from "@/types/video-main";
import Image from "next/image";
import React from "react";
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

const VideoDetail = ({
  videoUrl,
  title,
  likeCount,
  channelAvatar,
  channelName,
  channelSubscriber,
}: IVideoDetail) => {
  return (
    <div className="space-y-3 ">
      <div className="md:w-[910px] md:h-[500px] lg:w-[1200px] lg:h-[670px] rounded-xl">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={`https://www.youtube.com/watch?v=${videoUrl}`}
        />
      </div>

      <h1 className="font-bold text-lg">{title}</h1>
      <div className="flex space-x-2 items-center justify-between">
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

        <div className="flex space-x-3 items-center">
          <div className="flex  rounded-full">
            <Button
              variant="secondary"
              className="rounded-l-full space-x-2 flex items-center"
            >
              <LikedVideoIcon liked={likeCount > 1 ? true : false} />

              <span>{likeCount}</span>
            </Button>

            <Separator orientation="vertical" />

            <Button
              variant="secondary"
              className="rounded-r-full space-x-2 flex items-center"
            >
              <DislikedVideoIcon />
            </Button>
          </div>

          <ToastAlert title={"Share"} icon={<ShareIcon />} />
          <ToastAlert title={"Download"} icon={<DownloadIcon />} />
          <ToastAlert title={"Thanks"} icon={<ThanksIcon />} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
