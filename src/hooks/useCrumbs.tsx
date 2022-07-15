import React, { useState } from "react";
import { Crumb } from "../types";

const useCrumbs = (): readonly [
  Crumb[],
  React.Dispatch<React.SetStateAction<Crumb[]>>
] => {
  const [crumbs, setCrumbs] = useState<Crumb[]>([] as Crumb[]);

  return [crumbs, setCrumbs] as const;
};

export default useCrumbs;
