import axios from 'axios';
import React, { useState } from 'react'

function Create({setPosts , isCreateVisible}) {

    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };
    
    const handleCreatePost = async (event) => {
        event.preventDefault();
        
        if (!image) {
            console.log('Please select an image');
            return;
        }

        try {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64Image = reader.result.split(',')[1];
                const token = localStorage.getItem('jwtToken');
                
                const response = await axios.post(
                    'http://127.0.0.1:8000/api/posts',
                    {
                        image: base64Image,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                    console.log(response.data.post);
                    // setPosts((posts) => [...posts,response.data.post]);
                };
            reader.readAsDataURL(image);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }
    return (
        <div className={`${isCreateVisible ? 'create-post' : 'display-none'}`}>
            <h2>Create Post</h2>

            <label htmlFor="image">Upload your Image :</label>
            <input name='image' type="file" onChange={handleImageChange}/>
            <button type="submit" onClick={handleCreatePost}>Create</button>
        </div>
    )
}

export default Create