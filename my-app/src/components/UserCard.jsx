import React from "react";

function UserCard(props) {
  return (
    <div>
      <img src={props.user.avatar_url} />
      <p>{props.user.name}</p>
      <p>{props.user.location}</p>
      <p>{props.user.bio}</p>
    </div>
  );
}

export default UserCard;
