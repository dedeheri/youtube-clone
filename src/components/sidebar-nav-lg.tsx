"use client";

import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import {
  GamingIcon,
  HistoryIcon,
  HomeIcon,
  LikedVideoIcon,
  MovieIcon,
  MusicIcon,
  NewsIcon,
  PlaylistIcon,
  ShortsIcon,
  SportsIcon,
  SubscriptionsIcon,
  TrendingIcon,
  UserIcon,
  WatchLaterIcon,
  YouIcon,
  YourVideosIcon,
} from "./icons";
import { usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const navChildOne = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Shorts",
    link: "/shorts",
    icon: <ShortsIcon />,
  },
  {
    name: "Subscriptions",
    link: "/subscriptions",
    icon: <SubscriptionsIcon />,
  },
];

const navChildTwo = [
  {
    name: "You",
    link: "/you",
    icon: <YouIcon />,
  },
  {
    name: "History",
    link: "/history",
    icon: <HistoryIcon />,
  },
];

const navChildThree = [
  {
    name: "Trending",
    link: "/trending",
    icon: <TrendingIcon />,
  },
  {
    name: "Music",
    link: "/music",
    icon: <MusicIcon />,
  },
  {
    name: "Movie",
    link: "/movie",
    icon: <MovieIcon />,
  },
  {
    name: "Gaming",
    link: "/gaming",
    icon: <GamingIcon />,
  },
  {
    name: "News",
    link: "/news",
    icon: <NewsIcon />,
  },
  {
    name: "Sports",
    link: "/sports",
    icon: <SportsIcon />,
  },
];

const navChildFour = [
  {
    name: "Playlist",
    link: "/playlist",
    icon: <PlaylistIcon />,
  },
  {
    name: "Your vidoes",
    link: "/your-vidoes",
    icon: <YourVideosIcon />,
  },
  {
    name: "Watch later",
    link: "/watch-later",
    icon: <WatchLaterIcon />,
  },
  {
    name: "liked videos",
    link: "/liked-videos",
    icon: <LikedVideoIcon />,
  },
];

const SidebarNavLg = () => {
  const { data: session } = useSession();

  const pathName = usePathname();
  return (
    <ScrollArea className="w-[240px]  lg:block hidden">
      {navChildOne?.map(({ name, link, icon }, i) => (
        <Button
          className="flex justify-start w-[220px]  h-10 rounded-xl space-x-6 mx-2"
          variant={pathName === link ? "secondary" : "ghost"}
        >
          {icon}
          <p className={pathName === link ? "font-medium" : "font-normal"}>
            {name}
          </p>
        </Button>
      ))}

      <Separator className="my-3" />

      {navChildTwo?.map(({ name, link, icon }, i) => (
        <Button
          className="flex justify-start w-[220px]  h-10 rounded-xl space-x-6 mx-2"
          variant={pathName === link ? "secondary" : "ghost"}
        >
          {icon}
          <p className={pathName === link ? "font-medium" : "font-normal"}>
            {name}
          </p>
        </Button>
      ))}

      {session &&
        navChildFour?.map(({ name, link, icon }, i) => (
          <Button
            className="flex justify-start w-[220px]  h-10 rounded-xl space-x-6 mx-2"
            variant={pathName === link ? "secondary" : "ghost"}
          >
            {icon}
            <p className={pathName === link ? "font-medium" : "font-normal"}>
              {name}
            </p>
          </Button>
        ))}

      <Separator className="my-3" />

      {!session && (
        <>
          <div className="mx-8 space-y-3">
            <p className="text-sm">
              Sign in to like videos, comment, and subscribe.
            </p>
            <Button
              onClick={() => signIn("google")}
              variant="ghost"
              className="border h-9 w-[6rem]  rounded-full  justify-center flex items-center space-x-2"
            >
              <UserIcon />
              <span className="text-blue-500">Sign in</span>
            </Button>
          </div>

          <Separator className="my-3" />
        </>
      )}

      <h1 className="px-7 my-1 font-medium">Explore</h1>
      {navChildThree?.map(({ name, link, icon }, i) => (
        <Button
          className="flex justify-start w-[220px]  h-10 rounded-xl space-x-6 mx-2"
          variant={pathName === link ? "secondary" : "ghost"}
        >
          {icon}
          <p className={pathName === link ? "font-medium" : "font-normal"}>
            {name}
          </p>
        </Button>
      ))}
    </ScrollArea>
  );
};

export default SidebarNavLg;
