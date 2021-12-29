import React from 'react'

import { Parallax } from "react-parallax";

import './About.css'



function About({Link}) {
    return (
        <div className='about-container' id='about'>
          <div className='about-content'>
            <Parallax
              strength={100}
              renderLayer={(percentage) => (
                <div style={{
                  position: "absolute",
                  top: "5%",
                  width: '100%',
                  marginTop: 100 * percentage,
                }}>
                  <p className='background-text'>
                  Hello
                  </p>
                </div>
              )}
            >
              <div className='about-text-container'>
                <p className='about-text'>
                  I'm Jerome, front end web developer based in Paris.<br/>
                  I love designing and building web interfaces.
                </p>
              </div>
              <div className='about-button-container'>
                <div className='about-stroke' />
                <Link
                  className='button'
                  to="contact"
                  spy={true}
                  smooth={true}
                  // offset={200}
                  duration={2000}
                >
                  Contact me
                </Link>
                <div className='about-stroke' />
                <div className='about-text-container2'>
                  <p className='about-text2'>
                    Passionate and creative about what I do.<br/>
                    If you have a project in mind it would be a pleasure to collaborate.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
    )
}

export default About
