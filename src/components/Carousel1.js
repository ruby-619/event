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
            <h3>女孩的第一座百岳</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      )
    </div>
  )
}

export default Carousel1
