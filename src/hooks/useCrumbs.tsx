import React, { useEffect, useState } from "react";

export interface Crumb {
  fullName: string;
  id: number;
}

const useCrumbs = () => {
  const [crumbs, setCrumbs] = useState<Crumb[]>([] as Crumb[]);

  useEffect(() => {
    console.log(crumbs);
  }, [crumbs]);

  return [crumbs, setCrumbs] as const;
};

export default useCrumbs;
