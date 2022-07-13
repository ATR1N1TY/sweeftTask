import React, { useEffect } from "react";
import { FullUser } from "../types";
import Image from "next/image";
import staticImage from "../../public/vercel.svg";

const UserHeader = (props: { user: FullUser }) => {
  const { user } = props;

  const imageLoader = (imageUrl: string) => {
    return imageUrl;
  };

  return (
    <header className="user flex p-4 gap-2  items-center">
      <div className="imgWrapper h-full">
        <Image
          src={staticImage}
          loader={() => imageLoader(user.imageUrl)}
          alt={user.name + " " + user.lastName}
          height={"200px"}
          layout="fixed"
        />
      </div>

      <div className="info w-full border-black/30 border-2 p-2">
        <legend>Info</legend>

        <div className="name font-bold">
          {user.prefix} {user.name} {user.lastName}
        </div>

        <div className="specialization italic">{user.title}</div>

        <br />

        <div className="email under">
          {" "}
          <span className="title underline">Email:</span> {user.email}
        </div>

        <div className="ip">
          <span className="title underline">Ip Address:</span> {user.ip}
        </div>

        <div className="ip">
          <span className="title underline">Ip Address:</span> {user.ip}
        </div>

        <div className="jobarea">
          <span className="title underline">Job Area:</span> {user.jobArea}
        </div>

        <div className="jobtype">
          <span className="title underline">Job Type:</span> {user.jobType}
        </div>
      </div>

      <div className="address w-3/12 border-black/30 border-2 p-2">
        <div className="compoany font-bold">
          {user.company?.name} {user.company?.suffix}
        </div>

        <div className="city">
          <span className="title underline">City:</span> {user.address?.city}
        </div>

        <div className="country">
          <span className="title underline">Country:</span>{" "}
          {user.address?.country}
        </div>

        <div className="state">
          <span className="title underline">State:</span> {user.address?.state}
        </div>

        <div className="streetaddress">
          <span className="title underline">Street Address:</span>{" "}
          {user.address?.streetAddress}
        </div>

        <div className="zipcode">
          <span className="title underline">ZIP:</span> {user.address?.zipCode}
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
