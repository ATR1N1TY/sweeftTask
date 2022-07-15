import React, { useState } from "react";
import { Crumb } from "../types/types";

//this is a really simple hook, it's just one array of users indicating previous visited users

const useCrumbs = (): readonly [
  Crumb[],
  React.Dispatch<React.SetStateAction<Crumb[]>>
] => {
  const [crumbs, setCrumbs] = useState<Crumb[]>([] as Crumb[]);

  return [crumbs, setCrumbs] as const;
};

export default useCrumbs;
