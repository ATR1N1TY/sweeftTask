import React, { useContext } from "react";
import { globalContext } from "../context/context";
import { Crumb } from "../hooks/useCrumbs";
import Link from "next/link";

const BreadCrumbs = () => {
  const { crumbs } = useContext(globalContext);

  return (
    <div className="breadcrumbs hover:cursor-pointer">
      {crumbs.map((crumb: Crumb) => {
        return (
          <Link href={`/user/${crumb.id}`} key={crumb.id}>
            <span className="crumb">
              <span className="underline">{crumb.fullName}</span>
              {">"}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
