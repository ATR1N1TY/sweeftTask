import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useContext, useEffect } from "react";
import { globalContext } from "../context/context";

const Home: NextPage = () => {
  const state = useContext(globalContext);

  return (
    <div className={styles.container}>
      {/* user card component */}
      {/* 1.user details page with dynamic routing with 2.user details component and 3.friends list container */}
      {/* fetch data and distribute it with context */}
      {/* useInfiniteScroll hook */}

      {/* First I'll do this with functional components and then with class components */}
      <div>BEGIN!</div>
      {/* <div className="tests">{state[3].name}</div> */}
    </div>
  );
};

export default Home;
