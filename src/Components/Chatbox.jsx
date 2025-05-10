import React, { useState } from 'react';
import './Chat.css'; 
import axios from 'axios'; 


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    // User message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: 'user' },
    ]);

    // Send the user message to the API
    try {
      const response = await axios.post('https://germain254.pythonanywhere.com/api/chat', {
        message: input,
      });

      // Chatbot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Germain: ${response.data.response}`, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Germain: Sorry, I couldn't reach the server.", sender: 'bot' },
      ]);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <h1>Nutritionist</h1>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;