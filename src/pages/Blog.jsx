import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPost = async() => {
            //chercher les données sur l'api
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
            //parser les données
            const postsJson = await posts.json()
            //on affiche pour vérifier dans la console
            console.log(postsJson)
            //mettre le resultat dans une variable d'etat
            setPosts(postsJson)

            // fetch('https://jsonplaceholder.typicode.com/posts')
            // .then(response => response.json())
            // .then((data) => {
            //     console.log(data)
            // })
        }

        getPost()
    }, [])

    return (
        <div>
            {
                posts.length > 0 &&
                    posts.map((post) => (
                        <p key={post.id}>{post.title} <Link to={`/article/${post.id}`}>Voir article</Link></p>
                    ))
            }
        </div>
    );
};

export default Blog;