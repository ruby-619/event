import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Carousel1 = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1500}>
          <Link to="/event-detail/1">
            <div class="eventCarousal">
              <img
                className="d-block"
                src="../img/Event/outdoor.jpeg"
                alt="First slide"
              />
            </div>
          </Link>
          <Carousel.Caption>
            <div className="h4-tc TextAlignRight">女孩的第一座百岳</div>
            <p className="TextAlignRight">2021-08-22(日) 07:00</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <Link to="/event-detail/1">
            <div class="eventCarousal">
              <img
                className="d-block"
                src="../img/Event/drawing.jpeg"
                alt="Second slide"
              />
            </div>
          </Link>

          <Carousel.Caption>
            <div className="h4-tc TextAlignRight">森林系手繪</div>
            <p className="TextAlignRight">2021-09-01 14:00</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <Link to="/event-detail/1">
            <div class="eventCarousal">
              <img
                className="d-block"
                src="../img/Event/womany.png"
                alt="Third slide"
              />
            </div>
          </Link>

          <Carousel.Caption>
            {/* <div className="h4-tc TextAlignRight">女孩的第一座百岳</div> */}
            {/* <p className="TextAlignRight">2021-08-22(日) 07:00</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carousel1
