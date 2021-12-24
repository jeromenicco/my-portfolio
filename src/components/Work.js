import React from 'react'

import WorkList from './WorkList'
import { Parallax } from "react-parallax";

import './Work.css'

function Work() {
    return (
        <div className='work-container' id='work'>
            <Parallax
                  strength={100}
                  renderLayer={(percentage) => (
                    <div style={{
                      position: "absolute",
                      top: "5%",
                      right: 0,
                      width: '100%',
                      marginTop: 100 * percentage,
                    }}>
                      <p className='work-background-text'>
                      Work
                      </p>
                    </div>
                  )}
                >
                  <div className='work-text-container'>
                    <p className='about-text'>I build my websites using React.js and other librairies.</p>
                  </div>
            </Parallax>
            <WorkList />
        </div>
    )
}

export default Work
