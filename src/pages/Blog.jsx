import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [counter, setCounter] = useState(0)
    console.log('salut hors useEffect')

    useEffect(() => {
        console.log('initialisation')
    }, [])

    useEffect(() => {
        console.log('mise à jour de la variable')
    }, [counter])

 
    useEffect(() => {
        return () => console.log('je suis mort')
    }, [])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
        </div>
    );
};

export default Blog;