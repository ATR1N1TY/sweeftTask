import React, { createContext } from "react";
import useCrumbs from "../hooks/useCrumbs";

export const globalContext = createContext({} as any);

//as you might think for this small application context is really useless
//but what if developers decide to add more complex state?
//so I will not remove context as I also use useCrumbs hook there

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
