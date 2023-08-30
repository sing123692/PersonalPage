import React, { useState } from 'react';
import { Link } from "react-router-dom";


import "./css/navBarStyle.css";
const NavBar = () => {

    const [IsMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!IsMenuOpen);
    } //做漢堡用

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