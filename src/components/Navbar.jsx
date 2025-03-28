import "../styles/Navbar.css"
import { CircleUser } from "lucide-react"
function Navbar() {
    return (
        <nav className="navbar-container">
            <img src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png" alt="" className="logo" />
            <CircleUser />
        </nav>
    )
}

export default Navbar