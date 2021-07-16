import React from 'react'
// import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import './Event.scss'

const SmallToLarge = (props) => {
  const { picture } = props
  console.log(picture)
  // render()
  return (
    <>
      {/* <LunarPhaseHeader /> */}
      {/* <body className="bg1"> */}
      {/* <Carousel1 /> */}
      <Carousel>
        <div className="SmallToLarge">
          {/* <img src={picture} /> */}
        </div>
        {/* <p className="legend">Legend 1</p> */}
        <div className="SmallToLarge">
          {/* <img src={picture} /> */}

          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className="SmallToLarge">
          {/* <img src={picture} /> */}

          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </>
  )
}

export default SmallToLarge
