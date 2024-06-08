import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useUserDispatch, loginUser } from '../../context/UserContext';
import './styles.css'; // Make sure you have your styles here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useUserDispatch();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginSuccess = await loginUser(dispatch, { email, password });
    if (loginSuccess) {
      history.push('/app/dashboard');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <div className="hero">
        <img src="frontend\admin-dashboard\src\images\hero-image.png" alt="Hero Image" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Top Spin Hero</h1>
          <p>Your ultimate tennis match organizer</p>
          <button onClick={() => history.push('/register')}>Get Started</button>
          <button onClick={() => history.push('/about')}>Learn More</button>
        </div>
      </div>
      <section>
        <h2>About Top Spin Hero</h2>
        <p>Developed in Sunny South Florida, Top Spin Hero is the app your group of tennis or pickleball friends needs to organize and track your matches. Whether you're playing with friends or organizing a local tournament, our app helps you schedule matches, assign teams, and keep track of scores effortlessly. With features like real-time notifications and drag-and-drop scheduling, you can ensure that every game goes smoothly and that players are always informed.</p>
        <div className="feature-container">
          <div className="feature">
            <i className="fas fa-calendar-alt"></i>
            <h3>Schedule Matches</h3>
            <p>Easily schedule tennis matches with friends and opponents.</p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Assign Teams</h3>
            <p>Effortlessly assign players to teams using drag-and-drop functionality.</p>
          </div>
          <div className="feature">
            <i className="fas fa-bell"></i>
            <h3>Real-Time Notifications</h3>
            <p>Stay informed with real-time notifications for match updates and reminders.</p>
          </div>
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h3>Track Scores</h3>
            <p>Keep track of match scores and player statistics in one place.</p>
          </div>
        </div>
        <Link to="/about" className="learn-more-btn">Learn More</Link>
      </section>
      <footer>
        <p>Top Spin Hero &copy; 2024</p>
        <img src="/path/to/footer-image.png" alt="Footer Image" />
      </footer>
    </div>
  );
};

export default Login;
