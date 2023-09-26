import React, { useState } from 'react';
import './signup.css'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        //fetch (POST) => NESTJS
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='signup'>
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Ex: tony@stark.fr'
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
                <button type="submit">Signup</button>
            </div>
        </form> 
    );
};

export default Signup;