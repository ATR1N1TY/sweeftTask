import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { User } from "../types";
import icon from "../../public/vercel.svg";
import Link from "next/link";
import { globalContext } from "../context/context";
import useImage from "../hooks/useImage";

const UserCard = (props: { user: User }) => {
  const {
    user: { id, name, lastName, prefix, title, imageUrl },
  } = props;

  const { setCrumbs } = useContext(globalContext);
  const { getImage } = useImage();

  return (
    <article
      className="Usercard border-black/25 border-2 cursor-pointer"
      onClick={() =>
        setCrumbs((crumbs: string[]) => [...crumbs, { fullName: name, id }])
      }
    >
      <Link href={`/user/${id}`} passHref>
        <div>
          <Image
            src={icon}
            loader={() => getImage(imageUrl, id)}
            alt="imageUrl"
            width={280}
            height={208}
            className=" w-72 h-52"
            layout="responsive"
          />
          <div className="details text-left m-1">
            <p className="name font-bold text-xl">
              {prefix} {name} {lastName}
            </p>
            <p className="title">{title}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default UserCard;
