import React from "react";

function FollowerCard(props) {
  return (
    <div>
      {props.followers.map(follower => (
        <div key={follower.id}>
          <img src={follower.img} />
          <p>{follower.name}</p>
          <p>{follower.location}</p>
          <p>{follower.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default FollowerCard;
