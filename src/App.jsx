import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import Signup from './Auth/Signup';
import Login from "./Auth/Login";
import Profile from './Profile/Profile'
import ProjectDetails from './Projects/ProjectDetails'

import "./App.css";



class App extends Component {
 

  render() {

    return (
      <>
        <NavMenu  history={this.props.history} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={({ history }) => (
            <Profile
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/project"
          render={({ history }) => (
            <ProjectDetails
              history={history}
            />
          )}
        />
      </>
    );
  }
}

export default App;
