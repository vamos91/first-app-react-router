import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [somethingWrong, setSomethingWrong] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const login = async () => {
        const userData = await fetch('/auth/signin', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        console.log(userData)
        if(userData.status === 200){
            const userDataJson = await userData.json()
            console.log(userDataJson)
            navigate('/todo')
        }else if(userData.status === 403){
            setSomethingWrong(true)
            setErrorMessage('Bad password or email')
        }
        
    }
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            {
                somethingWrong && (
                    <Alert
                        color="failure"
                        icon={HiInformationCircle}
                        data-cy="alert"
                    >
                        <span>
                            <p>
                                <span className="font-medium">
                                    Info alert!
                                </span>
                                {errorMessage}
                            </p>
                        </span>
                    </Alert>
                )
            }
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
                <Button data-cy="signin-button" className='w-full' onClick={() => login()}>Signin</Button>
            </div>
            
        </div>
    );
};

export default Signin;