import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Join({ setUserName, setColor }) {

  const nav = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const color = e.target.color.value;
    setUserName(userName);
    setColor(color);
    console.log({userName, color});
    nav('/content');

  };

  return (
    <div>
      <form onSubmit={handleJoin}>
        <input type="text" id="userName" name="userName" placeholder="Enter your name" />
        <br />
        <label htmlFor="color">Choose your color</label>
        <input type="color" id="color" name="color" />
        <button type="submit">Join to chat</button>
      </form>
    </div>
  );
}
