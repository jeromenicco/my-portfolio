import React from 'react'
import { Parallax } from "react-parallax"


import './WhatIDo.css'

function WhatIDo() {
    // const innerWidth = window.innerWidth
    
    return (
        <div className='ido-container' id='ido'>
            <div className='ido-content'>
                <Parallax
                    strength={100}
                    renderLayer={(percentage) => (
                        <div style={{
                            position: "absolute",
                            top: "0%",
                            width: '100%',
                            marginTop: 100 * percentage,
                        }}>
                            <p className='background-text' id='ido-parallax-text'>
                                What I Do
                            </p>
                        </div>
                    )}
                >


                    <div className='ido-text-wrapper'>
                        <div className='ido-text-container'>
                            <h3>Front End Developer.</h3>
                            <p className='ido-text'>
                                Specialized in React.js,<br/>
                                I like to code things from scratch and bringing ideas to life in the browser.<br/>
                                I work with JavaScript, CSS 3, React framework and many other librairies.
                            </p>
                        </div>
                        <div className='ido-text-container2'>
                            <h3>Web Designer.</h3>
                            <p className='ido-text2'>
                                I value simple content structure, clean design patterns, and thoughtful interactions.<br/>
                                Responsive, my layouts will work on any device, big or small.<br/>
                                I have a strong preference for easy to use, intuitive UX/UI.
                            </p>
                        </div>
                    </div>
                </Parallax>

            </div>
        </div>
    )
}

export default WhatIDo
