import React from 'react'

const About = () => {
  return (
    <div>
      <h1>about</h1>
      <nav class="nav-bar nav-bar-fixed container-fluid">
        <div class="nav-bar-top d-flex">
          <div class="col-4"></div>
          <div class="nav-logo col-4 d-flex justify-content-center">
            LOGO HERE
          </div>
          <div class="nav-member-act col-4 d-flex justify-content-end">
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
              <p class="small mx-0">(0)</p>
            </div>
            <div class="ml-2">
              <a class="mx-0" href="">
                <i class="fas fa-shopping-cart"></i>
              </a>
              <p class="small mx-0">(0)</p>
            </div>
          </div>
        </div>
        <div class="nav-bar-bottom">
          <ul class="d-flex justify-content-around col-11 mx-auto">
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

export default About
