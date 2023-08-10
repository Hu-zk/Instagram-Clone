import React from 'react'

function SideMenu() {

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
                            <i className="fa-solid fa-house menu-icons white"></i>
                        </div>
                        <h4>Home</h4>
                    </div>
                </a>
                <a href="./search">
                    <div className="menu-pages">
                        <div className="menu-titles">
                            <i className="fa-solid fa-gear menu-icons white"></i>
                        </div>
                        <h4>Search</h4>
                    </div>
                </a>
            </div>

                <div className="menu-pages" onClick={handleLogout}>
                    <div className="menu-titles">
                        <i className="fa-solid fa-gear menu-icons white"></i>
                    </div>
                    <h4>Logout</h4>
                </div>
        </div>
    )
}

export default SideMenu