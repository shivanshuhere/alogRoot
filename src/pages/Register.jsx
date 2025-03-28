import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Register.css"
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import { userContext } from '../context/user.context.jsx';
function Register() {
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

    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="register-container">

            <form onSubmit={handleSubmit}>

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
                <Button>Register</Button>
                <Link to={'/'}>Login</Link>
            </form>
        </div>
    )
}

export default Register