import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useUserDispatch, loginUser } from '../../context/UserContext';

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
      // Handle login failure
      console.error('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Welcome to the Tennis Match Organizer! Please login or register to continue.</p>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
