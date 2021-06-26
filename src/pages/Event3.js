import React from 'react'
import EventCard3 from '../components/EventCard3'
import EventDetail from '../components/EventDetail'
import LunarPhaseHeader from '../components/LunarPhaseHeader'

const Event3 = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2">
        <div className="container">
          <div className="row">
            <EventCard3 />
          </div>
        </div>
        <EventDetail />
      </body>
    </div>
  )
}

export default Event3
