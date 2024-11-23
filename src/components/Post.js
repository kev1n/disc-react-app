import { useState, useEffect } from "react";

export default function Post() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log(likes);
  }, [likes]);

  return (
    <div className="post">
      <div className="post-header">
        <img
          src="https://i.pinimg.com/236x/68/31/12/68311248ba2f6e0ba94ff6da62eac9f6.jpg"
          alt="Sally's profile picture"
          width="36"
          height="36"
        />
        <div className="post-name-and-tags">
          <h4>Sally J.</h4>
          <div className="tags">
            <span> Sports </span>
            <span> Clubs </span>
          </div>
        </div>
      </div>
      <div>
        <p>
          Hi all, I'm looking for some intramural sports/clubs to join this fall
          quarter. Really only those that are low commitment no tryouts. Please
          let me know!
        </p>
      </div>
      <div className="post-footer">
        <a className="comment">Add a comment</a>
        <div className="like-container">
          <button className="like-button" onClick={() => setLikes(likes + 1)}>
            Like
          </button>
          <span>{likes} likes</span>
        </div>
      </div>
    </div>
  );
}
