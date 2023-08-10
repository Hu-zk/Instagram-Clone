import React from 'react'

function SideMenu() {
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
                <a href="./logout">
                    <div className="menu-pages">
                        <div className="menu-titles">
                            <i className="fa-solid fa-gear menu-icons white"></i>
                        </div>
                        <h4>Logout</h4>
                    </div>
                </a>
        </div>
    )
}

export default SideMenu