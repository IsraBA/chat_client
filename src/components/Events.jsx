import React from 'react';

export function Events({ events, userName="annonymous", color="black" }) {



    return (
        <ul className="main-chat">
            {events.map((data, index) => (
                <li key={index}>
                    <div className={data.username === userName ? 'myName' : ''}>
                    <b style={{color: color}}>{data.username}:</b> {data.message}
                    </div>
                    <div>{data.time}</div>
                </li>
            ))}
        </ul>
    );
}
