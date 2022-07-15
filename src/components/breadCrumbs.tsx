import React, { useContext } from "react";
import { globalContext } from "../context/context";
import { Crumb } from "../types/types";
import Link from "next/link";

//BreadCrumbs component used in single user page

const BreadCrumbs = () => {
  const { crumbs } = useContext(globalContext);

  return (
    <div className="breadcrumbs hover:cursor-pointer p-4">
      {crumbs.map((crumb: Crumb, idx: number) => {
        return (
          <Link href={`/user/${crumb.id}`} key={crumb.id}>
            <span className="crumb">
              <span className="underline text-purple-800">
                {crumb.fullName}
              </span>
              {crumbs.length - 1 === idx ? "" : ">"}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
