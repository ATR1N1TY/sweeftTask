import React, { useState, useEffect } from "react";
import { User } from "../types";

const useFetch = () => {
  const [prevId, setPrevId] = useState<string | undefined>(undefined);

  const fetchUsers = async (
    pageNumber: number,
    size: number,
    setter: any
  ): Promise<void> => {
    const url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/${size}`;
    const res = await fetch(url);
    const { list } = await res.json();

    setter((users: User[]) =>
      users.length !== 0 ? [...users, ...list] : list
    );
  };

  const fetchUserDetails = async (setter: any, id?: string) => {
    const res = await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    );
    const user = await res.json();

    setter(user);
  };

  const fetchUserFriends = async (
    page: number,
    size: number,
    setter: any,
    userId?: string
  ): Promise<void> => {
    const url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/${size}`;
    const res = await fetch(url);
    const { list } = await res.json();

    if (userId === prevId) {
      setter((friends: User[]) =>
        friends.length !== 0 ? [...friends, ...list] : list
      );
    } else {
      setter(list);
      setPrevId(userId);
    }
  };

  return { fetchUsers, fetchUserDetails, fetchUserFriends };
};

export default useFetch;
