import React, { useState } from 'react';
import { Navbar, Button } from 'flowbite-react';
import {Link} from 'react-router-dom'


const NavigationBar = () => {
    const [theme, setTheme] = useState('dark')
    const switchMode = () => {
        theme == "light" ? setTheme('dark') : setTheme('light')
    }

    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand
                href="https://flowbite-react.com"
            >
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to="/">Blog</Link>
                <Link to="/burger-shop">Burger shop</Link>
                <Link to="/todo">Todo list</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/signup">Signup</Link>
            </Navbar.Collapse>
            <Button role="theme-button" data-cy="button" onClick={() => switchMode()}>{theme}</Button>
        </Navbar>
    );
};

export default NavigationBar;


