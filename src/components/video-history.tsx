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
    <div className="flex  space-x-4">
      <Image
        src={thumbnail}
        alt={title}
        width={210}
        height={210}
        className="rounded-xl"
      />

      <div>
        <Link href={`/watch?v=${videoUrl}`}>
          <h1>{title}</h1>
        </Link>

        <div className="text-neutral-600 flex space-x-4 text-sm">
          <Link href={`/${channelHandle}`}>{channelName}</Link>
          <p> {millify(viewCount) + " views"}</p>
        </div>
        <h1 className="text-neutral-600 line-clamp-2 text-sm">{description}</h1>
      </div>
    </div>
  );
};

export default VideoHistory;
