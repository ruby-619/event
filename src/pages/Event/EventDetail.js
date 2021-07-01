import React from 'react'
import DetailCard from '../../components/DetailCard'
import EventDetailContent from '../../components/EventDetailContent'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import'./Event.scss'


const EventDetail = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2">
        <div className="container">
          <div className="row">
            <DetailCard />
          </div>
        </div>
        <EventDetailContent />
      </body>
    </div>
  )
}

export default EventDetail
