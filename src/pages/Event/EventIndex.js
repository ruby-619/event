import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import EventCard from '../../components/HomePageCard'
import { GiCampingTent, GiBookCover } from 'react-icons/gi'
import { FaPaintBrush, FaHandPaper, FaWineGlass } from 'react-icons/fa'

import './Event.scss'

class EventIndex extends Component {
  render() {
    return (
      <>
        <LunarPhaseHeader />
        <body className="bg1">
          <Carousel>
            <div className="eventCarousal">
              <img src="../images/Event/chang.jpg" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div className="eventCarousal">
              <img src="../images/Event/670.jpeg" />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div className="eventCarousal">
              <img src="../images/Event/210.jpeg" />
              {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
          <div class="container">
            <h2 className="TextAlignCenter">EVENT</h2>
            <div className="h6-tc TextAlignCenter">當期熱門</div>
            <div className="Empty"></div>
            <EventCard />
            <h2 className="TextAlignCenter">分類找活動</h2>
            <div className="CategoryIcons">
              <div className="d-flex justify-content-center ">
                <div className="box box-bottom">
                  <GiCampingTent
                    color="#FDD2BB"
                    size="100px"
                    style={{ transform: `translate(${0}px, ${25}px)` }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <div className="box box-middle-left">
                  <FaPaintBrush
                    color="#FDD2BB"
                    size="70px"
                    style={{ transform: `translate(${0}px, ${40}px)` }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <div className="box">
                  <GiBookCover
                    color="#FDD2BB"
                    size="100px"
                    style={{ transform: `translate(${0}px, ${30}px)` }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <div className="box box-middle-right">
                  <FaHandPaper
                    color="#FDD2BB"
                    size="90px"
                    style={{ transform: `translate(${-5}px, ${30}px)` }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <div className="box box-bottom">
                  <FaWineGlass
                    color="#FDD2BB"
                    size="90px"
                    style={{ transform: `translate(${0}px, ${30}px)` }}
                  />
                </div>
              </div>
            </div>
            <div className="WaveBackground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1658.091"
                height="165"
                viewBox="0 0 1658.091 165"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#f3f3ee" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <path
                  id="Path_268"
                  data-name="Path 268"
                  d="M7.636,816.754c36.4-29.252,101.372-92.941,155-88.123,34.319,3.083,63.681,21.141,98.079,23.71,33.121,2.473,64.58-9.714,94.079-21.018q87.575-33.561,179.2-60.982c28.473-8.521,57.736-16.672,88.414-18.282,44.7-2.348,88.3,9.312,130.292,20.789q86.625,23.682,173.25,47.36c25.68,7.02,52.892,14.157,79.882,10.662,38.264-4.953,67.138-30.133,105.353-35.289,43.065-5.809,83.342,14.908,120.057,32.391s84.356,32.865,122.453,17.051c20.432-8.48,36.334-25.409,59.815-25.484,11.354-.036,63.439,10.7,73.378,14.715,73.474,29.7,105.364,52.8,178.838,82.5Z"
                  transform="translate(-7.636 -651.754)"
                  fill="url(#linear-gradient)"
                />
              </svg>
            </div>
          </div>
        </body>
        <LunarPhaseFooter />
      </>
    )
  }
}

export default EventIndex
