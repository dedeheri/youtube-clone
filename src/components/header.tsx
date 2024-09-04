"use client";

import React from "react";
import Image from "next/image";

import { menu, mic, search, user, ytbLogo } from "@/assets";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import UserToggle from "./user-toggle";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky h-20 top-0 bg-white">
      <header className="h-14 w-full px-7 flex items-center relative justify-between">
        <div className="flex items-center space-x-4">
          <Image src={menu} alt="menu" />
          <Image src={ytbLogo} alt="ytb logo" className="w-24 h-24" />
        </div>
        {/* search */}
        <div className="absolute hidden top-2 md:w-[300px] lg:w-[600px] mx-auto left-0 right-0 items-center md:flex space-x-3">
          <div className="border h-10 w-full rounded-full flex justify-between ">
            <input
              placeholder="search"
              className="px-5 outline-none bg-transparent text-black"
            />
            <div className="bg-neutral-100 h-full w-16 rounded-r-full flex justify-center items-center border-l">
              <Image src={search} alt="search" />
            </div>
          </div>
          <div className="bg-neutral-100 rounded-full flex justify-center items-center h-10 w-10">
            <Image src={mic} alt="mic" />
          </div>
        </div>

        <div className="flex space-x-3 items-center">
          <div className="space-x-3 flex items-center md:hidden">
            <Image src={search} alt="search" />
            <Image src={mic} alt="mic" />
          </div>

          {/* login */}
          {session ? (
            <UserToggle user={session?.user} />
          ) : (
            <Button
              onClick={() => signIn("google")}
              variant="ghost"
              className="border h-8 w-24 md:h-9 md:w-24 rounded-full  justify-center flex items-center space-x-2"
            >
              <Image src={user} alt="user" />
              <span className="text-blue-500">Login</span>
            </Button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
