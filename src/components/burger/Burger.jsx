import React, { useState } from 'react';
import './burger.css'
import {Card, Button} from 'flowbite-react'

const Burger = ({ burgerName, handleClickParent }) => {
    const [counter, setCounter] = useState(0)
    console.log('component reloaded')
    const handleClick = () => {
        setCounter(counter + 1) 
    }

    return (
        <div className='burger-card m-10'>
            <h1 role="title">My burger</h1>
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://static.wixstatic.com/media/e79818_9de4daf6a6d14c31a2f8ba3af331c85b~mv2.jpg/v1/crop/x_0,y_795,w_5548,h_3957/fill/w_756,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/V%C3%A9g%C3%A9tarien.jpg"
            >
                <h5 role="sub-title" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        {burgerName}
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatum!
                </p>
                <Button role="counter" onClick={() => handleClick()}>
                    <p>
                        Like {counter > 0 ? counter : ''}
                    </p>
                </Button>
                <Button onClick={() => handleClickParent(burgerName)}>
                    <p>
                        Commander
                    </p>
                </Button>
            </Card>
           
        </div>
    );
};

export default Burger;