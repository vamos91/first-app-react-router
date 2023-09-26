import React, { useState } from 'react';
import Burger from '../components/Burger'


const BurgerShop = () => {
    const burger = ['Le new yorker', 'Le veggie', 'Le chicken']
    const [chosenBurger, setChosenBurger] = useState('')
    const [sauce, setSauce] = useState([])
    const handleClick = (burger) => {
        setChosenBurger(burger)
    }

    const addSauce = (mySauce) => {
        if (!sauce.includes(mySauce)) {
            setSauce([...sauce, mySauce])
        }
    }

    const deleteSauce = (mySauce) => {
        setSauce(sauce.filter((e) => e != mySauce))
    }

    return (
        <>
            <h3>Vous avez commander: {chosenBurger}</h3>
            <div><button onClick={() => addSauce('Mayo')}>Mayo</button><button onClick={() => deleteSauce('Mayo')}>Delete</button></div>
            <div><button onClick={() => addSauce('Ketchup')}>Ketchup</button><button onClick={() => deleteSauce('Ketchup')}>Delete</button></div>
            <h3>choisi ta sauce:{sauce.join(',')}</h3>
            <div className='burger'>
                {
                    burger.length > 0 && burger.map((item, i) => (
                        <Burger key={i} burgerName={item} handleClickParent={handleClick} />
                    ))
                }
            </div>
        </>

    );
};

export default BurgerShop;