import React from 'react'
import "../styles/Button.css"
function Button({ children }) {
    return (
        <button>
            {children}
            <div className="arrow-wrapper">
                <div className="arrow"></div>
            </div>
        </button>
    )
}

export default Button