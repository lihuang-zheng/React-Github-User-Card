import React from "react";

function FollowerCard(props) {
  return (
    <div>
      {props.followers.map(follower => (
        <div key={follower.id}>
          <img width="200 " src={follower.avatar_url} alt="profile picture" />
          <h2>{follower.login}</h2>
          <a href={follower.html_url}>Follower Info</a>
        </div>
      ))}
    </div>
  );
}

export default FollowerCard;
