import React from 'react'
import EventDetailCard from './components/EventDetailCard'

import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import './Event.scss'

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
