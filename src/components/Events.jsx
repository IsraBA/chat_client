import React from 'react';

export function Events({ events }) {
    return (
        <ul className="main-chat">
            {
                events.map((data, index) =>
                    <li key={index}>
                        <div>{data.username}: {data.message}</div>
                        <div>{data.time}</div>
                    </li>
                )
            }
        </ul>
    );
}