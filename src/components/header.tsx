"use client";

import React, { useContext } from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import UserToggle from "./user-toggle";
import { IUser } from "@/interface/user";
import { MenuIcon, MicIcon, SearchIcon, UserIcon, YoutubeIcon } from "./icons";
import Notification from "./notification";
import { Context } from "./context-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const { data: session } = useSession();

  const {
    SET_SHOW_SIDEBAR_MOBILE,
    SHOW_SIDEBAR_DEKSTOP,
    SET_SHOW_SIDEBAR_DEKSTOP,
  } = useContext(Context);

  return (
    <div className="fixed h-20 top-0 bg-white dark:bg-black w-full">
      <header className="h-14 w-full px-4 flex items-center relative justify-between">
        <div className="hidden lg:flex items-center space-x-6">
          {pathName === "/" ? (
            <Button
              onClick={() => SET_SHOW_SIDEBAR_DEKSTOP(!SHOW_SIDEBAR_DEKSTOP)}
              variant="ghost"
              className="rounded-full p-0 px-1.5 "
            >
              <MenuIcon />
            </Button>
          ) : (
            <Button
              onClick={() => SET_SHOW_SIDEBAR_MOBILE(true)}
              variant="ghost"
              className="rounded-full p-0 px-1.5 "
            >
              <MenuIcon />
            </Button>
          )}

          <Link href={"/"}>
            <YoutubeIcon />
          </Link>
        </div>

        <div className="flex lg:hidden  items-center space-x-6">
          <Button
            onClick={() => SET_SHOW_SIDEBAR_MOBILE(true)}
            variant="ghost"
            className="rounded-full p-0 px-1.5 "
          >
            <MenuIcon />
          </Button>

          <Link href={"/"}>
            <YoutubeIcon />
          </Link>
        </div>
        {/* search */}
        <div className="absolute hidden top-2 md:w-[500px] justify-center lg:w-[600px] mx-auto left-0 right-0 items-center md:flex space-x-3">
          <div className="border h-10 lg:w-full rounded-full flex justify-between ">
            <input
              placeholder="search"
              className="px-5 outline-none bg-transparent w-full text-black"
            />
            <div className="bg-neutral-100 dark:bg-neutral-800 h-full w-16 rounded-r-full flex justify-center items-center border-l">
              <SearchIcon />
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-full flex justify-center items-center h-10 w-10">
            <MicIcon />
          </div>
        </div>

        <div className="flex space-x-3 items-center">
          <div className="space-x-3 flex items-center md:hidden">
            <SearchIcon />
            <MicIcon />
          </div>

          {/* login */}
          {session ? (
            <div className="flex items-center space-x-4">
              <Notification />
              <UserToggle user={session as IUser} />
            </div>
          ) : (
            <Button
              onClick={() => signIn("google")}
              variant="ghost"
              className="border h-10 w-28  rounded-full  justify-center flex items-center space-x-2"
            >
              <UserIcon />
              <span className="text-blue-500">Sign in</span>
            </Button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
