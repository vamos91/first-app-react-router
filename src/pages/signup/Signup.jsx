import React, { useState } from 'react';
import './signup.css'
import { Alert, Button, TextInput } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordNotOk, setIsPasswordNotOk] = useState(false)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setIsPasswordNotOk(true)
        }else{
            navigate('/todo')
        }
    }

    return (
        <>
            {
                isPasswordNotOk && (
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
                                type same password
                            </p>
                        </span>
                    </Alert>
                )
            }
            <form onSubmit={handleSubmitForm} className='flex justify-center items-center flex-col h-screen'>
                <h1 data-cy="heading">SIGNUP</h1>
                <div className='w-1/4'>
                    <TextInput
                        className='my-10'
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Ex: tony@stark.fr'
                        role="email"
                        name="email"
                    />
                    <TextInput
                        className='my-10'
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        role="password"
                        placeholder='Password'
                        name="password"
                    />
                    <TextInput
                        className='my-10'
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        role="confirm-password"
                        name="confirm-password"
                        placeholder='Confirm password'
                    />
                    <Button data-cy="signup" data-button="signup" className='w-full' role="submit-signup" type="submit">Signup</Button>
                </div>
            </form>
        </>
         
    );
};

export default Signup;