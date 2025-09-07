import { useSelector } from "react-redux";
import { EditProfile } from "./EditProfile";

export const Profile = () => {
  const user = useSelector((state) => state.user?.data);

  return (
    user && (
      <div>
        <EditProfile user={user?.data} />
      </div>
    )
  );
};
