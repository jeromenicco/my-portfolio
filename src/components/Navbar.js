import React, {useState} from 'react'

import './Navbar.css'

function Navbar({Link}) {
    const [scrollDown, setScrollDown] = useState(false)

    let lastScrollY = window.scrollY

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 60) {
            setScrollDown(true)
        }
        else {
            setScrollDown(false)
        }
        lastScrollY = window.scrollY
    })

    return (
            <nav className={ !scrollDown ? 'navbar' : 'navbar-hidden'}>
                <a href='/' className='logo'>
                    JN
                </a>

                <ul className='nav-items-container'>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        // offset={80}
                        duration={800}
                        className='nav-item'
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={800}
                        className='nav-item'
                    >
                        Work
                    </Link>
                    <Link 
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        // offset={200}
                        duration={1300}
                        className='nav-item'
                    >
                        Contact
                    </Link>
                </ul>

            </nav>
    )
}

export default Navbar
