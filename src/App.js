import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import GithubState from "./context/github/githubState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <Main />
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
