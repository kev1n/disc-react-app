import ProfilePicture from "./ProfilePicture";

export default function OtherUserCard({ profile }) {
  return (
    <div className="post">
      <div className="post-header">
        <ProfilePicture
          diameter={36}
          image={profile.profilePicture}
          alt={`${profile.firstName}'s profile picture`}
        />
        <div className="post-name-and-tags">
          <h4>
            {profile.firstName} {profile.lastName} {profile.first_name}{" "}
            {profile.last_name}
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
        <p>
          {profile.bio ||
            (profile.user_profiles && profile.user_profiles.bio) ||
            "No bio found"}
        </p>
      </div>
    </div>
  );
}
