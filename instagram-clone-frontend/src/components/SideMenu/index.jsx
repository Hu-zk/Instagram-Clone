import React from 'react'

function SideMenu({setCreateVisible, isCreateVisible,setSearchVisible, isSearchVisible}) {

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userData');
        window.location.href='http://localhost:3000/'
    }

    return (
        <div id="side-menu">

            <div className="insta-title">
                Instagram
            </div>

            <div className="menu-section">

                <a href="./home">
                    <div className="menu-pages">
                        <div className="menu-titles">
                            <i className="fa-solid fa-house menu-icons "></i>
                        </div>
                        <h4>Home</h4>
                    </div>
                </a>
                    <div className="menu-pages" onClick={() => setSearchVisible(!isSearchVisible)}>
                        <div className="menu-titles">
                        <i className="fa-solid fa-magnifying-glass menu-icons"></i>
                        </div>
                        <h4>Search</h4>
                    </div>
                    <div className="menu-pages">
                        <div className="menu-titles">
                        <i className="fa-regular fa-compass menu-icons"></i>
                        </div>
                        <h4>Explore</h4>
                    </div>
                    <div className="menu-pages">
                        <div className="menu-titles">
                        <i className="fa-solid fa-film menu-icons"></i>
                        </div>
                        <h4>Reels</h4>
                    </div>
                    <div className="menu-pages">
                        <div className="menu-titles">
                        <i className="fa-regular fa-comment menu-icons"></i>
                        </div>
                        <h4>Messages</h4>
                    </div>
                    <div className="menu-pages">
                        <div className="menu-titles">
                        <i className="fa-regular fa-heart menu-icons"></i>
                        </div>
                        <h4>Notifications</h4>
                    </div>
                    <div className="menu-pages" onClick={() => setCreateVisible(!isCreateVisible)} >
                        <div className="menu-titles">
                        <i className="fa-regular fa-square-plus menu-icons"></i>
                        </div>
                        <h4>Create</h4>
                    </div>
                    <div className="menu-pages">
                        <div className="menu-titles">
                        <i className="fa-regular fa-user menu-icons"></i>
                        </div>
                        <h4>Profile</h4>
                    </div>
            </div>

                <div className="menu-pages" onClick={handleLogout}>
                    <div className="menu-titles">
                    <i className="fa-solid fa-right-from-bracket menu-icons"></i>
                    </div>
                    <h4>Logout</h4>
                </div>
        </div>
    )
}

export default SideMenu