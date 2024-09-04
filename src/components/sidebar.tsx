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

const links = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: home,
  },
  {
    id: 2,
    name: "Shorts",
    link: "/shorts",
    icon: shorts,
  },
  {
    id: 3,
    name: "Subscraptions",
    link: "/subscraptions",
    icon: subscraptions,
  },
];

const user = [
  {
    name: "you",
    url: "feed/you",
    icon: you,
  },
  {
    name: "history",
    url: "history",
    icon: history,
  },
];

const explore = [
  {
    name: "Trending",
    url: "/trending",
    icon: trending,
  },
  {
    name: "Music",
    url: "/music",
    icon: music,
  },
  {
    name: "Movie",
    url: "/movie",
    icon: movie,
  },
  {
    name: "Gaming",
    url: "/gaming",
    icon: gaming,
  },
  {
    name: "News",
    url: "/news",
    icon: news,
  },
  {
    name: "Sports",
    url: "/sports",
    icon: sports,
  },
];

const sideLinkMd = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: home,
  },
  {
    id: 2,
    name: "Shorts",
    link: "/shorts",
    icon: shorts,
  },
  {
    id: 3,
    name: "Subscraptions",
    link: "/subscraptions",
    icon: subscraptions,
  },
  {
    id: 4,
    name: "You",
    link: "/you",
    icon: you,
  },
  {
    id: 5,
    name: "History",
    link: "/history",
    icon: history,
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="fixed bg-white md:block z-10 top-16 h-screen">
      {/* lg */}
      <ScrollArea className="w-[240px] hidden lg:block">
        <div className=" w-[210px]">
          {links?.map(({ id, link, name, icon }) => (
            <div key={id} className="w-full flex flex-col py-0.5">
              <Button
                className="flex justify-start space-x-6 mx-2"
                variant={pathName === link ? "secondary" : "ghost"}
              >
                <Image src={icon} alt={name} />
                <p
                  className={pathName === link ? "font-medium" : "font-normal"}
                >
                  {name}
                </p>
              </Button>
            </div>
          ))}

          <Separator className="my-3" />

          {/* user */}
          {user?.map(({ url, name, icon }, i) => (
            <div key={i} className="w-full flex flex-col py-0.5">
              <Button
                className="flex justify-start space-x-6 mx-2"
                variant={pathName === url ? "secondary" : "ghost"}
              >
                <Image src={icon} alt={name} />
                <p className={pathName === url ? "font-medium" : "font-normal"}>
                  {name}
                </p>
              </Button>
            </div>
          ))}
          <Separator className="my-3" />
          {/* expoler */}

          <h1 className="ml-6 mb-2 text-black font-medium">Explore</h1>

          {explore?.map(({ url, name, icon }, i) => (
            <div key={i} className="w-full flex flex-col py-0.5">
              <Button
                className="flex justify-start space-x-6 mx-2"
                variant={pathName === url ? "secondary" : "ghost"}
              >
                <Image src={icon} alt={name} />
                <p className={pathName === url ? "font-medium" : "font-normal"}>
                  {name}
                </p>
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* md */}
      <ScrollArea className="hidden md:block lg:hidden">
        <div className="w-20 h-screen flex flex-col items-center space-y-6">
          {sideLinkMd?.map(({ id, link, name, icon }) => (
            <Link key={id} href={link}>
              <Button className="flex flex-col" variant={"ghost"}>
                <Image src={icon} alt={name} />
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
