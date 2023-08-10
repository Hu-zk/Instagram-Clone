import React from 'react'

function Create() {
    return (
        <div className='create-post'>
            <h2>Create Post</h2>

            {/* <div className='label-input'>
            </div> */}
            <label htmlFor="image">Upload your Image :</label>
            <input name='image' type="file"/>
            <button type="submit" >Create</button>
        </div>
    )
}

export default Create