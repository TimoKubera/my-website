import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [text, setText] = useState('');
  const maxChars = 1000;
  const warningChars = 600;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxChars) {
      setText(newText);
    }
  };

  return (
    <div className="chatbox-container">
      <textarea
        className="chatbox"
        value={text}
        onChange={handleChange}
        placeholder="Was möchtest du wissen?"
      />
      {text.length >= warningChars && (
        <div className="char-count">
          {text.length}/{maxChars}
        </div>
      )}
    </div>
  );
};

export default Chatbox;