import React, { useEffect, useState, useRef, useCallback } from "react";
import { User, FullUser } from "../types/types";
import useFetch from "./useFetch";

//useInfiniteScroll takes 2 optional arguments
//fetchOptions determines which fetch function we should execute from useFetch hook

const useInfiniteScroll = (fetchOptions?: string, id?: string) => {
  const { fetchUsers, fetchUserDetails, fetchUserFriends } = useFetch();

  //hooks for storing important variables
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [user, setUser] = useState<FullUser>({} as FullUser);
  const [userFriends, setUserFriends] = useState<User[]>([] as User[]);

  const ref = useRef(null);

  //this callBack function checks if target is intersecting and if so it will update the value of page
  const handleScroll = useCallback((entries: any) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  //if value of page or passed id is updated we check if fetchOptions include specific words
  //and execute coresponding fetch function with given arguments
  useEffect(() => {
    if (fetchOptions?.includes("showUsers")) fetchUsers(page, 12, setUsers);
    if (fetchOptions?.includes("showUser") && id) fetchUserDetails(setUser, id);
    if (fetchOptions?.includes("showUserFriends") && id) {
      fetchUserFriends(page, 12, setUserFriends, id);
    }
  }, [page, id]);

  //when reference is updated we initialize new observer with handler function and let the observe method observe
  //if ref.current is changed
  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    if (ref.current) observer.observe(ref.current);
  }, [handleScroll, ref.current]);

  return { users, user, userFriends, ref };
};

export default useInfiniteScroll;
