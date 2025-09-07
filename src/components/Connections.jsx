import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { saveConnections } from "../store/slices/ConnectionsSlice";
import { useNavigate, Link } from "react-router-dom";

export const Connections = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const connections = useSelector((state) => state.connections);

  const fetchConnections = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      if (response?.data?.data.length) {
        dispatch(saveConnections(response.data?.data));
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchConnections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!connections?.length)
    return (
      <div className="flex justify-center my-10">
        <h1 className="font-bold">No Active Connections</h1>
      </div>
    );

  return (
    <div className="flex justify-center flex-col">
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {gender && <p>{gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
