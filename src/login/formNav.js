import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";




function Nav(){
    return(
        <>

            <nav id="formNav">
        <ul>
            <li>
                <NavLink to="/"  >Login</NavLink>
            </li>
            <li>
                <NavLink to="/register" >Register</NavLink>
            </li>

        </ul>


    </nav>



        </>
    )
}


export default Nav