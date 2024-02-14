import React from 'react';

export function Events({ events, userName}) {

    return (
        <ul className="main-chat">
            {events.map((msg, index) => (
                <li className={msg.username === userName ? 'myName' : ''} key={index}>
                    <div>
                        <b style={{ color: msg.color }}>{msg.username}:</b> {msg.message}
                    </div>
                    <div>{msg.time}</div>
                </li>
            ))}
        </ul>
    );
}