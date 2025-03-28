import React from 'react'
import { Link } from 'react-router';
import "../styles/Register.css"
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
function Login() {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} >
            <Input type='text' placeholder='Enter your name' value={formData.name} onChange={handleChange} />
            <Input type='email' placeholder='Enter your email' value={formData.name} onChange={handleChange} />
            <Input type='password' placeholder='Enter password' value={formData.name} onChange={handleChange} />
            <Button >Register</Button>
            <Link to={'/register'}>Login</Link>
        </form>
    )
}

export default Login