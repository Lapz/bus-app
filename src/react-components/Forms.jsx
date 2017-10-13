import React from 'react';

const FormTextArea = ({id, label, placeholder, handleChangeFunc}) => (
    <div className="field">
        <label className="label">{label}</label>
        <p className="control">
            <textarea
                className={`textarea ${id}`}
                onChange={handleChangeFunc}
                placeholder={placeholder}></textarea>
        </p>
    </div>
)

const FormButton = ({value, buttonClass, buttonFunction}) => (
    <p className="control">
        <button onClick={buttonFunction} className={`button ${buttonClass}`}>{value}</button>
    </p>
)

const FormGroup = ({grouping, children}) => (
    <div className={grouping
        ? (`field ${grouping}`)
        : "field"}>
        {children}
    </div>
)

const FormInput = ({
    type,
    id,
    placeholder,
    label,
    icon,
    inputFunction
}) => (
    <div className="field">
        <label className="label">{label}</label>
        <p
            className={icon
            ? ("control has-icon has-icon" + icon)
            : ("control")}>
            <input
                onChange={inputFunction}
                className={`input ${id}`}
                type={type}
                placeholder={placeholder}/></p>
    </div>
)

const FormInputIcon = ({faClass}) => (
    <span className="icon is-small">
        <i className={faClass}></i>
    </span>
)

export {FormTextArea, FormInput, FormInputIcon, FormGroup, FormButton}