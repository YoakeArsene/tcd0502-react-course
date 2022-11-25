import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";

export class App extends Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users").then((response) => {
      console.log(response.data);
      this.setState({ usersData: response.data });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
