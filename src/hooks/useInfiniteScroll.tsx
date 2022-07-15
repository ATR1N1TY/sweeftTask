import React, { useEffect, useState, useRef, useCallback } from "react";
import { User, FullUser } from "../types/types";
import useFetch from "./useFetch";

const useInfiniteScroll = (fetchOptions?: string, id?: string) => {
  const { fetchUsers, fetchUserDetails, fetchUserFriends } = useFetch();

  const [page, setPage] = useState<number>(1);

  const [users, setUsers] = useState<User[]>([] as User[]);
  const [user, setUser] = useState<FullUser>({} as FullUser);
  const [userFriends, setUserFriends] = useState<User[]>([] as User[]);

  const ref = useRef(null);

  const handleScroll = useCallback((entries: any) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    if (fetchOptions?.includes("showUsers")) fetchUsers(page, 12, setUsers);
    if (fetchOptions?.includes("showUser") && id) fetchUserDetails(setUser, id);
    if (fetchOptions?.includes("showUserFriends") && id) {
      fetchUserFriends(page, 12, setUserFriends, id);
    }
  }, [page, id]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    if (ref.current) observer.observe(ref.current);
  }, [handleScroll, ref.current]);

  return { users, user, userFriends, ref };
};

export default useInfiniteScroll;
