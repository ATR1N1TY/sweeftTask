import React, { useState, useEffect } from "react";
import { Users } from "../types";
// const endpoints = {
//   get_all_users: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${}/${}`,
//   get_user_friends:
//     "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/friends/0/10",

// };

const useFetch = (): Users[] => {
  const [users, setUsers] = useState<Users[]>([] as Users[]);

  const fetchUsers = async (page: number, size: number) => {
    const res = await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`
    );

    const { list } = await res.json();

    setUsers(list);
  };

  useEffect(() => {
    fetchUsers(0, 24);
  }, []);

  return users;
};

export default useFetch;
