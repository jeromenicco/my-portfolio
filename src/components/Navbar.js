import React, {useState} from 'react'

import './Navbar.css'

function Navbar({Link}) {
    const [scrollDown, setScrollDown] = useState(false)

    let lastScrollY = window.scrollY

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 60) {
            window.innerWidth < 850 && setScrollDown(true)
        }
        else {
            setScrollDown(false)
        }
        lastScrollY = window.scrollY
    })


    return (
        <div className='nav-wrapper'>
            <nav className={ !scrollDown ? 'navbar' : 'navbar-hidden'}>
                {
                    window.innerWidth < 850 ?
                    <div className='logo-circle-mobile'>
                        <a href='/' className='logo'>
                            JN
                        </a>
                    </div>
                    :
                    <div className='logo-container-desktop'>
                        <div className='logo-circle-desktop' />
                        <a href='/' className='logo'>
                            Jerome Nicco
                        </a>
                    </div>
                    
                }
                <ul className='nav-items-container'>
                    <Link
                        activeClass="active-nav-link"
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
                        activeClass="active-nav-link"
                        to="work"
                        spy={true}
                        smooth={true}
                        // offset={100}
                        duration={800}
                        className='nav-item'
                    >
                        Work
                    </Link>
                    <Link 
                        activeClass="active-nav-link"
                        to="contact"
                        spy={true}
                        smooth={true}
                        // offset={200}
                        duration={1500}
                        className='nav-item'
                    >
                        Contact
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
