import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  HistoryIcon,
  HomeIcon,
  ShortsIcon,
  SubscriptionsIcon,
  YouIcon,
} from "./icons";

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

const SidebarNavMd = () => {
  return (
    <ScrollArea>
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
  );
};

export default SidebarNavMd;
