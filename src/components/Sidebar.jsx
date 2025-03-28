import React from 'react'
import "../styles/Sidebar.css"
import { Link } from "react-router-dom"
function Sidebar() {
    return (
        <div className='sidebar-container'>
            <ul className="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">
                <li><Link to={"/"} data-text="Details">Details</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar