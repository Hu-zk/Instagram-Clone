import React from 'react'
import SideMenu from '../../components/SideMenu'
import Create from '../../components/CreatePost'
import Post from '../../components/Post'

function Home() {
    return (
        <div className='home-page'>
            <SideMenu/>
            <div className='home-content'>
                <Create/>
                <div className='display-posts'>
                    <Post/>
                </div>
            </div>
        </div>
    )
}

export default Home