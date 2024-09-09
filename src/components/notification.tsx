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
import { getVideos } from "@/hooks/video";

const Notification = () => {
  const { data, loading } = getVideos("All");

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" className="rounded-full px-2">
          <NotificationIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="absolute top-0 right-0 w-[20rem] md:w-[30rem] p-0 rounded-xl border-none shadow-2xl">
        <div>
          <h1 className="border-b p-3">Notifications</h1>

          <ScrollArea className="h-[30rem] space-y-4 ">
            {data?.slice(0, 7)?.map((data: any, i: string) => (
              <Link key={i} href={`/watch?v=${data?.videoId}`}>
                <div className="flex space-x-2 justify-between py-3 hover:bg-neutral-100 hover:dark:bg-neutral-700 px-4">
                  <div className="flex space-x-4">
                    <Image
                      alt={data?.title}
                      src={data?.channel?.avatar}
                      width={70}
                      height={70}
                      className="rounded-full w-12 h-12"
                    />

                    <div>
                      <p className="text-sm">{data?.title}</p>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                        {moment(data?.createdAt, "YYYYMMDD").fromNow()}
                      </p>
                    </div>
                  </div>
                  <Image
                    alt={data?.title}
                    src={data?.thumbnail}
                    width={100}
                    height={100}
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
