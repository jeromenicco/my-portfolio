import React from 'react'
import { Parallax } from "react-parallax"

import ContactButtons from './ContactButtons'

import './Contact.css'

function Contact({Link}) {
    return (
        <div className='contact-container' id='contact'>
          <div className='contact-content'>
            <Parallax
                  strength={100}
                  renderLayer={(percentage) => (
                    <div style={{
                      position: "absolute",
                      top: "15%",
                      width: '100%',
                      marginTop: 100 * percentage,
                    }}>
                      <p className='background-text'>
                      Contact
                      </p>
                    </div>
                  )}
                >
                  <div className='contact-text-container'>
                    <p className='contact-text'>Feel free to contact me for more information.</p>
                  </div>
            </Parallax>
            <ContactButtons />


          </div>
            <div className='scrolltop-container'>
              <Link
               to="about"
               spy={true}
               smooth={true}
               duration={1500}>
                <button className='scrolltop-button'>⇪</button>
              </Link>
              <p>Scroll Up</p>
            </div>
        </div>
    )
}


export default Contact
