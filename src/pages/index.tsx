import type { NextPage } from "next";
import { User } from "../types/types";
// import UserCard from "../components/userCard";
import UserCard from "../components/userCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Home: NextPage = () => {
  const { users, ref } = useInfiniteScroll("showUsers");

  return (
    <div className="home">
      <div className="flex">
        <main className="users mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          {users.map((user: User) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </main>
      </div>
      <div ref={ref}>rame</div>
    </div>
  );
};

export default Home;
