import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  //Navigate for route to home page after login
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/users/login', credentials);
      alert(response.data.message);

      // Clear the input fields after successful submission
      setCredentials({ email: '', password: '' });

      //Route to home page if logged in
      navigate("/");
    } catch (error) {
      console.error('Error: ', error);
      alert(error.response?.data?.message || 'An Error Occurred!');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
