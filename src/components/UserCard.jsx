export const UserCard = ({ user }) => {
  const { firstName, lastName, gender, _skills, photoUrl, about } = user;
  return (
    <div className="card card-compact bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="profile_image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <p>Gender: {gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-3">
          <button className="btn btn-primary">Interested</button>
          <button className="btn btn-secondary">Ignore</button>
        </div>
      </div>
    </div>
  );
};
