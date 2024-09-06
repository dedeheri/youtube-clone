"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  gaming,
  history,
  home,
  movie,
  music,
  news,
  shorts,
  sports,
  subscraptions,
  trending,
  you,
} from "@/assets";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";
import {
  HistoryIcon,
  HomeIcon,
  ShortsIcon,
  SubscriptionsIcon,
  YouIcon,
} from "./icons";
import SidebarNavLg from "./sidebar-nav-lg";

const sideLinkMd = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Shorts",
    link: "/shorts",
    icon: <ShortsIcon />,
  },
  {
    id: 3,
    name: "Subscraptions",
    link: "/subscraptions",
    icon: <SubscriptionsIcon />,
  },
  {
    id: 4,
    name: "You",
    link: "/you",
    icon: <YouIcon />,
  },
  {
    id: 5,
    name: "History",
    link: "/history",
    icon: <HistoryIcon />,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed bg-white dark:bg-black md:block z-10 top-[4.5rem] h-screen">
      {/* lg */}
      <SidebarNavLg />
      {/* md */}
      <ScrollArea className="hidden md:block lg:hidden">
        <div className="w-20 h-screen flex flex-col items-center space-y-3">
          {sideLinkMd?.map(({ id, link, name, icon }) => (
            <Link key={id} href={link}>
              <Button className="flex flex-col h-14" variant={"ghost"}>
                {icon}
                <p className="text-[0.6rem]">{name}</p>
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
