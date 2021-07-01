import React, { useState } from 'react'
import { Carousel, Card, Button } from 'react-bootstrap'

const Carousel2 = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div className="container ">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="col-12 d-flex flex-row"
      >
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/600/?random=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/600/?random=2"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        {/* 將輪播轉成卡片式 */}
        <Carousel.Item className="d-flex">
          <Card className="">
            <Card.Img
              variant="top"
              src="https://picsum.photos/800/600/?random=1"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="">
            <Card.Img
              variant="top"
              src="https://picsum.photos/800/600/?random=2"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="">
            <Card.Img
              variant="top"
              src="https://picsum.photos/800/600/?random=3"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item className="d-flex">
          <Card className="col-4">
            <Card.Img
              variant="top"
              src="https://picsum.photos/800/600/?random=4"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="col-4">
            <Card.Img
              variant="top"
              src="https://picsum.photos/800/600/?random=5"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="col-4">
            <Card.Img
              variant="top"
              src="https://picsum.photos/800/600/?random=6"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carousel2
