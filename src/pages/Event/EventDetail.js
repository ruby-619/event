import React from 'react'
import EventDetailCard from './components/EventDetailCard'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import './Event.scss'


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
