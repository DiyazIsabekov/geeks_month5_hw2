import React, { useEffect, useState } from 'react';
import axios from 'axios'

const PostList = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        axios
            .get('https://dummyjson.com/posts')
            .then((res) => setPosts(res.data.posts))
            .catch((error) => {
                console.error("Ошибка", error)
            })
    }, [])

    console.log(posts);
    return (
        <div>
            <ul>
                {posts ? (
                    posts.map((post) => <li key={post.id}>{post.title}</li>)
                ) : (
                    <p>loading...</p>
                )}
            </ul>
        </div>
    );
};

export default PostList;