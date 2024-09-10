"use client";

import Header from "./header";
import Sidebar from "./sidebar";

import { Toaster } from "@/components/ui/toaster";
import SidebarCollapse from "./sidebar-collapse";
import { Context } from "./context-provider";
import { useContext } from "react";

const Layout = ({
  children,
  sidebar = false,
}: {
  children: React.ReactNode;
  sidebar?: boolean;
}) => {
  const { SHOW_SIDEBAR_DEKSTOP } = useContext(Context);

  return (
    <div className="bg-white dark:bg-black h-screen">
      <Toaster />
      <Header />
      <div className="flex max-w-full">
        {sidebar && <Sidebar />}
        <SidebarCollapse />

        <div
          className={`w-full pt-28  ml-0 ${
            sidebar
              ? `space-y-3 w-full mb-20 px-5 lg:px-14 overflow-hidden   ${
                  SHOW_SIDEBAR_DEKSTOP
                    ? "ml-0 lg:ml-[3rem]"
                    : " lg:ml-[13.7rem]"
                }`
              : "mx-0 md:mx-6"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
