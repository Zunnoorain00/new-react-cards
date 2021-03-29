import React from "react";
import "./navbar.css"


function Navbar() {
    return (
        <>
            <div className="navbar-main">
                <div className="nav-left">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" height="100px"></img>
                </div>
                <div className="nav-center">
                    <h2>Netflix Original Series</h2>
                </div>

                <div className="nav-right">
                    <input type="Text" placeholder="Enter Movie Name"></input>
                </div>
            </div>
        </>
    );
}

export default Navbar;