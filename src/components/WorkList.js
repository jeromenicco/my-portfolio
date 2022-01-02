import React from 'react'

import FT_DESKTOP from '../assets/FT_DESKTOP.png'
import AVS_DESKTOP from '../assets/AVS_DESKTOP.png'
// import VICE_DESKTOP from '../assets/VICE_DESKTOP.png'
import ANTOINE_DESKTOP from '../assets/antoine-project.png'
import ALTIMETER_DESKTOP from '../assets/altimeter-project.png'

import './WorkList.css'

const items = [
    {
      name: 'Portfolio XX',
      image: FT_DESKTOP,
      resume: 'Front-end',
      url: 'https://florentexier.com/'
    },
    {
      name: 'Mr Antoine',
      image: ANTOINE_DESKTOP,
      resume: 'Design and front-end',
      url: 'https://monsieurantoine.fr/'
    },
    // {
    //   name: 'Vice FM',
    //   image: VICE_DESKTOP,
    //   resume: 'Work in progress. Conception, design and front-end',
    //   url: 'https://distracted-goodall-dec109.netlify.app'
    // },
    {
      name: 'AVS',
      image: AVS_DESKTOP,
      resume: 'Design and front-end',
      url: 'https://gallant-joliot-f2900d.netlify.app'
    },
    {
      name: 'Altimeter',
      image: ALTIMETER_DESKTOP,
      resume: 'Design and front-end',
      url: 'https://altimeter.fr/'
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
                    <a href={`${item.url}`} target="_blank" rel="noreferrer">
                        <img src={item.image} alt={item.name} />
                    </a>
                      <h3>{item.name}</h3>
                      <p>{item.resume}</p>
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
