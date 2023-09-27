import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Articles = () => {
    //recup l'id de l'article
    const {id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        const getArticle = async () => {
            //faire une requete HTTP vers l'api
            const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const articleJson = await article.json()
            console.log(articleJson)
            setArticle(articleJson)
        }
        getArticle()
    }, [])
    
    //l'afficher dans le JSX
    return (
        <div>
            <h1>{article.title}</h1>   
            <p>{article.body}</p> 
        </div>
    );
};

export default Articles;