import React from 'react';
import "./Editor.css";
const SimpleMDE = require("react-simplemde-editor");

const Editor = ({content, handleChange}) => (<SimpleMDE value={content} onChange={handleChange}/>)

const EditorTitle = ({title, titleFunc}) => {
    return (<input  placeholder="Enter a title" className="input" type="text" value={title} onChange={titleFunc}/>);
};

const EditorButton = ({type, buttonfunc, text}) => {
    return (
        <button className={`button ${type}`} onClick={buttonfunc}>Save a post
        </button>
    );
};

const EditorNotification = ({message, notifFunc}) => {
    return (

        <div className="notification">
            <button onClick={notifFunc} className="delete"></button>
            {message}
        </div>

    );
};

export {Editor, EditorNotification, EditorTitle, EditorButton};