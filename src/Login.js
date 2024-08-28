import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Import the CSS file

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setToken(response.data.token);
      navigate('/show-messages'); // Navigate to the messages page on successful login
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">تسجيل الدخول</h2>
      <div className="login-form">
        <input 
          type="text" 
          placeholder="اسم المستخدم" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input 
          type="password" 
          placeholder="كلمة المرور" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={login} className="login-button">تسجيل الدخول</button>
      </div>
    </div>
  );
}

export default Login;
