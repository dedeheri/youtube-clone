import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

import { Toaster } from "@/components/ui/toaster";

const Layout = ({
  children,
  sidebar = false,
}: {
  children: React.ReactNode;
  sidebar?: boolean;
}) => {
  return (
    <div className="bg-white dark:bg-black h-screen">
      <Toaster />
      <Header />
      <div className="flex max-w-full">
        {sidebar && <Sidebar />}

        <div
          className={`w-full mt-20 ml-0 ${
            sidebar
              ? "space-y-3 w-full px-5 md:px-14 overflow-hidden  md:ml-[5rem] lg:ml-[13.7rem]"
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
