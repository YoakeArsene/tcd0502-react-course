import React, { Component } from "react";

export class UserItem extends Component {
  state = {
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.avatar_url}
          className="round-img"
          alt="avatar"
          style={{ width: "60px" }}
        />
        <h3>{this.state.login}</h3>
        <a className="btn btn-primary btn-sm" href={this.state.html_url}>
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
