import './App.css'
import React, { useState, useEffect } from 'react';
// import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { MyForm } from './components/MyForm';


export default function connect({ socket, userName }) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageEvents, setMessageEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessages(value) {
      setMessageEvents(value);
    }

    function onMessageEvent(value) {
      setMessageEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('allMessages', onMessages);
    socket.on('message', onMessageEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
    };
  }, []);

  return (
    <div className="App">

      <ConnectionState isConnected={isConnected} />
      <Events events={messageEvents} userName={userName}/>
      <ConnectionManager socket={socket} />
      <MyForm socket={socket} />
    </div>
  );
}
