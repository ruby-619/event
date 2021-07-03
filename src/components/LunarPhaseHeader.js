import React from 'react'
import { Link } from 'react-router-dom'

const LunarPhaseHeader = () => {
  return (
    <div>
      {/* <h1>about</h1> */}
      <nav class="nav-bar sticky">
        <div class="nav-bar-top d-flex">
          <div class="col-4"></div>
          <div class="col-4 d-flex justify-content-center">
            <a href="">
              <img class="nav-logo" src="../images/logo.svg" alt="" />
            </a>
          </div>
          <div class="nav-member-act col-4 d-flex justify-content-end mt-1">
            <div class="">
              <p class="small">來賓 您好</p>
            </div>
            <div class="ml-2">
              <a class="mx-0" href="">
                <i class="fas fa-user"></i>
              </a>
              <div></div>
            </div>
            <div class="ml-2">
              <a class="mx-0" href="">
                <i class="fas fa-bookmark"></i>
              </a>
              <p class="small mx-0 mb-2">(0)</p>
            </div>
            <div class="ml-2">
              <a class="mx-0" href="">
                <i class="fas fa-shopping-cart"></i>
              </a>
              <p class="small mx-0 mb-2">(0)</p>
            </div>
          </div>
        </div>
        <div class="nav-bar-bottom">
          <ul class="d-flex justify-content-around col-11 mx-auto mt-1">
            <li>
              <a href="#shop">SHOP</a>
            </li>
            <li>
              <a href="#article">ARTICLE</a>
            </li>
            <li>
              <a href="#order">ORDER</a>
            </li>
            <li>
              <a href="#event">EVENT</a>
            </li>
            <li>
              <a href="#join-us">JOIN US</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default LunarPhaseHeader
