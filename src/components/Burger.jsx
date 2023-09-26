import React, { useState } from 'react';
import './burger.css'

const Burger = ({ burgerName, handleClickParent }) => {
    const [counter, setCounter] = useState(0)
    console.log('component reloaded')
    const handleClick = () => {
        setCounter(counter + 1) 
    }

    return (
        <div className='burger-card'>
            <div className="burger-name">{burgerName}</div>
            <img width={200} src="https://static.wixstatic.com/media/e79818_9de4daf6a6d14c31a2f8ba3af331c85b~mv2.jpg/v1/crop/x_0,y_795,w_5548,h_3957/fill/w_756,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/V%C3%A9g%C3%A9tarien.jpg" alt="my burger" />
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatum!</div>
            <button onClick={() => handleClick()}>Like {counter > 0 ? counter : '' }</button>
            <button onClick={() => handleClickParent(burgerName)}>Commander</button>
        </div>
    );
};

export default Burger;