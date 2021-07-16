import React from 'react'
import { Link } from 'react-router-dom'
import { GiCampingTent, GiBookCover } from 'react-icons/gi'
import { FaPaintBrush, FaHandPaper, FaWineGlass } from 'react-icons/fa'

const CategoryNav = () => {
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      /> */}
      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1" />
          <span className="hamburger hamburger-2" />
          <span className="hamburger hamburger-3" />
        </label>
        <Link to="/category/1" className="menu-item">
          {' '}
          <GiCampingTent />{' '}
        </Link>
        <Link to="/category/2" className="menu-item">
          {' '}
          <FaPaintBrush />{' '}
        </Link>
        <Link to="/category/3" className="menu-item">
          {' '}
          <GiBookCover />{' '}
        </Link>
        <Link to="/category/4" className="menu-item">
          {' '}
          <FaHandPaper />{' '}
        </Link>
        <Link to="/category/5" className="menu-item">
          {' '}
          <FaWineGlass />{' '}
        </Link>
      </nav>
      {/* filters */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={10}
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation={3} result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx={1} dy={1} result="shadow" />
            <feComposite in2="shadow" in="goo" result="goo" />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={10}
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default CategoryNav
