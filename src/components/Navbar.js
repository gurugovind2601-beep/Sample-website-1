import React from "react";
import '../style/Navbar.css'

const Navbar = ()=>{
    return(
        <nav className='Navbar'>
            <h2 className='logo'>Vish.dev</h2>

            <ul className='nav-links'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar 