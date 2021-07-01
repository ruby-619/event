import React from 'react'
import { Link } from 'react-router-dom'

const EventNAV = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="Enav ">
          <ul class="d-flex justify-content-center">
            <li>
              <Link to="">戶外</Link>
            </li>
            <li>
              <Link to="">藝文</Link>
            </li>
            <li>
              <Link to="">講座</Link>
            </li>
            <li>
              <Link to="">手作</Link>
            </li>
            <li>
              <Link to="">品味</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EventNAV
