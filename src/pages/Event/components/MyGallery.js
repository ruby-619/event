import React from 'react'
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: 'https://fakeimg.pl/250x100',
    thumbnail: 'https://fakeimg.pl/250x100',
  },
  {
    original: 'https://fakeimg.pl/250x100',
    thumbnail: 'https://fakeimg.pl/250x100',
  },
  {
    original: 'https://fakeimg.pl/250x100',
    thumbnail: 'https://fakeimg.pl/250x100',
  },
]

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />
  }
}
export default MyGallery
