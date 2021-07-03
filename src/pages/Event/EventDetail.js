import React from 'react'
import DetailCard from '../../components/DetailCard'

import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import './Event.scss'

const EventDetail = () => {
  return (
    <div>
      <LunarPhaseHeader />
      <body className="bg2">
        <DetailCard />
      </body>
    </div>
  )
}

export default EventDetail
