import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useUserState } from "../../context/UserContext"; // Ensure this path is correct

const Layout = ({ children }) => {
  const { isAuthenticated } = useUserState();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Tennis Match Organizer
          </Typography>
          <Button color="inherit" component={Link} to="/app/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/app/add-players">Add Players</Button>
          <Button color="inherit" component={Link} to="/app/schedule-matches">Schedule Matches</Button>
          <Button color="inherit" component={Link} to="/app/assign-teams">Assign Teams</Button>
          <Button color="inherit" component={Link} to="/app/send-notifications">Send Notifications</Button>
          <Button color="inherit" component={Link} to="/app/track-matches">Track Matches</Button>
          <Button color="inherit" component={Link} to="/app/leaderboard">Leaderboard</Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
