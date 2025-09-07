import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { saveFeed } from "../store/slices/FeedSlice";
import { UserCard } from "./UserCard";

export const Feed = () => {
  const feed = useSelector((state) => state.feed?.data?.data);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if (feed) return null;
      const response = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(saveFeed(response.data));
    } catch (error) {
      console.error("Error: ", error.message);
    }
  };

  useEffect(() => {
    getFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return feed ? (
    <div className="flex justify-center my-5">
      <UserCard user={feed[0]} />
    </div>
  ) : (
    <div className="flex justify-center my-5">
      <h1 className="font-bold">No Connections</h1>
    </div>
  );
};
