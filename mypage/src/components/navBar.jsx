import React from 'react';
import { Link } from "react-router-dom";


import "./css/navBarStyle.css";
const NavBar = () => {

    return (
        <div>
            <nav className="navBarStyle">
                <Link className="navBarText" activeClassName="active" to="/" >HOME</Link>
                <Link className="navBarText" activeClassName="active" to="/profile">PROFILE</Link>
                <Link className="navBarText" activeClassName="active" to="/design">DESIGN</Link>
            </nav>

        </div>
    );
};

export default NavBar;