import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import { userContext } from "../context/user.context.jsx";
function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(userContext)

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            email: formData.email,
            authenticated: true
        })
        navigate('/');

    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='login-container'>

            <form onSubmit={handleSubmit} >
                <Input
                    name="email"
                    type='email'
                    placeholder='Email address'
                    onChange={handleChange}
                    required
                />
                <Input
                    name="password"
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                    required
                />
                <Button>Login</Button>
                <Link to={'/register'}>Register</Link>
            </form>
        </div>
    )
}

export default Login