import React from 'react';

const Notification = ({message, notiFunc}) => {
    return (
        <div className="notification">
            <button onClick={notiFunc} className="delete"></button>
            {message}
        </div>
    );
};

export default Notification;
