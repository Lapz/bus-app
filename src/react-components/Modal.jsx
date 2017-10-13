import React from 'react';

const Modal = ({message, modalFunc}) => {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    {message}
                </div>
            </div>
            <button onClick={modalFunc} className="modal-close"></button>
        </div>
    );
};

export default Modal;