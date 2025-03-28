import React from 'react'
import { Link } from 'react-router';
import { Button, TextField } from '@material/core';

import Box from '@mui/material/Box';
function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Name" variant="standard" />
            <TextField label="Email" variant="standard" />
            <TextField label="Password" variant="standard" />
            <Button variant="contained">Login</Button>
            <Link to={'/register'}>Register</Link>
        </form>
    )
}

export default Login