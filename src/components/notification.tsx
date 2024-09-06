import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { NotificationIcon } from "./icons";
import useSWR from "swr";
import { fetcher } from "@/hooks/useFetcher";
import Image from "next/image";
import moment from "moment";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

const Notification = () => {
  const url = "https://yt-api.p.rapidapi.com/trending?geo=US";
  const { data, isLoading, error } = useSWR(url, fetcher);

  const sortType = data?.data?.filter((res: any) => res.type === "video");

  console.log(sortType);

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" className="rounded-full px-2">
          <NotificationIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="absolute top-0 right-0 w-[20rem] md:w-[30rem] ">
        <div>
          <h1>Notifications</h1>

          <ScrollArea className="h-[30rem] space-y-4">
            {sortType?.slice(0, 10)?.map((data: any, i: string) => (
              <Link href={`/watch?v=${data?.videoId}`}>
                <div className="flex space-x-2 justify-between py-3 hover:dark:bg-neutral-700">
                  <div className="flex space-x-4">
                    <Image
                      alt={data?.title}
                      src={data?.channelThumbnail?.[0]?.url}
                      width={data?.channelThumbnail?.[0]?.width}
                      height={data?.channelThumbnail?.[0]?.height}
                      className="rounded-full w-12 h-12"
                    />

                    <div>
                      <p className="text-sm">{data?.title}</p>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                        {moment(data?.publishDate, "YYYYMMDD").fromNow()}
                      </p>
                    </div>
                  </div>
                  <Image
                    alt={data?.title}
                    src={data?.thumbnail?.[1]?.url}
                    width={data?.thumbnail?.[2]?.width}
                    height={data?.thumbnail?.[2]?.height}
                    className="rounded-lg w-[86px] h-[48px]"
                  />
                </div>
              </Link>
            ))}
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notification;
