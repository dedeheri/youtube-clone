import React from "react";
import { Button } from "./ui/button";
import { DislikedVideoIcon, LikedVideoIcon, ShareIcon } from "./icons";
import { Separator } from "./ui/separator";
import ToastAlert from "./toast";
import { DownloadIcon } from "@radix-ui/react-icons";

const LikeDislike = ({
  videoId,
  likeCount,
  userLiked,
  onClick,
}: {
  videoId: string;
  onClick: (videoId: string, like: boolean) => void;
  likeCount: number;
  userLiked: boolean;
}) => {
  return (
    <div className="flex space-x-3 items-center">
      <div className="flex  rounded-full">
        <Button
          onClick={() => onClick(videoId, true)}
          variant="secondary"
          className="rounded-l-full space-x-2 flex items-center"
        >
          <LikedVideoIcon liked={userLiked} />

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
    </div>
  );
};

export default LikeDislike;
