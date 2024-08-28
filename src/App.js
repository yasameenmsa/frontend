import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const register = async () => {
    await axios.post('http://localhost:5000/register', { username, password });
  };

  const login = async () => {
    const response = await axios.post('http://localhost:5000/login', { username, password });
    setToken(response.data.token);
  };

  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:5000/messages', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    setMessages(response.data);
  };

  const sendMessage = async () => {
    await axios.post('http://localhost:5000/messages', { name, email, message });
  };

  return (
    <div>
      <h1>Wedding Messages</h1>
      
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>

      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>

      <h2>Messages</h2>
      <button onClick={fetchMessages}>Fetch Messages</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.name}: {msg.message}</li>
        ))}
      </ul>

      <h2>Send Message</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
