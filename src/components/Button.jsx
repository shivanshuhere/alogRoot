import React from 'react'
import "../styles/Button.css"
function Button({ children }) {
    return (
        <button>
            {children}
            <div class="arrow-wrapper">
                <div class="arrow"></div>
            </div>
        </button>
    )
}

export default Button