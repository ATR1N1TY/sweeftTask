import React, { useState, useEffect } from "react";
import { User } from "../types/types";

//All fetch functions needed to run this app can be found here, there're 3 of them as you know

const useFetch = () => {
  //this state is for fetchUserFriends function
  const [prevId, setPrevId] = useState<string | undefined>(undefined);

  //fetch users for home page
  const fetchUsers = async (
    pageNumber: number,
    size: number,
    setter: any
  ): Promise<void> => {
    const url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/${size}`;
    const res = await fetch(url);
    const { list } = await res.json();

    //if users exist spread that users in this array with newly fetched users otherwise let it just be fetched users
    setter((users: User[]) =>
      users.length !== 0 ? [...users, ...list] : list
    );
  };

  //when user clicks on UserCard component this function will get detailed information of that user
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

    //we must check if id have changed, if it's not we should spread next new users when page reaches bottom
    //otherwise when user clicks another friend we should clear previous user friends and append with new ones
    //and lastly update the prevId state for next check
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
