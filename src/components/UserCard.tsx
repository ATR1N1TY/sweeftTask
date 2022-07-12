import React, { useEffect } from "react";
import Image from "next/image";
import { User } from "../types";
import icon from "../../public/vercel.svg";

const UserCard = (props: { user: User }) => {
  const {
    user: { id, name, lastName, prefix, title, imageUrl },
  } = props;

  useEffect(() => {
    console.log(imageUrl);
  }, []);

  const getImage = (imageUrl: string) => {
    return `${imageUrl}?v=${id}`;
  };

  return (
    <article className="Usercard border-black/25 border-2">
      <div className="img w-72 h-52">
        <Image
          src={icon}
          loader={() => getImage(imageUrl)}
          alt="imageUrl"
          width={640}
          height={480}
          className=" w-72 h-52"
        />
      </div>
      <div className="details px-4 py-2">
        <p className="name font-bold text-xl">
          {prefix} {name} {lastName}
        </p>
        <p className="title">{title}</p>
      </div>
    </article>
  );
};

export default UserCard;
