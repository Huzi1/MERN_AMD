import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const myStyle = {
    paddingRight: "10px"};

const NavBar = () => (

    <nav id={"navbar"} >
        <ul>
            <li>
                <Link to="/home" style={myStyle}>Home</Link>
            </li>
            <li>
                <Link to="/dashboard" style={myStyle}>DashBoard</Link>
            </li>
            <li>
                <Link to="/profile" style={myStyle}>Profile</Link>
            </li>
        </ul>


    </nav>


);


export default NavBar