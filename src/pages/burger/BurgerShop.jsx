import React, { useEffect, useState } from 'react';
import Burger from '../../components/burger/Burger'
import {Button} from 'flowbite-react'


const BurgerShop = () => {
    const burger = ['Le new yorker', 'Le veggie', 'Le chicken']
    const [chosenBurger, setChosenBurger] = useState('')
    const [sauce, setSauce] = useState([])

    const url = 'https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=eminem'


    useEffect(() => {
        const getData = async () => {
            const artists = await fetch(url)
            const artistsJson = await artists.json()
            console.log(artistsJson)
        }
        getData()
    }, [])




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
            <div className='flex'><Button data-button="mayo" onClick={() => addSauce('Mayo')}>Mayo</Button><Button onClick={() => deleteSauce('Mayo')}>Delete</Button></div>
            <div className='flex'><Button onClick={() => addSauce('Ketchup')}>Ketchup</Button><Button onClick={() => deleteSauce('Ketchup')}>Delete</Button></div>
            <h3>choisi ta sauce:{sauce.join(',')}</h3>
            <div className='flex justify-center items-center h-screen'>
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