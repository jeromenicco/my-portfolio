import React from 'react'
import { Parallax } from "react-parallax";

import './Contact.css'
import ContactButtons from './ContactButtons';

function Contact() {
    return (
        <div className='contact-container' id='contact'>
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
                  <div className='about-text-container'>
                    <p className='about-text'>Feel free to contact me for more information.</p>
                  </div>
            </Parallax>

            <ContactButtons />
        </div>
    )
}


export default Contact
