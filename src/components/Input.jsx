import React from 'react'
import "../styles/Input.css"
function Input({ required, placeholder, type, onChange, value, name }) {
    return (
        <div class="form-control">
            <input
                type={type}
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