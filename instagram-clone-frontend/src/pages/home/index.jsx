import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/SideMenu'
import Create from '../../components/CreatePost'
import Post from '../../components/Post'
import axios from 'axios'

function Home() {

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
    
    useEffect(()=>{
        fetchPosts()
    },[])

    return (
        <div className='home-page'>
            <SideMenu/>
            <div className='home-content'>
                <Create setPosts={setPosts}/>
                
                <Post posts={posts}/>
            </div>
        </div>
    )
}

export default Home