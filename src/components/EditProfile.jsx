import { useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { saveUser } from "../store/slices/UserSlice";

export const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [gender, setGender] = useState(user?.gender);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const saveProfile = async () => {
    //Clear Errors
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/update",
        {
          firstName,
          lastName,
          photoUrl,

          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(saveUser(res.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center mt-10 mb-[100px] space-x-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body flex items-center">
          <h2 className="card-title">Edit Profile</h2>
          <label className="form-control w-full max-w-xs my-1">
            <div className="label">
              <span className="label-text">First Name:</span>
            </div>
            <input
              type="text"
              value={firstName}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs my-1">
            <div className="label">
              <span className="label-text">Last Name:</span>
            </div>
            <input
              type="text"
              value={lastName}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs my-1">
            <div className="label">
              <span className="label-text">Gender:</span>
            </div>
            <input
              type="text"
              value={gender}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs my-1">
            <div className="label">
              <span className="label-text">Photo Url:</span>
            </div>
            <input
              type="text"
              value={photoUrl}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs my-1">
            <div className="label">
              <span className="label-text">About:</span>
            </div>
            <input
              type="text"
              value={about}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setAbout(e.target.value)}
            />
          </label>
          <p className="text-red-600">{error}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={saveProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <UserCard
        user={{ firstName, lastName, gender, about, photoUrl }}
        displayActions={false}
      />
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Updated Successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};
