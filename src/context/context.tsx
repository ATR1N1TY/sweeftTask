import React, { createContext } from "react";
import useCrumbs from "../hooks/useCrumbs";

export const globalContext = createContext({} as any);

const ContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [crumbs, setCrumbs] = useCrumbs();

  return (
    <globalContext.Provider value={{ crumbs, setCrumbs }}>
      {children}
    </globalContext.Provider>
  );
};

export default ContextProvider;
