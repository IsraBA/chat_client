import Content from './Content';
import { io } from 'socket.io-client';
import Join from './Join';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const URL = 'http://10.0.1.36:3000';


export default function App() {
  const [userName, setUserName] = useState('');
  const [color, setColor] = useState('');

  const socket = io(URL, {
    query: {
      myName: userName,
      myColor: color
    },
  });

  // עדכון של userName ישירות ב-query
  useEffect(() => {
    socket.io.opts.query.myName = userName;
  }, [userName]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Join setUserName={setUserName} setColor={setColor} />} />
        <Route path='/content' element={<Content socket={socket} userName={userName} color={color} />} />
      </Routes>
    </div>
  );
}
