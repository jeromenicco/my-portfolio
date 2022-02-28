import React from 'react'

import FT_DESKTOP from '../assets/FT_DESKTOP.png'
import AVS_DESKTOP from '../assets/AVS_DESKTOP.png'
import VICE_DESKTOP from '../assets/VICE_DESKTOP3.png'
// import ANTOINE_DESKTOP from '../assets/antoine-project.png'
import ALTIMETER_DESKTOP from '../assets/altimeter-project.png'

import './WorkList.css'

const items = [
    {
      name: 'Portfolio',
      image: FT_DESKTOP,
      resume: 'Florent Texier, art director, motion designer and visual artist.',
      url: 'https://florentexier.com/'
    },
    {
        name: 'Vice FM',
        image: VICE_DESKTOP,
        resume: 'ViceCity radio project.',
        url: 'https://vice-fm.netlify.app/'
      },
      {
          name: 'AVS',
          image: AVS_DESKTOP,
          resume: 'Food and drinks vending machines loan and services.',
          url: 'https://avs-uk.netlify.app'
        },
        {
          name: 'Altimeter',
          image: ALTIMETER_DESKTOP,
          resume: 'Consulting and project management in the building industry.',
          url: 'https://altimeter.fr/'
        },
        // {
        //   name: 'Mr Antoine',
        //   image: ANTOINE_DESKTOP,
        //   resume: 'Design and front-end',
        //   url: 'https://monsieurantoine.fr/'
        // },
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
