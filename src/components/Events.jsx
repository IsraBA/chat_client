import React, { useEffect, useRef } from 'react';

export function Events({ events, userName }) {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [events]);

    return (
        <ul className="main-chat" ref={chatContainerRef}>
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