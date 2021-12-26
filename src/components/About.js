import React from 'react'

import { Parallax } from "react-parallax";

import './About.css'



function About() {
    return (
        <div className='about-container' id='about'>
          <div className='content'>
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
            </Parallax>
          </div>
        </div>
    )
}

export default About
