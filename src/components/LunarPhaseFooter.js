import React from 'react'
import { Link } from 'react-router-dom'

// react-icon
import { GrFacebookOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-box text-center">
          <Link to="/">
            <img
              className="footer-logo"
              src="/img/logo-m-dark.svg"
              alt="lunar_phase"
            />
          </Link>
          <div className="footer-sns mt-3">
            <a href="https://www.facebook.com/IIIEDU.TW" className="mx-2">
              <GrFacebookOption />
            </a>
            <a href="https://www.iiiedu.org.tw/" className="mx-2">
              <GrInstagram />
            </a>
          </div>
          <div className="footer-copyright">
            <p className="small">Copyright © JSMART All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
