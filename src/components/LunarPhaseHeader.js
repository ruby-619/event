import React from 'react'
import { Link } from 'react-router-dom'

const LunarPhaseHeader = () => {
  return (
    <div>
      {/* <h1>about</h1> */}
      <nav className="nav-bar nav-bar-fixed container-fluid">
        <div className="nav-bar-top d-flex">
          <div className="col-4" />
          <div className="nav-logo col-4 d-flex justify-content-center">
            <img src="../img/logo-s-dark.svg" alt="" />
          </div>
          <div className="nav-member-act col-4 d-flex justify-content-end">
            <div className="">
              <p className="small">來賓 您好</p>
            </div>
            <div className="ml-2">
              <a href="#/" className="mx-0" >
                <i className="fas fa-user" />
              </a>
              <div />
            </div>
            <div className="ml-2">
              <a href="#/" className="mx-0">
                <i className="fas fa-bookmark" />
              </a>
              <p className="small mx-0">(0)</p>
            </div>
            <div className="ml-2">
            <Link to="/cart/item/step1" className="mx-0">
              <i className="fas fa-shopping-cart" />
            </Link>
              {/* <a href="/cart/item/step1" className="mx-0">
                <i className="fas fa-shopping-cart" />
              </a> */}
              <p className="small mx-0">(0)</p>
            </div>
          </div>
        </div>
        <div class="nav-bar-bottom">
          <ul class="d-flex justify-content-around col-11 mx-auto mt-1">
            <li>
              <Link to="#shop">SHOP</Link>
            </li>
            <li>
              <Link to="#article">ARTICLE</Link>
            </li>
            <li>
              <Link to="#order">ORDER</Link>
            </li>
            <li>
              <Link to="#event">EVENT</Link>
            </li>
            <li>
              <Link to="#join-us">JOIN US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default LunarPhaseHeader
