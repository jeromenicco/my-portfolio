import React from 'react'

import WorkList from './WorkList'
import { Parallax } from "react-parallax";

import './Work.css'

function Work() {
    return (
        <div className='work-container' id='work'>
          <div className='work-content'>
            <Parallax
                  strength={100}
                  renderLayer={(percentage) => (
                    <div style={{
                      position: "absolute",
                      top: "15%",
                      right: 0,
                      width: '100%',
                      marginTop: 100 * percentage,
                    }}>
                      <p className='work-background-text' id='work-parallax-text'>
                        Work
                      </p>
                    </div>
                  )}
                >
                  <div className='work-text-container'>
                    <p className='work-text'>I build my websites using <span className='bold-span'>React.js</span> and other librairies.</p>
                  </div>
            </Parallax>
          </div>
            <WorkList />
        </div>
    )
}

export default Work
