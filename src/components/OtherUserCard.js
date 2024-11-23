export default function OtherUserCard({ profile }) {
  return (
    <div className="post">
      <div className="post-header">
        <img
          src={profile.profilePicture}
          alt={`${profile.firstName}'s profile picture`}
          width="36"
          height="36"
        />
        <div className="post-name-and-tags">
          <h4>
            {profile.firstName} {profile.lastName}
          </h4>
          <div className="tags">
            <span> {profile.email || "No email found"} </span>
            <span>
              {" "}
              {profile.graduationYear || "No graduation year found"}{" "}
            </span>
            <span> {profile.major || "No major found"} </span>
          </div>
        </div>
      </div>
      <div>
        <p>{profile.bio || "No bio found"}</p>
      </div>
    </div>
  );
}
