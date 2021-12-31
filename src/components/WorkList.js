import React from 'react'

import FT_DESKTOP from '../assets/FT_DESKTOP.png'
import AVS_DESKTOP from '../assets/AVS_DESKTOP.png'
import VICE_DESKTOP from '../assets/VICE_DESKTOP.png'
import ANTOINE_DESKTOP from '../assets/antoine-project.png'
import ALTIMETER_DESKTOP from '../assets/altimeter-project.png'

import './WorkList.css'

const items = [
    {
      name: 'Portfolio XX',
      image: FT_DESKTOP,
      resume: 'Front-end',
    },
    {
      name: 'Vice FM',
      image: VICE_DESKTOP,
      resume: 'Conception, design and front-end',
    },
    {
      name: 'AVS',
      image: AVS_DESKTOP,
      resume: 'Design and front-end',
    },
    {
      name: 'Mr Antoine',
      image: ANTOINE_DESKTOP,
      resume: 'Design and front-end',
    },
    {
      name: 'Altimeter',
      image: ALTIMETER_DESKTOP,
      resume: 'Design and front-end',
    },
  ]

function WorkList() {
    return (
        <div className='worklist-container'>
            {
            items.map((item, index) => {
              return (
                <>
                  <div className='work-item-container' key={index}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                  {
                    index !== items.length -1 && (
                      <div className='work-stroke-container'>
                        <div className='work-stroke' />
                      </div>
                    )
                  }
                </>
              )
            })
          }
        </div>
    )
}

export default WorkList
