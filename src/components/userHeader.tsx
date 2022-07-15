import React from "react";
import { FullUser } from "../types";
import Image from "next/image";
import staticImage from "../../public/vercel.svg";
import useImage from "../hooks/useImage";

const UserHeader = (props: { user: FullUser }) => {
  const { user } = props;
  const { getImage } = useImage();

  return (
    <header className="user flex p-4 gap-2 items-center flex-col lg:flex-row">
      <div className="imgWrapper h-full ">
        <Image
          src={staticImage}
          loader={() => getImage(user.imageUrl)}
          alt={user.name + " " + user.lastName}
          height={200}
          layout="fixed"
        />
      </div>

      <div className="info w-full border-black/30 border-2 p-2 relative">
        <legend className="absolute -top-3 bg-white">Info</legend>

        <p className="name font-bold">
          {user.prefix} {user.name} {user.lastName}
        </p>

        <p className="specialization italic">{user.title}</p>

        <br />

        <p className="email under">
          {" "}
          <span className="title underline">Email:</span> {user.email}
        </p>

        <p className="ip">
          <span className="title underline">Ip Address:</span> {user.ip}
        </p>

        <p className="ip">
          <span className="title underline">Ip Address:</span> {user.ip}
        </p>

        <p className="jobarea">
          <span className="title underline">Job Area:</span> {user.jobArea}
        </p>

        <p className="jobtype">
          <span className="title underline">Job Type:</span> {user.jobType}
        </p>
      </div>

      <div className="address mt-2 lg:m-auto w-full lg:w-3/12 border-black/30 border-2 p-2 h-full relative">
        <legend className=" absolute -top-3 bg-white">Address</legend>
        <p className="compoany font-bold">
          {user.company?.name} {user.company?.suffix}
        </p>

        <p className="city">
          <span className="title underline">City:</span> {user.address?.city}
        </p>

        <p className="country">
          <span className="title underline">Country:</span>{" "}
          {user.address?.country}
        </p>

        <p className="state">
          <span className="title underline">State:</span> {user.address?.state}
        </p>

        <p className="streetaddress">
          <span className="title underline">Street Address:</span>{" "}
          {user.address?.streetAddress}
        </p>

        <p className="zipcode">
          <span className="title underline">ZIP:</span> {user.address?.zipCode}
        </p>
      </div>
    </header>
  );
};

export default UserHeader;
