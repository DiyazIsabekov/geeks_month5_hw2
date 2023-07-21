import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()

    const handleSubmit = ((event) => {
        event.preventDefault()

        axios
            .post('https://dummyjson.com/posts/add', {
                title,
                body,
                userId: 1,

            })
            .then((response) => {
                console.log('Ответ от сервера', response.data);
                navigate('/posts')
            })
            .catch((error) => {
                console.error("Ошибка при создании поста", error);
            })
    })


    return (
        <div>
            <h1>Создать пост</h1>
            <form onSubmit={handleSubmit}>
                <div >
                    <input
                        type="text"
                        placeholder='Заголовок - Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />
                <br />
                <div>
                    <input
                        type="text"
                        placeholder='Содержание - Body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)} />
                </div>
                <br />
                <br />
                <button type='submit'>Создать</button>
            </form>
        </div>
    );
};

export default CreatePost;