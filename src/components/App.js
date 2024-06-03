import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";
import Register from "../pages/register/Register";

// new pages
import AddPlayers from "../components/AddPlayers";
import ScheduleMatches from "../components/ScheduleMatches";
import AssignTeams from "../components/AssignTeams";
import SendNotifications from "../components/SendNotifications";
import TrackMatches from "../components/TrackMatches";
import Leaderboard from "../components/Leaderboard";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />

        {/* New Routes */}
        <PrivateRoute path="/app/add-players" component={AddPlayers} />
        <PrivateRoute path="/app/schedule-matches" component={ScheduleMatches} />
        <PrivateRoute path="/app/assign-teams" component={AssignTeams} />
        <PrivateRoute path="/app/send-notifications" component={SendNotifications} />
        <PrivateRoute path="/app/track-matches" component={TrackMatches} />
        <PrivateRoute path="/app/leaderboard" component={Leaderboard} />

        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/app/dashboard",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
