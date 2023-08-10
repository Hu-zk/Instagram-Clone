import React from 'react'

function Post({posts}) {
    console.log(posts)

    return (
        <div className='display-posts'>
            {posts.map((posts,index)=>(
                <div key={index} className='post-container'>
                    <div className='post-header'>
                        <h4>{posts.user.username}</h4>
                        <button>Unfollow</button>
                    </div>
                    <div className='post-img'>
                        <img src={`http://127.0.0.1:8000/storage/${posts.image_path}`} alt="pic" />
                    </div>
                    <div className='post-footer'>
                        <h4>{posts.likes_count} Likes</h4>
                        <button>like</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post