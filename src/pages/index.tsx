import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "../context/context";
import { User } from "../types";
import UserCard from "../components/userCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Home: NextPage = () => {
  const { users, ref } = useInfiniteScroll("showUsers");

  // useEffect(() => {
  //   console.log(users);s
  // }, []);

  //get  users:

  return (
    <div className="home">
      {/* user card component */}
      {/* 1.user details page with dynamic routing with 2.user details component and 3.friends list container */}
      {/* fetch data and distribute it with context */}
      {/* useInfiniteScroll hook */}
      {/* <UserCard /> */}

      <div className="flex">
        <main className="users mx-auto grid grid-cols-4 gap-4 m-4">
          {users.map((user: User) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </main>
      </div>
      <div ref={ref}>rame</div>

      {/* First I'll do this with functional components and then with class components */}
      {/* <div>BEGIN!</div> */}
      {/* <div className="tests">{state[3].name}</div> */}
    </div>
  );
};

export default Home;
