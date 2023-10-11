import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loadingPost from '../services/api/posts'
import {Link} from 'react-router-dom'
import {Button} from 'flowbite-react'

const Articles = () => {
    const {id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        const getArticle = async () => {
            try {
                const articleJson = await loadingPost(id)
                setArticle(articleJson)
            } catch (error) {
                console.log(error)
            }
            
        }
        getArticle()
    }, [])
    
    return (
        <div>
            <Button><Link to="/">Back to Blog</Link></Button>
            <h1>{article.title}</h1>   
            <p>{article.body}</p> 
        </div>
    );
};

export default Articles;