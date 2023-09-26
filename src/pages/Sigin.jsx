import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Sigin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = () => {
        navigate('/dashboard')
    }
    return (
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
            <button onClick={() => login()}>Signin</button>
        </div>
    );
};

export default Sigin;