import React from 'react';
import logo from '../assests/Dr Adan Saman-logos_white.png'
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" />
            <ul>
                <li><NavLink
                    to="/"
                    end
                    style={({ isActive }) => ({ color: isActive ? '#ff6600' : '#007BFF' })}
                >Home</NavLink></li>
                <li><NavLink
                    to="/blog"
                    style={({ isActive }) => ({ color: isActive ? '#ff6600' : '#007BFF' })}
                >Blog</NavLink></li>
                <li><NavLink
                    to="/about"
                    style={({ isActive }) => ({ color: isActive ? '#ff6600' : '#007BFF' })}
                >About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
