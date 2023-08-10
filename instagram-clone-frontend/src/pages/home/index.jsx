import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/SideMenu'
import Create from '../../components/CreatePost'
import Post from '../../components/Post'
import axios from 'axios'

function Home() {

    const [isCreateVisible, setCreateVisible] = useState(false);

    const [posts, setPosts]= useState([])
    
    const fetchPosts = async () =>{
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get("http://127.0.0.1:8000/api/user/following/posts", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data.posts)
        setPosts(response.data.posts)
    }

    const handleUnfollow = async(user_id) => {
        const token = localStorage.getItem('jwtToken');
        await axios.get(`http://127.0.0.1:8000/api/toggle-follow/${user_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(`Unfollow ${user_id}`);
        fetchPosts()
    };

    const handleLike = async(post_id) => {
        const token = localStorage.getItem('jwtToken');
        await axios.get(`http://127.0.0.1:8000/api/posts/${post_id}/toggle-like`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(`Like post with ID: ${post_id}`);
        fetchPosts()
    };
    
    useEffect(()=>{
        fetchPosts()
    },[])

    return (
        <div className='home-page'>
            <SideMenu setCreateVisible={setCreateVisible} isCreateVisible={isCreateVisible}/>
            <div className='home-content'>
                <Create setPosts={setPosts} isCreateVisible={isCreateVisible}  />
                
                <Post posts={posts} handleUnfollow={handleUnfollow} handleLike={handleLike}/>
            </div>
        </div>
    )
}

export default Home