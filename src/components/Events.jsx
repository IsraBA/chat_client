import React from 'react';

export function Events({ events, userName }) {

    return (
        <ul className="main-chat">
            {events.map((msg, index) => (
                <li className={msg.username === userName ? 'myName' : ''} key={index}>
                    <div>
                        <b style={{ color: msg.myColor }}>{msg.username}:</b> {msg.message}
                    </div>
                    <div style={{ fontSize: '10px' }}>{msg.time}</div>
                </li>
            ))}
        </ul>
    );
}