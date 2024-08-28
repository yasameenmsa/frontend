import React, { useState } from 'react';
import axios from 'axios';
import './Messages.css'; // Import the CSS file

function MessagesPage({ token }) {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/messages', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className="messages-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>رسائل أهلك وأحبابك هنا يا مرام</h1>
          <p>اضغطي على الزر لتظهر بعد قول بسم الله</p>
          <button className="cta-button" onClick={fetchMessages}>عرض الرسائل</button>
        </div>
      </section>

      {/* Messages Section */}
      <section className="messages-section">
      <h2>الرسائل</h2>
        <div className="messages-container">
          {messages.length > 0 ? (
            <ul className="messages-list">
              {messages.map((msg, index) => (
                <li key={index} className="message-item">
                  <h3>{msg.name}</h3>
                  <p>{msg.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-messages">لا توجد رسائل بعد. اضغط على الزر أعلاه لعرض الرسائل</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default MessagesPage;
