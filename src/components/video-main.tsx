import Link from "next/link";
import DropdownVideo from "./dropdown-video";
import millify from "millify";
import moment from "moment";
import Image from "next/image";

interface IVideoMain {
  id: string;
  videoUrl: string;
  title: string;
  thumbnail: string;
  viewCount: number;
  createdAt: string;
  channelAvatar: string;
  channelName: string;
}

const VideoMain = ({
  id,
  videoUrl,
  title,
  thumbnail,
  viewCount,
  createdAt,
  channelAvatar,
  channelName,
}: IVideoMain) => {
  return (
    <div key={id} className="space-y-3">
      <Link href={`watch?v=${videoUrl}`}>
        <Image
          alt={title}
          src={thumbnail}
          width={720}
          height={404}
          className="rounded-xl w-full w"
        />
      </Link>
      <div className="flex space-x-3">
        <Image
          alt={title}
          src={channelAvatar}
          width={68}
          height={68}
          className="rounded-full w-9 h-9"
        />

        <div className="space-y-1">
          <div className="flex justify-between space-x-4">
            <Link href={`watch?v=${videoUrl}`}>
              <h1 className="font-medium leading-5 text-base  line-clamp-2">
                {title}
              </h1>
            </Link>
            <DropdownVideo />
          </div>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            {channelName}
          </p>
          <div className="flex space-x-1">
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              {millify(viewCount) + " views"}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">•</p>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              {moment(createdAt, "YYYYMMDD").fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMain;
