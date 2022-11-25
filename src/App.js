import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

export class App extends Component {
  state = {
    usersData: [],
    searchText: "",
  };

  // componentDidMount() {
  //   axios.get("https://api.github.com/users").then((response) => {
  //     this.setState({ usersData: response.data });
  //   });
  // }

  searchUsers = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
