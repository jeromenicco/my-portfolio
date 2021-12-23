import React from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    JN
                </a>

                <ul className='nav-items-container'>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={100} duration={500} className='nav-item'>
                        About
                    </Link>
                    <Link activeClass="active" to="work" spy={true} smooth={true} offset={150} duration={500} className='nav-item'>
                        Work
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={200} duration={500} className='nav-item'>
                        Contact
                    </Link>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
