import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // navigate state
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({name: '', email: '', password: ''});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/api/users/register', formData);
      alert(response.data.message);

      //Clear the credentials after successful registration.
      setCredentials({name: '', email: '', password: ''});

      //Navigate to home page after successful registration.
      navigate("/");
    }
    catch(error) {
      console.error("Error: ", error);
      alert(error.response?.data?.message || "An error Occurred");
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
