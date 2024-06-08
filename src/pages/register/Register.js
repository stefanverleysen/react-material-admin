import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isRightHanded, setIsRightHanded] = useState(true);
  const [backhandType, setBackhandType] = useState('two-handed');
  const [error, setError] = useState('');
  const history = useHistory();



  async function fetchAPI(endpoint, method, payload, credentials = false) {
    let options = {
      method: method
    };

    if (credentials) {
      options["credentials"] = "include";
    }
    if (payload) {
      options["body"] = JSON.stringify(payload);
    }

    if (method !== "GET") {
      options["headers"] = {
        ...options["headers"],
        "Content-Type": "application/json"
      };
    }

    let response = await fetch(`${endpoint}`, options);

    return response;

  }
  const handleRegister = async () => {
    console.log({
      firstName,
      lastName,
      email,
      phone,
      password,
      isRightHanded,
      backhandType
    });

    let data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      isRightHanded,
      backhandType
    }

    let resp = await fetchAPI('http://localhost:8000/user', 'POST', data);
    if (resp.ok) {
      resp = await resp.json();
      if (resp.token) {
        localStorage.setItem('token', resp.token);
        history.push('/app/dashboard');
      }
    }
  };


  return (
    <div>
      a
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <div>
          <label>Handedness:</label>
          <select value={isRightHanded} onChange={(e) => setIsRightHanded(e.target.value === 'true')}>
            <option value="true">Right Handed</option>
            <option value="false">Left Handed</option>
          </select>
        </div>
        <div>
          <label>Backhand Type:</label>
          <select value={backhandType} onChange={(e) => setBackhandType(e.target.value)}>
            <option value="one-handed">One-handed</option>
            <option value="two-handed">Two-handed</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
