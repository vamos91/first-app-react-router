import React, { forwardRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import loadingPost from '../../services/api/posts';
import { Button, Alert } from 'flowbite-react'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)

    const getPost = async() => {
        setLoading(true)
        const postsJson = await loadingPost()
        setPosts(postsJson)
        setLoading(false)
        setSuccessMessage(true)
    }

    return (
        <div>
            <Button onClick={() => getPost()}>Get post</Button>
            {loading ? '...loading data' : ''}
            {
                successMessage && (
                    <Alert role='alert' width={100}
                        color="success"
                        onDismiss={() => alert("Alert dismissed!")}
                    >
                        <span>
                            <p>
                                <span className="font-medium">
                                    Info alert!
                                </span>
                               data loaded
                            </p>
                        </span>
                    </Alert>
                )
            }
            {
                posts.length > 0 &&
                    posts.map((post) => (
                        <p role="post" className='flex items-center' key={post.id}>{post.title} <Button><Link to={`/article/${post.id}`}>Voir article</Link></Button></p>
                    ))
            }
        </div>
    );
};

export default Blog;