import React, { useState } from 'react';
// import { socket } from '../socket';

export function MyForm({socket}) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      socket.emit('message', message); // Emitting a "message" event with the message content
      setMessage('');
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
}
