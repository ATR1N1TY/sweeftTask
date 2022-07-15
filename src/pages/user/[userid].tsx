import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { User } from "../../types/types";
import UserHeader from "../../components/userHeader";
import UserCard from "../../components/userCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import BreadCrumbs from "../../components/breadCrumbs";

//on UserPage we get given user id and fetch user and hes friends using useInfiniteScroll hook

const UserPage = () => {
  const router = useRouter();
  const [id, setId] = useState(router.query?.userid);
  const { user, userFriends, ref } = useInfiniteScroll(
    "showUser showUserFriends",
    id?.toString()
  );

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.userid) setId(router.query.userid);
  }, [router.isReady, router.query.userid]);

  if (!router.isReady) {
    return <main className="userpage mx-auto max-w-[1200px]">WAIT</main>;
  }

  return (
    <main className="userpage mx-auto max-w-[1200px] border-l-2 border-r-2 border-black/25">
      {/* User Header */}
      <UserHeader user={user} />

      {/* Breadcrumbs */}
      <BreadCrumbs />

      {/* Friends List */}
      <div className="friends">
        <h1 className=" font-bold text-3xl my-16 mx-4">Friends:</h1>
        <div className="friendsList grid grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          {userFriends.map((friend: User) => {
            return <UserCard user={friend} key={friend.id}></UserCard>;
          })}
        </div>

        <div ref={ref}>rame</div>
      </div>
    </main>
  );
};

export default UserPage;
