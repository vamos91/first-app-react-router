import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { TextInput, Button } from 'flowbite-react';

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = () => {
        navigate('/todo')
    }
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <h1 data-cy="heading">SIGNIN</h1>
            <div className='w-1/4'>
                <TextInput
                    className='my-10'
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Ex: tony@stark.fr'
                    role="email"
                />
                <TextInput
                    className='my-10'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    role="password"
                    placeholder='Password'
                />
                <Button cy-data="signin-button" className='w-full' onClick={() => login()}>Signin</Button>
            </div>
            
        </div>
    );
};

export default Signin;