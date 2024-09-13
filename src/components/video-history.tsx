import millify from "millify";
import Image from "next/image";
import Link from "next/link";

interface IVideoHistory {
  title: string;
  videoUrl: string;
  description: string;
  thumbnail: string;
  viewCount: number;
  channelName: string;
  channelHandle: string;
}

const VideoHistory = ({
  title,
  videoUrl,
  description,
  thumbnail,
  viewCount,
  channelName,
  channelHandle,
}: IVideoHistory) => {
  return (
    <div className="flex w-full  space-x-4">
      <Image
        src={thumbnail}
        alt={title}
        width={210}
        height={210}
        className="rounded-xl h-[7rem] w-[13rem]"
      />

      <div className="space-y-1">
        <Link href={`/watch?v=${videoUrl}`}>
          <h1 className="line-clamp-2">{title}</h1>
        </Link>

        <div className="text-neutral-600 dark:text-neutral-400 flex space-x-2 text-sm">
          <Link href={`/${channelHandle}`}>{channelName}</Link>
          <p>•</p>
          <p> {millify(viewCount) + " views"}</p>
        </div>
        <h1 className="text-neutral-600 dark:text-neutral-400 line-clamp-2 text-sm">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default VideoHistory;
