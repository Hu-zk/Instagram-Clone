import React from 'react'

function Post() {
    return (
        <div className='post-container'>
            <div className='post-header'>
                <h4>User Name</h4>
                <button>Unfollow</button>
            </div>
            <div className='post-img'>
                <img src="https://bestwatch.my/media/catalog/product/image/width/800/height/800/O/m/Omega-Seamaster-215.33.44.22.01.001.jpg" alt="pic" />
            </div>
            <div className='post-footer'>
                <h4>Like count</h4>
                <button>like</button>
            </div>
        </div>
    )
}

export default Post