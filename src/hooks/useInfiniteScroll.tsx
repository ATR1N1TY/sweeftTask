import React, { useEffect, useState, useRef, useCallback } from "react";
import { User, FullUser } from "../types";
import useFetch from "./useFetch";

//we must make this hook more reuseable
//this hook will accept

const useInfiniteScroll = (fetchOptions: string, id?: string) => {
  // const [users, setUsers] = useState<User[]>([] as User[]);
  // const [page, setPage] = useState<number>(1);

  // const { fetchUsers } = useFetch();

  // const handleScroll = () => {
  //   const elementHeight = window.document.body.clientHeight;
  //   const bottom = window.innerHeight + window.scrollY;

  //   if (elementHeight === bottom) {
  //     setPage((page) => page + 1);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers(page, 24, setUsers);
  //   // fetchFriends(6, 1, 24);
  // }, [page]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const { fetchUsers, fetchUserDetails, fetchUserFriends } = useFetch();

  const [page, setPage] = useState<number>(1);

  const [users, setUsers] = useState<User[]>([] as User[]);
  const [user, setUser] = useState<FullUser>({} as FullUser);
  const [userFriends, setUserFriends] = useState<User[]>([] as User[]);

  // const [options, setOptions] = useState<string[]>(fetchOptions.split(" "));

  const ref = useRef(null);

  const handleScroll = useCallback((entries: any) => {
    const target = entries[0];
    console.log(target);

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    if (fetchOptions.includes("showUsers")) fetchUsers(page, 12, setUsers);
    if (fetchOptions.includes("showUser") && id) fetchUserDetails(setUser, id);
    if (fetchOptions.includes("showUserFriends") && id) {
      console.log("yes");

      fetchUserFriends(page, 12, setUserFriends, id);
    }
  }, [page, id]);

  useEffect(() => {
    console.log(ref);

    const observer = new IntersectionObserver(handleScroll);
    if (ref.current) observer.observe(ref.current);
  }, [handleScroll, ref.current]);

  return { users, user, userFriends, ref };
};

export default useInfiniteScroll;
