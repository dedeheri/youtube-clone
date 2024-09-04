import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex max-w-full">
        <Sidebar />
        <div className="space-y-3 w-full overflow-hidden px-5 ml-0 md:ml-[5rem] lg:ml-60">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
