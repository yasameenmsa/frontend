import React, { useState } from 'react';
import axios from 'axios';
import './SendMessage.css'; // استيراد ملف CSS

function SendWeddingMessagePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [status, setStatus] = useState(''); // لإدارة حالة اللون

  const sendMessage = async () => {
    setIsLoading(true);
    try {
      await axios.post('http://localhost:5000/messages', { name, email, message });
      setResponseMessage('وصلتنا رسالتك الجميلة مثلك شكراً ❤︎');
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setResponseMessage('ما في عندك نت الآن\nرجاء حاولي إرسال الرسالة مرة ثانية لما تكوني بمكان في إنترنت\nتهمنا جداً رسائلكم الجميلة شكراً');
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`page-container ${status}`}>
      <div className="message-form-container">
        <h1 className="form-title">بسم الله الرحمن الرحيم</h1>
        <h2 className="form-subtitle">إرسال رسالة تهنئة</h2>
        <p className="form-description">
          أرسل تهنئتك للعروسين بمناسبة حفل زفافهما الجميل. ننتظر كلماتك الجميلة!
        </p>
        <div className="wedding-names">

        <span className="name groom"> محمد</span>

  <img 
    src="https://res.cloudinary.com/dh1lgpmm4/image/upload/v1724806299/Weddings/45035c14-83cc-4651-8019-7d81f353ef2b_rjijl7.png" 
    alt="heart" 
    className="heart-image" 
  />
  <span className="name bride">مرام </span>


</div>

        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="message-form">
          <div className="form-group">
            <label htmlFor="name">الاسم</label>
            <input
              type="text"
              id="name"
              placeholder="اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">الرسالة</label>
            <textarea
              id="message"
              placeholder="اكتب رسالتك هنا"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
            </button>
          </div>
        </form>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
      </div>
    </div>
  );
}

export default SendWeddingMessagePage;
