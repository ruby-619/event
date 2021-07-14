import React, { useState, useEffect } from 'react'
import EventDetailCard from './components/EventDetailCard'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import './Event.scss'
import { withRouter } from 'react-router-dom'
import { BsBookmark } from 'react-icons/bs'
import { FcBookmark } from 'react-icons/fc'

const EventDetail = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2">
        <EventDetailCard />
        <LunarPhaseFooter />
      </body>
    </div>
  )
}

export default EventDetail
