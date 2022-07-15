import type { NextPage } from "next";
import { User } from "../types/types";
import UserCard from "../components/userCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "../components/loading";

const Home: NextPage = () => {
  const { users, ref, loading } = useInfiniteScroll("showUsers");

  return (
    <div className="home">
      <div className="flex">
        <main className="users mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          {users.map((user: User) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </main>
      </div>
      <div ref={ref} className=" w-full h-1 invisible"></div>
      <Loading loader={loading} />
    </div>
  );
};

export default Home;
