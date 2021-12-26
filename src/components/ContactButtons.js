import React from 'react'

import './ContactButtons.css'

function ContactButtons() {
    return (
        <div className='button-container'>
            <div className='button'>
                <a href='mailto:contact@jeromenicco.com'>contact@jeromenicco.com</a>
            </div>
            <div className='stroke' />
            <div className='button'>
                <a href='https://www.linkedin.com/in/jerome-nicco/'>LinkedIn</a>
            </div>
        </div>
    )
}

export default ContactButtons
