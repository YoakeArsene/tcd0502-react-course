import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt="avatar"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      {/* <a className="btn btn-primary btn-sm" href={html_url}>
        More
      </a> */}
      <Link to={`/user/${login}`}>More</Link>
    </div>
  );
};

export default UserItem;
