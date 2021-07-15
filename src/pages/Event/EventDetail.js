import React, { useState, useEffect } from 'react'
import EventDetailCard from './components/EventDetailCard'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import './Event.scss'
import { withRouter } from 'react-router-dom'
import { BsBookmark } from 'react-icons/bs'
import { FcBookmark } from 'react-icons/fc'

const EventDetail = () => {
  return (
    <div>
      <LunarPhaseNavbar />
      <body className="bg2">
        <EventDetailCard />
        <LunarPhaseFooter />
      </body>
    </div>
  )
}

export default EventDetail
