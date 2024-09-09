"use client";

import { createContext, useState } from "react";

interface IContextProvider {
  children: React.ReactNode;
}

interface IContext {
  SHOW_SIDEBAR_MOBILE: boolean;
  SET_SHOW_SIDEBAR_MOBILE: any;

  SHOW_SIDEBAR_DEKSTOP: boolean;
  SET_SHOW_SIDEBAR_DEKSTOP: any;

  FILTER_VIDEO: string;
  SET_FILTER_VIDEO: any;
}

const Context = createContext<IContext>({
  SHOW_SIDEBAR_MOBILE: false,
  SET_SHOW_SIDEBAR_MOBILE: () => {},

  SHOW_SIDEBAR_DEKSTOP: false,
  SET_SHOW_SIDEBAR_DEKSTOP: () => {},

  FILTER_VIDEO: "All",
  SET_FILTER_VIDEO: () => {},
});

const ContextProvider = ({ children }: IContextProvider) => {
  const [SHOW_SIDEBAR_MOBILE, SET_SHOW_SIDEBAR_MOBILE] =
    useState<boolean>(false);
  const [SHOW_SIDEBAR_DEKSTOP, SET_SHOW_SIDEBAR_DEKSTOP] =
    useState<boolean>(false);

  const [FILTER_VIDEO, SET_FILTER_VIDEO] = useState<string>("All");

  return (
    <Context.Provider
      value={{
        SHOW_SIDEBAR_MOBILE,
        SET_SHOW_SIDEBAR_MOBILE,

        SHOW_SIDEBAR_DEKSTOP,
        SET_SHOW_SIDEBAR_DEKSTOP,

        FILTER_VIDEO,
        SET_FILTER_VIDEO,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
