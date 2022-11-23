import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserItem from "./components/users/UserItem";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    );
  }
}

export default App;
