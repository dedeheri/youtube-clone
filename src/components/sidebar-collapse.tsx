import React, { useContext } from "react";
import SidebarNavLg from "./sidebar-nav-lg";
import { Context } from "./context-provider";

const SidebarCollapse = () => {
  const { SHOW_SIDEBAR_MOBILE } = useContext(Context);

  return (
    <div
      className={` w-full fixed h-full z-40 ${
        SHOW_SIDEBAR_MOBILE
          ? "backdrop-brightness-50 -translate-x-0 "
          : "-translate-x-full "
      }`}
    >
      <div
        className={`w-[15rem] h-full bg-white dark:bg-black p-2 pl-1  ease-in-out duration-300 ${
          SHOW_SIDEBAR_MOBILE ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <SidebarNavLg position="collapse" />
      </div>
    </div>
  );
};

export default SidebarCollapse;
