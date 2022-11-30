import axios from "axios";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";
import GithubState from "./context/github/githubState";

const App = () => {
  const [user, setUser] = useState({});
  const getUser = async (loginId) => {
    const response = await axios.get(`https://api.github.com/users/${loginId}`);
    setUser(response.data);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/user/:loginId">
                <User getUser={getUser} user={user} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
