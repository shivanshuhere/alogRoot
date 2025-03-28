import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Login.css"
import Button from '../components/Button.jsx';
import { Input } from '@mui/material';
function Login() {

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input name="email" type='email' placeholder='Enter your email address' onChange={handleChange} />
            <Input name="password" type='password' placeholder='Enter your password' onChange={handleChange} />
            <Button>Login</Button>
            <Link to={'/register'}>Register</Link>
        </form>
    )
}

export default Login