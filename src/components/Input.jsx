import React from 'react'
import "../styles/Input.css"
function Input({ required = false, placeholder, type, onChange, value, name, otherProps }) {
    return (
        <div className="form-control">
            <input
                type={type}
                {...otherProps}
                required={required}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
            />
        </div>
    )
}

export default Input