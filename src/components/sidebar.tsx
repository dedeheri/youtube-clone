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
import { useContext } from "react";
import { Context } from "./context-provider";
import SidebarNavMd from "./sidebar-nav-md";

const Sidebar = () => {
  const { SHOW_SIDEBAR_DEKSTOP } = useContext(Context);

  return (
    <aside className="fixed bg-white dark:bg-black md:block z-10 top-[4.5rem] h-screen">
      <div className="hidden lg:block">
        {SHOW_SIDEBAR_DEKSTOP ? <SidebarNavMd /> : <SidebarNavLg />}
      </div>
    </aside>
  );
};

export default Sidebar;
