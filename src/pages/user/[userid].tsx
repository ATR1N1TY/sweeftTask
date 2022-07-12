import React, { useEffect } from "react";
import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    console.log(router.query.userid);
  }, []);

  return <div>{router.query.userid}</div>;
};

export default UserPage;
