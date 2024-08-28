import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import MessagesPage from './Messages';
import SendMessagePage from './SendMessage';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
        <Routes>
        <Route path="/" element={<SendMessagePage />} />
        <Route path="/r" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/show-messages" element={<MessagesPage token={token} />} />
        </Routes>
    </Router>
  );
}

export default App;
