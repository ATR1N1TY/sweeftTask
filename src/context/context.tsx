import React, { createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const globalContext = createContext({} as any);

const ContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  //   const data = useFetch();

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  return (
    <globalContext.Provider value={"data"}>{children}</globalContext.Provider>
  );
};

export default ContextProvider;
